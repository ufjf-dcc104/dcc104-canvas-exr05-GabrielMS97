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
    //ctx.fillRect(this.x, this.y, this.larg, this.alt);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.save();
    ctx.translate(this.x + this.larg/2, this.y+this.alt/2);
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

Sprite.prototype.moverNave = function(dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
}

Sprite.prototype.colidiuComBarreira = function (alvo) {
  if (alvo.x + alvo.larg < this.xB) return false;
  if (alvo.x > this.xB + this.largB) return false;
  if (alvo.y + alvo.alt < this.yB) return false;
  if (alvo.y > this.yB + this.altB) return false;

  return true;

}
