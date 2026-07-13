let tasks = ["Buy milk", "Walk dog"];
let tasksAsText = JSON.stringify(tasks);
console.log(tasksAsText);

let tasksBack = JSON.parse(tasksAsText);
console.log(tasksBack);
console.log(typeof tasksBack);
console.log(tasksBack[0]);