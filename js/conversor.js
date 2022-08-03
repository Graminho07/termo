document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

getLocal = function(e) {
    var store;
    store = localStorage.cards;
    if (store) {
        return lista = [...JSON.parse(store), e];
    } else {
        return localStorage.cards = e;
    }
};

function tempConvert(){
    var q = document.getElementById("q").value;
    var t = document.getElementById("t").value;
    var result = result;

    if(isNaN(q) || isNaN(t)){
        alert("Digite um valor válido!");
        return
    }else{
        result = q - t;
    }

    document.getElementById("q").value = parseFloat(q).toFixed();
    document.getElementById("t").value = parseFloat(t).toFixed();
    document.getElementById("result").value = parseFloat(result).toFixed();

    lista = getLocal(result);
    localStorage.cards = JSON.stringify(lista);

}

function clearForm(){
    document.getElementById("q").value = "";
    document.getElementById("t").value = "";
    document.getElementById("result").value = "";
}