function CropForm({ initialData = {}, onSubmit, onCancel, loading }) {
  const normalizedStatus =
    initialData.status === "Reserved" || initialData.status === "Sold"
      ? initialData.status
      : "Available";

  const defaults = {
    name: "",
    category: "Vegetables",
    status: normalizedStatus,
    description: "",
    sellerName: "",
    location: "",
    phone: "",
    availableKg: "",
    pricePerKg: "",
    ...initialData,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.availableKg = Number(data.availableKg);
    data.pricePerKg = Number(data.pricePerKg);

    if (data.pricePerKg <= 90) {
      window.alert("Price per kg must be above 90 KES.");
      return;
    }

    onSubmit(data);
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Produce Name *</label>
          <input
            name="name"
            required
            defaultValue={defaults.name}
            placeholder="e.g. Tomato"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Category *</label>
          <select name="category" defaultValue={defaults.category} className={inputClass}>
            {["Vegetables", "Fruits", "Grains", "Legumes", "Herbs", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Listing Status *</label>
          <select name="status" defaultValue={defaults.status} className={inputClass}>
            {["Available", "Reserved", "Sold"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Farmer Name *</label>
          <input
            name="sellerName"
            required
            defaultValue={defaults.sellerName}
            placeholder="e.g. Amina Yusuf"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Location *</label>
          <input
            name="location"
            required
            defaultValue={defaults.location}
            placeholder="e.g. Arusha Central Market"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Available Quantity (kg) *</label>
          <input
            name="availableKg"
            type="number"
            min="1"
            required
            defaultValue={defaults.availableKg}
            placeholder="e.g. 120"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Price Per Kg (KES) *</label>
          <input
            name="pricePerKg"
            type="number"
            min="90.01"
            step="0.01"
            required
            defaultValue={defaults.pricePerKg}
            placeholder="e.g. 150"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            name="phone"
            required
            defaultValue={defaults.phone}
            placeholder="e.g. +255 712 345 678"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Listing Description</label>
        <textarea
          name="description"
          rows={3}
          defaultValue={defaults.description}
          placeholder="e.g. Fresh ripe mangoes"
          className={inputClass + " resize-none"}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold rounded-lg transition-colors"
        >
          {loading ? "Saving..." : "Save Listing"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default CropForm;
