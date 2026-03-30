import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CropForm from "../components/CropForm";
import { addCrop } from "../services/cropService";

function AddCrop() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      await addCrop(data);
      navigate("/crops", { replace: true });
    } catch {
      setError("Failed to create listing. Make sure json-server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link to="/crops" className="hover:text-white transition-colors">Marketplace</Link>
            <span>/</span>
            <span>Post Listing</span>
          </div>
          <h1 className="text-3xl font-bold">Post Produce Listing</h1>
          <p className="text-green-200 mt-1">Add produce, quantity, price, and contact details for local buyers.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          <CropForm
            onSubmit={handleSubmit}
            onCancel={() => navigate("/crops")}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCrop;
