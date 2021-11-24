const fruits = () =>{
    if(true){
        var fruits1 = 'orange';
        let fruits2 = 'apple';
        const fruits3 = 'kiwi';

        console.log(fruit1);
        console.log(fruit2);
    }
    console.log(fruit3);
}

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () =>{
    for (let i = 0; i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}