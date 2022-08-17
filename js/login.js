
console.log("hare Krishna");
document.getElementById("submit").addEventListener("click", function(){
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "Krishna@gmail.com" && password === "radhe")
    {
        window.location.href = "baperbank.html"
    }
    else {
        alert("Your are not a valid user.");
    } 
})