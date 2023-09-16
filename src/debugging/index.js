var a = 'Hello ';

function hello() {
    let b = 'hello WORLD';
    const c = 'HELLO WORLD !!!!';
    if(true){
        let d = 'aqui estamos mundo';
        debugger
    }
}

hello();


const moneyBox = () =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins) =>{
        debugger
        saveCoins += coins;
        console.log(`moneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let mymoneyBox = moneyBox();

mymoneyBox(4);
mymoneyBox(5);
mymoneyBox(6);