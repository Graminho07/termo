let tarefas = []

const addTarefa = () => {
    let tarefa = document.getElementById('result').value

    document.getElementById('result').value = ""

    if(localStorage.getItem('tarefas') != null){
        tarefas = JSON.parse(localStorage.getItem('tarefas'))
    }
    
    let data = new Date();
    let date = `${data.getUTCDay()}/${data.getUTCMonth()}/${data.getUTCFullYear()}`;

    tarefas.push([date, tarefa])
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}