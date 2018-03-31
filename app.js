var fs = require('fs');  //ֆայլերի մեջ գրել և կարդալու համար
var express = require('express');
var path = require('path');
var app = express();
var io = require('socket.io')(server);
var statData = []; //ստատիստիկան պահպանող օբյեկտների զանգվածը
var server = require('http').Server(app);

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
//եթե ֆայլը կա
if (fs.existsSync("public/data.json")) {
    //կարդում ենք ֆայլից և անմիջապես դարձնում օբյեկտ 
    var statData = require("./public/data.json");
}

//սահմանում ենք, ստատիկ ֆայլերի դիրեկտորիան
app.use(express.static("public"));
//սահմանում ենք կլիենտին անհրաժեշտ javascript-ների դիրեկտորիաները, տես index.html-ում
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

//արմատի շավիղը (rout-ը)
app.get('/', function (req, res) {
    res.redirect('index.html');
});
//ստատիստիկայի շավիղը
app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});

server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); //ավելացնում ենք նոր տվյալը զանգվածում
        fs.writeFile('public/data.json', JSON.stringify(statData)); //գրում ենք ստատսիտկայի տվյալները ֆայլի մեջ
    })

    socket.on("get stats", function () { //երբ կլիենտը ուղարկում է "get stats" 
        //կարդում ենք ստատիստիկայի ֆայլը
        fs.readFile('public/data.json', "utf8", function(err, statisticsFromFile) {
            //և ուղարկում ենք այն "send stats" պիտակով
            socket.emit("send stats",statisticsFromFile);    
        });
        
    })
    

});