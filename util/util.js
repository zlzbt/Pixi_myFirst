let Application = PIXI.Application,  //new PIXI.Application() 创建一个矩形显示区域 它会自动生成一个HTML <canvas>元素，然后在canvas画布上显示图像  new PIXI.Application({}).view
    Container = PIXI.Container,  // new PIXI.Container() 创建一个容器
    loader = PIXI.loader,   //loader（加载器）对象可以加载任何类型的图像
    resources = PIXI.loader.resources,  //通过引用loader的resources对象中的纹理来创建精灵  例子：PIXI.loader.resources["images/anyImage.png"].texture
    Rectangle = PIXI.Rectangle,  //new PIXI.Rectangle(x, y, width, height) 创建一个矩形对象，该对象定义要从纹理中提取的子图像的位置和大小
    TextureCache = PIXI.TextureCache;  //PIXI.TextureCache(['imgUrl']) 也可以从纹理创建 精灵
    Sprite = PIXI.Sprite;  //new PIXI.Sprite()  创建一个精灵
    // superFastSprites = PIXI.particles.ParticleContainer;  //粒子容器ParticleContainer对精灵进行分组

const _urls = [
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/cat1.png",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/Doraemon1.jpg",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/Doraemon2.jpg",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/Doraemon3.jpg",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/Doraemon4.jpg",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/Doraemon5.jpg",
    "https://raw.githubusercontent.com/zlzbt/Pixi_myFirst/master/images/tileset.png",
];

function keyboard(keyCode) {
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };
  
    //Attach event listeners
    window.addEventListener(
      "keydown", key.downHandler.bind(key), false
    );
    window.addEventListener(
      "keyup", key.upHandler.bind(key), false
    );
    return key;
  }