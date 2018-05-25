function Sprite() {
  //Variáveis dos sprites principais
  this.x = 100;
  this.y = 100;
  this.larg = 20;
  this.alt = 20;

  this.ang = 0;

  this.vx = 0;
  this.vy = 0;

  this.cor = "#1E90FF";
  this.cor2 = "#DC143C";

  //Variáveis das barreiras
  this.xB = 100;
  this.yB = 100;
  this.largB = 20;
  this.altB = 20;
  this.corB = "#778899";
}

Sprite.prototype.desenharBarreira = function (ctx) {
  ctx.fillStyle = this.corB;
  ctx.fillRect(this.xB, this.yB, this.largB, this.altB);
}

Sprite.prototype.desenharNave = function (ctx) {
    ctx.fillStyle = this.cor;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.ang*Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(-this.larg/2, -this.alt/2);
    ctx.lineTo(-this.larg/2, +this.alt/2);
    ctx.lineTo(+this.larg/2 + 10, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
