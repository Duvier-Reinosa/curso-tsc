"use strict";
// crear una fotografía
//Usamos TS, definimos tipos para parametros
function createPicture(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture('My birthday', '2020-03-10', '100x100');
// createPicture('Colombia-trip', '2020-03-10'); lanza error por falta de parametros
//parametros opcionales
function createPicture2(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture2('My birthday', '2020-03-10', '100x100');
createPicture2('Colombia-trip', '2020-03-10');
//flat Array Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi session', '2020-03-10', '500x500');
console.log('picture', picture);
//tipo de retorno 
function handleError(code, message) {
    //procesamiento del codigo, mensaje
    if (message == 'error') {
        throw new Error("".concat(message, ". Code error ").concat(code));
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    var result = handleError(200, 'ok');
    console.log('result', result);
    result = handleError(404, 'error');
    console.log('result', result);
}
catch (error) {
}
