# Formulário MUI Etapas

Este projeto é um formulário estruturado em etapas utilizando a biblioteca MUI (Material-UI). O objetivo é facilitar a coleta de informações através de um fluxo de navegação intuitivo.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

```
formulario-mui-etapas
├── src
│   ├── components
│   │   ├── Step1EscolhaServico.tsx      # Componente para escolha de serviços
│   │   ├── Step2DadosColaborador.tsx     # Componente para dados do colaborador
│   │   ├── Step3DadosGestor.tsx          # Componente para dados do gestor
│   │   ├── Step4RevisaoEnvio.tsx         # Componente para revisão e envio
│   │   └── StepperForm.tsx               # Componente que gerencia as etapas do formulário
│   ├── types
│   │   └── index.ts                       # Tipos e interfaces utilizados no projeto
│   ├── App.tsx                            # Ponto de entrada da aplicação
│   └── index.tsx                          # Responsável por renderizar o App na DOM
├── package.json                           # Configuração do npm e dependências
├── tsconfig.json                          # Configuração do TypeScript
└── README.md                              # Documentação do projeto
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para iniciar a aplicação, utilize o comando:

```
npm start
```

A aplicação será iniciada em `http://localhost:3000`.

## Funcionalidades

- **Etapa 1: Escolha do Serviço** - O usuário pode selecionar os serviços disponíveis através de checkboxes.
- **Etapa 2: Dados do Colaborador** - Campos obrigatórios e opcionais para inserir informações do colaborador.
- **Etapa 3: Dados do Gestor** - Inclusão de dados do gestor com busca automática.
- **Etapa 4: Revisão e Envio** - Revisão dos dados inseridos antes do envio da solicitação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License.