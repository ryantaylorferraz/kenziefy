# Requisitos

- [Node.js](https://nodejs.org/en/download)
- [PostgreSQL](https://www.postgresql.org/download/)

## Clonando o Projeto

```bash
  git clone <github template url> <project_name>
```
## Instalando Dependências

Instalar as dependências de desenvolvimento e produção:

```bash
cd <project_name>
npm install
```

## Criar base de dados no postgres

```bash
psql -c "CREATE DATABASE 'nome-do-meu-bd'";
```

## Variáveis de Ambiente

Duplicar o arquivo `.env.example` e renomear a cópia para `.env`, sobrescrevendo os valores das variáveis de ambiente do arquivo `.env` com as suas credenciais.

O projeto utiliza as seguintes variáveis de ambiente:

| Var Name     |  Description                                  |  Required   |
| ------------ | --------------------------------------------- | ----------- |
| DATABASE_URL | Credenciais do banco de dados utilizado       | Obrigatório |
| SECRET_KEY   | Chave secreta utilizada pela autenticação JWT | obrigatório |
| EXPIRES_IN   | Tempo de expiração do Token JWT (1ms, 1m, 1h, 1d...)  | opcional |

## Executando as Migrações

Execute o comanto abaixo na raiz do projeto:

```bash
npx prisma migrate dev
```

## Inicializando o servidor

O servidor da API será executado, por padrão, na porta 3000:

```bash
npm run dev
```

Navegue até `http://localhost:3000` para acessar a API.

## Rotas

- Acesse a documentação das rotas em [http://localhost:3000/docs.](http://localhost:3000/docs.)
- Baixe a documentação Swagger utilizando a rota http://localhost:3000/docs.json.

### /api/bands

### POST

Cria um nova banda

| Field Name  | type    | Required    |
| ----------- | ------- | ----------- |
| name        | String  | obrigatorio |
| foundedAt   | Integer | opcional    |

**Exemplo de corpo da requisição**

```json
{
    "name": "Banda Exemplo"
}
```

**Exemplo de resposta da requisição**

**200 - OK**

```json
{
    "id": 1,
    "name": "Band Exemplo",
    "foundedAt": null
}

**400 - BAD REQUEST**

```json
{
    "errors": [
    {
        "code": "invalid_type",
        "expected": "string",
        "received": "undefined",
        "path": ["name"],
        "message": "Required"
    }
  ]
}
