import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70vh]">
      {/* Sidebar for Sub-pages */}
      <aside className="w-50 bg-[#f4f4f4] p-4 border-r border-[#ddd]">
        <h3 className="font-bold text-lg mb-4">About Us</h3>
        <ul className="list-none p-0 m-0">
          <li className="mb-2.5">
            <Link href="/about" className="text-blue-600 hover:underline">
              Main Overview
            </Link>
          </li>
          <li className="mb-2.5">
            <Link href="/about/team" className="text-blue-600 hover:underline">
              Our Team
            </Link>
          </li>
          <li className="mb-2.5">
            <Link
              href="/about/history"
              className="text-blue-600 hover:underline"
            >
              Our History
            </Link>
          </li>
          <li className="mb-2.5">
            <Link
              href="/about/vision"
              className="text-blue-600 hover:underline"
            >
              Our Vision
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content Area for About sub-routes */}
      <section className="p-8 flex-1">{children}</section>
    </div>
  );
}
