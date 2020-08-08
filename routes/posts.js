const router = require("express").Router();
const verify = require('./verifyToken');
// router.use(verify)
router.get('/',verify, (req, res)=>{
    res.json({
        posts:{
            title: 'My first post',
            description: 'Random data you shouldn\'t access without logging in'
        }
    })
})

module.exports =router;