try {
    var wordsArray = ['Toronto', 'Brampton', 'Barrie'];
    var numArray = [7, 4, 8];

    var num = 4;
    var letter = 'B';

    for (let index = 0; index < wordsArray.length; index++) {
        const element = wordsArray[index];
        var wordsListContainer = document.getElementById("wordList");
        document.getElementById('wordListDescritpion').innerHTML = "Following lists displays the words starting with letter " + "'" + letter + "'";
        if (element.startsWith(letter)) {
            var listTag = document.createElement('li');
            var listTagtext = document.createTextNode(element);
            listTag.appendChild(listTagtext);
            wordsListContainer.appendChild(listTag);
        } else {
            document.getElementById('wordListDescritpion').innerHTML = "List doesn't contains words starting with the letter " + "'" + letter + "'";
        }
    }

    for (let index = 0; index < numArray.length; index++) {
        const element = numArray[index];
        var numListContainer = document.getElementById("numList");
        if (element > num) {
            var greaterLessStatus = "greater";
            numListGeneration(element, greaterLessStatus);
        } else if (element < num) {
            var greaterLessStatus = "less";
            numListGeneration(element, greaterLessStatus);
        } else {
            document.getElementById('numListDescritpion').innerHTML = "Lists contains only numbers equal to " + num;
        }
    }

    function numListGeneration(element, greaterLessStatus) {
        document.getElementById('numListDescritpion').innerHTML = "Following lists displays the numbers " + greaterLessStatus + " than " + num;
        var listTag = document.createElement('li');
        var listTagtext = document.createTextNode(element);
        listTag.appendChild(listTagtext);
        numListContainer.appendChild(listTag);
    }

} catch (error) {
    console.log("Some error has occured: " + error);
}