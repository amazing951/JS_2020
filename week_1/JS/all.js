const newTodo = document.querySelector("#newTodo");
const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");
const taskCount = document.querySelector("#taskCount");
const clearTask = document.querySelector("#clearTask");



var todoData = [];

addTodo.addEventListener('click', function () {     // 新增task
    
    if (newTodo.value.trim() !== '') {      // trim()去除前後空白
        todoData.push({
            id: Math.floor(Date.now()),     // math.floor()取最大整數，無條件捨去
            title: newTodo.value,
            completed: false,
        })
        taskList();    
        
    }
});


function taskList(){    //關注在 資料處理
    var str = '';
    todoData.forEach(function (item) {  //因為要新增的li裡面的結構都一樣，所以不需要把所有的li內容存到陣列裡，陣列存下每個task不同的值
        str += `
        <li class="list-group-item">
        <div class="d-flex">
        <div class="form-check">
        <input type="checkbox" class="form-check-input" ${item.completed ? 'checked' : ''} data-action="complete" data-id="${item.id}">
        <label class="form-check-label ${item.completed ? 'completed' : ''}" data-action="complete" data-id="${item.id}"> ${item.title}</label>
        </div>
        <button type="button" class="close ml-auto" aria-label="Close">
        <span aria-hidden="true" data-action="remove" data-id="${item.id}">&times;</span>
        </button>
        </div>
        </li>
        `;
    })
    renderList(str);    // 呼叫畫面處理的function
}

function renderList(str){   // 關注在 畫面處理
    todoList.innerHTML = str;
    taskCount.textContent = todoData.length;
    newTodo.value = '';
}

clearTask.addEventListener('click', function (e) {  // 清空任務
    e.preventDefault();    
    todoData = [];
    taskList();   
});

todoList.addEventListener('click', function (e) {
    var newIndex = 0;
    if (e.target.dataset.action == 'remove') {  // click X
        todoData.forEach(function (item, key) {
            if (e.target.dataset.id == item.id) {
                newIndex = key;     //紀錄是第幾個task被刪除，用splice()刪除
            }
        })
        todoData.splice(newIndex, 1);
        taskList();
    }else if (e.target.dataset.action == 'complete') {      //
        todoData.forEach(function (item) {
            if (e.target.dataset.id == item.id) {
                if (item.completed) {       //判斷item.completed，改變Boolean值，透過三元運算子，增加或移除class
                    item.completed = false;
                } else {
                    item.completed = true;
                }
            }
        })
        taskList();
    }
});
