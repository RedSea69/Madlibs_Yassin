//event listener
document.getElementById("submit-btn").addEventListener("click", buildMadlib);

//event function
function buildMadlib() {

    //Input
    let cityname = document.getElementById("cityname").value;
    let fictionalcharacter = document.getElementById("character").value;
    let friendname = document.getElementById("creature").value;
    let animalscreatures = document.getElementById("friend").value;
    let emotion1 = document.getElementById("emotion1").value;
    let emotion2 = document.getElementById("emotion2").value;
    let emotion3 = document.getElementById("emotion3").value;
    let emotion4 = document.getElementById("emotion4").value;
    let emotion5 = document.getElementById("emotion5").value;
    let movement1 = document.getElementById("movement1").value;
    let movement2 = document.getElementById("movement2").value;
    let action = document.getElementById("action").value;

    //process
    let result = '"In the city of ' + cityname + ' , ' + fictionalcharacter + ' was at the zoo of ' + cityname + ' for ' + animalscreatures + ' . There were ' + animalscreatures + ' and ' + fictionalcharacter + ' was very ' + emotion1 + ' and wanted to check out the ' + animalscreatures + ' badly. However, as they are ' + movement1 + ' around, they would notice some of the ' + animalscreatures + ' would get a bit ' + emotion2 + ' and escape their cages. '+ fictionalcharacter + ' would be ' + emotion3 + ' and ' + movement2 + ' away from the ' + animalscreatures + ' .As they do so they encounter their ' + friendname + ' they would be ' + emotion3 + ' as they ' + action + ' at ' + fictionalcharacter + ' before being ' + action + ' by an ' + animalscreatures + ' . ' + fictionalcharacter + ' would be in ' + emotion4 + ' and they continued ' + movement2 + ' . They would leave the zoo and feel ' + emotion5 + ' from the experience. '

    //Output
    document.getElementById("result").innerHTML = result;
}

