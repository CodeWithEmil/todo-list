const todoList = JSON.parse(localStorage.getItem("list")) || [
   {
      name: "make dishes",
      dueDate: "2023-11-12",
   },
   {
      name: "wash dinner",
      dueDate: "2023-11-12",
   },
];
renderTodoList();

function renderTodoList() {
   let todoListHTML = "";

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      
      const { name } = todoObject;
      const { dueDate } = todoObject;

      const html = `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
         " class = "delete-todo-button">Delete</button>
      `;

      todoListHTML += html;
   }

   document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
   const inputElement = document.querySelector(".js-name-input");
   const name = inputElement.value;

   const dateInputElement = document.querySelector(".js-due-date-input");
   const dueDate = dateInputElement.value;

   if (!name || !dueDate) {
      alert("Uh-oh! Missing some values :(");
   } else {
      todoList.push({
         name,
         dueDate
      });

      inputElement.value = "";
      renderTodoList();

      saveToStorage();
   }
}

function saveToStorage() {
   localStorage.setItem("list", JSON.stringify(todoList));
}