class Drop {
    constructor (){
      var options = {
        friction:0.1
    }
      this.x = random(0,400);
      this.y = random(-500,0);
      this.speed = random(5,10);
      this.options = options;
    }

    fall(){
      this.y = this.y + this.speed;

      if (this.y > 600) {
        this.y = random(-500,0);
      }
    }

    display() {
      stroke(0,255,250);
      fill("blue");
      ellipse(this.x,this.y,5,5);
    }
  };
  