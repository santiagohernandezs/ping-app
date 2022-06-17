const ping = require("ping");

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];


function makeping(){
    hosts.forEach(function (host) {
      ping.sys.probe(host, function (isAlive) {
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
      });
    });
}

export default makeping;