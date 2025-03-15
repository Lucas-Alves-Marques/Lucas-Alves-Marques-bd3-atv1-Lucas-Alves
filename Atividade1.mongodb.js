// Exercicios 1

const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

// Exercicios 2

const collection = 'bd3-nosql-atv1';

db.createCollection(collection)

// Exercicio 3  A)

db['bd3-nosql-atv1'].insertMany([

    {
        'cod_aluno': '1',
        'cod_turma': 101,
        'nome': "João Silva", 
        "cpf": "12345678901",
        'rg': "123456789",
        'telefone_aluno': "11987654321",
        'telefone_responsavel': "11987654322",
        'email': "joao@email.com",
        'data_nascimento': new Date("2005-03-15")
    },
    {
        'cod_aluno': '2',
        'cod_turma': 101,
        'nome': "Maria Souza", 
        "cpf": "23456789012",
        'rg': "234567890",
        'telefone_aluno': "11976543210",
        'telefone_responsavel': "11976543211",
        'email': "maria@email.com",
        'data_nascimento': new Date("2006-06-20")
    },
    {
        'cod_aluno': '3',
        'cod_turma': 102,
        'nome': "Carlos Pereira", 
        "cpf": "34567890123",
        'rg': "345678901",
        'telefone_aluno': "11965432109",
        'telefone_responsavel': "11965432108",
        'email': "carlos@email.com",
        'data_nascimento': new Date("2005-09-10")
    },
    {
        'cod_aluno': '4',
        'cod_turma': 102,
        'nome': "Ana Oliveira", 
        "cpf": "45678901234",
        'rg': "456789012",
        'telefone_aluno': "11954321098",
        'telefone_responsavel': "11954321097",
        'email': "ana@email.com",
        'data_nascimento': new Date("2004-11-05")
    },
    {
        'cod_aluno': '5',
        'cod_turma': 103,
        'nome': "Lucas Martins", 
        "cpf": "56789012345",
        'rg': "567890123",
        'telefone_aluno': "11943210987",
        'telefone_responsavel': "11943210986",
        'email': "lucas@email.com",
        'data_nascimento': new Date("2006-01-22")
    },
    {
        'cod_aluno': '6',
        'cod_turma': 103,
        'nome': "Fernanda Costa", 
        "cpf": "67890123456",
        'rg': "678901234",
        'telefone_aluno': "11932109876",
        'telefone_responsavel': "11932109875",
        'email': "fernanda@email.com",
        'data_nascimento': new Date("2005-08-30")
    },
    {
        'cod_aluno': '7',
        'cod_turma': 104,
        'nome': "Rafael Lima", 
        "cpf": "78901234567",
        'rg': "789012345",
        'telefone_aluno': "11921098765",
        'telefone_responsavel': "11921098764",
        'email': "rafael@email.com",
        'data_nascimento': new Date("2004-05-14")
    },
    {
        'cod_aluno': '8',
        'cod_turma': 104,
        'nome': "Gabriela Rocha", 
        "cpf": "89012345678",
        'rg': "890123456",
        'telefone_aluno': "11910987654",
        'telefone_responsavel': "11910987653",
        'email': "gabriela@email.com",
        'data_nascimento': new Date("2006-12-01")
    },
    {
        'cod_aluno': '9',
        'cod_turma': 105,
        'nome': "Rodrigo Mendes", 
        "cpf": "90123456789",
        'rg': "901234567",
        'telefone_aluno': "11909876543",
        'telefone_responsavel': "11909876542",
        'email': "rodrigo@email.com",
        'data_nascimento': new Date("2005-07-19")
    },
    {
        'cod_aluno': '10',
        'cod_turma': 105,
        'nome': "Juliana Ferreira", 
        "cpf": "01234567890",
        'rg': "012345678",
        'telefone_aluno': "11908765432",
        'telefone_responsavel': "11908765431",
        'email': "juliana@email.com",
        'data_nascimento': new Date("2004-04-28")
    }
])

// Exercicio 3  B)

db['bd3-nosql-atv1'].find();

// Exercicio 3  C)

db['bd3-nosql-atv1'].find({'cpf' : '23456789012'}, {'cod_aluno' : 0});

// Exercicio 3  D)

db['bd3-nosql-atv1'].find({'cpf' : '56789012345'}, {'cod_aluno' : 0, '_id' : 0});
