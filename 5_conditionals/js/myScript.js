try {
    var wordsArray = ['Toronto', 'Brampton', 'Barrie'];
    var numArray = [7,4,8];

    var num = 8;
    var letter = 'B';

    wordsArray.forEach((element, index) => {
        var wordsListContainer = document.getElementById("wordList");
        document.getElementById('wordListDescritpion').innerHTML = "Following lists displays the words starting with letter " + "'" + letter + "'";
        if (element.startsWith(letter)){
            var listTag = document.createElement('li');
            var listTagtext = document.createTextNode(element);
            listTag.appendChild(listTagtext);
            wordsListContainer.appendChild(listTag);
        }
    });

    numArray.forEach((element, index) => {
        var numListContainer = document.getElementById("numList");
        if (element > num){
            document.getElementById('numListDescritpion').innerHTML = "Following lists displays the numbers greater than " + num;
            var listTag = document.createElement('li');
            var listTagtext = document.createTextNode(element);
            listTag.appendChild(listTagtext);
            numListContainer.appendChild(listTag);
        } else if (element < num) {
            document.getElementById('numListDescritpion').innerHTML = "Following lists displays the numbers less than " + num;
            var listTag = document.createElement('li');
            var listTagtext = document.createTextNode(element);
            listTag.appendChild(listTagtext);
            numListContainer.appendChild(listTag);
        }
    });

} catch (error) {
    console.log("Some error has occured: " + error);
}