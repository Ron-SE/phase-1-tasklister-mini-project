document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  let todoText = document.querySelector('#todo-text')
  let todosList = document.querySelector('#todos-list')
  let List = document.querySelector('#list')


 

  form.addEventListener('submit', (e) => {
      e.preventDefault()
      let NewToDo = todoText.value;
      let listItem = document.createElement('li');
      listItem.textContent = NewToDo;
      List.appendChild(listItem);
      e.target.reset()
  })
})