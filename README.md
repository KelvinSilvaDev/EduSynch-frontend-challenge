
# CoinSync

Este é um repositório para o projeto CoinSync, que consiste na criação de uma landing page e uma dashboard para exibir informações sobre criptomoedas, usando a CoinApi como fonte de dados. O projeto foi criado como parte do desafio de frontend da EduSynch.

## Tecnologias utilizadas

-   Next.js
-   Tailwind CSS
-   React.js

## Como executar o projeto

Para executar o projeto, siga os seguintes passos:

1.  Clone o repositório em sua máquina local.
2.  Instale as dependências usando o gerenciador de pacotes `npm` ou `yarn`.
3.  Execute o comando `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.
4.  Abra o navegador e acesse `http://localhost:3000`.

## Funcionalidades

Este projeto tem como objetivo exibir informações sobre criptomoedas em uma landing page e em uma dashboard. Algumas das funcionalidades que foram implementadas incluem:

-   Exibir uma lista de criptomoedas disponíveis
-   Exibir informações detalhadas sobre uma criptomoeda específica
-   Exibir o preço atual de cada criptomoeda
-   Exibir um gráfico de variação de preço da criptomoeda selecionada
-   Permitir a busca de criptomoedas por nome ou símbolo
-   Salvar criptomoedas favoritas do usuário na dashboard

## Estrutura do projeto

O projeto está estruturado da seguinte forma:

-   `components`: Contém todos os componentes React que são usados para construir a página.
-   `pages`: Contém as páginas do aplicativo. O arquivo `index.js` é a página inicial, `coins` é a página que exibe os detalhes de cada criptomoeda, `dashboard` é a página da dashboard e `api` é uma rota que retorna uma lista de criptomoedas.
-   `public`: Contém arquivos estáticos, como imagens.
-   `styles`: Contém os arquivos de estilo, incluindo o arquivo `globals.css` para estilos globais e `tailwind.css` para estilos específicos do Tailwind.
-   `next.config.js`: Arquivo de configuração do Next.js.
-   `package.json`: Lista as dependências do projeto.
-   `.gitignore`: Lista os arquivos que serão ignorados pelo Git.
-   `README.md`: Documentação do projeto.

## Deploy

O projeto foi hospedado na vercel, que foi escolhida justamente por sua ótima integração com Next.Js e pode ser acessado através do link:
https://edu-synch-frontend-challenge.vercel.app/

## Considerações finais

Este projeto foi criado como parte de um desafio de frontend e não foi possível concluir completamente a integração com a CoinApi. 

Este projeto pode ser usado como ponto de partida para um projeto de dashboard de criptomoedas, com o objetivo de consumir dados da CoinApi ou outra API de criptomoedas. Sinta-se à vontade para clonar este repositório e contribuir para o projeto ou adaptá-lo às suas necessidades.

Agradecimentos especiais à EduSynch pela oportunidade de participar deste desafio e aprender mais sobre desenvolvimento frontend.
