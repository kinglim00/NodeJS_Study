var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
        if(queryData.id === undefined){
            db.query(`SELECT * FROM topic`, function(error, topics){
                console.log(topics);
                response.writeHead(200);
                response.end('Success');
            });
        } else{
            
        }
    }
})