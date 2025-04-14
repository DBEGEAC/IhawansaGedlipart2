const menu = [
  { name: 'Pusit', price: 100 },
  { name: 'Tilapia', price: 100 },
  { name: 'Liempo', price: 100 },
  { name: 'Chicken Quarter Leg', price: 80 },
  { name: 'Chicken BBQ Breast', price: 40 },
  { name: 'Pork BBQ', price: 15 },
  { name: 'Tenga', price: 15 },
  { name: 'Atay ng Baboy', price: 10 },
  { name: 'Bituka Baboy', price: 10 },
  { name: 'Balunan', price: 10 },
  { name: 'Beta Max', price: 8 },
  { name: 'Isaw ng Manok', price: 5 },
  { name: 'TJ Hotdog Kingsize', price: 25 }
];

const menuContainer = document.getElementById('menu-items');
const orderList = document.getElementById('order-list');
const totalPriceElement = document.getElementById('total-price');

let total = 0;

menu.forEach(item => {
  const btn = document.createElement('button');
  btn.textContent = `${item.name} - ₱${item.price}`;
  btn.className = 'btn menu-button';
  btn.onclick = () => addItem(item);
  menuContainer.appendChild(btn);
});

function addItem(item) {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `${item.name} <span>₱${item.price}</span>`;
  orderList.appendChild(li);
  total += item.price;
  updateTotal();
}

function updateTotal() {
  totalPriceElement.textContent = total;
}

document.getElementById('clear-order').addEventListener('click', () => {
  orderList.innerHTML = '';
  total = 0;
  updateTotal();
});

document.getElementById('print-receipt').addEventListener('click', () => {
  let receipt = '--- Ihawan sa Gedli POS Receipt ---\n';
  const items = orderList.querySelectorAll('li');
  items.forEach(li => {
    receipt += li.textContent + '\n';
  });
  receipt += `\nTotal: ₱${total}`;
  alert(receipt);
});
