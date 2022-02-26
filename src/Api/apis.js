// Example POST method implementation:
async function postData(route = '', data = {}, method) {
    return new Promise(async function (resolve, reject) {
        // Default options are marked with *
        const response = await fetch(`http://localhost:5000/${route}`, { //https://chat-app-watts.herokuapp.com
            method: method, // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        resolve(response.json());
    })
}

exports.postData = postData;