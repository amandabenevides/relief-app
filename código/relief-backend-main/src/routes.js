const { Router } = require('express');

const SearchController = require('./controllers/SearchController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/search', SearchController.index);

module.exports = routes;