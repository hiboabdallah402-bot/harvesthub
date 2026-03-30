import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import CropForm from "../components/CropForm";
import { getCropById, updateCrop } from "../services/cropService";

function EditCrop() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCropById(id)
      .then(setCrop)
      .catch(() => setError("Listing not found or server is not running."))
      .finally(() => setFetching(false));
  }, [id]);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError(null);

    try {
      await updateCrop(id, data);
      navigate("/crops", { replace: true });
    } catch {
      setError("Failed to update listing. Make sure json-server is running.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Loading listing data...</p>
        </div>
      </div>
    );
  }

  if (error && !crop) {
    return (
      <div className="max-w-xl mx-auto mt-20 text-center px-4">
        <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
        <p className="text-gray-500 mb-4">{error}</p>
        <Link to="/crops" className="text-green-600 hover:underline">← Back to Marketplace</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-700 text-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-green-200 text-sm mb-3">
            <Link to="/crops" className="hover:text-white transition-colors">Marketplace</Link>
            <span>/</span>
            <span>Edit Listing</span>
          </div>
          <h1 className="text-3xl font-bold">
            Edit {crop?.name} Listing
          </h1>
          <p className="text-green-200 mt-1">Update quantity, price, location, and seller details.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          {crop && (
            <CropForm
              initialData={crop}
              onSubmit={handleSubmit}
              onCancel={() => navigate("/crops")}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditCrop;
