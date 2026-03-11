console.log("Inside the app");
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value;

  const li = document.createElement("li");
  li.textContent = taskText;

  list.appendChild(li);

  input.value = "";
});
