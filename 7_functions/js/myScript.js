try {
    function indexPageFunction(input) {
        welcomeMsg = "Welcome to '" + input + "' Page..!!";
        welcomeMsg += "<br><br>" + "This task is 7_functions of FS2_JS_Client side module..!!";
        document.getElementById('indexPageMsg').innerHTML = welcomeMsg;
    }

    function page1Function(input) {
        welcomeMsg = "Welcome to '" + input + "' Page..!!";
        welcomeMsg += "<br><br>" + "So many people, after they have begun to pray, to be converted, to fast, and to do penance here, quickly forget when they return to their homes and to their bad habits.";
        document.getElementById('page1PageMsg').innerHTML = welcomeMsg;
    }

    function page2Function(input) {
        welcomeMsg = "Welcome to '" + input + "' Page..!!";
        welcomeMsg += "<br><br>" + "Be on your guard. This period is dangerous for you. The devil is trying to lead you astray from the way. Those who give themselves to God will be the object of attacks.";
        document.getElementById('page2PageMsg').innerHTML = welcomeMsg;
    }
} catch (error) {
    console.log("Some error has occured: " + error);
}