try {
    alert("Welcome to the Blockchain World..!!")
} catch (error) {
    document.getElementById("welcomeMsg").innerHTML = error.message;
} finally {
    console.log("OK");
}