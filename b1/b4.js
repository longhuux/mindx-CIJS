// Mảng danh bạ
var contacts = [];

// Lấy các phần tử HTML
var contactForm = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var searchInput = document.getElementById("searchInput");
var contactTable = document.getElementById("contactTable");

// Sự kiện khi submit form
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = nameInput.value;
  var phone = phoneInput.value;
  
  // Kiểm tra nếu số điện thoại đã tồn tại trong danh bạ
  var existingContactIndex = findContactByPhone(phone);
  if (existingContactIndex !== -1) {
    // Nếu số điện thoại đã tồn tại, xoá contact đã tồn tại trước đó
    contacts.splice(existingContactIndex, 1);
  }
  
  // Thêm contact mới vào danh bạ
  contacts.push({ name: name, phone: phone });
  
  // Sắp xếp danh bạ theo tên
  sortContactsByName();
  
  // Reset form và cập nhật danh bạ
  contactForm.reset();
  updateContactTable();
});

// Sự kiện khi nhập vào ô tìm kiếm
searchInput.addEventListener("input", function() {
  updateContactTable();
});

// Tìm kiếm contact theo tên hoặc số điện thoại
function searchContacts() {
  var searchTerm = searchInput.value.toLowerCase();
  return contacts.filter(function(contact) {
    var nameMatch = contact.name.toLowerCase().includes(searchTerm);
    var phoneMatch = contact.phone.toLowerCase().includes(searchTerm);
    return nameMatch || phoneMatch;
  });
}

// Cập nhật bảng danh bạ
function updateContactTable() {
  var filteredContacts = searchContacts();
  contactTable.innerHTML = "<tr><th>Tên</th><th>Số điện thoại</th><th></th></tr>";
  
  filteredContacts.forEach(function(contact) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + contact.name + "</td><td>" + contact.phone + "</td><td><button class='deleteBtn'>Xoá</button></td>";
    contactTable.appendChild(row);
  });
  
  // Sự kiện khi click vào nút xoá
  var deleteButtons = document.getElementsByClassName("deleteBtn");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
      var rowIndex = this.parentNode.parentNode.rowIndex - 1;
      contacts.splice(rowIndex, 1);
      updateContactTable();
    });
  }
}

// Tìm contact theo số điện thoại
function findContactByPhone(phone) {
  return contacts.findIndex(function(contact) {
    return contact.phone === phone;
  });
}

// Sắp xếp danh bạ theo tên
function sortContactsByName() {
  contacts.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
}

// Khởi tạo danh bạ mẫu
contacts.push({ name: "Alice", phone: "123" });
contacts.push({ name: "Bob", phone: "456" });
contacts.push({ name: "Daniel", phone: "123" });

// Cập nhật bảng danh bạ ban đầu
updateContactTable();
