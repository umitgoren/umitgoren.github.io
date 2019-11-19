var HelloWorldLayer = cc.Layer.extend({
        sprite: null,
        ctor: function() {
            this._super();
            var a = cc.winSize,
                b = new Knight;
            b.attr({
                x: 0.1 * a.width,
                y: 2 * a.height / 3
            });
            this.addChild(b, 0);
            b = new SpriteOutline;
            b.attr({
                x: 0.5 * a.width,
                y: 2 * a.height / 3
            });
            this.addChild(b, 0);
            b = new SpriteShine;
            b.attr({
                x: 0.9 * a.width,
                y: 2 * a.height / 3
            });
            this.addChild(b, 0);
                
            b = new ShaderTest;
            b.attr({
                x: 0.5 * a.width,
                y: 0.5 * a.height
            });
            this.addChild(b, 0);
                
            return !0
        }
    }),
    HelloWorldScene = cc.Scene.extend({
        onEnter: function() {
            this._super();
            var a = new HelloWorldLayer;
            this.addChild(a)
        }
    });
