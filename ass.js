const user = { name: "Nancy", role: "Developer" };
const updatedUser = { ...user, role: "Senior Developer" };
console.log(updatedUser);
console.log(user.address?.city);