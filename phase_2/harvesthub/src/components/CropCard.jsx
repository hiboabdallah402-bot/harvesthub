function CropCard({ crop }) {
  const hasPrice = crop.pricePerKg !== undefined && crop.pricePerKg !== null && crop.pricePerKg !== "";
  const displayPrice = hasPrice ? Math.round(Number(crop.pricePerKg)).toLocaleString() : "-";

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-4 shadow shadow-black/10 transition duration-300 hover:-translate-y-1">
      <div className="flex-1 flex flex-col">
        <div className="mb-3">
          <p className="text-xl font-semibold text-gray-900">{crop.name}</p>
        </div>

        <p className="mb-3 text-sm/6 text-zinc-400 line-clamp-2">
          {crop.description || "Fresh produce listing available now."}
        </p>

        <div className="mb-4 grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div className="bg-gray-50 rounded-lg p-2">
            <span className="text-gray-400 block">Farmer</span>
            <span className="font-medium">{crop.sellerName || "Unknown"}</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <span className="text-gray-400 block">Location</span>
            <span className="font-medium">{crop.location || "Not set"}</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <span className="text-gray-400 block">Available</span>
            <span className="font-medium">{crop.availableKg ?? 0} kg</span>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <span className="text-gray-400 block">Price / kg</span>
            <span className="font-medium">{displayPrice === "-" ? "-" : `KES ${displayPrice}`}</span>
          </div>
        </div>

        <div className="mt-auto text-sm text-gray-600">
          <span className="font-medium">Contact:</span> {crop.phone || "No contact info"}
        </div>
      </div>
    </div>
  );
}

export default CropCard;
