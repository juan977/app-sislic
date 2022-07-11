
const express  = require('express') ;

const router = express.Router();

const userCtr = require('../controllers/user.controller');


const { checkTokenMonitor, hasRole } = require('../auth/token_validation');


router.get('/access/:role', hasRole(["default"]),userCtr.getAccessFromRoleName);
router.post('/create', userCtr.createUser);
router.put('/update/:id', userCtr.updateUser);


module.exports = router;

