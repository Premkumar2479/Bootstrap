$(document).ready(function(){
    $("p,h1").click(function(){
        alert("Paragraph in two .html clicked");
        $(this).css({"color":"red"});
    });

     $("input[type='button']").click(function(){
        var name =$("#nm").val();
        var email =$("#em").val();
        var password =$("#pwd").val();
        alert("Name: " + name + "\nEmail: " + email + "\nPassword:" + password);
     });
    });
