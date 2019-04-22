var LOCAL_SERVER = "http://localhost:8080/ETH/"
var PROD_SERVER = ""
var DATA_SERVER = "http://api.blockcypher.com/v1/btc/main"
var SERVER = LOCAL_SERVER
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var exports = module.exports = {};

var router = 
{
    submit:{
        endpoint:"submit/",
        method:"POST",
        server:SERVER
    },
    accountInfo:{
        endpoint:"addrs/",
        method:"GET",
        server:DATA_SERVER
    },
    history:{
        endpoint:function(address) {
            return "addrs/"+address+"/full"
        },
        method:"GET",
        server:DATA_SERVER
    }

}

exports.router = router

exports.send = function(callback,currentRouter,param) {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

        if (this.readyState == 4 && this.status == 200) {
            let json = JSON.parse(xhttp.responseText);
            if (callback) callback(json,this.status);
        } else {
            let json = JSON.parse(xhttp.responseText);
            if (callback) callback(json,this.status);
            
        }
    };
    var param = param
    param = encodeURI(param)
    xhttp.open(currentRouter.method,currentRouter.server+currentRouter.endpoint+param, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}