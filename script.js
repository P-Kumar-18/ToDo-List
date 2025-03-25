const completeList = document.querySelector('#taskList');
const formElementAdd = document.querySelector('#addTask');
const formElementRemove = document.querySelector('#removeTask');
const errorElementAdd = document.querySelector('#errorAdd');
const errorElementRemove = document.querySelector('#errorRemove');
const newTask = document.querySelector('#newTask');
const delTask = document.querySelector('#delTask');
const remAll = document.querySelector('#remAll');

if (completeList) {
	console.log ('Loaded home.html');
	
	let tasks = JSON.parse(localStorage.getItem("Tasks"));
	
	tasks.forEach(taskText => {
		let newListItem = document.createElement('li');
		newListItem.textContent = taskText;
		let buttonList = document.createElement('Button');
		buttonList.innerHTML = '<span class = "toggleList" style = "color: red; margin-right: 20px">UF</span>';
		newListItem.appendChild(buttonList);
		completeList.appendChild(newListItem);
	});
	
	completeList.addEventListener("click", (e) => {
		if (e.target.classList.contains("toggleList")) {
			let newList = e.target.closest("li");
			if (e.target.textContent === "UF") {
				
				e.target.textContent = "FF";
				e.target.style.backgroundColor = "green"; 
				e.target.style.marginLeft = "20px"; 
				e.target.style.marginRight = "0px"; 
				e.target.style.color = "green"; 
				newList.style.color = "A9A9A9";
			} else {
				e.target.textContent = "UF";
				e.target.style.backgroundColor = "red"; 
				e.target.style.marginLeft = "0px"; 
				e.target.style.marginRight = "20px";
				e.target.style.color = "red";
				newList.style.color = "black";				
			}
		}
	});
}

if (formElementAdd) {
	console.log ('Loaded addTask.html');
	
	formElementAdd.addEventListener('submit', (e) => {
		e.preventDefault();
		
		let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
		
		let newTaskValue = newTask.value.trim();
		if (tasks.includes(newTaskValue)) {
			errorElementAdd.style.color = 'darkred';
			errorElementAdd.textContent = 'Task already in list.';
			newTask.value = '';
			return;
		} else {
			tasks.push(newTaskValue);
			localStorage.setItem ("Tasks", JSON.stringify(tasks));
			newTask.value = '';
			errorElementAdd.style.color = 'green';
			errorElementAdd.innerText = 'Task Added.';
		}
	});
}

if (formElementRemove) {
	console.log ('Loaded removeTask.');
	let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];
	formElementRemove.addEventListener('submit', (e) => {
		e.preventDefault();
		
		
		let delTaskValue = delTask.value.trim();
		if (!tasks.includes(delTaskValue)) {
			errorElementRemove.style.color = 'darkred';
			errorElementRemove.textContent = 'Task not in list.';
			delTask.value = '';
			return;
		} else {
			tasks = tasks.filter(task => task !== delTaskValue);
			localStorage.setItem ("Tasks", JSON.stringify(tasks));
			delTask.value = '';
			errorElementRemove.style.color = 'green';
			errorElementRemove.innerText = 'Task Removed.';
		}
	});
	
	remAll.addEventListener('click', (e) => {
		e.preventDefault();
		
		localStorage.removeItem("Tasks");
		completeList.innerHTML = '';
	});
}