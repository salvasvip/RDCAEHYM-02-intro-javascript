// declarando una funcion
const saludar1 = function (nombre) {
    return ` Hola, ${nombre}`;
};
// conversion a funcion flecha
const saludar2 = (nombre) => {
    return ` Hola, ${nombre}`;
};
// funcion flecha con retorno implicito
const saludar3 = (nombre) => (` Hola, ${nombre}`);
const saludar4 = () => (` Hola, cada`);

console.log(saludar1('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Salvador'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ALGO',
    username: 'el_algo123'
});
console.log(getUser());

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Prueba
const getUsuarioActivo = (nombre) => ({
    uid: 'ASDF',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('Salvador');
console.log(usuarioActivo);