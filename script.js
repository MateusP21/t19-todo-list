const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const criarTarefa = document.getElementById('criar-tarefa');

function addTodo() {
  const li = document.createElement('li');
  li.innerText = textoTarefa.value;
  listaTarefas.appendChild(li);
  textoTarefa.value = '';
}

window.onload = () => {
  criarTarefa.addEventListener('click', () => addTodo());
};
