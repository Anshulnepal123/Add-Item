let dark = document.getElementById('dark');

let darkmode = () => {
  document.body.classList.toggle("dark");
};

dark.addEventListener('click', darkmode);

let addItemForm = document.querySelector('.add-Item form');
let itemTableBody = document.getElementById('itemTableBody');

addItemForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  let itemNameInput = document.getElementById('item');
  let priceInput = document.getElementById('price');
  let quantityInput = document.getElementById('quantity');
  let siUnitInput = document.getElementById('si-unit');

  let itemName = itemNameInput.value.trim();
  let price = priceInput.value.trim();
  let quantity = quantityInput.value.trim();
  let siUnit = siUnitInput.value.trim();

  if (itemName === '' || price === '' || quantity === '' || siUnit === '') {
    alert('Please fill in all fields!');
    return;
  }

  let newRow = itemTableBody.insertRow();

  let itemCell = newRow.insertCell(0);
  let priceCell = newRow.insertCell(1);
  let quantityCell = newRow.insertCell(2);
  let unitCell = newRow.insertCell(3);
  let actionCell = newRow.insertCell(4);

  itemCell.textContent = itemName;
  priceCell.textContent = price + ' rs';
  quantityCell.textContent = quantity;
  unitCell.textContent = siUnit;

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('deleteBtn');

  deleteBtn.addEventListener('click', function() {
    newRow.remove();
  });

  actionCell.appendChild(deleteBtn);

  itemNameInput.value = '';
  priceInput.value = '';
  quantityInput.value = '';
  siUnitInput.value = '';
});
