function reverse(string){
    var newString = new String()
    for(var i  = 0; i < string.length; i++){
        newString = newString.concat(string[string.length -1 -i])
    }
    return newString
}
console.log(reverse("hey"))
console.log(reverse("weather"))
console.log(reverse("brother"))



function numVowels(string){
    var count = 0
    for(var i = 0; i < string.length; i++){
        switch (string[i].toLowerCase()){
            case "a": case "e": case "i": case "o": case "u":
                count++
                break
            default:
                break          
        }
    }
    return count;
}

console.log(numVowels("hey"))
console.log(numVowels("magician"))
console.log(numVowels("Thursday"))


function numStringsShorterThanLength(strings, length){
    var count = 0
    for(var i = 0; i < strings.length; i++){
        if(strings[i].length < length){
            count++
        }
    }
    return count
}

console.log(numStringsShorterThanLength(["Monday", "Tuesday", "Wednesday"], 7))
console.log(numStringsShorterThanLength(["Weather", "Clouds", "Rain"], 6))
console.log(numStringsShorterThanLength(["magic", "cards", "tricks"], 7))
