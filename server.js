var http = require("http");
var url =  require("url");
var util = require("util");
var formidable = require("formidable");


function start(route,handle){
    http.createServer(function(request,response){
        // var postData = '';
        var pathname = url.parse(request.url).pathname;

        route(handle,pathname,response,request)



        // console.log(pathname,"pathname" );
        // console.log(request.url,"request.url" );

        // request.setEncoding("utf8")

        // // var content =  route(handle,pathname,response)

        // // response.writeHead(200,{"Content-Type":"text/plain"})
        // // response.write(content);
        // // response.end();

        // request.addListener("data",function(postDataChunk){
        //     console.log("postData: ",postData);
        //     console.log("postDataChunk: ",postDataChunk);

        //     postData += postDataChunk;
            
        //     console.log("Received POST data chunk '"+
        //     postDataChunk + "'.");
        // })
        // request.addListener("end",function(){
        //     route(handle,pathname,response,postData);
        // })

        // route(handle,pathname,response)

        // if(request.url ==="/upload"&&request.method.toLowerCase()=="post"){
        //      // parse a file upload
        //      console.log("执行")
        //     var form = new formidable.IncomingForm();
        //     form.parse(request,function(err,fields,files){
        //         response.writeHead(200, {'content-type': 'text/plain'});
        //         response.write('received upload:\n\n');
        //         response.end(util.inspect({fields,files}))
        //     });
        //     return ;
        // }


          // show a file upload form
        //   response.writeHead(200, {'content-type': 'text/html'});
        //   response.end(
        //         '<form action="/upload" enctype="multipart/form-data" '+
        //         'method="post">'+
        //         '<input type="text" name="title"><br>'+
        //         '<input type="file" name="upload" multiple="multiple"><br>'+
        //         '<input type="submit" value="Upload">'+
        //         '</form>'
        //     );
    }).listen(8888);
    
    
    console.log("server has started")
}

exports.start = start ;