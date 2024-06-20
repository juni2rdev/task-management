const express =  require('express');
const port = 8080;
const address = 'http://localhost:8080'

const app = express();
app.use('/', (require, response) => {
    response.send('hello world');
});

app.listen(port, () => {
    console.log('servidor rodando na porta ' , port);
    console.log('---------------------------------');
    console.log(address);
});