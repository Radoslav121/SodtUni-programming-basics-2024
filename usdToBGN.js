function usdToBGN(input) {
    let usd = Number(input[0])
    let exchageRate = 1.79549
    let bgn = usd * exchageRate
    console.log(bgn);
}
usdToBGN(["22"])
