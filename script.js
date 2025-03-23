const completeList = document.querySelector('#taskList');
const formElement = document.querySelector('#addTask');
const errorElement = document.querySelector('#error');
const newTask = document.querySelector('#newTask');
localStorage.setItem("Tasks", JSON.stringify(completeList));
formElement.addEventListener('submit', (e) => {
	e.preventDefault();
	const listElements = document.querySelectorAll('#taskList li');
	let errorMessage = [];
	let listItem = [];
	for (let i = 0;i < listElements.length; i++) {
		listItem.push(listElements[i].textContent.trim());
	}
	
	for (let i = 0; i < listItem.length; i++) {
		if ( newTask.value == listItem[i]) {
			errorMessage.push('Item already in List.');
			break;
		}
	}
	
	if (errorMessage.length > 0) {
		errorElement.innerText = errorMessage.join(', ');
	} else {
		let newListItem = document.createElement('li');
		newListItem.textContent = newTask.value.trim();
		completeList.appendChild(newListItem);
		newTask.value = '';
		errorElement.innerText = '';
	}
	console.log (completeList);
});