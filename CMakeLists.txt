cmake_minimum_required(VERSION 3.16)
project(learnopengl)

set(CMAKE_CXX_STANDARD 17)

file(
    GLOB sources
    "main.cpp"
    "glad.c"
)

find_package(glfw3 REQUIRED)

include_directories(/usr/local/include)

add_executable(learnopengl ${sources})

target_link_libraries(learnopengl glfw)
