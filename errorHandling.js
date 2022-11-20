const person = {
    name: 'Vedik',
    age : 10
};

// throw error example 1
function isPersonEligibileForVote(p){
    if(person.age < 18){
        throw new Error(`Mr.${person.name} is not eligible for vote at age : ${person.age}`)
    } else {
        console.log(`Mr.${person.name} is eligible for vote at age : ${person.age}`);
    };
};

// isPersonEligibileForVote(person);

// throw error example 2
try{
    isPersonEligibileForVote(person);
}
catch(e){
    console.log('!!! Something Went Wrong');
    console.log(e);
}
finally{
    console.log('!!! Finally return this');
}