/*Add an event listener to the button.
Create the function that handles the event onClick. (first you need to create a main.js file and write your js code in there)
Inside the handling function you must:
    prevent the button from reloading the page (Hint: use preventDefault() )
     create dynamically a <div> and inside the div a <li> element(Hint: use document.createElement() ).
    Add dynamically the CSS class 'todo' for the <div> and the class 'todo_item' for the <li> (Hint: use classList.add() )
    Add dynamically the generated <div> and <li> to the HTML document (Hint: use appendChild() )
     */

      const todoList = document.querySelector('.todo_list');
      const todoInput = document.querySelector('.todo_input');
      const todoButton = document.querySelector('.todo_button');            
      
    
      todoButton.addEventListener("click", batman)                     //Onclcik function fast i js.

      function batman(event){                                        //När jag trycker på todoButton så använder jag mig av denna function.
          event.preventDefault();                                   //Prevent från att uppdatera sidan
          if(todoInput.value === ""){                              //if gör att om texten i todoInput blir exekverad så ställs rutan om till enter the task
            return null
          }                      
          const doDiv = document.createElement('div');          //Skapar en doDiv 
          const nyTodo = document.createElement('li');         //Skapar en lista med "nytodo"              
         
          doDiv.classList.add("todo");                       //doDiv hamnar i todo classen i html koden.
          doDiv.classList.add("todo_item");                 //nytodo hamnar i todo_item classen i html koden.
          nyTodo.innerText = todoInput.value;              //nytodo.innertext drar ut text från ett visst element. todo.value 
          doDiv.appendChild(nyTodo);                      //Genererar en dynamisk div och li i html-dokumentet
          console.log(todoInput.value);
          todoList.appendChild(doDiv);
          todoInput.value = ""
        }

        
            