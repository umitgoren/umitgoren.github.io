/**
 * Created by aillieo on 16/10/22.
 */

var ShaderTest = cc.Node.extend({
    sprite:null,
    shader:null,
    dt:0,
    ctor:function () {

        this._super();

       

        if( 'opengl' in cc.sys.capabilities ) {


            this.shader = new cc.GLProgram("res/shader_test/test.vsh", "res/shader_test/test.fsh");
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_POSITION, cc.VERTEX_ATTRIB_POSITION);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD, cc.VERTEX_ATTRIB_TEX_COORDS);
            this.shader.addAttribute(cc.ATTRIBUTE_NAME_COLOR, cc.VERTEX_ATTRIB_COLOR);

            this.shader.link();
            this.shader.updateUniforms();
            this.shader.use();
            this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('time'), 0);
            
           
            
            
            this.sprite = new cc.Sprite('res/HelloWorld.png');
        
            if(cc.sys.isNative){
                var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this.shader);
                glProgram_state.setUniformFloat("time", 0);

                this.sprite.setGLProgramState(glProgram_state);
            }else{
                this.sprite.shaderProgram = this.shader;
            }

            this.addChild(this.sprite);

            this.scheduleUpdate();
        }


        return true;
    },


    update : function (delta) {

        this.dt += delta;
        if(this.dt>3.14){this.dt-= 3.14;}
        


        if( 'opengl' in cc.sys.capabilities ) {
            if(cc.sys.isNative){
                this.sprite.getGLProgramState().setUniformFloat("time", this.dt);
            }else{
                this.shader.use();
                this.shader.setUniformLocationWith1f(this.shader.getUniformLocationForName('time'), this.dt);
                this.shader.updateUniforms();
            }
        }
    }

});



