#extension GL_OES_standard_derivatives : enable

uniform float time;

varying vec2 v_texCoord;

varying vec4 v_color;


void main()
{
    
    
    vec4 pixel = texture2D(CC_Texture0, v_texCoord);
    float gray = (pixel.r + pixel.g + pixel.b) / 3.0;
    
    
    gl_FragColor.rgb = vec3(gray);
    
    //gl_FragColor = vec4(abs(sin(time)),0.0,0.0,1.0);

    
}
