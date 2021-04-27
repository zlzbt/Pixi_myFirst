## 初次学习Pixi
以完成一个小游戏为目标开始学习
## Pixi教程
基于官方教程翻译

这个教程将要一步步介绍怎么用[Pixi](https://github.com/pixijs/pixi.js)做游戏或者交互式媒体。

**当你遇到跨域的问题时，你可以不使用本地文件，调用远程文件就可以正常显示了**
[案例图片1](https://g.mdcdn.cn/h5/img/act/201711/new-1-2.png)\
[案例图片2](https://g.mdcdn.cn/h5/img/act/201711/new-1-2.png)\
**详情见demo**

介绍
------------
Pixi是一个超快的2D渲染引擎。它会帮助你用JavaScript或者其他HTML5技术来显示媒体，创建动画或管理交互式图像，从而制作一个游戏或应用。它拥有语义化的，简洁的API接口并且加入了一些非常有用的特性。比如支持纹理贴图集和为精灵（交互式图像）提供了一个简单的动画系统。它也提供了一个完备的场景图，你可以在精灵图层里面创建另一个精灵，当然也可以让精灵响应你的鼠标或触摸事件。最重要的的是，Pixi没有妨碍你的编程方式，你可以自己选择使用多少它的功能，你可以遵循你自己的编码风格，或让Pixi与其他有用的框架无缝集成。

Pixi不仅仅能做游戏 —— 你能用这个技术去创建任何交互式媒体应用

安装
----------
在你开始写任何代码之前，给你的工程创建一个目录，并且在根目录下运行一个web服务器。如果你不这么做，Pixi不会工作的。(小编一开始并没有运行一个web服务器出现了跨域的问题，但是小编用另一个当时解决了^.^)

现在，你需要去安装Pixi。
你可以选择使用 [Pixi的主要发布页面](https://github.com/pixijs/pixi.js/releases)`pixi`文件夹下的`pixi.min.js`文件

这个文件就是你使用Pixi唯一需要的文件，你可以忽视所有这个工程的其他文件，**你不需要他们**。

```html
<script src="pixi.min.js"></script>
```
这是你用来链接Pixi和测试它是否工作的基础页面。（这里假设 `pixi.min.js`在一个叫做`pixi`的子文件夹中）：

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hello World</title>
</head>
  <script src="pixi/pixi.min.js"></script>
<body>
  <script type="text/javascript">
    let type = "WebGL"
    if(!PIXI.utils.isWebGLSupported()){
      type = "canvas"
    }

    PIXI.utils.sayHello(type)
  </script>
</body>
</html>
```

如果Pixi连接成功，一些这样的东西会在你的浏览器控制台里显示：
```
      PixiJS 4.4.5 - * canvas * http://www.pixijs.com/  ♥♥♥
```

## 学习文档
参考文档 [Pixi.js中文网](https://pixijs.huashengweilai.com/guide/start/1.introduction.html)

按照官网步骤做即可
