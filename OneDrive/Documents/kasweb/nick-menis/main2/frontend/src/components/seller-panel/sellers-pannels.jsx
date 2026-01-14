import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header-p";
import Dashboard from "./Dashboard-p";
import Activity from "./Activity";
import Property from "./Property";
import Support from "./Support";
import "./style.css";

const SellersPannel = () => {
  const [sellerLeads, setSellerLeads] = useState(null);
  const [sellerProfile, setSellerProfile] = useState(null);
  const [menu, setMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const token = localStorage.getItem("token");

  /* ================= FETCH SELLER PROFILE ================= */
  const fetchSellerProfile = useCallback(async () => {
  try {
    const res = await axios.get(`${backendUrl}/api/seller/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setSellerProfile(res.data);
  } catch (err) {
    console.error("Failed to fetch seller profile", err);
  }
}, [backendUrl, token]);


  /* ================= FETCH SELLER LEADS ================= */
  const fetchSellerLeads = useCallback(async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/seller/details`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSellerLeads(res.data || null);
    } catch (err) {
      console.error("Failed to fetch seller leads", err);
      setSellerLeads(null);
    }
  }, [backendUrl, token]);

  useEffect(() => {
    fetchSellerProfile();
    fetchSellerLeads();
  }, [fetchSellerProfile,fetchSellerLeads]);

  /* ✅ FIXED: MongoDB uses _id */

  const renderContent = () => {
    switch (menu) {
      case "activity":
        return <Activity />;
      case "property":
        return <Property />;
      case "support":
        return <Support />;
      default:
        return <Dashboard backendUrl={backendUrl} user={sellerProfile} sellerLeads={sellerLeads} fetchSellerLeads={fetchSellerLeads} />;
    }
  };

  if (!sellerProfile) {
  return <div>Loading seller profile...</div>;
}
  return (


        <div className="custom-sallers-pannel-main">
      <div className="custom-sallers-pannel-inner">
        <div className="custom-sallers-pannel-inner-flex app">

          <Sidebar
            user={sellerProfile}
            menu={menu}
            setMenu={setMenu}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          <main className="main">
            <Header
              setSidebarOpen={setSidebarOpen}
              sidebarOpen={sidebarOpen}
            />

            <div className="grid">
              <section className="card large">
                {renderContent()}
              </section>
            </div>
          </main>

        </div>
      </div>
    </div>
    
  );
};

export default SellersPannel;
