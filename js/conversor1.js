document.getElementById('convert1').onclick = tempConvert1;
document.getElementById('clear1').onclick = clearForm1;

getLocal = function(e) {
    var store1;
    store1 = localStorage.cards;
    if (store1) {
        return lista1 = [JSON.parse(store), e];
    } else {
        return localStorage.cards = e;
    }
};

function tempConvert1(){
    var qa = document.getElementById("qa").value;
    var qb = document.getElementById("qb").value;
    var result1 = result1;

    if(isNaN(qa) || isNaN(qb)){
        alert("Digite um valor válido!");
        return
    }else{
        result1 = parseFloat(qa) + parseFloat(qb);
    }

    document.getElementById("qa").value = parseFloat(qa).toFixed();
    document.getElementById("qb").value = parseFloat(qb).toFixed();
    document.getElementById("result1").value = parseFloat(result1).toFixed();

    lista1 = getLocal(result1);
    localStorage.cards = JSON.stringify(lista1);
    
}

function clearForm1(){
    document.getElementById("qa").value = "";
    document.getElementById("qb").value = "";
    document.getElementById("result1").value = "";
}