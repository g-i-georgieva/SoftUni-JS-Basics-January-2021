function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let finalYear = Number(input[1]);
    let firstYear = 1800

    let age = 17

    for (let i = firstYear; i <= finalYear; i++) {

        if (i % 2 == 0) {
            inheritedMoney -= 12000
            age++
        } else {
            age++
            inheritedMoney -= 12000 + 50 * age
        }
    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(inheritedMoney)).toFixed(2)} dollars to survive.`);
    }
}

backToThePast(["50000", "1802"])
backToThePast(["100000.15", "1808"])