function personalTittles(input) {

    let age = Number(input[0]);
    let genger = input[1];

    if(genger === "m" && age >= 16){
        console.log("Mr.");
    } else if(genger === "m" && age < 16) {
        console.log("Master");
    } else if(genger === "f" && age >= 16) {
        console.log("Ms.");
    } else if(genger === "f" && age < 16) {
        console.log("Miss");
    }
        
}
personalTittles(["12",
    "f"])
    