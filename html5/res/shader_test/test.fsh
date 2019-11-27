//varying vec2 v_texCoord;


uniform vec2 u_resolution;

void main()
{
    //vec4 color = texture2D(CC_Texture0, v_texCoord);
    //vec4 tint = vec4(1.0, 0.0, 1.0, 1.0);
    //gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);// vec4(color * tint);
    
    
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    color = vec3(st.x,st.y,abs(sin(u_time)));

    gl_FragColor = vec4(color,1.0);
    
}
