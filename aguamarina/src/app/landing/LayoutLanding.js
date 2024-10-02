import "@/app/globals.css";
import Navbar from "@/components/Navbar"


export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
