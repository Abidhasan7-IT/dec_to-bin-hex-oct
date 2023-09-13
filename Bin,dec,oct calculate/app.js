function convert(){

    var binary=0,i=1,rem;
    var dec= Number(document.getElementById("number").value);

    while(dec >0){
        rem =dec%2;
        dec= parseInt(dec/2);
        binary= binary+ (i*rem);
        i= i*10;
    }
    document.getElementById("binary").value=binary;

    dectooctal();
    dectohexa();  // use recusion 
}

function dectooctal(){
    var dec1 =Number(document.getElementById("number").value);

    var octal= dec1.toString(8);
    document.getElementById("octal").value=octal;
}

function dectohexa(){
    var dec2 = Number(document.getElementById("number").value);

    var hexa= dec2.toString(16);
    document.getElementById("hexa").value=hexa;
}