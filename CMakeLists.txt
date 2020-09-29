cmake_minimum_required(VERSION 3.16)
project(learnopengl)

set(CMAKE_CXX_STANDARD 17)

file(
    GLOB sources
    "main.cpp"
    "src/*"
    "shader/*"
)

# 查询 GLFW
find_package(glfw3 3.2 REQUIRED)

# 指定头文件
include_directories(/usr/local/include)

link_libraries(/usr/local/lib)

add_executable(learnopengl ${sources} src/GLShader.cpp src/GLShader.h main.h)

target_link_libraries(learnopengl glfw)
