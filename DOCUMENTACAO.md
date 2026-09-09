# Newsletter PEA

Template de e-mail institucional do **PEA — Painel Econômico do Amazonas**, preparado para publicação no GitHub Pages e importação no RD Station Marketing.

## Estrutura

- `content/pea.json`: dados variáveis da edição atual;
- `src/template.html`: estrutura conservadora e responsiva para clientes de e-mail;
- `scripts/build-newsletter.mjs`: gera o `index.html` sem dependências externas;
- `scripts/validate-newsletter.mjs`: executa verificações locais essenciais;
- `index.html`: arquivo final pronto para publicação/importação.

## Atualizar uma edição

1. Atualize somente os dados mensais em `content/pea.json`.
2. Se houver novos ativos oficiais, salve-os em `assets/pea/AAAA/MM/` e use URLs públicas absolutas.
3. Execute `npm run build`.
4. Execute `npm test`.
5. Publique, importe no RD Station e faça envios de teste em Gmail, Outlook e celular.

O teste automatizado é uma verificação estrutural; ele não substitui a validação visual e o envio de teste no RD Station.
