class snake{
    constructor() {
        this.posi = [];
        this.posi[0] = createVector(w/2, h/2);
        this.dir = createVector(0, 0);
        this.len = 0;
    }

    show() {
        noStroke();
        fill(255);
        for (var i = 0; i < this.posi.length; i++) {
            rect(this.posi[i].x, this.posi[i].y, 1, 1);
        }
        
        textSize(3);
        fill(255,0, 0, 200);
        text('Score:' + this.len, 7, 3);
    }

    move() {
  	    let head = this.posi[this.posi.length-1].copy();
        this.posi.shift();
        head.x += this.dir.x;
        head.y += this.dir.y;
        this.posi.push(head);
    }
    

    grow(){
        this.len ++;
        var head = this.posi[(this.posi.length)-1].copy();
        this.posi.push(head);
    }
    
    eat(FoodX, FoodY){
        var head = this.posi[(this.posi.length)-1].copy();
        if (FoodX == head.x && FoodY == head.y){
            this.grow();
            return true;
        }
        else {
            return false;
        }
    }
    
    endGame(w, h){
        var head = this.posi[(this.posi.length)-1].copy();
        if (head.x < 0 || head.y < 0 || head.x+1 > w || head.y+1 > h){
            console.log("game over");
            noLoop();
        }
        
        for (var i = 0; i < this.posi.length-1; i++){
            var part = this.posi[i];
            if(head.x == part.x && head.y == part.y ){
                console.log("game over");
                noLoop();
            }
        }

    }
}