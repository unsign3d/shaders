#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plotV(vec2 st,vec2 start, vec2 end) {
    vec2 bl = step(start, st) - step(end, st);
    return bl.x * bl.y;
}

float plotH(vec2 st,vec2 start, vec2 end) {
    vec2 tr = step(start, 1.0 - st) - step(end, 1.0 - st);
    return tr.x * tr.y;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(1,1,1);
    
    float pct = plotV(st, vec2(0.070,0.640), vec2(0.09,1));
    float pct2 = plotV(st, vec2(0.200,0), vec2(0.22,1));
    float pct3 = plotV(st, vec2(0.750,0), vec2(0.77,1));
    float pct4 = plotV(st, vec2(0.950,0), vec2(0.97,1));
	
    float pct5 = plotH(st, vec2(0,0.120), vec2(1,0.15));
    float pct6 = plotH(st, vec2(0,0.36), vec2(1,0.39));
    
    vec2 lastLine = step(vec2(0,0.86), 1.0 - st) - step(vec2(0.78,0.89), 1.0 - st);
    float pct7 = lastLine.x * lastLine.y;


    float res = min(
        pct + 
        pct2 + 
        pct3 + 
        pct4 + 
        pct5 +
        pct6 +
        pct7
    , 1.0);
    
    color = vec3(1.0 - res);
    
	gl_FragColor = vec4(color,0.9);
}
