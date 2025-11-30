
import { FaTruckFast, FaGlobe, FaBoxOpen } from "react-icons/fa6";

const FEATURES = [
  {
    id: 1,
    title: "Fast Delivery",
    subtitle: "Express shipping options available worldwide",
    Icon: FaTruckFast,
  },
  {
    id: 2,
    title: "International",
    subtitle: "Serving customers across the globe",
    Icon: FaGlobe,
  },
  {
    id: 3,
    title: "Easy Returns",
    subtitle: "30-day return policy for most items",
    Icon: FaBoxOpen,
  },
];

export const GlobalShipping = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Global Shipping
          </h2>
          <div className="mt-3 w-20 h-1 bg-sky-500 mx-auto rounded-sm" />
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-lg">
            We deliver to over 100 countries worldwide
          </p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {FEATURES.map(({ id, title, subtitle, Icon }) => (
            <div key={id} className="flex flex-col items-center">
              {/* Icon container */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <Icon size={40} className="text-blue-600" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {title}
              </h3>

              <p classnName="text-slate-600 text-base">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalShipping;
