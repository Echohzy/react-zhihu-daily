var request = require('request');

function api(uri){
  return new Promise(function(resolve, reject){
    request({
      url: uri,
      json: true
    }, (err, response, data)=>{
      if(response.statusCode===200){
        resolve(data)
      }else{
        reject(error);
      }
    });
  })
}

module.exports = function(req, res){
  api(req.query.uri)
  .then((data)=>{
    res.json({
      status: "success",
      data: data
    })
  }).catch((error)=>{
    res.send(error);
  })
}

