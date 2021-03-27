var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(require, response){
    response.writeHead(200,{'Content-Type':'text/html'});


var url = require.url;

if(url =='/'){
    fs.readFile('index.html',function(err,data){

        if(err == null){
         response.write(data);
         response.end();
        }else{
            response.end(err);
        }
    });

}else if(url =='/insert'){
    fs.writeFile('test.txt','/n Ghi vao file thu xem',function(err,data){
  if(err == null){
      response.end("Ghi thanh cong");
  }else{
      response.end(err);
  }

    });

    }
    else if(url =='/append'){
        fs.appendFile('test.txt','/n Ghi vao file thu xem 2',function(err){
            if(err == null){
                response.end("Ghi thanh cong");
            }else{
                response.end(err);
            }

              });
        }
        else if(url =='/unlink'){
            fs.unlink('test.txt',function(err){
                if(err == null){
                    response.end("Xoa thanh cong");
                }else{
                    response.end(err);
                }

                  });
            }


 else if(url =='/rename'){
                fs.rename('test.txt','test2.txt',function(err){
                    if(err == null){
                        response.end("rename thanh cong");
                    }else{
                        response.end(err);
                    }
                      });
                }


else if(url =='/Login'){
response.end("chao mung ban den tinder");
}else{
    response.end("404 not found");
}

// response.end(url);

}).listen(process.env.PORT || '3000');