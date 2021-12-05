/*
        
    e=====f\
    | \a===|=b|
    |  |   |  |    
    h==|==g\  |  
      \d=====c
*/


var camera = {
  // cube_a
  cube_a_a : [-0.2,  0.45, 0.5], //a
  cube_a_b : [ 0.2,  0.45, 0.5], //b
  cube_a_c : [ 0.2, 0.0, 0.5], //c
  cube_a_d : [-0.2, 0.0, 0.5], //d

  cube_a_e : [-0.2,  0.45, -0.5], // e
  cube_a_f : [ 0.2,  0.45, -0.5], // f
  cube_a_g : [ 0.2, 0.0, -0.5], // g
  cube_a_h : [-0.2, 0.0, -0.5], // h

  // cube_a2
  cube_a2_a : [-0.2,  0.5, 0.4], //a
  cube_a2_b : [ 0.2,  0.5, 0.4], //b
  cube_a2_c : [ 0.2, 0.45, 0.5], //c
  cube_a2_d : [-0.2, 0.45, 0.5], //d

  cube_a2_e : [-0.2,  0.5, -0.4], // e
  cube_a2_f : [ 0.2,  0.5, -0.4], // f
  cube_a2_g : [ 0.2, 0.45, -0.5], // g
  cube_a2_h : [-0.2, 0.45, -0.5], // h
  
  // cube_b1
  cube_b1_a : [-0.1, 0.625, 0.1],
  cube_b1_b : [0.3, 0.625, 0.1],
  cube_b1_c : [0.3, 0.5, 0.15],
  cube_b1_d : [-0.1, 0.5, 0.15],
  
  cube_b1_e : [-0.1, 0.625, -0.1],
  cube_b1_f : [0.3, 0.625, -0.1],
  cube_b1_g : [0.3, 0.5, -0.15],
  cube_b1_h : [-0.1, 0.5, -0.15],
  
  // lens_a1
  lens_a1_i : [0.2, 0.35, 0.15],
  lens_a1_j : [0.2, 0.35, -0.2],
  lens_a1_k : [0.2, 0.1, 0.15],
  lens_a1_l : [0.2, 0.1, -0.2],
  lens_a1_m : [0.2, 0.3, 0.25],
  lens_a1_n : [0.2, 0.15, 0.25],
  lens_a1_o : [0.2, 0.3, -0.3],
  lens_a1_p : [0.2, 0.15, -0.3],
  
  lens_a1_i2 : [0.6, 0.35, 0.15],
  lens_a1_j2 : [0.6, 0.35, -0.2],
  lens_a1_k2 : [0.6, 0.1, 0.15],
  lens_a1_l2 : [0.6, 0.1, -0.2],
  lens_a1_m2 : [0.6, 0.3, 0.25],
  lens_a1_n2 : [0.6, 0.15, 0.25],
  lens_a1_o2 : [0.6, 0.3, -0.3],
  lens_a1_p2 : [0.6, 0.15, -0.3],
}

// color :)
var black1 		= [ 0.5, 0.5, 0.5 ];
var black2 	= [ 0.3, 0.3, 0.3 ];
var black3 	= [ 0.2, 0.2, 0.2 ];
var white 	= [ 1., 1., 1. ];

// surface orientation :)
var xp = [1, 0, 0];
var xn = [-1, 0, 0];
var yp = [0, 1, 0];
var yn = [0, -1, 0];
var zp = [0, 0, 1];
var zn = [0, 0, -1];

var vertices = [
  // cube A
  ...camera.cube_a_a, ...black1, ...zp, //0
  ...camera.cube_a_b, ...black1, ...zp, //1
  ...camera.cube_a_c, ...black1, ...zp, //2
  ...camera.cube_a_d, ...black1, ...zp, //3

  ...camera.cube_a_e, ...black3, ...zn, //4
  ...camera.cube_a_f, ...black3, ...zn, //5
  ...camera.cube_a_g, ...black3, ...zn, //6
  ...camera.cube_a_h, ...black3, ...zn, //7

  ...camera.cube_a_b, ...black2, ...xp, //8
  ...camera.cube_a_c, ...black2, ...xp, //9
  ...camera.cube_a_g, ...black2, ...xp, //11
  ...camera.cube_a_f, ...black2, ...xp, //10
  
  ...camera.cube_a_a, ...black2, ...xn, //12
  ...camera.cube_a_e, ...black2, ...xn, //13
  ...camera.cube_a_h, ...black2, ...xn, //14
  ...camera.cube_a_d, ...black2, ...xn, //15
  
  ...camera.cube_a_a, ...black2, ...yp, //16
  ...camera.cube_a_b, ...black2, ...yp, //17
  ...camera.cube_a_f, ...black2, ...yp, //18
  ...camera.cube_a_e, ...black2, ...yp, //19
  
  ...camera.cube_a_d, ...black3, ...yn, //20
  ...camera.cube_a_c, ...black3, ...yn, //21
  ...camera.cube_a_g, ...black3, ...yn, //22
  ...camera.cube_a_h, ...black3, ...yn, //23

  
  // cube a2
  ...camera.cube_a2_a, ...black1, ...zp,
  ...camera.cube_a2_b, ...black1, ...zp,
  ...camera.cube_a2_c, ...black1, ...zp,
  ...camera.cube_a2_d, ...black1, ...zp,

  ...camera.cube_a2_e, ...black3, ...zn,
  ...camera.cube_a2_f, ...black3, ...zn,
  ...camera.cube_a2_g, ...black3, ...zn,
  ...camera.cube_a2_h, ...black3, ...zn,
  
  ...camera.cube_a2_b, ...black2, ...xp,
  ...camera.cube_a2_c, ...black2, ...xp,
  ...camera.cube_a2_g, ...black2, ...xp,
  ...camera.cube_a2_f, ...black2, ...xp,
  
  ...camera.cube_a2_a, ...black2, ...xn,
  ...camera.cube_a2_d, ...black2, ...xn,
  ...camera.cube_a2_h, ...black2, ...xn,
  ...camera.cube_a2_e, ...black2, ...xn,
  
  ...camera.cube_a2_a, ...black2, ...yp,
  ...camera.cube_a2_b, ...black2, ...yp,
  ...camera.cube_a2_f, ...black2, ...yp,
  ...camera.cube_a2_e, ...black2, ...yp,
  
  ...camera.cube_a2_d, ...black3, ...yn,
  ...camera.cube_a2_c, ...black3, ...yn,
  ...camera.cube_a2_g, ...black3, ...yn,
  ...camera.cube_a2_h, ...black3, ...yn,

  // cube B1
  ...camera.cube_b1_a, ...black1, ...zp,
  ...camera.cube_b1_b, ...black1, ...zp,
  ...camera.cube_b1_c, ...black1, ...zp,
  ...camera.cube_b1_d, ...black1, ...zp,

  ...camera.cube_b1_e, ...black3, ...zn,
  ...camera.cube_b1_f, ...black3, ...zn,
  ...camera.cube_b1_g, ...black3, ...zn,
  ...camera.cube_b1_h, ...black3, ...zn,
  
  ...camera.cube_b1_b, ...black2, ...xp,
  ...camera.cube_b1_c, ...black2, ...xp,
  ...camera.cube_b1_g, ...black2, ...xp,
  ...camera.cube_b1_f, ...black2, ...xp,
  
  ...camera.cube_b1_a, ...black2, ...xn,
  ...camera.cube_b1_d, ...black2, ...xn,
  ...camera.cube_b1_h, ...black2, ...xn,
  ...camera.cube_b1_e, ...black2, ...xn,
  
  ...camera.cube_b1_a, ...black2, ...yp,
  ...camera.cube_b1_b, ...black2, ...yp,
  ...camera.cube_b1_f, ...black2, ...yp,
  ...camera.cube_b1_e, ...black2, ...yp,
  
  ...camera.cube_b1_d, ...black3, ...yn,
  ...camera.cube_b1_c, ...black3, ...yn,
  ...camera.cube_b1_g, ...black3, ...yn,
  ...camera.cube_b1_h, ...black3, ...yn,

  // lens a1 
  ...camera.lens_a1_m, ...black2, ...zp, //1
  ...camera.lens_a1_m2, ...black2, ...zp, //2
  ...camera.lens_a1_n2, ...black2, ...zp, //3
  ...camera.lens_a1_n, ...black2, ...zp, //4
  
  ...camera.lens_a1_i, ...black2, ...yp, //5
  ...camera.lens_a1_i2, ...black2, ...yp, //6
  ...camera.lens_a1_m2, ...black2, ...yp, //7
  ...camera.lens_a1_m, ...black2, ...yp, //8
  
  ...camera.lens_a1_n, ...black2, ...yn, //9
  ...camera.lens_a1_n2, ...black2, ...yn, //10
  ...camera.lens_a1_k2, ...black2, ...yn, //11
  ...camera.lens_a1_k, ...black2, ...yn, //12
  
  ...camera.lens_a1_o, ...black2, ...zn, //13
  ...camera.lens_a1_o2, ...black2, ...zn, //14
  ...camera.lens_a1_p2, ...black2, ...zn, //15
  ...camera.lens_a1_p, ...black2, ...zn, //16
  
  ...camera.lens_a1_j, ...black2, ...yp, //17
  ...camera.lens_a1_j2, ...black2, ...yp, //18
  ...camera.lens_a1_o2, ...black2, ...yp, //19
  ...camera.lens_a1_o, ...black2, ...yp, //20
  
  ...camera.lens_a1_p, ...black2, ...yn, //21
  ...camera.lens_a1_p2, ...black2, ...yn, //22
  ...camera.lens_a1_l2, ...black2, ...yn, //23
  ...camera.lens_a1_l, ...black2, ...yn, //24

  ...camera.lens_a1_i, ...black2, ...yp, //25
  ...camera.lens_a1_i2, ...black2, ...yp, //26
  ...camera.lens_a1_j2, ...black2, ...yp, //27
  ...camera.lens_a1_j, ...black2, ...yp, //28

  ...camera.lens_a1_k, ...black2, ...yn, //29
  ...camera.lens_a1_k2, ...black2, ...yn, //30
  ...camera.lens_a1_l2, ...black2, ...yn, //31
  ...camera.lens_a1_l, ...black2, ...yn, //32
  
  ...camera.lens_a1_i2, ...black2, ...xp, //33
  ...camera.lens_a1_j2, ...black2, ...xp, //34
  ...camera.lens_a1_o2, ...black2, ...xp, //35
  ...camera.lens_a1_m2, ...black2, ...xp, //36

  ...camera.lens_a1_n2, ...black2, ...xp, //37
  ...camera.lens_a1_p2, ...black2, ...xp, //38
  ...camera.lens_a1_l2, ...black2, ...xp, //39
  ...camera.lens_a1_k2, ...black2, ...xp, //40

  ...camera.lens_a1_m2, ...black2, ...xp, //41
  ...camera.lens_a1_o2, ...black2, ...xp, //42
  ...camera.lens_a1_p2, ...black2, ...xp, //43
  ...camera.lens_a1_n2, ...black2, ...xp, //44
];

var cube_a2_i = 24;
var cube_b1_i = 24 * 2;
var lens_a1_i = (24 * 3) ;

var indices = [
  // cube a1
  
  0, 1, 2,     0, 2, 3,     // Face A
  4, 5, 6,     4, 6, 7,     // Face B
  8, 9, 10,    8, 10, 11,   // Face C
  12, 13, 14,  12, 14, 15,  // Face D
  16, 17, 18,  16, 18, 19,  // Face E
  20, 21, 22,  20, 22, 23,  // Face F 

  // cube a2
  0 + cube_a2_i, 1 + cube_a2_i, 2 + cube_a2_i,     0 + cube_a2_i, 2 + cube_a2_i, 3 + cube_a2_i,     // Face A
  4 + cube_a2_i, 5 + cube_a2_i, 6 + cube_a2_i,     4 + cube_a2_i, 6 + cube_a2_i, 7 + cube_a2_i,     // Face B
  8 + cube_a2_i, 9 + cube_a2_i, 10 + cube_a2_i,    8 + cube_a2_i, 10 + cube_a2_i, 11 + cube_a2_i,   // Face C
  12 + cube_a2_i, 13 + cube_a2_i, 14 + cube_a2_i,  12 + cube_a2_i, 14 + cube_a2_i, 15 + cube_a2_i,  // Face D
  16 + cube_a2_i, 17 + cube_a2_i, 18 + cube_a2_i,  16 + cube_a2_i, 18 + cube_a2_i, 19 + cube_a2_i,  // Face E
  20 + cube_a2_i, 21 + cube_a2_i, 22 + cube_a2_i,  20 + cube_a2_i, 22 + cube_a2_i, 23 + cube_a2_i,  // Face F 
  
  // cube b1
  0 + cube_b1_i, 1 + cube_b1_i, 2 + cube_b1_i,     0 + cube_b1_i, 2 + cube_b1_i, 3 + cube_b1_i,     // Face A
  4 + cube_b1_i, 5 + cube_b1_i, 6 + cube_b1_i,     4 + cube_b1_i, 6 + cube_b1_i, 7 + cube_b1_i,     // Face B
  8 + cube_b1_i, 9 + cube_b1_i, 10 + cube_b1_i,    8 + cube_b1_i, 10 + cube_b1_i, 11 + cube_b1_i,   // Face C
  12 + cube_b1_i, 13 + cube_b1_i, 14 + cube_b1_i,  12 + cube_b1_i, 14 + cube_b1_i, 15 + cube_b1_i,  // Face D
  16 + cube_b1_i, 17 + cube_b1_i, 18 + cube_b1_i,  16 + cube_b1_i, 18 + cube_b1_i, 19 + cube_b1_i,  // Face E
  20 + cube_b1_i, 21 + cube_b1_i, 22 + cube_b1_i,  20 + cube_b1_i, 22 + cube_b1_i, 23 + cube_b1_i,  // Face F 
  
  // lensa a1
  0 + lens_a1_i, 1 + lens_a1_i, 2 + lens_a1_i,     0 + lens_a1_i, 2 + lens_a1_i, 3 + lens_a1_i,     // Face A
  4 + lens_a1_i, 5 + lens_a1_i, 6 + lens_a1_i,     4 + lens_a1_i, 6 + lens_a1_i, 7 + lens_a1_i,     // Face B
  8 + lens_a1_i, 9 + lens_a1_i, 10 + lens_a1_i,    8 + lens_a1_i, 10 + lens_a1_i, 11 + lens_a1_i,   // Face C
  12 + lens_a1_i, 13 + lens_a1_i, 14 + lens_a1_i,  12 + lens_a1_i, 14 + lens_a1_i, 15 + lens_a1_i,  // Face D
  16 + lens_a1_i, 17 + lens_a1_i, 18 + lens_a1_i,  16 + lens_a1_i, 18 + lens_a1_i, 19 + lens_a1_i,  // Face E
  20 + lens_a1_i,  21 + lens_a1_i,  22 + lens_a1_i,  20 + lens_a1_i, 22 + lens_a1_i, 23 + lens_a1_i,// Face F 
  24 + lens_a1_i, 25 + lens_a1_i, 26 + lens_a1_i,  24 + lens_a1_i, 26 + lens_a1_i, 27 + lens_a1_i,  // Face G
  28 + lens_a1_i, 29 + lens_a1_i, 30 + lens_a1_i,  28 + lens_a1_i, 30 + lens_a1_i, 31 + lens_a1_i,  // Face H
  32 + lens_a1_i, 33 + lens_a1_i, 34 + lens_a1_i,  32 + lens_a1_i, 34 + lens_a1_i, 35 + lens_a1_i,  // Face I 
  36 + lens_a1_i, 37 + lens_a1_i, 38 + lens_a1_i,  36 + lens_a1_i, 38 + lens_a1_i, 39 + lens_a1_i,  // Face J
  40 + lens_a1_i, 41 + lens_a1_i, 42 + lens_a1_i,  40 + lens_a1_i, 42 + lens_a1_i, 43 + lens_a1_i,  // Face K
];
