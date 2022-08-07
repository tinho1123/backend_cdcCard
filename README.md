# Processo Seletivo CDC

### É necessário seguir alguns passos a passos para poder baixar e executar o repositório

## Para baixar o repositório

é necessário dar um `git clone git@github.com:tinho1123/backend_cdcCard.git`

## Para baixar todas as dependências

Ao finalizar o clone do projeto, entre na pasta dando um `cd backend_cdcCard`,
e ao entrar na pasta é necessário executar o seguinte comando `npm install` para baixar todas as dependências do projeto

## Como executar o projeto

Para executar o projeto, depois de seguir todas as etapas anteriores, basta executar o comando `npm start`

## Realizando testes

Os testes estão na pasta `/src/tests`, lá estão os testes isolados, na pasta `units` e de integração na pasta `integration`


# Todos os caminhos adicionados e seus respectivos requests necessários

## Aviso
Neste exemplo de caminhos, uso o `localhost:3001` como porta padrão. 
Em sua máquina pode estar diferente, fique atento ao terminal e veja a porta que foi encaminhada.<br/>
Exemplo de terminal: `Server is running in port 3001`

## Para pegar todos os departamentos 

Precisa inserir o caminho `http://localhost:3001/api/employee` do tipo `GET`

possivel resposta: <br/>
[<br/> 
	{
		"id": 1,
		"department": "Administrativo"
	},<br/>
	{
		"id": 2,
		"department": "Financeiro"
	},<br/>
	{
		"id": 3,
		"department": "Recursos Humanos"
	},<br/>
	{
		"id": 4,
		"department": "Setor comercial"
	},<br/>
	{
		"id": 5,
		"department": "Setor jurídico"
	},<br/>
	{
		"id": 6,
		"department": "Setor operacional"
	},<br/>
	{
		"id": 7,
		"department": "TI"
	}<br/>
]`

## Para criar um funcionário

Precisa inserir o caminho `http://localhost:3001/api/employee` do tipo `POST`<br/>
body:<br/>
{<br/>
	"name": "Paulo Augusto",<br/>
	"cpf": "258.774.984-77",<br/>
	"department": 1,<br/>
	"salary": "2.500",<br/>
	"birthDate": "15/05/1999"<br/>
}

Possivel resposta: <br/>
{<br/>
	"id": 1,<br/>
	"name": "Paulo Augusto",<br/>
	"cpf_id": 1,<br/>
	"department_id": 1,<br/>
	"salary": "2.500",<br/>
	"birth_date": "15/05/1999",<br/>
	"updatedAt": "2022-08-07T00:48:00.405Z",<br/>
	"createdAt": "2022-08-07T00:48:00.405Z"<br/>
}

## Para pegar todos os funcionários

Precisa inserir o caminho `http://localhost:3001/api/employee` do tipo `GET`

Possível resposta: <br/>
{<br/>
	"id": 1,<br/>
	"name": "Paulo Augusto",<br/>
	"cpf_id": 1,<br/>
	"department_id": 1,<br/>
	"salary": "2.500",<br/>
	"birth_date": "15/05/1999",<br/>
	"updatedAt": "2022-08-07T00:48:00.405Z",<br/>
	"createdAt": "2022-08-07T00:48:00.405Z"<br/>
  "CPF": {<br/>
			"id": 1,<br/>
			"cpf": "258.774.984-77"<br/>
		},<br/>
		"Department": {<br/>
			"id": 1,<br/>
			"department": "Administrativo"<br/>
		}<br/>
}

## Pegar um funcionário

Precisa inserir o caminho `http://localhost:3001/api/employee/1` do tipo `GET`
Aviso: o `1` no caminho, significa o id que quero buscar, logo tem que me trazer o funcionário de id `1`

Possivel resposta: <br/>
{<br/>
	"id": 1,<br/>
	"name": "Paulo Augusto",<br/>
	"cpf_id": 1,<br/>
	"department_id": 1,<br/>
	"salary": "2.500",<br/>
	"birth_date": "15/05/1999",<br/>
	"updatedAt": "2022-08-07T00:48:00.405Z",<br/>
	"createdAt": "2022-08-07T00:48:00.405Z"<br/>
    "CPF": {<br/>
			"id": 1,<br/>
			"cpf": "258.774.984-77"<br/>
		},<br/>
		"Department": {<br/>
			"id": 1,<br/>
			"department": "Administrativo"<br/>
		}<br/>
}

## Editar funcionário

Precisa inserir o caminho `http://localhost:3001/api/employee/1` do tipo `PUT`
Aviso: o `1` no caminho, significa o id que quero buscar, logo tem que me trazer o funcionário de id `1`

body:<br/>
{<br/>
	"name": "Paulo Augusto",<br/>
	"cpf": "258.774.984-77",<br/>
	"department": 7,<br/>
	"salary": "2.500",<br/>
	"birthDate": "15/05/1999"<br/>
}


Possivel resposta: <br/>
{<br/>
	"updated": true<br/>
}



## Deletar funcionário

Precisa inserir o caminho `http://localhost:3001/api/employee/1` do tipo `DELETE`
Aviso: o `1` no caminho, significa o id que quero buscar, logo tem que me trazer o funcionário de id `1`


Possivel resposta: <br/>
{<br/>
	"deleted": true<br/>
}




