try {
    var wordsArray = ['Universities', 'Colleges', 'Schools'];
    var numArray = [7,5,9];
    var listContainer = document.getElementById('listContainer');
    var lists = document.getElementById('list');

    wordsArray.forEach((element, index) => {
        var listTag = document.createElement('li');
        var listTagText = document.createTextNode(numArray[index] + " " + element);
        listTag.appendChild(listTagText);
        lists.appendChild(listTag);
    });
    console.log("Successfully printed the lists of words along with the list of numbers..!!")
} catch (error) {
    console.log("Some error has occured: " + error);
}