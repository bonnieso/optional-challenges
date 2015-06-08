function decodeStr(str){
    var stringArray = str.split("|");
    var indexArray = stringArray[1].split(" ");
    var red = indexArray.map(function(numString){
        return parseInt(numString);
    });
    var result = [];
    for(var i = 0; i < red.length; i++){
        result.push(stringArray[0].charAt(red[i]));
    }
    var final = result.join("");
    console.log(final);
    result final;
}

decodeStr("sfGuisOthO12D|2 6 9 12");
decodeStr("01R34E6D|2 5 7");