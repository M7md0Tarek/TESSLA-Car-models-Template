var ms = document.getElementById('model-s').onclick =function() {
    document.getElementById('modeltext').innerHTML = 'Model S'
    document.getElementsByTagName('header')[0].style.backgroundImage="url('./img/image-1.png')";

};
var m3 = document.getElementById('model-3').onclick =function() {
    document.getElementsByClassName("header")[0].style.backgroundImage ="url('./img/image-2.png')";
    document.getElementById('modeltext').innerHTML = 'Model 3'
};


var mx = document.getElementById('model-x').onclick =function() {
    document.getElementsByClassName("header")[0].style.backgroundImage ="url('./img/image-3.png')";
    document.getElementById('modeltext').innerHTML = 'Model X'
};

var my = document.getElementById('model-y').onclick =function() {
    document.getElementsByClassName("header")[0].style.backgroundImage ="url('./img/image-4.png')";
    document.getElementById('modeltext').innerHTML = 'Model Y'
};