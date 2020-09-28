#version 410 core

//我们使用in关键字在顶点着色器中声明所有输入的顶点属性。
layout (location = 0) in vec3 aPos;

void main () {
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
}