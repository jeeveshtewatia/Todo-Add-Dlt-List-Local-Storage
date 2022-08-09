document.querySelector("form").addEventListener("submit", myfunc);
let arr;
if (localStorage.getItem("todolist") == null) {
  arr = [];
} else {
  arr = JSON.parse(localStorage.getItem("todolist"));
}
display(arr);
function myfunc(event) {
  event.preventDefault();
  let name = document.querySelector("#task").value;
  let prior = document.querySelector("#priority").value;
  let obj = {
    name: name,
    prior: prior,
  };
  arr.push(obj);
  localStorage.setItem("todolist", JSON.stringify(arr));
  display(arr);
}
function display(arr) {
  document.querySelector("tbody").innerHTML = "";
  arr.forEach(function (ele, index) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = ele.name;
    let col2 = document.createElement("td");
    col2.innerText = ele.prior;
    if (ele.prior == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.addEventListener("click", function () {
      deleterow(ele, index);
    });
    col3.style.color = "red";
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}
function deleterow(ele, index) {
  console.log(arr);
  arr.splice(index, 1);
  localStorage.setItem("todolist", JSON.stringify(arr));
  display(arr);
}
