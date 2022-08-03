document.getElementById('convert2').onclick = tempConvert2;
document.getElementById('clear2').onclick = clearForm2;

getLocal = function(e) {
    var store2;
    store2 = localStorage.cards;
    if (store2) {
        return lista2 = [...JSON.parse(store2), e];
    } else {
        return localStorage.cards = e;
    }
};

function tempConvert2(){
    var ca = document.getElementById("ca").value;
    var ta = document.getElementById("ta").value;
    var result2 = result2;

    if(isNaN(ca) || isNaN(ta)){
        alert("Digite um valor válido!");
        return
    }else{
        result2 = parseFloat(ca) / parseFloat(ta);
    }

    document.getElementById("ca").value = parseFloat(ca).toFixed();
    document.getElementById("ta").value = parseFloat(ta).toFixed();
    document.getElementById("result2").value = parseFloat(result2).toFixed();

    lista2 = getLocal(result2);
    localStorage.cards = JSON.stringify(lista2);
    
}

function clearForm2(){
    document.getElementById("ca").value = "";
    document.getElementById("ta").value = "";
    document.getElementById("result2").value = "";
}