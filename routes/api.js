const express = require("express")
const router = express.Router()

const timestamp = require("../timestamp/timestamp")

router.route("/timestamp/api/v1/:query").get(timestamp.parse)
router.route("/timestamp/api/:query").get(timestamp.parse)
router.route("/timestamp/:query").get(timestamp.parse)

router.get("*", (req,res)=>{
          const fullUrl = req.protocol + "://"+req.get("host")+"/"+req.originalUrl;    
          res.render('index.pug',{
          fullUrl : fullUrl,
          title : 'Timestamp service' 
          });
            });
module.exports = router;
