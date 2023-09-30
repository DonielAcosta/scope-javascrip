// const moneyBox = (coins) =>{
//     var saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneyBox: ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(10);


// const moneyBox = () =>{
//     var saveCoins = 0;
//     const countCoins = (coins) =>{
//         saveCoins += coins;
//         console.log(`moneyBox: ${saveCoins}`);
//     }
//     return countCoins;
// }

// let mymoneyBox = moneyBox();

// mymoneyBox(4);
// mymoneyBox(5);
// mymoneyBox(6);

// function greeting(){
//     let username = 'Doniel';

//     function displayUserName(){
//         return `Hello ${username}`;
//     }

//     return displayUserName;
// }
// const g = greeting();
// console.log(g);
// console.log(g());

// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);

    }
    return countCoins;
}

const mymoneyBox = moneyBox();
mymoneyBox(50);
mymoneyBox(50);
mymoneyBox(100);


const moneyBoxAna = moneyBox();

moneyBoxAna(500);
moneyBoxAna(3);
moneyBoxAna(2);

