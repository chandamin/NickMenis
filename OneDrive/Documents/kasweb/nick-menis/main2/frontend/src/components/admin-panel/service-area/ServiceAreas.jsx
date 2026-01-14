import { useEffect, useState } from "react";
import axios from "axios";
import "./serviceAreas.css";

export default function ServiceAreas() {
  const [provinces, setProvinces] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    fetchServiceAreas();
  }, []);

  async function fetchServiceAreas() {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/service-areas`);
      setProvinces(res.data);
    } catch (err) {
      console.error("Failed to fetch service areas", err);
    }
  }

  async function toggleProvince(id, value) {
    await axios.put(
      `${backendUrl}/api/admin/service-areas/province/${id}`,
      { isActive: value }
    );
    fetchServiceAreas();
  }

async function toggleCity(provinceId, cityId, value) {
  await axios.put(
    `${backendUrl}/api/admin/service-areas/city/${provinceId}`,
    { cityId, isActive: value }
  );
  fetchServiceAreas();
}


  return (
    <div className="admin-card service-area-card">
      <h2>Service Areas</h2>

      {provinces.map((province) => (
        <div key={province._id} className="province-card">
          <div className="province-header">
            <label className="province-toggle">
              <input
                type="checkbox"
                checked={province.isActive}
                onChange={(e) =>
                  toggleProvince(province._id, e.target.checked)
                }
              />
              <span>{province.provinceName}</span>
            </label>
          </div>

          <div className={`cities-grid ${!province.isActive ? "disabled" : ""}`}>
            {province.cities.map((city) => (
              <label key={city._id} className="city-item">
                <input
                  type="checkbox"
                  checked={city.isActive}
                  disabled={!province.isActive}
                  onChange={(e) =>
                    toggleCity(
                      province._id,
                      city._id,
                      e.target.checked
                    )
                  }
                                  />
                {city.name}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
