interface PackageCardProps {
  name: string;
  price: string;
  services: string[];
  brandIdentity: boolean;
  webDev: "static" | "dynamic";
}

export default function PackageCard({
  name,
  price,
  services,
}: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#6c5ce7] transition-all duration-300 overflow-hidden">
      <div className="bg-linear-to-r from-[#1a1a2e] to-[#2d3748] text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {services.map((service, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-[#6c5ce7] mr-2 font-bold">•</span>
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 pt-4 mt-6">
          <div className="flex items-center justify-between">
            <button className="bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d3748] transition-colors">
              SUBTOTAL
            </button>
            <span className="text-xl font-bold text-[#1a1a2e]">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
