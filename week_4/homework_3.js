
//function for printing the powers of three and also prints which number is the favorite number
function powersofThree(favoriteNumber){
    num = 3;
    for (var i = 1; i <= 9; i++){
        console.log(num)
        if(num == favoriteNumber) {
            console.log("This is my favorite power of three!")
        }
        num *= 3
    }
}

var timeoutId = setTimeout(powersofThree, 3000, 9)


//function that prints "Hello World" every ten seconds for two minutes
function everyTenSeconds() {
    var intervalId = setInterval(everyTenSecondsHelper, 10000)
    setTimeout(everyTenSecondsCloser, 120000, intervalId)

}

//helper function for everyTenSeconds() that does the actual printing 
function everyTenSecondsHelper() {
    console.log("Hello World!")
}

//helper function for everyTenSeconds() that stops the printing 
function everyTenSecondsCloser(intervalId) {
    clearInterval(intervalId)
}



everyTenSeconds();