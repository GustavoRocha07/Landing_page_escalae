# Escalaê — React + TypeScript

Página web do Escalaê com o layout escuro, detalhes verdes e a logo enviada. Implementada com React 18, TypeScript e Vite, com CSS responsivo.

## Rodar no computador

Use Node.js 20 LTS ou superior com npm. No terminal do VS Code, dentro da pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A pasta `dist` recebe a versão compilada. Para reinstalações reproduzíveis, use `npm ci` com o `package-lock.json` incluído.

## Organização

- `src/App.tsx`: estrutura da página, menu e estado dos diálogos e notificações.
- `src/components/PresentationSections.tsx`: recursos, comparação, etapas, perguntas e chamada final.
- `src/components/Scoreboard.tsx`: mesa de demonstração com placar, cronômetro e faltas. Usa reducer e limpa o intervalo ao pausar ou desmontar.
- `src/components/PeladaDialog.tsx`: formulário e listagem local de peladas.
- `src/hooks/usePeladas.ts`: leitura, criação e exclusão das peladas no localStorage.
- `src/styles.css`: estilo da página e ajustes responsivos.
- `public/assets/logo.png`: logo usada no cabeçalho e rodapé.

## Interações disponíveis

- Navegação pelas seções e menu para celular.
- Perguntas frequentes expansíveis.
- Marcação de gols e faltas na mesa de demonstração.
- Início e pausa do cronômetro, com limite de 10 minutos.
- Encerramento da partida, reiniciando o placar e o tempo para o jogo seguinte.
- Criação de peladas de demonstração e persistência após atualizar a página.
- Exclusão das peladas locais pelo diálogo de privacidade.

## Escopo desta entrega

Este projeto é a página de apresentação com interações locais. O botão “Entrar” abre as peladas salvas neste navegador; ainda não há autenticação.

Contas, API, convites, presença multiusuário, sorteador real, rodízio automático e pagamentos não estão integrados. Os nomes, notas e a fila da mesa são dados ilustrativos. Os recursos apresentados nas seções descrevem a proposta do produto.

As datas são exibidas no fuso do dispositivo. Os dados locais não sincronizam entre navegadores ou aparelhos. O projeto React usa sua própria chave de localStorage e não importa os dados do site HTML anterior.

## Validação

`npm run build` executado com sucesso: checagem TypeScript e geração de produção pelo Vite.
