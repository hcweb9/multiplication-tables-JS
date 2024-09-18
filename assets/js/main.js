let tableContainer = document.querySelector(".tables");

let result = 0;

//Loop to get the number of table
for (let i = 1; i <= 10; i++) {
  //HTML template to display a header and create a container for table operations
  tableContainer.innerHTML += `
    <div class="tables__item">
      <h2 class="tables__title">
        Multiplication table of ${i}
      </h2>
      <ul class="tables__list tables__list--${i}">
      </ul>
    </div> 
  `;

  //Get the container for the current list
  let list = document.querySelector(".tables__list--" + i);

  //Loop to get numbers for table operations
  for (let n = 1; n <= 10; n++) {
    //Calculate operation results
    result = i * n;

    //Add operation to list using appendChild
    let listItem = document.createElement("li");
    listItem.classList.add("list__item");
    listItem.textContent = `${i} x ${n} = ${result}`;
    list.appendChild(listItem);
  }
}
