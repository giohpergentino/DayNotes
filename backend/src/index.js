const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        nome: "Giovanna",
        profissao: "desenvolvedora"
    });
});

app.listen(3333); // Porta