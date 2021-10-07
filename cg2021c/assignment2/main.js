function main(){
    // return sin value 
    function sin(a){
        return Math.sin(Math.PI * a);
    }
    
    // return cos value 
    function cos(a){
        return Math.cos(Math.PI * a);
    }

    var canvas = document.getElementById("myCanvas"); // like paper, area where we will draw
    var gl = canvas.getContext("webgl"); // like draw tools 

    var rightVertices = [
        // lens
        -0.4    , 0.2  ,   0.18,0.18,0.18,
        -0.4    , -0.1  ,   0.18,0.18,0.18,
        -0.25    , -0.1   ,   0.18,0.18,0.18,

        -0.4    , 0.2  ,   0.18,0.18,0.18,
        -0.25    , 0.2  ,   0.18,0.18,0.18,
        -0.25    , -0.1   ,   0.18,0.18,0.18,

        -0.05    , 0.2  ,   0.25,0.25,0.25,
        -0.25    , 0.2  ,   0.25,0.25,0.25,
        -0.25    , -0.1   ,   0.25,0.25,0.25,
        
        -0.05    , 0.2  ,   0.25,0.25,0.25,
        -0.05    , -0.1  ,   0.25,0.25,0.25,
        -0.25    , -0.1   ,   0.25,0.25,0.25,

        -0.05    , 0.17  ,   0.18,0.18,0.18,
        -0.05    , -0.07  ,   0.18,0.18,0.18,
        0    , -0.07   ,   0.18,0.18,0.18,
        
        -0.05    , 0.17  ,   0.18,0.18,0.18,
        0    , 0.17  ,   0.18,0.18,0.18,
        0    , -0.07   ,   0.18,0.18,0.18,
        
        -0.05    , 0.2  ,   0.18,0.18,0.18,
        0    , 0.17  ,   0.18,0.18,0.18,
        -0.05    , 0.17   ,   0.18,0.18,0.18,
        
        -0.05    , -0.1  ,   0.18,0.18,0.18,
        -0.05    , -0.07  ,   0.18,0.18,0.18,
        0    , -0.07   ,   0.18,0.18,0.18,

        

        0    , 0.12  ,   0.2,0.2,0.2,
        0    , -0.02  ,   0.2,0.2,0.2,
        0.05    , -0.02   ,   0.2,0.2,0.2,
        
        0    , 0.12  ,   0.2,0.2,0.2,
        0.05    , 0.12  ,   0.2,0.2,0.2,
        0.05    , -0.02   ,   0.2,0.2,0.2,
        
        0    , 0.16  ,   0.2,0.2,0.2,
        0.05    , 0.12  ,   0.2,0.2,0.2,
        0    , 0.12   ,   0.2,0.2,0.2,
        
        0    , -0.06  ,   0.2,0.2,0.2,
        0    , -0.02  ,   0.2,0.2,0.2,
        0.05    , -0.02   ,   0.2,0.2,0.2,
        
        // camera body

        -0.75    , 0.405  ,   0.18,0.18,0.18,
        -0.775    , 0.38  ,   0.18,0.18,0.18,
        -0.75    , 0.38   ,   0.18,0.18,0.18,
        
        -0.75    , 0.4  ,   0.18,0.18,0.18,
        -0.65    , 0.38  ,   0.18,0.18,0.18,
        -0.75    , 0.38   ,   0.18,0.18,0.18,
        
        -0.65    , 0.4  ,   0.18,0.18,0.18,
        -0.65    , 0.38  ,   0.18,0.18,0.18,
        -0.75    , 0.4   ,   0.18,0.18,0.18,

        -0.65    , 0.4  ,   0.18,0.18,0.18,
        -0.65    , 0.38  ,   0.18,0.18,0.18,
        -0.62    , 0.38   ,   0.18,0.18,0.18,

        -0.77    , 0.38  ,   0.18,0.18,0.18,
        -0.77    , 0.2  ,   0.18,0.18,0.18,
        -0.62    , 0.38   ,   0.18,0.18,0.18,

        -0.77    , 0.38  ,   0.18,0.18,0.18,
        -0.4    , 0.2  ,   0.18,0.18,0.18,
        -0.62    , 0.38   ,   0.18,0.18,0.18,

        -0.73    , 0.36  ,   0.15,0.15,0.15,
        -0.43    , 0.33  ,   0.15,0.15,0.15,
        -0.43    , 0.36   ,   0.15,0.15,0.15,

        -0.73    , 0.36  ,   0.15,0.15,0.15,
        -0.43    , 0.33  ,   0.15,0.15,0.15,
        -0.73    , 0.33   ,   0.15,0.15,0.15,

        -0.73    , 0.36  ,   0.15,0.15,0.15,
        -0.77    , 0.33  , .15,0.15,0.15,
        -0.73    , 0.33   ,   0.15,0.15,0.15,

        -0.415    , 0.36  ,   0.15,0.15,0.15,
        -0.43    , 0.33  ,   0.15,0.15,0.15,
        -0.43    , 0.36   ,   0.15,0.15,0.15,

        -0.8    , -0.3  ,   0.2,0.2,0.2,
        -0.4    , -0.3  ,   0.2,0.2,0.2,
        -0.8    , 0.3   ,   0.2,0.2,0.2,

        -0.4    , 0.3  ,   0.2,0.2,0.2,
        -0.4    , -0.3  ,   0.2,0.2,0.2,
        -0.8    , 0.3   ,   0.2,0.2,0.2,
        
        -0.4    , 0.3  ,   0.2,0.2,0.2,
        -0.4    , 0.2  ,   0.2,0.2,0.2,
        -0.35    , 0.25   ,   0.2,0.2,0.2,
        
        -0.4    , 0.2  ,   0.25,0.25,0.25,
        -0.35    , -0.22  ,   0.25,0.25,0.25,
        -0.4    , -0.3   ,   0.25,0.25,0.25,

        -0.4    , 0.2  ,   0.25,0.25,0.25,
        -0.7    , -0.3  ,   0.25,0.25,0.25,
        -0.4    , -0.3   ,   0.25,0.25,0.25,

        -0.4    , 0.2  ,   0.25,0.25,0.25,
        -0.7    , -0.3  ,   0.25,0.25,0.25,
        -0.7    , 0.2   ,   0.25,0.25,0.25,

        -0.7    , 0.17  ,   0.25,0.25,0.25,
        -0.75    , -0.27  ,   0.25,0.25,0.25,
        -0.7    , -0.27   ,   0.25,0.25,0.25,

        -0.7    , 0.17  ,   0.25,0.25,0.25,
        -0.75    , -0.27  ,   0.25,0.25,0.25,
        -0.75    , 0.17   ,   0.25,0.25,0.25,
        
        -0.7    , 0.17  ,   0.25,0.25,0.25,
        -0.7    , 0.2  ,   0.25,0.25,0.25,
        -0.75    , 0.17   ,   0.25,0.25,0.25,

        -0.7    , -0.3  ,   0.25,0.25,0.25,
        -0.75    , -0.27  ,   0.25,0.25,0.25,
        -0.7    , -0.27   ,   0.25,0.25,0.25,
        
        -0.8    , 0.3  ,   0.2,0.2,0.2,
        -0.9    , 0.2  ,   0.2,0.2,0.2,
        -0.8    , 0.2   ,   0.2,0.2,0.2,
    
        -0.8    , -0.27  ,   0.2,0.2,0.2,
        -0.8    , 0.2  ,   0.2,0.2,0.2,
        -0.9    , 0.2   ,   0.2,0.2,0.2,
        
        -0.8    , -0.27  ,   0.2,0.2,0.2,
        -0.9    , -0.27  ,   0.2,0.2,0.2,
        -0.9    , 0.2   ,   0.2,0.2,0.2,
        
        -0.8    , -0.27  ,   0.2,0.2,0.2,
        -0.9    , -0.27  ,   0.2,0.2,0.2,
        -0.8    , -0.3   ,   0.2,0.2,0.2,
        
        -0.4    , 0.3  ,   0.2,0.2,0.2,
        -0.43    , 0.3  ,   0.2,0.2,0.2,
        -0.43    , 0.33   ,   0.2,0.2,0.2,

        -0.77    , 0.33  ,   0.2,0.2,0.2,
        -0.43    , 0.3  ,   0.2,0.2,0.2,
        -0.43    , 0.33   ,   0.2,0.2,0.2,
        
        -0.77    , 0.33  ,   0.2,0.2,0.2,
        -0.43    , 0.3  ,   0.2,0.2,0.2,
        -0.77    , 0.3   ,   0.2,0.2,0.2,
        
        -0.77    , 0.33  ,   0.2,0.2,0.2,
        -0.8    , 0.3  ,   0.2,0.2,0.2,
        -0.77    , 0.3   ,   0.2,0.2,0.2,
        
        -0.8    , 0.25  ,   0.2,0.2,0.2,
        -0.9    , 0.25  ,   0.2,0.2,0.2,
        -0.9    , 0.2   ,   0.2,0.2,0.2,

        -0.93    , 0.24  ,   0.2,0.2,0.2,
        -0.9    , 0.22  ,   0.2,0.2,0.2,
        -0.93    , 0.22   ,   0.2,0.2,0.2,
        
        -0.93    , 0.24  ,   0.2,0.2,0.2,
        -0.9    , 0.22  ,   0.2,0.2,0.2,
        -0.9    , 0.24   ,   0.2,0.2,0.2,
        
        -0.93    , 0.24  ,   0.2,0.2,0.2,
        -0.9    , 0.25  ,   0.2,0.2,0.2,
        -0.9    , 0.24   ,   0.2,0.2,0.2,

        -0.93    , 0.24  ,   0.2,0.2,0.2,
        -0.9    , 0.24  ,   0.2,0.2,0.2,
        -0.9    , 0.2   ,   0.2,0.2,0.2,
    ];

    var leftVertices = [
        // camera body
        -0.55    , 0.2  ,   0.18,0.18,0.18,
        -0.55    , -0.3  ,   0.18,0.18,0.18,
        0.55    , -0.3   ,   0.18,0.18,0.18,

        -0.55    , 0.2  ,   0.18,0.18,0.18,
        0.55    , 0.2  ,   0.18,0.18,0.18,
        0.55    , -0.3   ,   0.18,0.18,0.18,

        -0.55    , 0.2  ,   0.2,0.2,0.2,
        -0.4    , 0.2  ,   0.2,0.2,0.2,
        -0.4    , 0.35   ,   0.2,0.2,0.2,

        0.4    , 0.2  ,   0.2,0.2,0.2,
        -0.4    , 0.2  ,   0.2,0.2,0.2,
        -0.4    , 0.35   ,   0.2,0.2,0.2,

        0.4    , 0.2  ,   0.2,0.2,0.2,
        0.4    , 0.35  ,   0.2,0.2,0.2,
        -0.4    , 0.35   ,   0.2,0.2,0.2,

        0.4    , 0.2  ,   0.2,0.2,0.2,
        0.4    , 0.35  ,   0.2,0.2,0.2,
        0.55    , 0.2   ,   0.2,0.2,0.2,

        0.12    , 0.35  ,   0.23,0.23,0.23,
        0.12    , 0.45  ,   0.23,0.23,0.23,
        -0.12    , 0.45   ,   0.23,0.23,0.23,

        0.12    , 0.35  ,   0.23,0.23,0.23,
        -0.12    , 0.35  ,   0.23,0.23,0.23,
        -0.12    , 0.45   ,   0.23,0.23,0.23,

        -0.15    , 0.35  ,   0.23,0.23,0.23,
        -0.12    , 0.35  ,   0.23,0.23,0.23,
        -0.12    , 0.45   ,   0.23,0.23,0.23,

        0.12    , 0.35  ,   0.23,0.23,0.23,
        0.12    , 0.45  ,   0.23,0.23,0.23,
        0.15    , 0.35   ,   0.23,0.23,0.23,

        0.1    , 0.45  ,   0.3,0.3,0.3,
        0.1    , 0.5  ,   0.3,0.3,0.3,
        0.12    , 0.45   ,   0.3,0.3,0.3,

        0.1    , 0.45  ,   0.3,0.3,0.3,
        0.1    , 0.5  ,   0.3,0.3,0.3,
        -0.1    , 0.5   ,   0.3,0.3,0.3,

        -0.1    , 0.45  ,   0.3,0.3,0.3,
        -0.1    , 0.5  ,   0.3,0.3,0.3,
        -0.12    , 0.45   ,   0.3,0.3,0.3,

        -0.1    , 0.45  ,   0.3,0.3,0.3,
        -0.1    , 0.5  ,   0.3,0.3,0.3,
        0.12    , 0.45   ,   0.3,0.3,0.3,
    ];
    
    // make top half lens circle
    for(var i = 0; i<=180; i+=1)
    {
        let j = (i + 270) / 180;
        let k = (i + 271) / 180;
        
        
        var vertex_1 = [
            sin(j) * 0.4 + 0 , cos(j) * 0.4 + (-0.1), 
            0.25,0.25,0.25,
        ];
    
        var vertex_2 = [
            0, (-0.1), 
            0.25,0.25,0.25,
        ];

        var vertex_3 = [
            sin(k) * 0.4 + 0 , cos(k) * 0.4 + (-0.1),
            0.25,0.25,0.25,
        ];

        leftVertices = leftVertices.concat(vertex_1, vertex_2, vertex_3);
    }
    
    // make bottom half lens circle
    for(var i = 90; i<=270; i+=1)
    {
        var j = i / 180;
        var k = (i+1) / 180;
        var vertex_1 = [
            sin(j) * 0.4 + 0 , cos(j) * 0.4 + (-0.1), 
            0.25,0.25,0.25,
        ];
    
        var vertex_2 = [
            0, (-0.1), 
            0.25,0.25,0.25,
        ];

        var vertex_3 = [
            sin(k) * 0.4 + 0 , cos(k) * 0.4 + (-0.1),
            0.25,0.25,0.25,
        ];

        leftVertices = leftVertices.concat(vertex_1, vertex_2, vertex_3);
    }
    
    // to move the position from 0,0 to left
    for (let vert = 0; vert < leftVertices.length; vert += 5){
        leftVertices[vert] -= 1;
    }

    // to move the position from 0,0 to right
    for (let vert = 0; vert < rightVertices.length; vert += 5){
        rightVertices[vert] += 1.5;
    }

    var vertices = [...leftVertices,...rightVertices]; 

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 2); 
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    
    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

     // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    // the positional values from ARRAY_BUFFER
    // to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    
    var freeze = false;
    function onMouseClick(event){
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);

    var speed = 0.0049;
    var change_y = 0;
    // Create a uniform to animate the vertices
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        if(!freeze){
            // control the bouncing y position range
            if (change_y >= 0.75 || change_y <= -0.75) speed = -speed;
            change_y += speed;
        }

        const rightPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, change_y, 0.0, 1.0,
        ]

        const leftPosition = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0, 0.0, 0.0, 1.0,
        ]

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

        gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
        requestAnimationFrame(render);
    }
    render();
}