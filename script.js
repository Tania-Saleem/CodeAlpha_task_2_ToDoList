window.onload=function(){
    loadTasks();
}

function Addtask(){
    var input_task=document.getElementById("Inputtext");
    var tasklist=document.getElementById("tasklist");

    if(input_task.value.trim()===""){
        alert("Plaese add a task !");
        return;
    }
    //new li
    var task_item=document.createElement("li");
    task_item.className="task_item";

    //text for li
    var task_text=document.createElement("span");
    task_text.className = "task_text";
    task_text.innerText=input_task.value;


    //delete 
    var deletebtn=document.createElement("span");
    deletebtn.innerHTML="&#10006;";
    deletebtn.className="delete";
    deletebtn.onclick=function(){
        deleteTask(task_item);
    }

    task_item.appendChild(task_text);
    task_item.appendChild(deletebtn);


    tasklist.appendChild(task_item);

    saveTasks();
//clr inp field
setTimeout(function(){
    input_task.value="";
},10);
    
}

function deleteTask(task_item){
    var tasklist=document.getElementById("tasklist");
    tasklist.removeChild(task_item);
    var task=[];

    //iteration
    for (var i = tasklist.children.length - 1; i >= 0; i--){
        task.push(tasklist.children[i].getElementsByTagName("span")[0].innerText);

    }
    localStorage.setItem("task",JSON.stringify(task));
}

function loadTasks(){
    var tasklist=document.getElementById("tasklist");
    var task=JSON.parse(localStorage.getItem("task"))||[];

    tasklist.innerHTML="";
    //local stoorage
    for(var i=0;i<task.length;i++){
        var task_item=document.createElement("li");
        task_item.className="task_item";

        var task_text=document.createElement("span");
        task_text.className="task_text";
        task_text.innerText = task[i];

        var deletebtn=document.createElement("span");
        deletebtn.innerHTML="&#10006;";
        deletebtn.className="delete";
        deletebtn.onclick=function(){
            deleteTask(task_item);
        }
        task_item.appendChild(task_text);
        task_item.appendChild(deletebtn);
        tasklist.appendChild(task_item);
    }
}
