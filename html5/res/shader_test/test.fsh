varying vec2 v_texCoord;

varying vec4 v_color;


void main()
{
    
    
    vec2 texCoord =  v_texCoord;
    
    float time = CC_Time[0];
    
    texCoord.x += 0.1 * sin(10.0 * texCoord.y + time);
    
    //gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);// texture2D(CC_Texture0, texCoord);
    
    gl_FragColor = vec4(abs(sin(time)),0.0,0.0,1.0);

    
}
