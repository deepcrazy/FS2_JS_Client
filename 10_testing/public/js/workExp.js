try {
    var pTag = document.getElementById('workExp');
    spaceCount = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
    workExp = "I have an experience of 3.7 years as a 'Software Developer' and worked upon the following projects and some peronal projects \
    as well which you can find out at my github account.<br><br>\
    1. Project 1: Blockchain Trends " + spaceCount + spaceCount + " &nbsp;&nbsp;&nbsp;(Sept 2019 \- Sept 2019)<br>\
    o	Technologies used: HTML, CSS, JavaScript, NodeJS, web3 API. <br>\
    o	Description: It is a JavaScript and NodeJS based web application which allows user to create wallet on Blockchain.com and \
    also provides the latest block getting mined on Ethereum Network. Also, user can vote for his own cryptocurrency and the results \
    will be displayed as per voting. Additionally, the user can check its Ethereum balance by providing user address as an input value.<br>\
    <br>2. Project 2: CAPAS-REGAS Automation " + spaceCount + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Sept 2017 \- Aug 2019)<br>\
    o	Client: T Mobile (German Client)<br>\
    o	Technology, Tools and OS used: Java, Hibernate/Spring, SIP , Eclipse, Cucumber, Putty, LINUX.<br>\
    o	My Role: Developing the software using Core java and Hibernate/Spring. This will be used to send\
    SIP request and retrieve the data from DB to validate with the SIP response. It will check whether\
    devices are having capabilities to communicate with each other and respond according.<br>\
    <br>3. Project 3: Airtel Money Project " + spaceCount + spaceCount + "(June 2016 \- Aug 2017)<br>\
    o	Client: Airtel Money/Airtel Payments Bank<br>\
    o	Technology and Tools used: Java, Hibernate, Restful Web Services, Eclipse, JMeter, WINSCP, Putty.<br>\
    o	My Role: Worked on creating scripts using Java and Hibernate, Testing of application, Regression suit, SQL queries etc. \
    Also, worked on Finacle Product and GST for Airtel Payments Bank.<br>\
    <br>4. Project 4: Network Element Manager " + spaceCount + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Mar 2016 \- May \
        2016)<br>\
    o	Client: Infosys Ltd. (Research and Development Team)<br>\
    o	My Role: It is a Java based application for managing the elements of a network. It comprises of taking data from a .xml \
    sheet (acting as a router) and processing that data. According to the role, the user/admin can login to their respective dashboards. \
    The operator/viewer can monitor the data of the router like activate and deactivate the alarms/faults.\
    ";
    pTag.innerHTML = workExp;

} catch (error) {
    document.getElementById('workExp').innerHTML = "Error message: " + error;
    console.log("Some error has occurred: " + error);
}