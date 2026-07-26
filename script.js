// Load saved data
let list = JSON.parse(localStorage.getItem('pakbudget-expenses')) || [];
let total = 0;
function add() {
  let name = document.getElementById('n').value;
  let amount = parseFloat(document.getElementById('a').value);
  
  if(name == "" || isNaN(amount)) {
    alert("Please enter name and amount");
    return;
  }
  
  list.push({name, amount});
  total += amount;
  document.getElementById('t').innerText = total;
  localStorage.setItem('pakbudget-expenses', JSON.stringify(list));
  let l = document.getElementById('l');
  l.innerHTML += `<p>${name}: Rs ${amount}</p>`;
  
  document.getElementById('n').value = "";
  document.getElementById('a').value = "";
}

function tips() {
  if(total > 50000) {
    alert("AI Tip: Aapka kharcha zyada hai. Grocery aur bills pe bachat karein 💡");
  } else if(total > 20000) {
    alert("AI Tip: Achha ja rahe ho! Thora aur save karne ki koshish karo 💡");
  } else {
    alert("AI Tip: Wah! Budget control mein hai. Aise hi rakho 💡");
  }
}
