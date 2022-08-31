
document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("please Enter a Task")
    }
    else{
        document.querySelector('#task').innerHTML 
        +=`  <div class="task">
        <span id="taskname">
            ${document.querySelector
            ("#newtask input").value}
            </span>
            <button  class="delete">
            <i class="fa-solid fa-trash-list"></i>
                </button></div>
                `;
                var current=document.
                querySelectorAll(".delete");
                for (var i=0; i<current.length; i++){
                    current[i].onclick=function(){
                        this.parentNode.remove();
                    }
                }
                var tasks=document.querySelectorAll(".task");
                for(var i=0; i<tasks.length; i++){
                    tasks[i].onclick=function(){
                        this.classList.toggle('completed');
                    }
                }
                document.querySelector("newtask input").value="";
                // var tasks=document.
                // querySelectorAll(".task");
                // for(var i=0 i < tasks.length i++){
                //     tasks{
                //         tasks[i].onclick function(){
                //             this.classList.toggle("completed");
                //         }
                //     }
            //  var u=document.getElementsByClassName("task");
            //  for(var i=0; i<u.length;i++){
            //     u[i].onclick=function(){
            //         this.classList.toggle('completed');
            //     }
            //  }
            //     }
            //     }
      
    }
    
}