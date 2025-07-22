// Importando o módulo express para lidar com rotas e middlewares
import express from 'express';
import router from './card-api/route.js';

// Inicializando a aplicação Express
const app = express();
// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3333;

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  // customGenerateJSON();
  console.log(`Server running on port ${PORT}`);
});

app.use('/api', router);
