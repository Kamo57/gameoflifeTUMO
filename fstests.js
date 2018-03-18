var obj = {
	"first_name": "Kamo",
	"last_name" : "Aghbalyan",
	"age": 15,
	"tumo_student":true

};
var myJSON = JSON.stringify(obj);

var fs = require('fs');

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, myJSON);
}
main();


