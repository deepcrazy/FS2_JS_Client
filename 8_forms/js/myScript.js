try {
    function previousPage(input) {
        console.log(input == "page1");
        if (input == "page1")
            pageToRender = "index.html";
        else if (input == "page2")
            pageToRender = "page1.html";
        else if (input == "page3")
            pageToRender = "page2.html";

        window.location.href = pageToRender;
    }

    function nextPage(input) {
        if (input == "page1")
            pageToRender = "page2.html";
        else if (input == "page2")
            pageToRender = "page3.html";
        else
            pageToRender = "index.html";

        window.location.href = pageToRender;
    }
} catch (error) {
    console.log("Some error has occured: " + error);
}

try {
    function formData() {
        event.preventDefault();
        var firstName = document.getElementById('fName').value;
        var lastName = document.getElementById('lName').value;

        document.getElementById('formMsg').innerHTML = "User has enter the below details: <br>First Name: " + firstName + "<br>Last Name: " + lastName;
    }
} catch (error) {
    console.log("Some error has occured: " + error);
    document.getElementById('formMsg').innerHTML = "Some error has occured: " + error;
}