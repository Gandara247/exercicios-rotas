![BarraGit](https://github.com/Gandara247/gandara247/assets/120376565/00602970-43b6-4555-b548-00e87c512ad4)
# Exercício - API de Carros

Esta é uma API simples para gerenciar carros. Ela permite que você obtenha informações sobre carros por meio de diferentes parâmetros, como ID, nome, modelo, ano e cor.

## Instalação

Para instalar a API, você precisa ter o Node.js e o npm instalados em sua máquina. Em seguida, siga estas etapas:

- Clone o repositório em sua máquina local.
- Abra um terminal na pasta raiz do projeto.
- Execute o comando `npm install` para instalar as dependências.
- Execute o comando `npm start` para iniciar o servidor.

## Rotas

A API possui as seguintes rotas:

### GET /cars

Retorna todos os carros cadastrados.

Parâmetros: Nenhum.

Exemplo de uso:

```
GET http://localhost:3000/cars?senha=carros123
```

Resposta:


```js
Status: 200 OK
[
    { id: 1, name: 'Audi', model: 'A4', year: 2019, color: 'black' },
    { id: 2, name: 'BMW', model: 'X5', year: 2018, color: 'white' },
    { id: 3, name: 'Mercedes', model: 'C200', year: 2017, color: 'silver' },
    { id: 4, name: 'Toyota', model: 'Camry', year: 2016, color: 'blue' },
    { id: 5, name: 'Honda', model: 'Accord', year: 2015, color: 'red' },
    { id: 6, name: 'Hyundai', model: 'Elantra', year: 2014, color: 'black' }
]
```

### GET /cars/:id

Retorna um carro específico com base no ID.

Parâmetros:

- `id` (obrigatório): o ID do carro que você deseja obter.

Exemplo de uso:

```js
GET http://localhost:3000/cars/1?senha=carros123
```

Resposta:

```js
Status: 200 OK
{
    id: 1,
    name: 'Audi',
    model: 'A4',
    year: 2019,
    color: 'black'
}
```

### GET /cars/name/:name

Retorna um carro específico com base no nome.

Parâmetros:

- `name` (obrigatório): o nome do carro que você deseja obter.

Exemplo de uso:

```js
GET http://localhost:3000/cars/name/Audi?senha=carros123
```

Resposta:

```js
Status: 200 OK
{
    id: 1,
    name: 'Audi',
    model: 'A4',
    year: 2019,
    color: 'black'
}
```

### GET /cars/model/:model

Retorna um carro específico com base no modelo.

Parâmetros:

- `model` (obrigatório): o modelo do carro que você deseja obter.

Exemplo de uso:

```js
GET http://localhost:3000/cars/model/A4?senha=carros123
```

Resposta:

```js
Status: 200 OK
{
    id: 1,
    name: 'Audi',
    model: 'A4',
    year: 2019,
    color: 'black'
}
```

### GET /cars/year/:year

Retorna um carro específico com base no ano.

Parâmetros:

- `year` (obrigatório): o ano do carro que você deseja obter.

Exemplo de uso:

```js
GET http://localhost:3000/cars/year/2019?senha=carros123
```

Resposta:

```js
Status: 200 OK
{
    id: 1,
    name: 'Audi',
    model: 'A4',
    year: 2019,
    color: 'black'
}
```

### GET /cars/color/:color

Retorna um carro específico com base na cor.

Parâmetros:

- `color` (obrigatório): a cor do carro que você deseja obter.

Exemplo de uso:

```js
GET http://localhost:3000/cars/color/black?senha=carros123
```

Resposta:

```js
Status: 200 OK
{
    id: 1,
    name: 'Audi',
    model: 'A4',
    year: 2019,
    color: 'black'
}
```

## Autenticação

Para acessar as rotas da API, você precisa passar uma senha válida como parâmetro na URL. A senha padrão é `carros123`. Se você não passar a senha correta, receberá um erro 401 (Não autorizado).

## Erros

A API pode retornar os seguintes erros:

- 400 Bad Request: ocorre quando um parâmetro obrigatório não é fornecido.
- 401 Unauthorized: ocorre quando a senha fornecida é inválida.
- 404 Not Found: ocorre quando um recurso não é encontrado.

## Conclusão

Esta é uma API simples para gerenciar carros. Ela permite que você obtenha informações sobre carros por meio de diferentes parâmetros, como ID, nome, modelo, ano e cor.