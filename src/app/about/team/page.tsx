export default function TeamPage() {
  const teamMembers = [
    { name: "John Doe", role: "Lead Developer", avatar: "JD" },
    { name: "Jane Smith", role: "UI/UX Designer", avatar: "JS" },
    { name: "Alex Cari", role: "Project Manager", avatar: "AC" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200 flex items-center gap-2">
        Meet Our Team Group
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mb-3 shadow-sm">
              {member.avatar}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
