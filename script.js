document.addEventListener("DOMContentLoaded", function() {
    const text = "Paulo Victor Damasceno e Silva";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
