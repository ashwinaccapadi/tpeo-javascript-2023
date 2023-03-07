function countUpwardsByThree(){
    for(var i = 0; i < 31; i+=3){
        console.log(i)
    }
}

countUpwardsByThree()



function guessMyFavoriteNumber(guess){
    if (guess == 11) {
        console.log("You guessed my favorite number!")
    } else { 
        console.log("Try again!")
    }
}

guessMyFavoriteNumber(11)
guessMyFavoriteNumber(3)


function convertNumberToDay(number) {
    switch (number){
        case 0:
            console.log("Sunday")
            break
        case 1:
            console.log("Monday")
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thursday")
            break
        case 5:
            console.log("Friday")
            break
        case 6:
            console.log("Saturday")
            break                    
    }
}

for(var i = 0; i < 7; i++){
    convertNumberToDay(i);
}