#version 410 core

uniform float opacity;
in vec3 ourColor;
out vec4 FragColor;

void main () {
    FragColor = vec4(ourColor, opacity);
}