var express = require('express');
var router = express.Router();
let x;
let y;
router.get('/', function(req, res, next) {
if(req.query.x ==undefined ) {
x=Math.floor(Math.random()*10);
y=Math.fround(Math.random());
let y1=Math.log1p(x,y);
let y2=Math.acosh(y);
let y3=Math.tan(x);
let y4=Math.sqrt(x);
  res.send('Math.log1p() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.acosh() applied to '+y+' is '+y2+"<br>"+'Math.tan()  applied to '+x+' is'+y3+ "<br>"+'Math.sqrt()  applied to '+x+' is'+y4); 

}
else{
x = req.query.x;
  let y1=Math.log1p(x,y);
  let y2=Math.acosh(x);
  let y3=Math.sqrt(x);
  let y4=Math.tan(x)
  res.send('Math.log1p() applied to '+x+' and '+y+' is ' +y1+"<br>" +'Math.acosh() applied to '+x+' is '+y2+"<br>"+'Math.sqrt()  applied to '+x+' is'+y3+ "<br>"+'Math.sqrt()  applied to '+x+' is'+y4);
}});
module.exports = router;