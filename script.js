var matrix = []
var side = 2;
var xotArr = [];
var xotCount = 5000;
var eatArr = [];
var eatCount = 3000;
var gishArr = [];
var gishCount = 1500;
var qarArr = [];
var qarCount = 4000;
var qarkerArr = [];
var qarkerCount = 2000;
var amenkerArr = [];
var amenkerCount = 1000;
var matrix = [];
var erk = 150;
var bar = 200;

for (var i = 0; i < erk; i++) {	
	matrix.push([]);	
	for (var j = 0; j < bar; j++) {
			matrix[i][j]= 0;
		}
}

    var a = 0;
    while(a < xotCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
    
            a++;
        }
    }
    var b = 0;
    while(b < eatCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
    
            b++;
        }
    }
    var c = 0;
    while(c < gishCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
    
            c++;
        }
    }
    var d = 0;
    while(d < qarCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
    
            d++;
        }
    }
    var e = 0;
    while(e < qarkerCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
    
            e++;
        }
    }
    var f = 0;
    while(f < amenkerCount){
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
    
            f++;
        }
    }


function setup() {
    noStroke()
    frameRate(60);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            }
            else if (matrix[i][j] == 3) {
                var gishatich = new Gishatich(j, i, 3);
                gishArr.push(gishatich);
            }
            else if (matrix[i][j] == 4) {
                var qar = new Qar(j, i, 4);
                qarArr.push(qar);
            }
            else if (matrix[i][j] == 5) {
                var qaraker = new Qaraker(j, i, 5);
                qarkerArr.push(qaraker);
            }
            else if (matrix[i][j] == 6) {
                var amenaker = new Amenaker(j, i, 6);
                amenkerArr.push(amenaker);
            }
        }
    }

}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("DIMGRAY");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("DARKSLATEGRAY");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 6) {
                fill("#690505");
                rect(j * side, i * side, side, side);
            }
             else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    }


    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishArr) {
        gishArr[i].eat();
    }

    for (var i in qarkerArr) {
        qarkerArr[i].eat();
    }
    for (var i in amenkerArr) {
        amenkerArr[i].eat();
    }
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
