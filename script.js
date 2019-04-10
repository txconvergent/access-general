
function chooseJPG(letter){

    
}
    
var dict = {A: "imageRef",
    B: "imageRef",
    C: "imageRef",
    D: "imageRef"  };


var video = document.querySelector("#test");
console.log(video)

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log(err0r);
    })
};
