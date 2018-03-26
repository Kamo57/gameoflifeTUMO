var matrix = []
var side = 2;
var xotArr = [];
var xotCount = 60;
var eatArr = [];
var eatCount = 70;
var gishArr = [];
var gishCount = 60;
var qarArr = [];
var qarCount = 70;
var qarkerArr = [];
var qarkerCount = 60;
var amenkerArr = [];
var amenkerCount = 20;
var matrix = [];
var erk = 60;
var bar = 80;

for (var i = 0; i < erk; i++) {
    matrix.push([]);
    for (var j = 0; j < bar; j++) {
        matrix[i][j] = 0;
    }
}
fillMatrixByCreatures(xotCount, 1)
fillMatrixByCreatures(eatCount, 2)
fillMatrixByCreatures(gishCount, 3)
fillMatrixByCreatures(qarCount, 4)
fillMatrixByCreatures(qarkerCount, 5)
fillMatrixByCreatures(amenkerCount, 6)


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
    function exanak() {
        if (frameCount % 40 >= 0 && frameCount % 40 < 10) {
            console.log("garun")

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
        }
        else if (frameCount % 40 >= 10 && frameCount % 40 < 20) {
            console.log("amar")

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("Chartreuse");
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
        }
        else if (frameCount % 40 >= 20 && frameCount % 40 < 30) {
            console.log("ashun")

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("DarkGoldenRod");
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
        }
        else if (frameCount % 40 >= 30 && frameCount % 40 < 39) {
            console.log("dzmer")

            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("white");
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
        }
    }
    exanak();
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function fillMatrixByCreatures(qanak, tesak) {
    var a = 0;
    while (a < qanak) {
        var x = getRandomInt(0, erk);
        var y = getRandomInt(0, bar);
        if (matrix[x][y] == 0) {
            matrix[x][y] = tesak;

            a++;
        }
    }


}