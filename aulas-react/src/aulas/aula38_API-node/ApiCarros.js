const carrosJson = '[' +
    '{"id": 1, "marca": "Honda", "modelo": "HRV"},' +
    '{"id": 2, "marca": "WV", "modelo": "Golf"},' +
    '{"id": 3, "marca": "Fiat", "modelo": "Toro"},' +
    '{"id": 4, "marca": "GM", "modelo": "Tracker"},' +
    '{"id": 5, "marca": "Ford", "modelo": "Ranger"}' +
']'; // dados JSON

const http = require('http'); // importa o modulo http para criar o servidor que lida com requisição e resposta
const porta = 3000; // porta que o servidor escuta

const server =  http.createServer((request, response)=>{ // cria o servidor com callback que recebe a request e a response e será executada a cada requisição do cliente
    response.setHeader("Access-Control-Allow-Origin", "*"); // adiciona cabeçalho na resposta que permite que qualquer cliente acesse a api
    response.writeHead(200, {"Content-Type": "application/json"}); // envia resposta com status 200 e o tipo do conteúdo da resposta como JSON 
    response.write(carrosJson); // escreve os dados no corpo da resposta
    response.end(); // finaliza a resposta encerrando a conexão com o cliente
});

server.listen(porta, () => console.log('Servidor rodando na porta '+ porta)); // o servidor fica disponível na porta 3000 e exibe a mensagem quando estiver rodando

//A api pode ser acessada pela endpoint do replit
// ou http://localhost:3000 se for rodar localmente com comando "node ApiCarros" (após mudar para o diretorio do arquivo).
