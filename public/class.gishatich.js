class Gishatich extends KendaniEak {
    constructor(x, y, ind) {
        super(x, y, ind);

        this.energy = 150;

    }



    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
        else if (frameCount % 40 >= 30 && frameCount % 40 < 40) {
              
        }
    }



    eat() {

        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 8) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 8) {
                this.die();
                //this.energy = 10;
            }
        }
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply += 5;

            var norGishatich = new Gishatich(x, y, this.index);
            gishArr.push(norGishatich);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishArr) {
            if (this.x == gishArr[i].x && this.y == gishArr[i].y) {
                gishArr.splice(i, 1);
                break;
            }
        }
    }

}

