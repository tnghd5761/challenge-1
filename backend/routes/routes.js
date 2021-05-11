
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const challengeController = require('../controllers/challengeController');


router.post('/users', userController.createUser);
router.post('/challenge', challengeController.createChallenge);
router.delete('/signout/:id', userController.deleteUser);
router.post('/challengeKing/:id', challengeController.whoIsKing);

router.get('/challenge/list/:userId', challengeController.getChallengeList);
router.get('/challenge/:challengeId', challengeController.getChallengeInfo);
router.put('/challenge/:challengeId', challengeController.fixChallengeInfo);
router.delete('/challenge/:challengeId', challengeController.deleteChallenge);

//router.post('/users/regist',userController.doRegistUser);
module.exports = router;