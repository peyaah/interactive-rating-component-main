function clickRate(num){
    console.log(num);
    document.getElementById('number-rate').innerHTML = "You selected " + num + " out of 5";
}

function submit(){
    let x = document.getElementById("message");
    x.style.visibility = 'visible';

}