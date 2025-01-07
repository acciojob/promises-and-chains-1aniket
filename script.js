document.getElementById("btn").addEventListener("click", () => {
   
	const age = Number(document.getElementById("age").value);
    const name = document.getElementById("name").value;

	if(!age || !name)
	{
		alert("Please enter valid details");
		return;
	}
    verify(age, name)
        .then((data) => {
            alert(data);
        })
        .catch((err) => {
            alert(err);
        });
});

function verify(age, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve("Welcome, "+name+". You can vote.");
            } else {
                reject("Oh sorry "+ name+". You aren't old enough.");
            }
        }, 4000);
    });
}
