console.log("Inside the app");
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(input.value);
  const taskText = input.value.trim();
  if (!taskText) return;
  const taskElement = createTask(taskText);
  list.appendChild(taskElement);
  input.value = "";
}
function createTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", toggleTask);
  return li;
}
function toggleTask(event) {
  event.target.classList.toggle("completed");
}
function initEvents() {
  form.addEventListener("submit", handleFormSubmit);
}
initEvents();
