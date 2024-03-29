/*------------------------------------------------*/
/*-------------BUCLES E ITERACIÓN----------------*/
/*----------------------------------------------*/

/*--------------------WHILE-------------------*/
// Comparación entre un IF y un WHILE

// --- IF --- //

// let numero = 0;

// if (numero <= 10) {
//     numero++;
// }

// console.log(numero)

// --- WHILE --- //

// let numero = 0;

// while (numero < 10 ) {
//     numero++;
// }

// console.log(numero)

/*------------------DO WHILE-----------------*/

// let numero = 0;

// do {
//     console.log(numero);
//   numero++;
// } while (numero <= 10);

/*------------------BREAK------------------*/

// let numero = 0;

// while (numero < 1000) {
//     numero++;
//     if (numero === 10) {
//         break;
//     }
// }

// console.log(numero);

/*-------------------FOR-------------------*/

// for ( let i = 0; i < 6; i++) {
//     console.log(i)
// };

// for (let i = 6; i >= 0; i--) {
//     console.log(i);
// }

// let i;

// for (i = 10; i > 0; i--) {
//     console.log(i);
// };

// for (let i = 0; i < 20; i++) {
//   console.log(i);

//   if (i === 15) {
//     break
//   }
// };

/*----------------CONTINUE----------------*/

// for (let i = 0; i < 20; i++) {
//   if (i === 15) {
//     continue;
//   }
//   console.log(i);
// };

/*-------------------FOR IN-------------------*/

// let colores = ["blanco","negro","gris"];

// for (color in colores) {
//     console.log(color)
// };

// let colores = ["blanco","negro","gris"];

// for (color in colores) {
//     console.log(colores[color])
// };

/*-------------------FOR OF-------------------*/

// let colores = ["blanco","negro","gris"];

// for (color of colores) {
//     console.log(colores)
// };

/*-------------------LABEL-------------------*/

// let array1 = ["Ema", "Elias"];
// let array2 = ["Davalos", array1,28];

// forNombreCompleto:
// for (array in array2) {
//   if (array == 1) {
//     for (array of array1) {
//         if (array = 1) {
//             continue forNombreCompleto;
//         }

//       console.log(array);
//     }
//   } else {
//     console.log(array2[array])
//   }
// }
