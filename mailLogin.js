function spinnerShow() {
    document.getElementById("spinner").style.display = "block";

    setTimeout(
        function(){
            document.getElementById("spinner").style.display = "none";
            document.getElementById("loginForm").reset();
        }, 2000);
    return false;
}