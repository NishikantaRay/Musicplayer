const apiCallFromRequest = require('./Request')

const http = require('http');
const { parse } = require('path');

http.createServer((req, res) => {
        if(req.url === "/request"){
            apiCallFromRequest.callApi(function(response){
                //console.log(JSON.stringify(response));
                // let data=JSON.parse(response);
                for(let i = 0, l = 100; i < l; i++) {
                    var person=response[i].song;
                    console.log(person);
                    // We could also use `data.persons[i].id`
                    res.write(JSON.stringify(person));
                }
                
                res.end();
            });
        }
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");