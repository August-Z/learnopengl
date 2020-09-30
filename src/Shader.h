#ifndef LEARNOPENGL_SHADER_H
#define LEARNOPENGL_SHADER_H

#include <glad/glad.h>

#include <string>
#include <iostream>
#include <sstream>
#include <fstream>

class Shader {
public:
    GLuint ID;

    Shader(const char *vertexPath, const char *fragmentPath);

    void use() const;

    void setBool(const std::string &name, bool value) const;

    void setInt(const std::string &name, int value) const;

    void setFloat(const std::string &name, float value) const;

private:
    static void checkCompileErrors(GLuint shader, const std::string& type);
};

#endif //LEARNOPENGL_SHADER_H
