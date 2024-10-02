import { Button } from "@nextui-org/react";
import "@/app/globals.css";

const NavbarDashboard = () => {
  return (
    <div className="navbar-dashboard">
      <div className="mb-8">
        <Button color="default" auto>
          Logo Aguamarina
        </Button>
      </div>
      <div className="navbar-dashboard-options">
        <Button color="primary" className="w-full">
          Primary
        </Button>
        <Button color="secondary" className="w-full">
          Secondary
        </Button>
        <Button color="success" className="w-full">
          Success
        </Button>
        <Button color="warning" className="w-full">
          Warning
        </Button>
        <Button color="danger" className="w-full">
          Danger
        </Button>
      </div>
    </div>
  );
}

export default NavbarDashboard;
