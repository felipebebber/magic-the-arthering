import Colors from '../config/colors.js';
import cardsController from './controller.js';
import express from 'express';

const router = express.Router();
// Rotas para operações CRUD de tarefas
Colors.map(function(item) {
    router.get(`/cards/${item}`, (req, res) => cardsController(item, req, res));
})

export default router;