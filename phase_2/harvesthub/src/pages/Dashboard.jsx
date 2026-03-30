import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FiHome,
  FiBox,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiSearch,
  FiFilter,
  FiPlus,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { deleteCrop, getCrops } from "../services/cropService";

const statusColors = {
  Available: "bg-green-100 text-green-800",
  Reserved: "bg-amber-100 text-amber-800",
  Sold: "bg-gray-200 text-gray-700",
};

const mapToMarketStatus = (status, availableKg) => {
  if (status === "Sold" || Number(availableKg) === 0) return "Sold";
  if (status === "Reserved") return "Reserved";
  return "Available";
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [crops, setCrops] = useState([]);
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    getCrops()
      .then((data) => {
        setCrops(data);
        setFilteredCrops(data);
      })
      .catch((error) => {
        console.error("Failed to load listings:", error);
        setCrops([]);
        setFilteredCrops([]);
      });
  }, []);

  useEffect(() => {
    let results = crops;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        (crop) =>
          crop.name?.toLowerCase().includes(term) ||
          crop.location?.toLowerCase().includes(term) ||
          crop.sellerName?.toLowerCase().includes(term)
      );
    }

    if (statusFilter !== "All") {
      results = results.filter((crop) => mapToMarketStatus(crop.status, crop.availableKg) === statusFilter);
    }

    setFilteredCrops(results);
  }, [searchTerm, statusFilter, crops]);

  useEffect(() => {
    if (!alert) return undefined;

    const timeoutId = window.setTimeout(() => {
      setAlert(null);
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, [alert]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;

    const listing = crops.find((crop) => crop.id === id);

    deleteCrop(id)
      .then(() => {
        setCrops((prev) => prev.filter((crop) => crop.id !== id));
        setAlert({
          type: "success",
          message: `${listing?.name || "Listing"} deleted successfully.`,
        });
      })
      .catch((error) => {
        console.error("Failed to delete listing:", error);
        setAlert({
          type: "error",
          message: "Failed to delete listing. Please try again.",
        });
      });
  };

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
    localStorage.removeItem("harvesthub_auth");
    localStorage.removeItem("harvesthub_user");
    navigate("/login", { replace: true });
  };

  const activeListings = crops.filter((crop) => mapToMarketStatus(crop.status, crop.availableKg) === "Available").length;
  const totalStock = crops.reduce((sum, crop) => sum + (Number(crop.availableKg) || 0), 0);
  const avgPrice =
    crops.length > 0
      ? Math.round(crops.reduce((sum, crop) => sum + (Number(crop.pricePerKg) || 0), 0) / crops.length)
      : 0;

  const stats = [
    {
      label: "Listings",
      value: crops.length,
      icon: "📦",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      label: "Available Now",
      value: activeListings,
      icon: "🟢",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      label: "Stock (Kg)",
      value: totalStock,
      icon: "⚖️",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-200",
    },
    {
      label: "Avg Price/Kg",
      value: `KES ${avgPrice.toLocaleString()}`,
      icon: "💵",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  const listingStatusData = [
    { status: "Available", count: crops.filter((crop) => mapToMarketStatus(crop.status, crop.availableKg) === "Available").length },
    { status: "Reserved", count: crops.filter((crop) => mapToMarketStatus(crop.status, crop.availableKg) === "Reserved").length },
    { status: "Sold", count: crops.filter((crop) => mapToMarketStatus(crop.status, crop.availableKg) === "Sold").length },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-linear-to-b from-green-700 to-green-800 text-white transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4">
          {sidebarOpen && <h2 className="text-xl font-bold">Harvest Hub</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 hover:bg-green-600"
          >
            {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        <nav className="mt-8 space-y-2 px-2">
          <Link to="/dashboard" className="flex items-center space-x-3 rounded-lg bg-green-600 px-4 py-3">
            <FiHome size={20} />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link to="/crops" className="flex items-center space-x-3 rounded-lg px-4 py-3 hover:bg-green-600">
            <FiBox size={20} />
            {sidebarOpen && <span>Marketplace</span>}
          </Link>
          <Link to="/crops/add" className="flex items-center space-x-3 rounded-lg px-4 py-3 hover:bg-green-600">
            <FiPlus size={20} />
            {sidebarOpen && <span>Add Listing</span>}
          </Link>
          <button
            type="button"
            onClick={() => navigate("/about")}
            className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left hover:bg-green-600"
          >
            <FiSettings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        <div className="mt-8 px-2">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center space-x-3 rounded-lg px-4 py-3 hover:bg-green-600"
          >
            <FiLogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buyer Marketplace Dashboard</h1>
          <p className="mt-2 text-gray-600">Track listings, availability, and prices for local buyers.</p>
        </header>

        {alert && (
          <div
            className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
              alert.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {alert.message}
          </div>
        )}

        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`${stat.bgColor} border-l-4 ${stat.borderColor} rounded-lg p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <span className="text-3xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Listing Status Overview</h3>
          <p className="mb-4 text-sm text-gray-600">Simple graph of current marketplace listing status.</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={listingStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Marketplace Listings</h3>
            <Link
              to="/crops/add"
              className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              <FiPlus className="mr-2" />
              Add Listing
            </Link>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative md:col-span-2">
              <FiSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search by crop, seller, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div className="flex items-center gap-2">
              <FiFilter className="text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                <option value="All">All Statuses</option>
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
          </div>

          {filteredCrops.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-gray-500">No listings match your filters.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Crop</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Seller</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Stock</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Price/Kg</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCrops.map((crop) => {
                    const marketStatus = mapToMarketStatus(crop.status, crop.availableKg);

                    return (
                      <tr key={crop.id} className="hover:bg-gray-50">
                        <td className="px-5 py-4 font-medium text-gray-900">{crop.name}</td>
                        <td className="px-5 py-4 text-gray-700">{crop.sellerName || "-"}</td>
                        <td className="px-5 py-4 text-gray-700">{crop.location || "-"}</td>
                        <td className="px-5 py-4 text-gray-700">{crop.availableKg ?? 0} kg</td>
                        <td className="px-5 py-4 text-gray-700">KES {Math.round(Number(crop.pricePerKg || 0)).toLocaleString()}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusColors[marketStatus]}`}>
                            {marketStatus}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex gap-2">
                            <Link
                              to={`/crops/edit/${crop.id}`}
                              className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              <FiEdit2 size={16} />
                            </Link>
                            <button
                              onClick={() => handleDelete(crop.id)}
                              className="inline-flex items-center rounded-lg border border-red-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
