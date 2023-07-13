
// Header
const txtElmnt = ['Electronics','Fashion & Beauty','Sports'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik(){
    if(count == txtElmnt.length){
        count = 0;
    }
    currentTxt = txtElmnt[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;
    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ketik, 150);
    
}
)();


// Scroll to Top
let scroll = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scroll.style.display = "block";
    } else {
      scroll.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

// Card Nav
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
    document.getElementById('card-container').scrollLeft += 30;
  };
buttonLeft.onclick = function () {
    document.getElementById('card-container').scrollLeft -= 30;
  };

// Collapse Footer
var coll = document.getElementsByClassName("collapse");


var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";

    } else {
      content.style.display = "block";
    }
    document.body.scrollTop = document.body.scrollHeight; 
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  });
}


function collapseToggle() {
    if (document.getElementById("collapse-toggle").innerHTML === "Tampilkan Lebih Banyak") {
        document.getElementById("collapse-toggle").innerHTML = 'Lihat Lebih Sedikit';
    } else {
        document.getElementById("collapse-toggle").innerHTML = 'Tampilkan Lebih Banyak';

    }
}