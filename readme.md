# Circuit breaker Exemplo

Exemplo de um circuit breaker em node.js, baseado no vídeo [Programming patterns in Javascript - Circuit breaker](https://www.youtube.com/watch?v=FFveS7MHVU8&t=340s).


### Instalação

Instale as dependências, executando o comando abaixo:

```
npm i
```

## Executando o projeto

Em um terminal inicialize o servidor, executando o comando abaixo:
```
npm start
```
O servidor irá inicializar na porta 3000. A porta pode ser muddada no arquivo config.js

```
const config = {
    port: 3000
};
```

Em outro terminal Inicialize o healthcheck, executando o comando abaixo:
```
npm run healthcheck
```
## Descrição

Quando o servidor estiver com o status ok, será feita uma requisição a cada 1 segundo e mostrará a seguinte mensagem:

 ```
-----------------------
Healthcheck status ok
-----------------------
 ```

Quando o servidor estiver off, será feita uma tentativa de requisição a cada 10 segundos e mostrará a seguinte mensagem:

 ```
-----------------------
Skipping call
-----------------------
 ```
Pare o servidor para ver a mensgame de erro.

Após os 10 segundos, aparecerá a mensagem de erro da requisição:

 ```
-----------------------
call failed request to http://localhost:3000/healthcheck failed, reason: connect ECONNREFUSED 127.0.0.1:3000

-----------------------
 ```

Depois de 3 tentativas também a aprecerá a seguinte mensagem:
 ```
-----------------------
FIX THIS NOW!
-----------------------
 ```

