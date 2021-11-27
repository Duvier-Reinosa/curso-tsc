// crear una fotografía

// function createPicture(title, date, size) {
    
// }

type SquareSize = '100x100' | '500x500' | '1000x10000';
//Usamos TS, definimos tipos para parametros

function createPicture(title: string, date: string, size: SquareSize) {
    console.log('create Picture using', title, date, size); 
}
createPicture('My birthday', '2020-03-10', '100x100');

// createPicture('Colombia-trip', '2020-03-10'); lanza error por falta de parametros

//parametros opcionales

function createPicture2(title?: string, date?: string, size?: SquareSize) {//se convierte en opcional con la interrogación
    console.log('create Picture using', title, date, size); 
}

createPicture2('My birthday', '2020-03-10', '100x100');

createPicture2('Colombia-trip', '2020-03-10');

//flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object =>{
    return {
        title,
        date,
        size
    }
};
const picture = createPic('Platzi session', '2020-03-10', '500x500');
console.log('picture', picture);


//tipo de retorno 

function handleError(code:number, message: string): never | string {//never string  trorna un string o un dato no valido
    //procesamiento del codigo, mensaje
    if(message == 'error'){
        throw new Error(`${message}. Code error ${code}`)
    }else{
        return 'An error has ocurred';
    }
}

try {
    let result = handleError(200, 'ok');
    console.log('result', result);
    result = handleError(404, 'error');
    console.log('result', result);
} catch (error) {
    
}


