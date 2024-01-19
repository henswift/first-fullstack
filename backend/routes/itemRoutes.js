const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/itemController');


itemRouter.get('/', itemController.getAllItems);
itemRouter.get('/:id', itemController.getAnItem);
itemRouter.delete('/:id',itemController.deleteItem);

//copy these for subpaths for the cart (actions)

module.exports = itemRouter;