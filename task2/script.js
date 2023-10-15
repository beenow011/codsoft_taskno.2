function changeimg(x,image,y){
    if(y==1){
    if(x==1){
        image.src='ph/pngwing.com (8).png'
        imageElement.style.display = 'inline';
        
    }else{
        image.src='ph/github-mark-white.png'
    }
        }
        if(y==2){
            if(x==1){
                image.src='ph/pngwing.com (7).png'
                imageElement.style.display = 'inline';
            }else{
                image.src='ph/pngwing.com (5).png'
            }
        }
        if(y==3){
            if(x==1){
                image.src='ph/logo-instagram-png-13551.png'
                imageElement.style.display = 'inline';
            }else{
                image.src='ph/pngwing.com (6).png'
            }
        }

}

function toggleinfo(){
    var y=document.getElementById("inf1")
    var x=document.getElementById("inf2")

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none"
        document.getElementById("btn").value="Info"
      } else {
        x.style.display = "none";
        y.style.display = "block";
        document.getElementById("btn").value="Schooling"


      }
}