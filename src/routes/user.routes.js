
const express  = require('express') ;

const router = express.Router();

const userCtr = require('../controllers/user.controller');


const { checkTokenMonitor, hasRole } = require('../auth/token_validation');


router.get('/access/:role',userCtr.getAccessFromRoleName);
router.post('/create', userCtr.createUser);
router.get('/', userCtr.getAllUsers);
router.put('/update/:id', userCtr.updateUser);
router.get("/roles", userCtr.getAllRoles);


module.exports = router;

