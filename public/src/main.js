console.log("This is test");
document.getElementById("the-button").addEventListener("click", (e) => {
    fetch("/api/item", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new Date().toJSON())
    }).then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value)
    }).catch((err) => {
        console.error(err);
    });
});