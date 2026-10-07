import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Next.js Multi-Page Practice!{" "}
      </h1>
      <p className="text-gray-600 mb-4">
        This project is built to learn Next.js file-based App Router with
        TypeScript.
      </p>
      <div className="mt-4 flex gap-4">
        <Link href="/about" className="text-blue-600 hover:underline">
          Explore About Sections
        </Link>
        <Link href="/blogs" className="text-blue-600 hover:underline">
          Read Blogs
        </Link>
      </div>
    </div>
  );
}
