const tableBody = document.getElementById('tableBody');

// Store all data
let data = [];

function saveData() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const gmail = document.getElementById('gmail').value;

  if (name && phone && gmail) {
    const newRow = {
      id: (data.length + 1).toString().padStart(2, '0'), // Generate ID
      name: name,
      phone: phone,
      gmail: gmail,
      date: new Date()
    };

    data.push(newRow);
    // add data to table
    renderTable();
    // clear data from input
    clearInputs();
  } else {
    alert('Please fill in all fields.');
  }
}

function renderTable() {
  tableBody.innerHTML = '';

  data.forEach((item, index) => {
    const row = document.createElement('tr');

    // No.
    const noCell = document.createElement('td');
    noCell.textContent = index + 1;
    row.appendChild(noCell);

    // Name
    const nameCell = document.createElement('td');
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    // Phone
    const phoneCell = document.createElement('td');
    phoneCell.textContent
    phoneCell.textContent = item.phone;
    row.appendChild(phoneCell);

    // Gmail
    const gmailCell = document.createElement('td');
    gmailCell.textContent = item.gmail;
    row.appendChild(gmailCell);

    // Date
    const dateCell = document.createElement('td');
    dateCell.textContent = item.date.toLocaleString();
    row.appendChild(dateCell);

    // Actions
    const actionsCell = document.createElement('td');
    const updateButton = document.createElement('button');
    updateButton.type = 'button';
    updateButton.textContent = 'Update';
    updateButton.onclick = () => updateData(index);
    actionsCell.appendChild(updateButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteData(index);
    actionsCell.appendChild(deleteButton);

    row.appendChild(actionsCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

function clearInputs() {
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('gmail').value = '';
}

function deleteData(index) {
  data.splice(index, 1);
  renderTable();
}

function updateData(index) {
  const item = data[index];
  document.getElementById('name').value = item.name;
  document.getElementById('phone').value = item.phone;
  document.getElementById('gmail').value = item.gmail;
  
  data.splice(index, 1);
  renderTable();
}
