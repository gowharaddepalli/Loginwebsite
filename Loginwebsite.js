function demo(e) {
    e.preventDefault();
    let p1 = document.getElementById('p1').value ;
    let p2 = document.getElementById('p2').value;
    
    if(p1 == p2){
        console.log(true);
        window.location = 'https://fb.com'
    }else{
        console.log(false);
        document.getElementById("demo").innerHTML = "Wrong Password!"
    }

}
var x = confirm("are you a human");
if (a){
    alert('thanks you');
}else{
alert('it\'s ok');
}