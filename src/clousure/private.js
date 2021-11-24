const person = ()=>{
    var saveName ="Name";
    return{
        getName:()=>{
            return saveName;
        },
        setName:(Name)=>{
            saveName = Name;
        },
    };
}
newPerson= person();
console.log(newPerson.getName());
newPerson.setName('Doniel');
console.log(newPerson.getName());

