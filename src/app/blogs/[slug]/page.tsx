import Link from "next/link";

interface BlogDetailsProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({ params }: BlogDetailsProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 my-8">
      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium mb-6 gap-1 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Back to all blogs
      </Link>

      {/* Header Section */}
      <header className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
          {formattedTitle}
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500 italic bg-gray-50 p-2 rounded-md w-fit">
          <span className="font-semibold text-gray-700 not-italic">
            Post Slug:
          </span>
          <code className="text-blue-600 font-mono">{slug}</code>
        </div>
      </header>

      {/* Blog Content Section */}
      <article className="text-gray-700 leading-relaxed space-y-4">
        <p className="text-lg text-gray-600">
          This is a dynamically generated page for the blog post content.
          Next.js catches the URL parameter from the dynamic folder structure{" "}
          <code className="bg-gray-100 text-red-500 px-1.5 py-0.5 rounded text-sm font-mono">
            [slug]
          </code>
          .
        </p>

        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mt-6">
          <p className="text-sm text-blue-800 font-medium">
            <strong>Pro Tip:</strong> In a real-world app, you can use the{" "}
            <code className="font-mono bg-blue-100 px-1 rounded">{slug}</code>{" "}
            parameter to fetch the article content from a CMS or Database.
          </p>
        </div>
      </article>
    </div>
  );
}
