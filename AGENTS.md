# AGENTE — Newsletter PEA | Painel Econômico do Amazonas

## 1. Objetivo do projeto

Criar e manter uma newsletter institucional em HTML para divulgação mensal do **PEA — Painel Econômico do Amazonas**, produzido pelo **Centro da Indústria do Estado do Amazonas (CIEAM)**.

A newsletter será utilizada no **RD Station Marketing** e deverá ser preparada para importação por HTML/URL pública, com os arquivos hospedados em repositório GitHub e publicados via GitHub Pages.

O projeto deve priorizar:

- aparência institucional e profissional;
- leitura rápida;
- compatibilidade com clientes de e-mail;
- facilidade de atualização mensal;
- URLs absolutas para imagens;
- responsividade;
- acessibilidade;
- manutenção simples;
- mínimo risco de quebra no RD Station, Gmail, Outlook e Apple Mail.

---

## 2. Contexto institucional

O PEA é um material estratégico produzido pela equipe de Indicadores do CIEAM e reúne informações relevantes para compreensão do cenário econômico do Estado do Amazonas.

A newsletter é destinada prioritariamente aos associados do CIEAM.

A comunicação deve ter caráter:

- institucional;
- técnico;
- objetivo;
- confiável;
- elegante;
- informativo;
- sem excesso de elementos promocionais.

Evitar linguagem publicitária exagerada.

---

## 3. Fluxo esperado

O fluxo operacional deve ser:

```text
Atualização do conteúdo
        ↓
Repositório GitHub
        ↓
Geração/atualização do HTML
        ↓
GitHub Pages
        ↓
URL pública
        ↓
Importação no RD Station Marketing
        ↓
Teste de envio
        ↓
Disparo aos associados
```

O GitHub será a fonte oficial do HTML e dos ativos da newsletter.

---

## 4. Estrutura recomendada do projeto

Preferencialmente utilizar:

```text
pea-newsletter/
│
├── index.html
├── README.md
├── agente.md
│
├── assets/
│   ├── logo/
│   │   └── cieam.png
│   │
│   ├── icons/
│   │
│   └── pea/
│       └── 2026/
│           └── 08/
│               ├── capa-pea.jpg
│               └── banner-pea.jpg
│
├── content/
│   └── pea.json
│
└── src/
    └── template.mjml
```

Caso MJML não seja utilizado, o `index.html` deverá ser construído manualmente seguindo as regras de compatibilidade descritas neste documento.

---

## 5. Regra principal para HTML de e-mail

Este projeto é uma **newsletter de e-mail**, não um site convencional.

Portanto:

### Utilizar

- tabelas HTML para estrutura;
- CSS inline;
- largura máxima de aproximadamente 600 px a 680 px;
- fontes seguras para e-mail;
- imagens com URLs absolutas;
- botões construídos de forma compatível com e-mail;
- atributos `alt`;
- estrutura simples;
- HTML sem dependências externas críticas.

### Evitar

- JavaScript;
- React;
- Vue;
- Angular;
- Tailwind carregado por CDN;
- Bootstrap carregado por CDN;
- iframes;
- formulários;
- CSS Grid;
- dependência de Flexbox para estrutura principal;
- `position: absolute`;
- animações;
- SVG complexo;
- fontes externas indispensáveis;
- imagens com caminhos relativos.

---

## 6. URLs absolutas

Todas as imagens devem usar endereço público completo.

### Incorreto

```html
<img src="assets/pea/capa.jpg">
```

### Correto

```html
<img
  src="https://SEU-USUARIO.github.io/pea-newsletter/assets/pea/2026/08/capa-pea.jpg"
  alt="Painel Econômico do Amazonas"
>
```

Quando houver domínio institucional configurado, preferir:

```text
https://newsletter.cieam.org.br/
```

Exemplo:

```html
<img
  src="https://newsletter.cieam.org.br/assets/pea/2026/08/capa-pea.jpg"
  alt="Painel Econômico do Amazonas"
>
```

Não reutilizar indefinidamente o mesmo nome de arquivo para imagens diferentes.

Preferir versionamento por ano e mês:

```text
/assets/pea/2026/08/
/assets/pea/2026/09/
/assets/pea/2026/10/
```

---

## 7. Dados que devem ser atualizados mensalmente

Centralizar as informações variáveis da edição.

Preferencialmente em:

```text
content/pea.json
```

Estrutura sugerida:

```json
{
  "ano": "2026",
  "mes_numero": "08",
  "mes_nome": "Agosto",
  "edicao": "08/2026",
  "portal_cieam": "https://cieam.com.br/...",
  "relatorio_pt": "https://infogram.com/...",
  "relatorio_en": "https://infogram.com/...",
  "relatorio_fr": "https://infogram.com/...",
  "relatorio_es": "https://infogram.com/...",
  "relatorio_ja": "https://infogram.com/...",
  "relatorio_zh": "https://infogram.com/...",
  "relatorio_ko": "https://infogram.com/..."
}
```

O agente deve evitar espalhar essas URLs por vários arquivos se elas puderem ser centralizadas.

---

## 8. Conteúdo-base da comunicação

O conteúdo institucional atualmente utilizado é:

> Prezado(a) Associado(a),
>
> Em nome da equipe de Indicadores, apresentamos o novo material estratégico produzido pelo Centro da Indústria do Estado do Amazonas (CIEAM).
>
> Temos a honra de encaminhar o Painel Econômico do Amazonas (PEA) – Edição 08/2026. Estes materiais compilam indicadores vitais para a compreensão do atual cenário econômico do Amazonas.
>
> Acesse os materiais nos links abaixo:
>
> Painel Econômico (PEA):
>
> - Portal CIEAM
> - Relatório em Português
> - English
> - Français
> - Español
> - 日本語
> - 中文
> - 한국어
>
> No mais, estamos à disposição,
>
> Atenciosamente,

O texto pode ser refinado visualmente, mas o sentido institucional deve ser preservado.

---

## 9. Texto recomendado para a newsletter

A newsletter deve preferencialmente apresentar o conteúdo da seguinte forma:

### Saudação

```text
Prezado(a) Associado(a),
```

### Introdução

```text
Em nome da equipe de Indicadores, apresentamos a nova edição do material estratégico produzido pelo Centro da Indústria do Estado do Amazonas (CIEAM).
```

### Apresentação

```text
Temos a honra de encaminhar o Painel Econômico do Amazonas (PEA) – Edição {{EDICAO}}, que reúne indicadores relevantes para a compreensão do atual cenário econômico do Amazonas.
```

### Chamada

```text
Acesse os materiais abaixo:
```

O layout pode melhorar a experiência de leitura, mas não deve transformar o e-mail em peça publicitária.

---

## 10. Hierarquia visual

A newsletter deverá seguir aproximadamente esta ordem:

```text
┌──────────────────────────────────────┐
│              LOGO CIEAM              │
├──────────────────────────────────────┤
│                                      │
│     PAINEL ECONÔMICO DO AMAZONAS     │
│              PEA                     │
│                                      │
│          EDIÇÃO {{EDICAO}}           │
│                                      │
├──────────────────────────────────────┤
│                                      │
│ Prezado(a) Associado(a),             │
│                                      │
│ Texto institucional                  │
│                                      │
├──────────────────────────────────────┤
│                                      │
│       ACESSE O PAINEL ECONÔMICO      │
│                                      │
│        [ ACESSAR PORTAL CIEAM ]      │
│                                      │
│        [ RELATÓRIO EM PORTUGUÊS ]    │
│                                      │
├──────────────────────────────────────┤
│                                      │
│     PEA EM OUTROS IDIOMAS            │
│                                      │
│ English      [ Access PEA ]          │
│ Français     [ Accéder au PEA ]      │
│ Español      [ Acceder al PEA ]      │
│ 日本語        [ PEAを見る ]           │
│ 中文          [ 访问 PEA ]            │
│ 한국어        [ PEA 보기 ]            │
│                                      │
├──────────────────────────────────────┤
│                                      │
│ CIEAM                                │
│ Centro da Indústria do Estado        │
│ do Amazonas                          │
│                                      │
└──────────────────────────────────────┘
```

---

## 11. Links da edição 08/2026

### Portal CIEAM

```text
https://cieam.com.br/indicadores-industriais/painel-economico-do-amazonas-edicao-agosto-2026
```

### Português

```text
https://infogram.com/1tpy83qxq98m3vt69d4zyzm7eea397qv776
```

### Inglês

```text
https://infogram.com/1tx64ogzgwymdyfykwq1epyyxyu26w07v8y
```

### Francês

```text
https://infogram.com/1twwzzeqxmmg7wbygv0xegpo24hz83dzdxx
```

### Espanhol

```text
https://infogram.com/1tleg96o8878lphv6qxo2m3ekea0ewmrde
```

### Japonês

```text
https://infogram.com/1t8m26opqxrr84arggy1ql79l9fgddlx9og
```

### Chinês

```text
https://infogram.com/1tpqy9qewy0zwwi6gzll2w9x1pc3opqgvrx
```

### Coreano

```text
https://infogram.com/1tggy1ml3g0qdlb4mwwol70kvyup277o26w
```

---

## 12. Labels dos botões

Utilizar os seguintes textos como referência:

### Português

```text
Acessar o Portal CIEAM
```

```text
Acessar o Relatório
```

### Inglês

```text
Access the PEA
```

### Francês

```text
Accéder au PEA
```

### Espanhol

```text
Acceder al PEA
```

### Japonês

```text
PEA にアクセス
```

### Chinês

```text
访问 PEA
```

### Coreano

```text
PEA 접속
```

---

## 13. Design

A identidade visual deve ser coerente com o CIEAM.

Priorizar:

- fundo branco;
- bastante espaço em branco;
- hierarquia tipográfica clara;
- azul institucional do CIEAM, quando disponível;
- cinzas neutros;
- botões institucionais;
- bordas discretas;
- visual corporativo;
- largura confortável para leitura.

Não inventar novas cores institucionais quando a identidade oficial estiver disponível no projeto.

Se houver arquivos oficiais de marca, utilizar os valores e ativos oficiais.

---

## 14. Tipografia

Priorizar fontes seguras para e-mail:

```css
font-family: Arial, Helvetica, sans-serif;
```

ou:

```css
font-family: Helvetica, Arial, sans-serif;
```

Não tornar o funcionamento do layout dependente de Google Fonts.

---

## 15. Responsividade

O e-mail deve funcionar em desktop e celular.

Requisitos:

- container máximo de aproximadamente 640 px;
- largura interna baseada em `width="100%"`;
- imagens responsivas;
- botões fáceis de tocar;
- texto mínimo recomendado entre 14 px e 16 px;
- títulos proporcionalmente maiores;
- espaçamento confortável.

Exemplo de imagem:

```html
<img
  src="URL_ABSOLUTA"
  width="600"
  alt="Painel Econômico do Amazonas"
  style="display:block;width:100%;max-width:600px;height:auto;border:0;"
>
```

---

## 16. Botões

Os principais links devem aparecer como botões visíveis.

Exemplo conceitual:

```html
<a
  href="URL"
  target="_blank"
  style="
    display:inline-block;
    padding:14px 24px;
    font-family:Arial,Helvetica,sans-serif;
    font-size:16px;
    font-weight:bold;
    text-decoration:none;
  "
>
  Acessar o Relatório
</a>
```

Sempre informar um `href` absoluto.

---

## 17. Compatibilidade com Outlook

O agente deve considerar que o Outlook para Windows possui limitações relevantes de renderização.

Por isso:

- estrutura principal em tabelas;
- não depender de `display:flex`;
- não depender de CSS Grid;
- evitar margens complexas;
- usar `padding` em `<td>`;
- especificar largura quando necessário;
- declarar `border="0"` em imagens quando aplicável;
- utilizar CSS inline para propriedades importantes.

Quando necessário, utilizar técnicas específicas para Outlook/Microsoft Office.

---

## 18. Acessibilidade

Obrigatório:

- `alt` descritivo nas imagens;
- contraste suficiente;
- não usar imagem como única forma de comunicar informação importante;
- links com texto descritivo;
- idioma adequado;
- títulos hierárquicos visualmente claros;
- tamanho de fonte confortável.

Evitar links cujo único texto seja genericamente:

```text
Clique aqui
```

Preferir:

```text
Acessar o Painel Econômico
```

---

## 19. Preheader

Incluir um preheader oculto no início do HTML.

Exemplo:

```text
Confira a edição {{EDICAO}} do Painel Econômico do Amazonas, produzido pelo CIEAM.
```

Estrutura possível:

```html
<div
  style="
    display:none;
    font-size:1px;
    color:#ffffff;
    line-height:1px;
    max-height:0;
    max-width:0;
    opacity:0;
    overflow:hidden;
  "
>
  Confira a edição {{EDICAO}} do Painel Econômico do Amazonas, produzido pelo CIEAM.
</div>
```

---

## 20. Assunto sugerido

Utilizar como padrão:

```text
PEA | Painel Econômico do Amazonas – Edição {{EDICAO}}
```

Alternativa:

```text
CIEAM apresenta o Painel Econômico do Amazonas – Edição {{EDICAO}}
```

---

## 21. Rodapé

O rodapé deve conter, no mínimo:

```text
CIEAM
Centro da Indústria do Estado do Amazonas
```

Caso os dados oficiais estejam disponíveis, poderão ser incluídos:

- site;
- endereço;
- telefone;
- redes sociais;
- aviso institucional;
- informações exigidas pelo RD Station;
- link de descadastramento inserido pelo RD Station.

Não criar manualmente um mecanismo falso de descadastramento.

---

## 22. RD Station

O HTML final deve estar pronto para importação no RD Station Marketing.

Antes de considerar uma edição concluída:

1. validar HTML;
2. confirmar URLs absolutas;
3. confirmar todos os links;
4. verificar imagens;
5. importar no RD Station;
6. realizar envio de teste;
7. verificar Gmail;
8. verificar Outlook;
9. verificar celular;
10. somente então liberar para disparo.

Não assumir que a renderização do navegador representa fielmente a renderização do e-mail.

---

## 23. Regras para atualização mensal

Ao preparar nova edição:

### Atualizar

- número da edição;
- mês;
- ano;
- URL do portal CIEAM;
- URL do relatório em português;
- URL em inglês;
- URL em francês;
- URL em espanhol;
- URL em japonês;
- URL em chinês;
- URL em coreano;
- capa/imagem, quando houver;
- preheader;
- título da edição.

### Não alterar sem necessidade

- estrutura;
- identidade visual;
- rodapé;
- componentes;
- espaçamentos;
- sistema de botões;
- tipografia.

---

## 24. Checklist obrigatório

Antes de concluir qualquer alteração, verificar:

```text
[ ] Edição correta
[ ] Mês correto
[ ] Ano correto
[ ] Portal CIEAM correto
[ ] Português correto
[ ] Inglês correto
[ ] Francês correto
[ ] Espanhol correto
[ ] Japonês correto
[ ] Chinês correto
[ ] Coreano correto
[ ] Todas as imagens usam URL absoluta
[ ] Nenhuma imagem crítica usa caminho relativo
[ ] Nenhum JavaScript
[ ] Nenhum iframe
[ ] CSS principal inline
[ ] Layout compatível com Outlook
[ ] Layout responsivo
[ ] Alt text configurado
[ ] Preheader atualizado
[ ] Assunto sugerido atualizado
[ ] Links abrem corretamente
[ ] Teste realizado no RD Station
```

---

## 25. Regra de segurança para links

O agente nunca deve substituir automaticamente URLs oficiais do PEA por URLs inferidas.

Quando uma nova edição for solicitada e os novos links ainda não estiverem disponíveis:

- manter placeholders claros;
- sinalizar quais URLs precisam ser fornecidas;
- não inventar endereços Infogram;
- não assumir padrão de identificador do Infogram.

Exemplo:

```text
{{URL_PEA_PORTUGUES}}
{{URL_PEA_INGLES}}
```

---

## 26. Manutenção de histórico

Não sobrescrever ativos antigos quando isso puder afetar newsletters já enviadas.

Preferir:

```text
/assets/pea/2026/08/
/assets/pea/2026/09/
/assets/pea/2026/10/
```

Isso permite que newsletters antigas continuem carregando suas imagens corretamente.

---

## 27. Critério de conclusão

Uma edição só deve ser considerada concluída quando:

1. o HTML estiver funcional;
2. o conteúdo estiver correto;
3. todos os links estiverem válidos;
4. todas as imagens estiverem acessíveis publicamente;
5. o layout estiver responsivo;
6. o HTML estiver adequado para clientes de e-mail;
7. a edição puder ser importada no RD Station sem dependências locais;
8. o código estiver organizado para atualização do mês seguinte.

---

## 28. Prioridade geral do agente

Quando houver conflito entre aparência sofisticada e compatibilidade de e-mail, priorizar:

```text
1. Compatibilidade
2. Clareza
3. Institucionalidade
4. Acessibilidade
5. Facilidade de manutenção
6. Estética
```

A newsletter deve ser visualmente profissional, porém tecnicamente conservadora.
