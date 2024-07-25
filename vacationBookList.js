function vacationBookList(input) {

    let pageCount = Number(input[0])
    let pagesPerHours = Number(input[1])
    let dayCount = Number(input[2])
    let hours = pageCount / pagesPerHours
    let dayHours = hours / dayCount
    console.log(dayHours);

}
vacationBookList(["212 ", "20 ", "2 "])