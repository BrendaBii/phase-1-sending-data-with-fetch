// Add your code here
function submitData(userName, userEmail){
    const formData = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(obj => {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.innerHTML = obj.id;
        body.appendChild(p);
        console.log(obj)
    })
    .catch(function (error) {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.innerHTML = error.message;
        body.appendChild(p);
    });
}
submitData("Brenda", "brenda@gmail.com")