let Application = PIXI.Application, //new PIXI.Application() 创建一个矩形显示区域 它会自动生成一个HTML <canvas>元素，然后在canvas画布上显示图像  new PIXI.Application({}).view
  Container = PIXI.Container, // new PIXI.Container() 创建一个容器
  loader = PIXI.loader, //loader（加载器）对象可以加载任何类型的图像
  resources = PIXI.loader.resources, //通过引用loader的resources对象中的纹理来创建精灵  例子：PIXI.loader.resources["images/anyImage.png"].texture
  Rectangle = PIXI.Rectangle, //new PIXI.Rectangle(x, y, width, height) 创建一个矩形对象，该对象定义要从纹理中提取的子图像的位置和大小
  TextureCache = PIXI.TextureCache, //PIXI.TextureCache(['imgUrl']) 也可以从纹理创建 精灵
  Sprite = PIXI.Sprite; //new PIXI.Sprite()  创建一个精灵
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

  //附加事件侦听器
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

function hitTestRectangle(r1, r2) {

  //定义我们需要计算的变量
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

  //撞击将决定是否发生碰撞
  hit = false;

  //找到每个精灵的中心点
  r1.centerX = r1.x + r1.width / 2;
  r1.centerY = r1.y + r1.height / 2;
  r2.centerX = r2.x + r2.width / 2;
  r2.centerY = r2.y + r2.height / 2;

  //找到每个精灵的一半宽度和一半高度
  r1.halfWidth = r1.width / 2;
  r1.halfHeight = r1.height / 2;
  r2.halfWidth = r2.width / 2;
  r2.halfHeight = r2.height / 2;

  //计算精灵之间的距离向量
  vx = r1.centerX - r2.centerX;
  vy = r1.centerY - r2.centerY;

  //算出半宽半高的组合
  combinedHalfWidths = r1.halfWidth + r2.halfWidth;
  combinedHalfHeights = r1.halfHeight + r2.halfHeight;

  //检查x轴上是否有碰撞
  if (Math.abs(vx) < combinedHalfWidths) {

    //可能发生碰撞。检查y轴上是否有碰撞
    if (Math.abs(vy) < combinedHalfHeights) {

      //发生了碰撞
      hit = true;
    } else {

      //在y轴上没有碰撞
      hit = false;
    }
  } else {

    //在x轴上没有碰撞
    hit = false;
  }

  //`hit` will be either `true` or `false`
  return hit;
};

// 限制精灵的移动范围
function contain(sprite, container) {

  let collision = undefined;

  //Left
  if (sprite.x < container.x) {
    sprite.x = container.x;
    collision = "left";
  }

  //Top
  if (sprite.y < container.y) {
    sprite.y = container.y;
    collision = "top";
  }

  //Right
  if (sprite.x + sprite.width > container.width) {
    sprite.x = container.width - sprite.width;
    collision = "right";
  }

  //Bottom
  if (sprite.y + sprite.height > container.height) {
    sprite.y = container.height - sprite.height;
    collision = "bottom";
  }

  //Return the `collision` value
  return collision;
}

function keyboardMove(sprite) {
  // 捕捉键盘箭头键
  let left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  left.press = () => {
    sprite.vx = -5;
    sprite.vy = 0;
  };
  left.release = () => {
    if (!right.isDown && sprite.vy === 0) {
      sprite.vx = 0;
    }
  };

  //Up
  up.press = () => {
    sprite.vy = -5;
    sprite.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && sprite.vx === 0) {
      sprite.vy = 0;
    }
  };

  //Right
  right.press = () => {
    sprite.vx = 5;
    sprite.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && sprite.vy === 0) {
      sprite.vx = 0;
    }
  };

  //Down
  down.press = () => {
    sprite.vy = 5;
    sprite.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && sprite.vx === 0) {
      sprite.vy = 0;
    }
  };
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}