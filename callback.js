let users = ['Rajesh', 'Kumar', 'Rocky']; // Database

function addUsers(userName, callback){  // Add users into database
setTimeout(function(){
    users.push(userName);
    callback(); // Callback function will call after the adding the data into database
}, 500);
}

function getUsers(){ // Get users from database
    setTimeout(function(){ 
        console.log(users)
    }, 100);
}

addUsers('Jack', getUsers); // Results: [ 'Rajesh', 'Kumar', 'Rocky', 'Jack' ]

// getUsers();