//union de tipos

let idUser: number | string;

idUser = 10;
idUser ='10';

function getUsernameById(id: number | string) {
    //lLOGIC THAN FIN USER
    return 'DUVIER'
}

getUsernameById(10);
getUsernameById('10');

//tipos laterales
//100x100, 500x500, 1000x1000
// type SquareSize = '100x100' | '500x500' | '1000x1000';
// //let smallPicture: SquareSize = '200x200'; error
// let smallPicture: SquareSize = '100x100';