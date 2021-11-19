# **Projeto3-BKE-Blue** 

**Olá, este projeto consiste em desenvolver uma API com armazenamento em nuvem. Utilizando a Integração Backend + Mongo Atlas + Heroku.** 

**Onde existirão 5 rotas principais:** 

 **Rota Casas.** 

 **Rota Apartamentos.** 

 **Rota Terrenos.**

 **Rota Escritórios.**

 **Rota Galpões.**



 **Dentro de cada rota temos as seguintes sub-rotas:**

 `/add` 	**Cada uma das rotas principais tem o seu.**

 `/update ` 	**Cada uma das rotas principais tem o seu.**

`/delete`  	**Igual nas 5 rotas principais.**

`/listall ` 	 **Igual nas 5 rotas principais.**

`/listid`  	**Igual nas 5 rotas principais.**



**A rota casas  `/casas`**  **, necessita de 5 sub-rotas sendo elas:**

​        `/add`

- **Usado para adicionar uma nova casa ao banco de dados na nuvem.**

- **Exemplo:**    `/casas/add`

- **Para adicionar uma casa dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  	"tipo": "Casa", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 100.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
  }
  ```

  

- **Se for adicionado retornará um .json com todas as informações cadastradas e um status 201.**

  ```javascript
  res.status(201).json(result);
  ```

  

- **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "ERRO"});
  ```



​        `/listall`	

- **Usado para visualizar todas as casas cadastradas no banco.**

- **Exemplo:**    `/casas/listall`

- **Após ser executado, retornará um .json com todas as casas INCLUINDO UM ID, cada casa possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Casa", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 100.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

​       `/listid/:id`

- **/:id  , Na url precisamos passar o id do item que deseja visualizar.**  

  **Exemplo:**      `/casas/listid/6189d7fb374b2b5c405cf5c1`

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Casa", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 100.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

  

- **Usado quando o usuário deseja achar uma casa específica usando apenas seu ID, sem necessitar de outras informações.**

- **Caso não exista nenhuma casa cadastrado no banco com o ID procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "ERRO"});
  ```



​        `/update/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/casas/update/6189d7fb374b2b5c405cf5c1`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Casa", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 200.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

  

- **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso  não seja atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

​    `/delete/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja deletar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/casas/delete/6189d7fb374b2b5c405cf5c1`

- **Utilizamos o delete quando queremos remover alguma casa já cadastrada no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```



-----------------------------------------------------------------------------------------------------------------------------------------------------

**A rota escritórios  `/escritorios`**  **, necessita de 5 sub-rotas sendo elas:**

​       `/add`

- **Exemplo:**    `/escritorios/add`

- **Usado para adicionar um novo escritório ao banco de dados na nuvem.**

- **Para adicionar um escritório dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  	"tipo": "Escritórios", //(Type: String)
  	"localizacao":  "Condmn, Industrial ABC", //(Type: String)
  	"valor": 350.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
  }
  ```

  

- **Se for adicionado retornará um .json com todas as informações cadastradas e um status 201.**

  ```javascript
  res.status(201).json(result);
  ```

  

- **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "ERRO"});
  ```



​        **`/listall`**

- **Usado para visualizar todos os escritórios cadastrados no banco.**

- **Exemplo:**    `/escritorios/listall`

- **Após ser executado, retornará um .json com todos os escritórios INCLUINDO UM ID, cada estado possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
  	"tipo": "Escritórios", //(Type: String)
  	"localizacao":  "Condmn, Industrial ABC", //(Type: String)
  	"valor": 350.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

	`/listid/:id`

- **/:nome  , Na url precisamos passar o nome do item que deseja visualizar.**  

  **Exemplo:**      `/estados/listname/São Paulo`

  ```javascript
  {
      "_id": "6189d1efaf6fac25f2977dfb",
      "nome": "São Paulo",
      "regiao": "Sudeste",
      "populacao": "12,33 milhões",
      "valsalmin": "R$ 1.108,38",
      "dataCriacao": "2021-11-09T01:42:07.594Z",
      "__v": 0
    },
  ```

  

- **Usado quando o usuário deseja achar um país específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum país cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



			**`/update/:id`** 

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/update/6189d1efaf6fac25f2977dfb`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
  "_id": "6189d1efaf6fac25f2977dfb",
  "nome": "",
  "regiao": "",
  "populacao": "",
  "valsalmin": "",
  "dataCriacao": "2021-11-09T01:42:07.594Z",
  "__v": 0
  }
  ```

  

- **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

		**`/delete/:id`** 

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/delete/6189d1efaf6fac25f2977dfb1`

- **Utilizamos o delete quando queremos remover algum país já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```





**A rota cidades  `/cidades`**  **, necessita de:**

				**`/add`** 

- **Exemplo:**    `/cidades/add`

- **Usado para adicionar uma nova cidade ao banco de dados na nuvem.**

- **Para adicionar uma cidade dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  "nome": "Belo Horizonte",
  "populacao": "2,722 milhões ",
  "qntdbair":  487,
  "nivercidad": "12/12"
  },
  ```

  

- **Se for adicionado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Cadastrado com sucesso"});
  ```

  

- **Caso contrário não for inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```



				**`/listall`** 

- **Usado para visualizar todos os países cadastrados no banco.**

- **Exemplo:**    `/cidades/listall`

- **Após ser executado, retornará um .json com todos os países INCLUINDO UM ID, cada estado possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "Belo Horizonte",
      "populacao": "2,722 milhões ",
      "qntdbair": 487,
      "nivercidad": "12/12",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

- **Caso não tenha nada cadastrado no banco, irá retornar um .json vazio.**

  ```javascript
  [];
  ```

  

				**`/listname/:nome`** 

- **/:nome  , Na url precisamos passar o nome do item que deseja visualizar.**  

  **Exemplo:**      `/cidades/listname/Belo Horizonte`

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "Belo Horizonte",
      "populacao": "2,722 milhões ",
      "qntdbair": 487,
      "nivercidad": "12/12",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

  

- **Usado quando o usuário deseja achar um país específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum país cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



			**`/update/:id`** 

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/cidades/update/6189d1acaf6fac25f2977df4`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
      "_id": "6189d1acaf6fac25f2977df4",
      "nome": "",
      "populacao": "",
      "qntdbair": ,
      "nivercidad": "",
      "dataCriacao": "2021-11-09T01:41:00.667Z",
      "__v": 0
    }
  ```

  

- **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

		**`/delete/:id`** 

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/estados/delete/6189d1acaf6fac25f2977df4`

- **Utilizamos o delete quando queremos remover algum país já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "Algo esta errado"});
  ```

  

## **Para Iniciar o Projeto Local Foi Necessário Instalar Os Seguintes Comandos**

**`npm init -y`**      (inicia um projeto node).

**`npm i express`**     (instala as dependências do express).

**`npm i nodemon`**  (criará a pasta node módulos).

**`npm i mongoose`**    (instala a lib para trabalhar com mongo db).

**`npm i dotenv`**     (instala a lib para tratativa de var de ambiente).

## Subindo para o Mongo Atlas na Nuvem

- Primeiro deve criar sua conta no Mongo Atlas, após isso:

      **Importando o mongoose no arquivo index.js da pasta conn que fica dentro de outra pasta chamada model**:

  ```javascript
  const mongoose = require("mongoose"); 
  ```

  ****

                            **Então deve definir a string de conexão local ou atlas:**

```javascript
async function Conn(){
    await mongoose.connect("mongodb://localhost:27017/**AQUI VAI O NOME DO SEU PROJETO, IGUAL DEFINIDO NA HORA DA CRIAÇÃO NO MONGO ATLAS**",{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { // tudo certo faz isso
        console.log("MongoDB esta conectado");
    }).catch((err) => { // caso de erro faz isso
        console.error(err);
    });
}
```

## **Na pasta model temos 3 arquivos diferentes com suas seguintes definições e valores:**

                                                                             **`cidades.js`**

```javascript
const mongoose = require("mongoose");  //importando o mongoose

const cidadesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    quantidadebairros: { type: String, required: true },
    populacao: { type: String, required: true }, 
    aniversariocidade: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const Cidade = mongoose.model("Cidades",cidadesModel); // a criacao do modelo na colection Cidades

module.exports = Cidade; //exportando o modelo pronto
```

                                                                        **`estados.js`**

```javascript
const mongoose = require("mongoose"); 

const estadosModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    regiao: { type: String, required: true }, 
    populacao: { type: String, required: true }, 
    valsalmin: { type: String, required: true }, 
    dataCriacao: { type: Date, default: Date.now }  
});

const Estado = mongoose.model("Estados", estadosModel); 

module.exports = Estado; 
```

                                                                        **`pais.js`**

```javascript
const mongoose = require("mongoose"); 

const paisesModel = new mongoose.Schema({ 
    nome: { type: String, required: true }, 
    populacao: { type: String, required: true }, 
    linguamae: { type: String, required: true }, 
    pib: { type: String, required: true }, 
    dataCriacao: { type: Date, default: Date.now } 
});

const Pais = mongoose.model("Paises", paisesModel); 

module.exports = Pais; 
```

Lembrando que a **const paisesModel = new mongoose.Schema({ });** cria uma API em seu banco automaticamente caso não exista.



#####                                                                                                    Trabalho Realizado em Dupla:

                                                               Felipe Pádua e Wellington Nascimento

######                      Esperamos ter ajudado na compreensão básica de como funciona este projeto e o que consta em suas dependencias internas.
