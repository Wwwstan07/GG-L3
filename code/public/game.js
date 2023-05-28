let risuvanX = [],risuvanY = [],timeLimit = 100,cooldown = 2000;
function update() {
if(risuvanX != NaN){
    cooldown--;

}
XMLHttpRequest.open("PUT","/risuvai?X=0&Y=0&R=256&G=0&B=0");

}
function draw() {

    
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

