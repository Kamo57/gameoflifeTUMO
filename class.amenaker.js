class Amenaker extends KendaniEak {
    constructor(x, y, ind) {
        super(x, y, ind);

        this.energy = 20;

    }



    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 6;

            matrix[this.y][this.x] = 0;
            
            this.x = x;
            this.y = y;

        }
    }
    eat() {

        var emptyCord1 = this.getDirections(3);
        var emptyCord2 = this.getDirections(5);


        var cord1 = random(emptyCord1);
        var cord2 = random(emptyCord2);



        if (cord1) {
            this.multiply++;
            this.energy++;

            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishArr) {
                if (x == gishArr[i].x && y == gishArr[i].y) {
                    gishArr.splice(i, 1);
                }
            }
            for (var i in qarkerArr) {
                if (x == qarkerArr[i].x && y == qarkerArr[i].y) {
                    qarkerArr.splice(i, 1);
                }
            }
            if (this.multiply == 4) {
                this.mul()
                this.multiply = 0;
            }
        }

        else if (cord2) {
            this.multiply++;
            this.energy++;

            var x = cord2[0];
            var y = cord2[1];

            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishArr) {
                if (x == gishArr[i].x && y == gishArr[i].y) {
                    gishArr.splice(i, 1);
                }
            }
            for (var i in qarkerArr) {
                if (x == qarkerArr[i].x && y == qarkerArr[i].y) {
                    qarkerArr.splice(i, 1);
                }
            }
            if (this.multiply == 4) {
                this.mul()
                this.multiply = 0;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy < 15) {
                this.die();

            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norAmenaker = new Amenaker(x, y, this.index);
            amenkerArr.push(norAmenaker);

            matrix[y][x] = 6;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amenkerArr) {
            if (this.x == amenkerArr[i].x && this.y == amenkerArr[i].y) {
                amenkerArr.splice(i, 1);
            }
        }
    }
}

