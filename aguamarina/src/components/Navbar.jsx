import { Button } from "@nextui-org/react";
import Link from "next/link"; 
import "@/app/globals.css"; 
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
          <Image 
            src="/assets/logos/Logo_2.png" 
            alt="Logo Aguamarina"
            width={150} 
            height={50} 
          />
      </div>
      <div className="navbar-options">
        <Button>
          Catálogo
        </Button>
        <Button>
          Nosotros
        </Button>
        <Button>
          Iniciar Sesión
        </Button>
        <Button >
          Registrarse
        </Button>
        <Button >
          PQRS
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
