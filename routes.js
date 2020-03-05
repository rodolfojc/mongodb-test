var express = require('express'),
router = express.Router(),
itemCtrl = require('./item-controller');

router.get('/hello/:foo/:bar', function(req,res){
    res.json({result: "Hello World! 😤😱🥵🤡", data: [
        req.params.foo,
        req.params.bar
    ]});
});

router.post('/hello', function(req,res){
    res.json({result: "The POST request was sent", data: req.body});

});

router.get('/hello', itemCtrl.getWorld);

module.exports = router;