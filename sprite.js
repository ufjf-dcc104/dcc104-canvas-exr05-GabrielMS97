function Sprite() {
  //Variáveis dos sprites principais
  this.x = 100;
  this.y = 100;
  this.larg = 20;
  this.alt = 20;

  this.ang = 0;

  this.vx = 0;
  this.vy = 0;

  this.cor = "#4169E1";

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
