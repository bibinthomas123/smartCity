import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";

export const metadata = {
  title: "CityPulse — Magdeburg City Explorer",
  description: "Explore real-time and historical data for Magdeburg: people, housing, mobility, environment, economy and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex h-screen overflow-hidden antialiased"
        style={{ background: "#F5EDD8", color: "#2D1F0F" }}
      >
        {/* Fixed left sidebar — hidden on mobile */}
        <Sidebar />

        {/* Main area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile top bar */}
          <MobileHeader />

          {/* Scrollable content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
