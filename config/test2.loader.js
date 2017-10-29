module.exports = function(source){
  console.log("-------------loader2-----------");
  console.log(source);
  // let value = source.replace(/\n/g, "");
  // return value;
  this.callback(null, source, "kakkaka");
  
}