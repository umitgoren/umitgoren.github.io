attribute vec4 a_position;
attribute vec2 a_texCoord;
//attribute vec4 a_color;


varying vec2 v_texCoord;

void main()
{
    gl_Position = a_position;// CC_PMatrix * a_position;
    v_texCoord = a_texCoord;
    

}
