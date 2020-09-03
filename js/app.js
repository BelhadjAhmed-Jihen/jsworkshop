$(document).ready(function(){
    const output=document.querySelector('#output');
    output.innerHTML="We are the World 1984";
    setTimeout(function(){
        output.innerHTML=":)";
    },5000)
});
