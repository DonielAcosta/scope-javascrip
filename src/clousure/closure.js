const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);


const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`moneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let mymoneyBox = moneyBox();

mymoneyBox(4);
mymoneyBox(5);
mymoneyBox(6);
