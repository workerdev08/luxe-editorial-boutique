import { Outlet } from "react-router-dom";
import Navigation from "@/components/ui/navigation";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;