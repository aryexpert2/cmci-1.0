import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DashComments,
  DashPosts,
  DashProfile,
  DashUsers,
  DashSidebar,
  DashboardComp,
} from "../components";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab"); // recupère la valeur du paramètre tab passé à l'URL
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/** sidebar */}
        <DashSidebar />
      </div>

      {/** profile */}
      {tab === "profile" && <DashProfile />}

      {/** posts */}
      {tab === "posts" && <DashPosts />}

      {/** users */}
      {tab === "users" && <DashUsers />}

      {/** comments */}
      {tab === "comments" && <DashComments />}

      {/** dashboard Comp */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}
