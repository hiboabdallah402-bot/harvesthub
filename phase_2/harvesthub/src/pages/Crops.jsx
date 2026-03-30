import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CropCard from "../components/CropCard";
import SearchBar from "../components/SearchBar";
import { getCrops } from "../services/cropService";

const CATEGORIES = ["All", "Vegetables", "Fruits", "Grains", "Legumes", "Herbs", "Other"];

function Crops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    getCrops()
      .then(setCrops)
      .catch(() => setError("Could not load marketplace listings. Make sure json-server is running: npm run server"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = crops.filter((c) => {
    const query = search.toLowerCase();
    const matchSearch = [c.name, c.sellerName, c.location]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query));
    const matchCat = category === "All" || c.category === category;
    return matchSearch && matchCat;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Loading marketplace listings...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-20 text-center px-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">Connection Error</h2>
        <p className="text-gray-500 mb-4">{error}</p>
        <code className="bg-gray-100 text-green-700 px-4 py-2 rounded-lg text-sm block">npm run server</code>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-700 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Marketplace Listings</h1>
            <p className="text-green-200 mt-1">{crops.length} active produce listing{crops.length !== 1 ? "s" : ""}</p>
          </div>
          <Link
            to="/crops/add"
            className="self-start sm:self-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-lg transition-colors"
          >
            + Post Listing
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-8 flex flex-wrap gap-4 items-center">
          <SearchBar value={search} onChange={setSearch} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          {(search || category !== "All") && (
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="text-sm text-red-500 hover:text-red-600 font-medium"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Results info */}
        {filtered.length !== crops.length && (
          <p className="text-sm text-gray-500 mb-4">
            Showing {filtered.length} of {crops.length} listings
          </p>
        )}

        {/* Crop Cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No listings match your filters.</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-3 text-green-600 hover:underline text-sm"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Crops;
