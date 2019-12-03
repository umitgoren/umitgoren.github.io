varying vec2 v_texCoord;

varying vec4 v_color;


void main()
{
    
    
    vec2 texCoord =  v_texCoord;
    
    float time = CC_Time[0];
    
    texCoord.x += 0.1 * sin(10.0 * texCoord.y + time);
    
    gl_FragColor = texture2D(CC_Texture0, texCoord);

    
}
