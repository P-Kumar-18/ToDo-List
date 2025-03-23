const completeList = document.querySelector('#taskList');
const addTask = document.querySelector('#addTask');
const errorElement = document.querySelector('#error');
const newTask = document.querySelector('#newTask')


let tasks = [];

addTask.addEventListener('submit', (e) => {
	let errorMessage = [];
	
	if (newTask.value === '' || newTask.value == null) {
		errorMessage.push('Fill in the task.');
	}
	const listElement = document.querySelectorAll('#taskList li');
	listElement.forEach(item => {
	tasks.push(item.textContent);
});
	
	if (tasks.some(item => item == newTask.value)) {
		errorMessage.push('Task is already in List.');
	}
	
	if (errorMessage.length > 0) {
		e.preventDefault();
		errorElement.innerText = errorMessage.join(', ');
	}
});