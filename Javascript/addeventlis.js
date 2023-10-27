function fn()
{
    var s= document.getElementById("bt1");
    var t= document.getElementById("p");

    //
    

    t.addEventListener("mouseenter",function(){
        t.style.color="white";
        t.style.backgroundColor="black";
        t.style.padding="30px";

    })

    t.addEventListener("mouseleave",function(){
        t.style.color="white";
        t.style.backgroundColor="red";
        t.style.padding="30px";

    })
    s.innerText="Styled got changes";

    /*function fnRemoveEvent() {
        var p1Ref = document.getElementById("p");
        p1Ref.removeEventListener("mouseenter", pStyles);
        p1Ref.removeEventListener("mouseleave", pmouseleaveStyle);
      }*/
}

/*
function pStyles() {
    var pRef = document.getElementById("p");
    pRef.style.backgroundColor = "black";
    pRef.style.padding = "30px";
    pRef.style.color = "white";
  }
  
  function pmouseleaveStyle() {
    var pRef = document.getElementById("p");
    pRef.style.backgroundColor = "red";
    pRef.style.padding = "30px";
    pRef.style.color = "black";
  }
  
  function fnAddEvent() {
    var btnRef = document.getElementById("bt1");
    var pRef = document.getElementById("p");
  
    pRef.addEventListener("mouseenter", pStyles);
  
    pRef.addEventListener("mouseleave", pmouseleaveStyle);
  
    btnRef.addEventListener("click", function () {
      btnRef.style.color = "red";
      btnRef.innerText = "Content Got Changed";
    });
  
    //
  }
  
  function fnRemoveEvent() {
    var p1Ref = document.getElementById("p");
    p1Ref.removeEventListener("mouseenter", pStyles);
    p1Ref.removeEventListener("mouseleave", pmouseleaveStyle);
  }
  */