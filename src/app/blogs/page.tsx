import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  readTime: string;
}

export default function BlogsPage() {
  const dummyBlogs: Blog[] = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started",
      date: "Oct 12, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Mastering TypeScript Routing",
      slug: "mastering-typescript",
      date: "Oct 15, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Why Next.js App Router is Awesome",
      slug: "app-router-awesome",
      date: "Oct 20, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200 flex items-center gap-2">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogs.map((blog: Blog) => (
          <div
            key={blog.id}
            className="flex flex-col justify-between p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h3>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200">
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors gap-1"
              >
                Read Article
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
