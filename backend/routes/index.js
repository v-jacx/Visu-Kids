const Router = require('express').Router();
const parentController = require('../controllers/ParentController');

// Parent api routes
Router.use('/parents',
    [
        Router.get('/:id', parentController.GetParent),
        Router.post('/new', parentController.CreateParent),
        Router.delete('/delete/:id', parentController.DeleteParent),
        Router.use('/update',
            [
                Router.post('/:id', parentController.updateParent)
            ])
    ]);

module.exports = Router;