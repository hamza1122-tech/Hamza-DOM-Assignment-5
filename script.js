// Task no 1
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function () {
  alert("Button clickec successfuly");
});

// Task no 2
let btn2 = document.querySelector("#btn2");
let para1 = document.querySelector("#para1");
btn2.addEventListener("click", function () {
  para1.textContent = "Text updated successfully";
});

// Task no 3
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
});

// Task no 4
let input = document.querySelector("#input");
let para2 = document.querySelector("#para2");
input.addEventListener("input", function () {
  para2.textContent = input.value;
});

// Task no 5
let box = document.querySelector(".container1");
box.addEventListener("mouseenter", function () {
  box.style.color = "red";
});
box.addEventListener("mouseleave", function () {
  box.style = "none";
});

// Task no 6
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("dblclick", function () {
  alert("Double Click Detected");
});
