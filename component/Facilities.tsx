import { MonitorSmartphone, FlaskConical, Library, Trophy } from "lucide-react";

export default function Facilities() {
  const facilities = [
    {
      title: "Smart Classes",
      icon: <MonitorSmartphone size={32} />,
      desc: "Interactive digital learning with modern multimedia tools.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Science Lab",
      icon: <FlaskConical size={32} />,
      desc: "Well-equipped laboratories for practical hands-on learning.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Library",
      icon: <Library size={32} />,
      desc: "A vast collection of books and digital resources for students.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      title: "Sports",
      icon: <Trophy size={32} />,
      desc: "Professional coaching and facilities for various indoor & outdoor sports.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            World-Class <span className="text-blue-700">Facilities</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide an environment that fosters growth, creativity, and excellence through our state-of-the-art infrastructure.
          </p>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm">
                {item.desc}
              </p>

              <div className="mt-6 flex items-center text-blue-700 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more 
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}