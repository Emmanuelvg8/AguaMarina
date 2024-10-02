import "@/app/globals.css";
import NavbarDashboard from  "@/components/NavbarDashboard";

export default function RootLayout({ children }) {
  return (
    <div>
      <NavbarDashboard />
      <main>{children}</main>
    </div>
  );
}
