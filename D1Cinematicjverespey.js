class scene1 extends Phaser.Scene{
    constructor() {
        super({key:'scene1'});
    }
    preload(){}
    create(){
        this.textObject = this.add.text(
                50, //x
                200,//y
                "CLICK THE SCREEN TO START", //text
                {
                    font: "40px Arial",
                    color: "#000000",
                } //style
            ); 
        this.input.once('pointerdown', function ()
        {
    
            console.log('From SceneA to SceneB');
            this.scene.start('scene2');
        }, this);
    }
    update(){}
}
class scene2 extends Phaser.Scene {
    constructor() {
        super({key:'scene2'});
    }
    preload()
{
    this.load.path = './assets/';
    this.load.image('spinner', 'spinner-icon-12085.jpg');
}
    create(){
        
        this.spinner = this.add.sprite(this.cameras.main.width/2, this.cameras.main.height/2, 'spinner');
        this.spinner.setScale(.5);
        this.textObject = this.add.text(
            this.cameras.main.width/2-207, //x
            (this.cameras.main.height/2)+300,//y
            "LOADING", //text
            {
                font: "90px Arial",
                color: "#000000",
            } //style
        ); 
        this.time.delayedCall(3000,()=>{
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000,()=>{
            this.scene.start('scene3');
            })
        })
        

    }
    update(time,delta)
    {
        this.spinner.rotation+=.05;
    }
}


class scene3 extends Phaser.Scene {
    constructor() {
        super({key:'scene3'});
    }
    preload()
{
    this.load.path = './assets/';
    this.load.image('logo', 'forklift-drawing-1.png');
    this.load.audio('pop','QKTA234-pop.mp3');
}
    create(){
        this.cameras.main.fadeIn();
        this.add.sprite( this.cameras.main.width/2, this.cameras.main.height/2,'logo')
        this.sound.add('pop');
        this.sound.play('pop');
        this.time.delayedCall(2000,()=>{
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000,()=>{
                this.scene.start('scene4');
                })
        })
        
    }
    update(){}
}
class scene4 extends Phaser.Scene {
    constructor() {
        super({key:'scene4'});
    }
    preload()
{
    this.load.path = './assets/';
    this.load.image('Menu', '20230426185538_1.jpg');
    this.load.audio('music','bounce-114024.mp3');
}
    create(){
        this.cameras.main.fadeIn();
        this.add.sprite( this.cameras.main.width/2, this.cameras.main.height/2,'Menu')
        this.sound.add('music');
        this.sound.play('music');
        const menu1 = this.add.text(
            -50, //x
            100,//y
            "WHITE BOY SUMMER ADVENTURE 2", //text
            {
                font: "70px Arial",
                color: "#000000",
            } //style
        ); 
        const menu2 = this.add.text(
            -50, //x
            200,//y
            "New Game\nContinue\nMultiplayer", //text
            {
                font: "55px Arial",
                color: "#000000",
            } //style
        ); 
        this.graphics=this.add.graphics();
        this.graphics.fillStyle('#808080', 1)
        const r1=this.graphics.fillEllipse(300, 1000, 200, 100, 30);
        const r2=this.graphics.fillEllipse(450, 1000, 200, 100, 30);
        const r3=this.graphics.fillEllipse(750, 1000, 200, 100, 30);
        const r4=this.graphics.fillEllipse(1500, 1000, 200, 100, 30);
        this.tweens.add({
            targets: menu1,
            x: 700,
            duration: 2000,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.in'
        });
        this.tweens.add({
            targets: menu2,
            x: 700,
            duration: 2000,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.in'
        });
    }
    update(){}
}




let config = {
    type: Phaser.WEBGL,
    width: 2143,
    height: 1116,
    backgroundColor: '#FFFFFF',
    scene: [scene1,scene2,scene3,scene4],
}

let game = new Phaser.Game(config);


// this.graphics = this.add.graphics();
// // add shapes
// this.graphics.fillStyle(0xff9900, 1); //color, opacity
// this.graphics.fillCircle(100,100,50);   //x, y, radius
// this.graphics.fillTriangle(250, 50, 200, 150, 300, 150); //x1, y1, x2, y2, x3, y3
// this.graphics.fillEllipse(450, 100, 200, 100, 30);   // x, y, width, height, smoothness
// //add lines
// this.graphics.lineStyle(5, 0x000000, 1);    //linewidth, color, opacity
// this.graphics.lineBetween(100,100,250,100); //x1, y1, x2, y2
// this.graphics.lineStyle(5, 0x000000, 0.5);
// this.graphics.lineBetween(250,100,450,100);
// // add gradiant shapes
// // topleftcolor, toprightcolor, bottomleftcolor, bottomrightcolor, topleftopacity, toprightopacity, bottomleftopacity, bottomrightopacity 
// this.graphics.fillGradientStyle(0xff0000, 0xffff00, 0xffff00,0xffff00, 1, 1, 0.1, 0.1); 
// this.graphics.fillRect(600,50,150,100); //x1,y1, width, height
// //create text object
// this.textObject = this.add.text(
//     50, //x
//     200,//y
//     "hello world!", //text
//     {
//         font: "40px Arial",
//         color: "#ff7700",
//     } //style
// );
// //create image object 
// this.imageObject = this.add.image(
//     400,//x
//     250,//y
//     'sectionimage',//imagename
// )
// this.imageObject.setScale(0.8) //resize
// // Add tweens
// this.tweens.add({
//     targets: this.textObject,
//     alpha:0,
//     duration: 5000,
//     ease: 'Linear',
//     repeat: -1,
// });
// this.tweens.add({
//     targets: this.imageObject,
//     x:500,
//     y:500,
//     duration: 5000,
//     ease: 'Linear',
//     repeat: -1,
// });