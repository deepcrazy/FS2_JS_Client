try {
    var pTag = document.getElementById('aboutMyStudies');
    aboutMyStudies = "1. B. Tech. in Electronics and Communication Engg. from Kurukshetra University Kurukshetra (India) (2015) <br>\
    2. Certification Course in Blockchain Development from George Brown College, Toronto (Currently pursuing). <br> Apart from this\
    I have completed my intership in Linux System Administration where I have been given experience with the processes, forking, semaphore \
    and other terminologies related to Linux System Programming.";
    pTag.innerHTML = aboutMyStudies;

    var certificationPtag = document.getElementById('certificationsMsg');
    certificationsMsg = "1. Microsoft certified in HTML5 with Javascript and CSS3. <br>\
    2. Microsoft certified in Querying Microsoft SQL Server 2012/2014.";

    certificationPtag.innerHTML = certificationsMsg;
    
} catch (error) {
    document.getElementById('aboutMyStudies').innerHTML = "Error message: " + error;
    console.log("Some error has occured: " + error);
}