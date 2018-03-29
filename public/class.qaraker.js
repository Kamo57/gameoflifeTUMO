class Qaraker extends KendaniEak {
    constructor(x, y, ind) {
        super(x, y, ind);

        this.energy = 1000;

    }


    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;
            console.log("qaraker qayl")

        }
    }

    eat() {

        var emptyCord = this.getDirections(4);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;
            this.energy++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in qarArr) {
                if (x == qarArr[i].x && y == qarArr[i].y) {
                    qarArr.splice(i, 1);
                    break;
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }
            
        } else {
            this.move();
            this.energy--;
            if (this.energy < 10000) {
                this.die();

            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (frameCount % 40 >= 20 && frameCount % 40 < 30) {

        }
        else if (cord) {
            var x = cord[0];
            var y = cord[1];



            var norQaraker = new Qaraker(x, y, this.index);
            qarkerArr.push(norQaraker);

            matrix[y][x] = 5;

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in qarkerArr) {
            if (this.x == qarkerArr[i].x && this.y == qarkerArr[i].y) {
                qarkerArr.splice(i, 1);
                break;
            }
        }
    }

}
