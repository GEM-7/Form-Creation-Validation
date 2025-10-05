async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
    }
const users = [
    { name: "Alice", id: 1 },
    { name: "Bob", id: 2 },
    { name: "Charlie", id: 3 }
];
const userList = document.createElement('ul');
users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    userList.appendChild(listItem);
});

dataContainer.appendChild(userList);
}

document.addEventListener('DOMContentLoaded',function(){
    fetchUserData();
});