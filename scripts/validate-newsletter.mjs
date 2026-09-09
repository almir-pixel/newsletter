import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(path.join(projectRoot, "index.html"), "utf8");
const content = JSON.parse(await readFile(path.join(projectRoot, "content", "pea.json"), "utf8"));
const errors = [];

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

assert(html.includes(`Edição ${content.edicao}`), "Edição ausente ou incorreta no HTML");
assert(html.includes(content.preheader), "Preheader ausente ou incorreto");
assert(!/{{[^}]+}}/.test(html), "O HTML contém variáveis não resolvidas");
assert(!/<script\b/i.test(html), "JavaScript não é permitido");
assert(!/<iframe\b/i.test(html), "Iframe não é permitido");
assert(/role="presentation"/i.test(html), "Estrutura de tabela para apresentação ausente");

for (const [field, value] of Object.entries(content)) {
  if (field === "portal_cieam" || field.startsWith("relatorio_")) {
    assert(html.includes(value), `Link não encontrado no HTML: ${field}`);
  }
}

const resourceAttributes = [...html.matchAll(/(?:src|href)="([^"]+)"/gi)].map((match) => match[1]);
for (const resource of resourceAttributes) {
  assert(/^https?:\/\//i.test(resource), `URL não absoluta encontrada: ${resource}`);
}

assert(/<html[^>]+lang="pt-BR"/i.test(html), "Idioma pt-BR não configurado");
assert(/<meta[^>]+name="viewport"/i.test(html), "Viewport responsivo ausente");

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validação local concluída sem erros.");
}
