export default function PageHeader({ title, subtitle, children }) {
  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#2D1F0F" }}>{title}</h1>
        {subtitle && (
          <p className="mt-1.5 text-[14px]" style={{ color: "rgba(45,31,15,0.50)" }}>{subtitle}</p>
        )}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
