let total=0

$(document).ready(function(){
    $("#bt1").click(function(){
        total+=10
        document.getElementById("contenido").innerHTML = total;
        
    });
    $("#bt2").click(function(){
        total+=20
        document.getElementById("contenido").innerHTML = total;
    });
    $("#bt3").click(function(){
        total+=30
        document.getElementById("contenido").innerHTML = total;
    });
    $("#bt4").click(function(){
        total+=40
        document.getElementById("contenido").innerHTML = total;
    });
    $("#bt5").click(function(){
        total+=50
        document.getElementById("contenido").innerHTML = total;
    });
    $("#c2").hide()
    $("#c4").hide()
    $("#c6").hide()
    $("#c8").hide()
    $("#c10").hide()
    $("#c1").mouseleave(function(){
        $("#c2").hide()
    });
    $("#c1").mouseenter(function(){
        $("#c2").show()
    });

    $("#c3").mouseleave(function(){
        $("#c4").hide()
    });
    $("#c3").mouseenter(function(){
        $("#c4").show()
    });

    $("#c5").mouseleave(function(){
        $("#c6").hide()
    });
    $("#c5").mouseenter(function(){
        $("#c6").show()
    });

    $("#c7").mouseleave(function(){
        $("#c8").hide()
    });
    $("#c7").mouseenter(function(){
        $("#c8").show()
    });

    $("#c9").mouseleave(function(){
        $("#c10").hide()
    });
    $("#c9").mouseenter(function(){
        $("#c10").show()
    });

   

});