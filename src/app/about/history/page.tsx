export default function HistoryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200 flex items-center gap-2">
        Our History
      </h2>

      <div className="relative pl-6 border-l-2 border-blue-500 my-4 space-y-4">
        {/* Timeline Indicator Badge */}
        <div className="absolute -left-[17px] top-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">
          2022
        </div>

        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Where It All Began
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Founded in 2022, we started as a small team of passionate developers
            and have grown significantly over the years.
          </p>
        </div>
      </div>
    </div>
  );
}
