import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('usuários')

  response.json([
    'Joao',
    'Diego',
    'Robson'
  ]);
});

app.listen(3333);