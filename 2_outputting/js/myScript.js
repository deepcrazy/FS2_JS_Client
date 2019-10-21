try {

    var title = document.getElementById('title');
    title.innerHTML = "Task: 2_outputting";

    var container = document.getElementById('welcomeMsgContainer');
    var welcomeMsg = "Welcome to Task: \"2_outputting\" of FS2_JS_Client";

    var pTag = document.getElementById('welcomeMsg');
    pTag.innerHTML = welcomeMsg;

} catch (error) {
    document.getElementById("welcomeMsg").innerHTML = error.message;
} finally {
    console.log("OK");
}