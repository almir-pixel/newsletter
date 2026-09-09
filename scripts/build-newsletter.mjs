import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentPath = path.join(projectRoot, "content", "pea.json");
const templatePath = path.join(projectRoot, "src", "template.html");
const outputPath = path.join(projectRoot, "index.html");

const [contentSource, template] = await Promise.all([
  readFile(contentPath, "utf8"),
  readFile(templatePath, "utf8")
]);

const content = JSON.parse(contentSource);
const requiredFields = [
  "ano", "mes_numero", "mes_nome", "edicao", "assunto", "preheader",
  "portal_cieam", "relatorio_pt", "relatorio_en", "relatorio_fr",
  "relatorio_es", "relatorio_ja", "relatorio_zh", "relatorio_ko"
];
const urlFields = requiredFields.filter((field) => field.startsWith("relatorio_") || field === "portal_cieam");

for (const field of requiredFields) {
  if (typeof content[field] !== "string" || content[field].trim() === "") {
    throw new Error(`Campo obrigatório ausente ou vazio: ${field}`);
  }
}

for (const field of urlFields) {
  const url = new URL(content[field]);
  if (!["https:", "http:"].includes(url.protocol)) {
    throw new Error(`URL absoluta inválida em ${field}: ${content[field]}`);
  }
}

if (!/^\d{2}$/.test(content.mes_numero) || content.edicao !== `${content.mes_numero}/${content.ano}`) {
  throw new Error("Os campos mes_numero, ano e edicao não são consistentes entre si");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

const html = template.replace(/{{\s*([a-z0-9_]+)\s*}}/gi, (token, field) => {
  if (!(field in content)) {
    throw new Error(`Variável sem conteúdo no template: ${token}`);
  }
  return escapeHtml(content[field]);
});

const unresolved = html.match(/{{[^}]+}}/g);
if (unresolved) {
  throw new Error(`Variáveis não resolvidas: ${unresolved.join(", ")}`);
}

await writeFile(outputPath, html, "utf8");
console.log(`Newsletter ${content.edicao} gerada em index.html`);
