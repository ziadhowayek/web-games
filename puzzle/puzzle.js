const board = document.getElementById("myBoard");
let squares =[];
for (var i = 0; i < 15; i++){
squares.push(i);
}
const shuffledSquares = squares.sort((a, b) => 0.5 - Math.random());
for(var i = 0 ; i < 16; i++){
  let blocks = document.createElement('div');
  if (i == 15){
   blocks.classList.add('puzzle-piece');
   blocks.setAttribute("id", (i + 1))
  }
else{
  blocks.classList.add('block');
  var number = shuffledSquares[i] + 1;
  blocks.append(number);
  blocks.setAttribute("number", number);
  blocks.setAttribute("id", (i + 1))
}
  board.appendChild(blocks);

}
function Check1(){

  var matches = 0;
for(var i = 1; i < 16 ; i++){
  var j = document.getElementById(i);
  var textj = j.getAttribute("number");
  if (i == textj){
  matches += 1;}}
  if (matches == 15){
  window.alert("Congrats You Won!!")
document.removeEventListener('click', changing)
} 
}
document.addEventListener('click', changing)


function changing(l){
  const piece = document.querySelector(".puzzle-piece");
  var z = piece.id;
  var theClicked = l.target;
  var x = theClicked.id;
if ((x>0) && (x < 17)){
   if ((z % 4 ) == (x % 4)){
   if ( (z - x == 4) || (x- z == 4)){
   var text = theClicked.getAttribute("number");
   theClicked.classList.remove('block');
   theClicked.classList.add('puzzle-piece');
   theClicked.innerHTML = "";
   piece.classList.remove("puzzle-piece");
   piece.classList.add("block");
   piece.innerHTML="";
   piece.append(text);
   piece.setAttribute("number", text);
}
  if ((z- x == 8) ){
  var middleN = (z - 4);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);
  }

  if (z - x == 12) {

  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var middleN = (z - 8);
  var middleId = middleN.toString();
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  var middleK = (z - 4);
  var middleIdK = middleK.toString();
  var k = document.getElementById(middleIdK);
  var textk = k.getAttribute("number");
  k.innerHTML = "";
  k.append(textn);
  k.setAttribute("number", textn);
  piece.innerHTML="";
  piece.append(textk);
  piece.setAttribute("number", textk);
}
  if ((x - z == 8) ){
  var middleN = (x - 4);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);
  }
  if (x - z == 12) {

  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var middleN = (x - 4);
  var middleId = middleN.toString();
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  var middleK = (x - 8);
  var middleIdK = middleK.toString();
  var k = document.getElementById(middleIdK);
  var textk = k.getAttribute("number");
  k.innerHTML = "";
  k.append(textn);
  k.setAttribute("number", textn);
  piece.innerHTML="";
  piece.append(textk);
  piece.setAttribute("number", textk);

}}

if ((z % 4 == 0) && (x%4 != 0)){
var theInteger = parseInt((z-1) / 4 );
var theSecondInteger = parseInt(x / 4 );
   if (theInteger == theSecondInteger){
   if ((z-x == 1) || (x-z == 1)){
    var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block");
  piece.innerHTMl="";
  piece.append(text);
  piece.setAttribute("number", text);
}
  if (z - x == 2) {
  var middleN = (z - 1);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);
  }
  if (z - x == 3) {

  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var middleN = (z - 2);
  var middleId = middleN.toString();
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  var middleK = (z - 1);
  var middleIdK = middleK.toString();
  var k = document.getElementById(middleIdK);
  var textk = k.getAttribute("number");
  k.innerHTML = "";
  k.append(textn);
  k.setAttribute("number", textn);
  piece.innerHTML="";
  piece.append(textk);
  piece.setAttribute("number", textk);

}

}}
else if ((x % 4 == 0) && (z % 4 != 0)){
var theInteger = parseInt(z / 4 );
var theSecondInteger = parseInt((x-1) / 4 );  
   if (theInteger == theSecondInteger){
   if ((z-x == 1) || (x-z == 1)){   
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block");
  piece.innerHTMl="";
  piece.append(text);
  piece.setAttribute("number", text);
}
  if (x - z == 2) {
  var middleN = (x - 1);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);
  }
}
  if (x - z == 3) {

  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var middleN = (x - 1);
  var middleId = middleN.toString();
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  var middleK = (x - 2);
  var middleIdK = middleK.toString();
  var k = document.getElementById(middleIdK);
  var textk = k.getAttribute("number");
  k.innerHTML = "";
  k.append(textn);
  k.setAttribute("number", textn);
  piece.innerHTML="";
  piece.append(textk);
  piece.setAttribute("number", textk);

}
}
else if ((x % 4 != 0) && (z % 4 != 0)){
var theInteger = parseInt(z / 4 );
var theSecondInteger = parseInt(x / 4 );
   if (theInteger == theSecondInteger){
   if ((z-x == 1) || (x-z == 1)){
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block");
  piece.innerHTMl="";
  piece.append(text);
  piece.setAttribute("number", text);
}
  if (z - x == 2) {
  var middleN = (z - 1);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);
  }
  if (x - z == 2) {
  var middleN = (x - 1);
  var middleId = middleN.toString();
  var text = theClicked.getAttribute("number");
  theClicked.classList.remove('block');
  theClicked.classList.add('puzzle-piece');
  theClicked.innerHTML = "";
  piece.classList.remove("puzzle-piece");
  piece.classList.add("block"); 
  var o = document.getElementById(middleId);
  var textn = o.getAttribute("number");
  o.innerHTML = "";
  o.append(text);
  o.setAttribute("number", text);
  piece.append(textn);
  piece.setAttribute("number", textn);

}
}
}
  Check1();
}}

