#version 410 core

//我们使用in关键字在顶点着色器中声明所有输入的顶点属性。
layout (location = 0) in vec3 aPos;

//out vec4 vertexColor;

void main () {
    gl_Position = vec4(aPos.xyz, 1.0);
//    vertexColor = vec4(0.5f, 1.0f, 1.0f, 1.0f);
}