

const {sumar} = require ('./calculadora');

describe('Pruebas en el componente calculadora', () =>{
    test ('Pruebas en la funcion sumar' , () => {
        expect (sumar (5,5)).toBe (10);

    });
});



const {restar} = require ('./calculadora');

describe('Pruebas en el componente calculadora', () =>{
    test ('Pruebas en la funcion restar' , () => {
        expect (restar (3,3)).toBe (1);

    });
}); 


const {multuplicar} = require ('./calculadora');

describe('Pruebas en el componente calculadora', () =>{
    test ('Pruebas en la funcion multuplicar' , () => {
        expect (multuplicar (5,3)).toBe (15);

    });
}); 


const {dividir} = require ('./calculadora');

describe('Pruebas en el componente calculadora', () =>{
    test ('Pruebas en la funcion dividir' , () => {
        expect (dividir (10,5)).toBe (2);

    });
}); 