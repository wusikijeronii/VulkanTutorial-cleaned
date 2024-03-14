#version 450

layout (input_attachment_index = 0, binding = 1) uniform subpassInput inputColor;
layout (input_attachment_index = 1, binding = 2) uniform subpassInput depthColor;

layout(location = 0) in vec3 fragColor;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

void main() {
    vec3 color = subpassLoad(inputColor).rgb;
    vec3 depth = subpassLoad(depthColor).rgb;
    outColor = vec4(depth.rgb, 1.0);
}
