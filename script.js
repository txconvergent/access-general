<script type="text/javascript">
function chooseJPG(letter){

    
}
    
var dict = {A: "imageRef",
    B: "imageRef",
    C: "imageRef",
    D: "imageRef"  };


var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    })
};
</script>