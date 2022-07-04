const { Router } = require('express');
const router = Router();
const here = require('../model/user.model');


router.get('/users', here.getUsers);
router.get('/users/:id', here.getUserById);
router.post('/users', here.createUser);
router.put('/users/:id', here.updateUser)
router.delete('/users/:id', here.deleteUser);

module.exports = router;