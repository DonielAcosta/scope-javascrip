var hello = 'hello';
var hello = 'hello +';
let world = 'Hello WORLD';
const helloWorld = 'Hola aca estoy';


const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();

const helloWorld = () =>{
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () =>{
    var localVar = globalVar = 'im global';
}
anotherFunction();
console.log(globalVar);