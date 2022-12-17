var express = require('express');
var router = express.Router();

const {adminController} = require('../controllers');

/* GET users listing. */
router.get('/',async function(req, res, next) {
  const query = req.query;
  console.log(query);
  try{
    const result = await adminController.getAllAdmin(query);
    res.status(200).send(result);
  }catch(error){
    res.status(500).send(error);
  }
});
router.post('/',async function(req, res, next) {
  const body = req.body;
  try{
    const result = await adminController.addAdmin(body);
    res.status(200).send(result);
  }catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;
