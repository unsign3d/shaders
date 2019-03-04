#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
  float pct = 0.0;

  // a. The DISTANCE from the pixel to the center
  pct = min(distance(st,vec2(abs(sin(u_time * 0.4)))),distance(st,vec2(0.6)));

  float radius = abs(sin(u_time) * 0.2);
  vec3 color = 
    (1.0 - smoothstep(radius, abs(sin(u_time) * 0.3), vec3(pct))) * vec3(0.0706 * u_time, 0.2157* u_time, 0.702);

	gl_FragColor = vec4( color, 1.0);
}
