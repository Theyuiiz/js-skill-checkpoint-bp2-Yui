// Question #8: Fetching User List from Server

const getUserInfo = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
}

const handleResponse = (response) => {
    return response.json();
}

const onSuccess = (data) => {
    const newUsers = data.map(user => user.name);
    console.log(newUsers);
}

getUserInfo().then(handleResponse).then(onSuccess);


