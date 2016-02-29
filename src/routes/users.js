import express from 'express';
import userController from  '../controllers/userController.js'

let router = express.Router();

/*
 * GET
 */
router.get('/search', function(req, res) {
    userController.search(req, res);
});

/*
 * GET
 */
router.get('/', function(req, res) {
    userController.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    userController.show(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    userController.create(req, res);
});

/*
 * POST
 */
router.post('/:id', function(req, res) {
    userController.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    userController.remove(req, res);
});



module.exports = router;