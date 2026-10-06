# 📚 Lucas-Alves-Marques-bd3-atv1-Lucas-Alves

Este projeto foi desenvolvido durante as aulas de Banco de Dados 3 como prática de implementação e manipulação de dados NoSQL com MongoDB. Ele representa uma aplicação de estudo do repositório `Aula_de_MongoDB`, com foco em criação de banco de dados, coleções, inserção de documentos e consultas com filtros.

O objetivo principal do projeto é consolidar os conceitos de banco de dados não relacional, especialmente o uso de MongoDB em ambiente Atlas/console, além de exercitar operações básicas de persistência e consulta em documentos JSON-like.

## 👀 Visão geral

O repositório contém um script JavaScript de nome `Atividade1.mongodb.js`, responsável por:

- criar o banco de dados `BD3-NoSQL-AtlasMongoDB`;
- criar a coleção `bd3-nosql-atv1`;
- inserir 10 documentos de alunos com dados pessoais e de contato;
- realizar consultas para listar todos os registros;
- buscar um aluno por CPF com diferentes níveis de detalhamento de campos;
- praticar a sintaxe de comandos do MongoDB em ambiente de shell.

A estrutura do projeto é simples, porém didática: uma única atividade de estudo contendo a lógica completa das operações do banco de dados.

## 🔗 Componentes do projeto

### 1. Arquivo principal

- `Atividade1.mongodb.js`

Esse arquivo reúne toda a atividade prática. Nele há comentários que dividem os exercícios em etapas, sendo uma boa representação do fluxo didático da aula.

### 2. Banco de dados

O script define a constante:

```javascript
const database = 'BD3-NoSQL-AtlasMongoDB';
use(database);
```

Isso faz com que a base de dados seja selecionada ou criada automaticamente pelo MongoDB quando executada em um ambiente compatível.

### 3. Coleção

A coleção criada é:

```javascript
const collection = 'bd3-nosql-atv1';
db.createCollection(collection)
```

Essa coleção representa a tabela de alunos dentro do banco de dados NoSQL, armazenando cada registro como um documento individual.

### 4. Modelagem dos documentos

Cada aluno é inserido em um documento com campos como:

- `cod_aluno`
- `cod_turma`
- `nome`
- `cpf`
- `rg`
- `telefone_aluno`
- `telefone_responsavel`
- `email`
- `data_nascimento`

A estrutura mostra uma abordagem NoSQL em que cada documento pode ser armazenado independentemente, sem a necessidade de uma estrutura rígida como em bancos relacionais.

### 5. Operações executadas

O script realiza as seguintes ações:

- `insertMany(...)`: inserção em massa dos 10 alunos.
- `find()`: retorno de todos os registros da coleção.
- `find({ cpf: '23456789012' }, { cod_aluno: 0 })`: consulta por CPF retornando todos os campos, exceto `cod_aluno`.
- `find({ cpf: '56789012345' }, { cod_aluno: 0, _id: 0 })`: consulta por CPF mostrando os dados do aluno sem os campos `cod_aluno` e `_id`.

Essas consultas demonstram a diferença entre projeções e filtros em MongoDB.

## 🚀 Como executar

Para executar este projeto, você precisa de um ambiente com MongoDB disponível, podendo ser:

- MongoDB Shell (`mongosh`)
- MongoDB Compass
- MongoDB Atlas conectado a uma instância do banco

### Opção 1: MongoDB Shell

1. Abra o terminal.
2. Acesse a pasta do projeto.
3. Execute o comando:

```bash
mongosh
```

4. Cole o conteúdo do arquivo `Atividade1.mongodb.js` no shell ou carregue o arquivo diretamente, conforme o ambiente.

Exemplo com execução direta:

```bash
mongosh < Atividade1.mongodb.js
```

Se estiver usando um banco remoto no Atlas, o comando pode variar conforme a string de conexão configurada em seu ambiente.

### Opção 2: MongoDB Compass

1. Abra o MongoDB Compass.
2. Conecte-se ao banco MongoDB desejado.
3. Abra a aba de shell ou query.
4. Copie e cole o código do arquivo `Atividade1.mongodb.js`.
5. Execute o script para criar a base, inserir os documentos e testar as consultas.

### Opção 3: MongoDB Atlas

Se o projeto for executado em Atlas:

1. Crie ou conecte-se a um cluster do MongoDB Atlas.
2. Use a coleção ou banco correspondente.
3. Utilize `mongosh` ou a interface de shell do Atlas para executar o script.

## Estrutura de arquivos

```bash
Lucas-Alves-Marques-bd3-atv1-Lucas-Alves/
├── Atividade1.mongodb.js
├── README.md
```

## 🎯 Objetivos de aprendizagem

Este projeto foi desenvolvido com foco em:

- aprendizado de bancos de dados NoSQL;
- prática de criação de banco e coleções no MongoDB;
- uso de documentos e campos estruturados;
- inserção em massa de dados;
- consultas com filtros e projeções;
- entendimento da diferença entre banco relacional e banco orientado a documentos.

## Observações finais

A atividade funciona como uma introdução prática às operações básicas de MongoDB, sendo uma excelente base para exercícios mais complexos de banco de dados NoSQL. O script também reforça a importância da organização dos dados, do uso de consultas eficientes e da modelagem documental em sistemas modernos.
