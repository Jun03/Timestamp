const moment = require("moment")

module.exports ={
parse: function(req,res){
const date = req.params.query;
  let processedDate={
"normal": null,
  "unix" :null 
}
if(+date>=0){
  processedDate.unix = date;
processedDate.normal = moment.unix(+date).format("MMMM D, YYYY")
}
if(isNaN(+date)&& moment(date,"MMMM D , YYYY").isValid()){
  processedDate.unix = moment(date,"MMMM D, YYYY").format("X")
  processedDate.normal =date;
}
  res.send(processedDate);
}

}