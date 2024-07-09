const buildCount = (i) =>{
    let count = i;
    const displayCount = ()=>{
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();

const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);


    function parent(){// funcion interna 
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();

