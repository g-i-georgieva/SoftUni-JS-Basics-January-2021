function isExcellent (input){
    let grade=Number(input[0]);
    if (grade>=5.50){
        console.log("Excellent");
    }
}

isExcellent (["6"])
isExcellent (["5"])
isExcellent (["5.50"])
isExcellent (["5.49"])