try {
    var pTag = document.getElementById('aboutMeMsg');
    aboutMeText = "My objective:  Seeking a career in a company that provides me an opportunity to demonstrate my acquired skills \
    as well as to gain knowledge and experience in a working environment.\
    <br>My background: I am from India and have completed my Bachelor's of Technology in Electronics and Communication from Kurukshetra \
    University Kurukshetra. During my bachelor's, I have started working upon Linux System Administration due to exposure being given to me\
    and along my co-op, I have covered a project related to 'Data Carving' where user can retrieve the permanently deleted jpg/jpeg and \
    pdf files.<br> During the campus placement, I was interviewed in Infosys and got selected by them and started working in Infosys in \
    Nov 2015 and gained a work experience of about  3.7 years as a 'Software Developer'.\
    <br><br> Please click next button to go next page or previous button to go the home page."
    pTag.innerHTML = aboutMeText;

} catch (error) {
    document.getElementById('aboutMeMsg').innerHTML = "Error message: " + error;
    console.log("Some error has occurred: " + error);
}