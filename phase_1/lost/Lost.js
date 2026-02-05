const API_URL = "http://localhost:3000/items";

const form = document.getElementById("itemForm");
const itemsList = document.getElementById("itemsList");

const itemId = document.getElementById("itemId");
const itemName = document.getElementById("itemName");
const category = document.getElementById("category");
const locationInput = document.getElementById("location");
const statusInput = document.getElementById("status");
const dateInput = document.getElementById("date");
const contact = document.getElementById("contact");

/* ================= READ ================= */
function fetchItems() {
  fetch(API_URL)
    .then(res => res.json())
    .then(items => {
      itemsList.innerHTML = "";

      // Empty state
      if (items.length === 0) {
        itemsList.innerHTML = `
          <div class="col-12 text-center text-muted">
            <i class="bi bi-inbox fs-1"></i>
            <p>No items reported yet</p>
          </div>
        `;
        return;
      }

      items.forEach(item => {
        const statusBadge =
          item.status === "Lost"
            ? `<span class="badge bg-danger">Lost</span>`
            : `<span class="badge bg-success">Found</span>`;

        itemsList.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm border-0">
              <div class="card-body">

                <h5 class="card-title">${item.itemName}</h5>
                <p class="mb-1"><strong>Category:</strong> ${item.category}</p>
                <p class="mb-1"><strong>Location:</strong> ${item.location}</p>
                <p class="mb-1"><strong>Status:</strong> ${statusBadge}</p>
                <p class="mb-3"><strong>Contact:</strong> ${item.contact}</p>

                <div class="d-flex justify-content-between">
                  <button class="btn btn-sm btn-outline-warning" onclick="editItem(${item.id})">
                    <i class="bi bi-pencil-square"></i> Edit
                  </button>

                  <button class="btn btn-sm btn-outline-danger" onclick="deleteItem(${item.id})">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                </div>

              </div>
            </div>
          </div>
        `;
      });
    });
}

/* ================= CREATE & UPDATE ================= */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    itemName: itemName.value,
    category: category.value,
    location: locationInput.value,
    status: statusInput.value,
    date: dateInput.value,
    contact: contact.value
  };

  if (itemId.value) {
    // UPDATE
    fetch(`${API_URL}/${itemId.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      resetForm();
      fetchItems();
    });
  } else {
    // CREATE
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      resetForm();
      fetchItems();
    });
  }
});

/* ================= EDIT ================= */
function editItem(id) {
  fetch(`${API_URL}/${id}`)
    .then(res => res.json())
    .then(item => {
      itemId.value = item.id;
      itemName.value = item.itemName;
      category.value = item.category;
      locationInput.value = item.location;
      statusInput.value = item.status;
      contact.value = item.contact;
    });
}

/* ================= DELETE ================= */
function deleteItem(id) {
  if (!confirm("Are you sure you want to delete this item?")) return;

  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(fetchItems);
}

/* ================= HELPERS ================= */
function resetForm() {
  form.reset();
  itemId.value = "";
}

/* Load items on page load */
fetchItems();
