#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tex0;

varying vec2 v_texcoord; 

void main() {
    gl_FragColor = texture2D(u_tex0, v_texcoord);
}