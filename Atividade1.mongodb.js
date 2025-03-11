// Exercicios 1

const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

// Exercicios 2

const collection = 'bd3-nosql-atv1';

db.createCollection(collection)

// Exercicio 3  A)

db['bd3-nosql-atv1'].insertMany([

    {
        'cod_aluno' : '1',
        'cod_turma': '1',
        'nome': 'Pedro',
        'cpf': 56287496215
    }
])
