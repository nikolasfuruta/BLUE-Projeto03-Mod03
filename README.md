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

   `/add`

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
  res.status(400).json({message: "ERRO"});
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
  res.status(400).json({message: "ERRO"});
  ```



**A rota terrenos  `/terrenos`**  **, necessita de 5 sub-rotas sendo elas:**

   `/add`

- **Usado para adicionar um nova terreno ao banco de dados na nuvem.**

- **Exemplo:**    `/terreno/add`

- **Para adicionar um terreno dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  	"tipo": "Terreno", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 50.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
  }
  ```

  

- **Se for adicionado retornará um .json com todas as informações cadastradas e um status 201.**

  ```javascript
  res.status(201).json(result);
  ```

  

- **Caso  não seja inserido no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  res.status(400).json({message: "ERRO"});
  ```



​        `/listall`	

- **Usado para visualizar todos os terrenos cadastrados no banco.**

- **Exemplo:**    `/terrenos/listall`

- **Após ser executado, retornará um .json com todos os terrenos INCLUINDO UM ID, cada terreno possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Terreno", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 50.000.00, //(Type: Number)
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

  **Exemplo:**      `/terrenos/listid/6189d7fb374b2b5c405cf5c1`

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Casa", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 50.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

  

- **Usado quando o usuário deseja achar uma terreno específico usando apenas seu ID, sem necessitar de outras informações.**

- **Caso não exista nenhum terreno cadastrado no banco com o ID procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "ERRO"});
  ```



​        `/update/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/terrenos/update/6189d7fb374b2b5c405cf5c1`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
      "tipo": "Terreno", //(Type: String)
  	"localizacao":  "Rua ABC", //(Type: String)
  	"valor": 85.000.00, //(Type: Number)
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
  res.status(400).json({message: "ERRO"});
  ```

  

​      `/delete/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja deletar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/terreno/delete/6189d7fb374b2b5c405cf5c1`

- **Utilizamos o delete quando queremos remover alguma casa já cadastrada no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  res.status(400).json({message: "ERRO"});
  ```




- **A rota galpao `/galpao`**  **, necessita de 5 sub-rotas sendo elas:**

  `/add`

  - **Usado para adicionar um novo galpão ao banco de dados na nuvem.**

  - **Exemplo:**    `/galpao/add`

  - **Para adicionar um galpão dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

    ```javascript
    {
    	"tipo": "Galpao", //(Type: String)
    	"localizacao":  "Rua ABC", //(Type: String)
    	"valor": 500.000.00, //(Type: Number)
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

  - **Usado para visualizar todas os galpões cadastrados no banco.**

  - **Exemplo:**    `/galpao/listall`

  - **Após ser executado, retornará um .json com todas os galpões INCLUINDO UM ID, cada galpão possuindo seu ID criado automaticamente pelo banco.**

    ```javascript
    {
        "_id": "6189d7fb374b2b5c405cf5c1",
        "tipo": "Galpão", //(Type: String)
    	"localizacao":  "Rua ABC", //(Type: String)
    	"valor": 500.000.00, //(Type: Number)
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

    **Exemplo:**      `/galpao/listid/6189d7fb374b2b5c405cf5c1`

    ```javascript
    {
        "_id": "6189d7fb374b2b5c405cf5c1",
        "tipo": "Galpao", //(Type: String)
    	"localizacao":  "Rua ABC", //(Type: String)
    	"valor": 500.000.00, //(Type: Number)
    	"imagemUrl": "http://teste.jpeg" //(Type: String)
        "dataCriacao": "2021-11-09T02:07:55.479Z",
        "__v": 0
    }
    ```

    

  - **Usado quando o usuário deseja achar um galpão específico usando apenas seu ID, sem necessitar de outras informações.**

  - **Caso não exista nenhum galpão cadastrado no banco com o ID procurado, irá retornar um código de erro.**

    ```javascript
    res.status(204).json({message: "ERRO"});
    ```

  

  ​        `/update/:id`

  - **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

    **Exemplo:**      `/galpao/update/6189d7fb374b2b5c405cf5c1`

  - **Usado para atualizar informações já existentes no banco de dados na nuvem.**

  - **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

    ```javascript
    {
        "_id": "6189d7fb374b2b5c405cf5c1",
        "tipo": "Galpao", //(Type: String)
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
    res.status(400).json({message: "ERRO"});
    ```

    

  ​      `/delete/:id`

  - **/:id  , Na url precisamos passar o id do item em que deseja deletar, sendo esse FIXO, INALTERÁVEL**

    **Exemplo:**      `/galpao/delete/6189d7fb374b2b5c405cf5c1`

  - **Utilizamos o delete quando queremos remover alguma casa já cadastrada no banco.**

  - **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

    ```javascript
    res.status(200).json({message: "Deletado com sucesso"});
    ```

    

  - **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

    ```javascript
    res.status(400).json({message: "ERRO"});
    
    ```
  



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

  **Exemplo:**      `/escritorios/listid/6189d7fb374b2b5c405cf5c1`

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

  

- **Usado quando o usuário deseja achar um escritório específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum escritório cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



​        `/update/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/escritorios/update/6189d7fb374b2b5c405cf5c1`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
  "tipo": "", //(Type: String)
  "localizacao":  "", //(Type: String)
  "valor": , //(Type: Number)
  "imagemUrl": "" //(Type: String)
  }
  ```

  

- **Se for atualizado retornará um .json com uma mensagem de confirmação e um status 200.**

  ```javascript
  res.status(200).json({message: "Atualizado com sucesso"});
  ```

- **Caso contrário não for atualizado no banco, retornará uma mensagem de erro e um status 400.**

  ```javascript
  return res.status(400).json({message:"ERRO"})
  ```

  

  ​        `/delete/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja deletar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/escritorios/delete/6189d7fb374b2b5c405cf5c1`

- **Utilizamos o delete quando queremos remover algum escritório já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  return res.status(400).json({message:"ERRO"})
  ```



**A rota apartamentos  `/apartamentos`**  **, necessita de 5 sub-rotas sendo elas:**

​       `/add`

- **Exemplo:**    `/apartamentos/add`

- **Usado para adicionar um novo apartamento  ao banco de dados na nuvem.**

- **Para adicionar um apartamento dentro do banco, necessita passar todos os dados com suas devidas informações a seguir:**

  ```javascript
  {
  	"tipo": "Apartamento", //(Type: String)
  	"localizacao":  "Predio das Marias", //(Type: String)
  	"valor": 135.000.00, //(Type: Number)
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

- **Usado para visualizar todos os apartamentos cadastrados no banco.**

- **Exemplo:**    `/apartamentos/listall`

- **Após ser executado, retornará um .json com todos os apartamentos INCLUINDO UM ID, cada estado possui seu ID criado automaticamente pelo banco.**

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
  	"tipo": "Apartamento", //(Type: String)
  	"localizacao":  "Predio das Marias", //(Type: String)
  	"valor": 135.000.00, //(Type: Number)
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

  **Exemplo:**      `/apartamentos/listid/6189d7fb374b2b5c405cf5c1`

  ```javascript
  {
      "_id": "6189d7fb374b2b5c405cf5c1",
  	"tipo": "Apartamento", //(Type: String)
  	"localizacao":  "Predio das Marias", //(Type: String)
  	"valor": 135.000.00, //(Type: Number)
  	"imagemUrl": "http://teste.jpeg" //(Type: String)
      "dataCriacao": "2021-11-09T02:07:55.479Z",
      "__v": 0
  }
  ```

  

- **Usado quando o usuário deseja achar um apartamento específico usando apenas seu nome, sem necessitar de outras informações.**

- **Caso não exista nenhum apartamento cadastrado no banco com o nome procurado, irá retornar um código de erro.**

  ```javascript
  res.status(204).json({message: "Nada foi encontrado"});
  ```



​        `/update/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/apartamentos/update/6189d7fb374b2b5c405cf5c1`

- **Usado para atualizar informações já existentes no banco de dados na nuvem.**

- **Para atualizar esses dados é necessário passar todos os dados a seguir COM O ID FIXO (NÃO MUDA), porém com as novas informações que você deseja atualizar:**

  ```javascript
  {
  	"tipo": "", //(Type: String)
  	"localizacao":  "", //(Type: String)
  	"valor": , //(Type: Number)
  	"imagemUrl": "" //(Type: String)
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

  

  ​      `/delete/:id`

- **/:id  , Na url precisamos passar o id do item em que deseja atualizar, sendo esse FIXO, INALTERÁVEL**

  **Exemplo:**      `/apartamentos/delete/6189d1efaf6fac25f2977dfb1`

- **Utilizamos o delete quando queremos remover algum apartamento já cadastrado no banco.**

- **Caso o ID passado exista no banco, ele irá remove-lô do banco, ação irreversível e retornará uma mensagem de confirmação com o status 200.**

  ```javascript
  res.status(200).json({message: "Deletado com sucesso"});
  ```

  

- **Porém se o ID passado na url não existir no banco, ele não irá achar nada para deletar assim retornando uma mensagem de erro com status 400.**

  ```javascript
  return res.status(400).json({message:"ERRO"})
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
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,{ // Informações definidas no seu .env (PRIVADAS)	
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {  // tudo certo faz isso
        console.log("MongoDB esta conectado");
    }).catch((err) => {  // caso de erro faz isso
        console.error(err);
    });
};

module.exports = Conn;
```

## **Na pasta model temos 5 arquivos diferentes com as mesmas definições e valores:**

**`casaSchema.js`**

```javascript
const mongoose = require("mongoose");  //importando o mongoose

const casasSchema = new mongoose.Schema({  //criando nosso modelo do banco
    // chave/ valor: tipo do valor e se é obrigatorio
    tipo: { type: String, required: true },
    localizacao: { type: String, required: true }, 
    valor: { type: String, required: true },
    imagemUrl: { type: String, required: true } 
});

const Casa = mongoose.model("casas", schemaCasa);  // a criacao do modelo na colection Casas

module.exports = Casa; //exportando o modelo pronto
```

**`terrenoSchema.js`**

```javascript
const mongoose = require('mongoose');  //importando o mongoose

const schemaTerreno = new mongoose.Schema({  //criando nosso modelo do banco
    // chave/ valor: tipo do valor e se é obrigatorio
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemUrl: { type: String, required: true},
});

const Terreno = mongoose.model("terrenos", schemaTerreno);  // a criacao do modelo na colection Casas

module.exports = Terreno;  //exportando o modelo pronto
```

**`galpaoSchema.js`**

```javascript
const mongoose = require('mongoose');  //importando o mongoose

const schemaGalpao = new mongoose.Schema({  //criando nosso modelo do banco
    // chave/ valor: tipo do valor e se é obrigatorio
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemUrl: { type: String, required: true},
});
 
const Galpao = mongoose.model("galpoes", schemaGalpao);  // a criacao do modelo na colection Casas

module.exports = Galpao;  //exportando o modelo pronto
```

**`escritorioSchema.js`**

```javascript
const mongoose = require('mongoose');  //importando o mongoose

const schemaEscritorio = new mongoose.Schema({  //criando nosso modelo do banco
    // chave/ valor: tipo do valor e se é obrigatorio
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemUrl: { type: String, required: true},
});

const Escritorio = mongoose.model("escritorios", schemaEscritorio);  // a criacao do modelo na colection Casas

module.exports = Escritorio;  //exportando o modelo pronto
```

**`apartamentoSchema.js`**

```javascript
const mongoose = require('mongoose');  //importando o mongoose
 
const schemaApartamento = new mongoose.Schema({  //criando nosso modelo do banco
    // chave/ valor: tipo do valor e se é obrigatorio
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemUrl: { type: String, required: true},
});

const Apartamento = mongoose.model("apartamentos", schemaApartamento);  // a criacao do modelo na colection Casas

module.exports = Apartamento;  //exportando o modelo pronto
```



###                                                                                                     Trabalho Realizado em Dupla:

##      **Felipe Pádua e Nikolas Furuta **

####                      Esperamos ter ajudado na compreensão básica de como funciona este projeto e o que consta em suas dependências internas.