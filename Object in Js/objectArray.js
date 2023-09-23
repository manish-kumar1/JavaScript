
// objects inside array
// very useful in real world application

const users = [
    {userId: 1, firstName: "Manish", gender: "male"},
    {userId: 2, firstName: "Pawan", gender: "male"},
    {userId: 3, firstName: "Sanju", gender: "female"},
]

for(let user of users){
    console.log(user.userId,   user.firstName, user.gender);
}

// const [{firstName: user1fristName, userId}, ,{gender: user3gender}];
// console.log(user1fristName);
// console.log(userId);
// console.log(user3gender);