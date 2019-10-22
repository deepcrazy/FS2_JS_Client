try {
    var citiesLists = document.getElementById('citiesList').innerText;
    var fruitsLists = document.getElementById('fruitsLists').innerText;
    var eduInstitutesLists = document.getElementById('eduInsitutesLists').innerText;

    window.onloadend = userAlertMsg();

    function userAlertMsg() {
        setTimeout(() => {
            alertMsg = "Following is the 1st list: List of cities: \n" + citiesLists;
            alertMsg += "\n\nFollowing is the 2nd list: Type of Fruits: \n" + fruitsLists;
            alertMsg += "\n\nFollowing is the 3rd list: Type of education institues: \n" + eduInstitutesLists;

            alert(alertMsg);
        }, 1000);
    }

    console.log("Lists displayed successfully on HTML page..!!");
    console.log("Also, alert is providing information of words in the lists..!!");

} catch (error) {
    console.log("Some error has occured: " + error.message);
}