function sumOfSquareAreas(a, b){
    return (a * a) + (b * b);
}

console.log(sumOfSquareAreas(3, 9))
console.log(sumOfSquareAreas(4, 10))
console.log(sumOfSquareAreas(1, 12))

function gradeCalculator(homeworkAvg, quizAvg, examAvg){
    return .1 * homeworkAvg + .15 * quizAvg + .75 * examAvg
}

console.log(gradeCalculator(90, 100, 85))
console.log(gradeCalculator(75, 90, 100))
console.log(gradeCalculator(50, 75, 100))