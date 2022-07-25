let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('tarefa').value

    document.getElementById('tarefa').value = ""

    if(localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;

    tarefas.push([date, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

const list = () => {
    let tbody = document.querySelector('#tr-tarefa')

    if(localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    } else {
        tarefas.push(["Sem ","Dados"])
    }

    tarefas.forEach((element,index) => {
        tbody.innerHTML += "<tr> <td>" + element[0]+
        "</td> <td>"+ element[1] + "</td>"+
        "<td><button onclick='deletar(" + index + ")'> 🗑 </button></td></tr>"
    });
}

const deletar = (index) => {
  let newArray = tarefas.filter(
        (e, i)=> i != index
    )
console.log(newArray)
    localStorage.setItem('tarefas', JSON.stringify(newArray))
    document.location.reload(true)
}