//? Selectors

const taskInput = document.querySelector(".taskInput");
const btn = document.querySelector("#button-addon2");
const newListed = [];
const list = document.querySelector(".newList");
let counter = 0;
let deleted = 0;
const p2 = document.querySelector(".p2");
const p1 = document.querySelector(".p1");




//? btn event handler

btn.addEventListener("click", () => {
  if (!taskInput.value) {
    alert("Please enter a new task!");
  } else {

    list.innerHTML += `<div  class="form-check  border rounded-2 shadow p-1 mb-3 bg-body rounded"  >
      <input class="checkf form-check-input m-2 w-30  border rounded-circle" type="checkbox" value="" id="flexCheckIndeterminate" 
      >
      <label id="labelForm" class=" form-check-label  m-2 " for="flexCheckIndeterminate" >
        ${taskInput.value}
      </label>
      <button id="buton1"><i class="fa-solid fa-trash text-dark"></i></button>
    </div>`;

    counter++;
    p1.innerHTML = counter;
    newListed.push(taskInput.value);

    taskInput.value = "";

    document.querySelectorAll(".checkf").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.nextElementSibling.classList.add("text-decoration-line-through");

      });
    });

    document.querySelectorAll("#buton1").forEach((e) => {
      e.preventDefault;
      e.addEventListener("click", () => {
        e.parentElement.remove();

        deleted++;
        p2.innerHTML = Number(deleted);



      });



    });


    console.log(newListed);

 }
  taskInput.focus();
});

taskInput.addEventListener("keydown",(e)=>{
  if(e.code === "Enter"){
      btn.click();
  }
});