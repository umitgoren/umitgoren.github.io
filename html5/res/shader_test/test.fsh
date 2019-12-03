varying vec2 v_texCoord;

varying vec4 v_color;


void main()
{
    vec4 color = texture2D(CC_Texture0, v_texCoord);
    
    vec2 texCoord =  v_texCoord;
    
    float time = CC_Time[0];
   
    //gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);// vec4(color * tint);
    
    texCoord.x += 0.1*sin(10.0*texCoord.y + time);
    
    gl_FragColor = v_color*color;

    
}
