import { Button } from "@nextui-org/react";
import "@/app/globals.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Button color="default">
            Logo Aguamarina
        </Button>
      </div>
      <div className="navbar-options">
        <Button color="primary">
            Catalogo
        </Button>  
        <Button color="secondary">
            Nosotros
        </Button>  
        <Button color="success">
            Iniciar Sesion
        </Button>  
        <Button color="warning">
            Registrarse
        </Button>  
        <Button color="danger">
            PQRS
        </Button>  
      </div>
    </div>
  );
}

export default Navbar