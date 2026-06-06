import PageHeader from "@/components/ui/PageHeader";
import MapWrapper from "./MapWrapper";

export default function MapPage() {
  return (
    <div className="page-fade-in p-6 lg:p-8 space-y-4">
      <PageHeader
        title="City Intelligence Map"
        subtitle="Interactive district-level data for Magdeburg — switch layers to explore population, air quality, housing costs and green space."
      />
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(160,130,90,0.28)",
          boxShadow: "0 4px 20px rgba(160,130,90,0.14)",
          height: "calc(100vh - 200px)",
          minHeight: 560,
        }}
      >
        <MapWrapper />
      </div>
    </div>
  );
}
