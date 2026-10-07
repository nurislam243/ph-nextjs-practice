import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PH Next.js practice",
  description: "Multi-page practice app using TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans m-0 p-0">
        {/* Header section */}
        <header className="bg-[#333] p-4 color-white text-white">
          <nav className="flex gap-3.75 max-w-300 mx-auto">
            <Link href="/" className="text-white no-underline hover:underline">
              Home
            </Link>
            <Link
              href="/about"
              className="text-white no-underline hover:underline"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white no-underline hover:underline"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className="text-white no-underline hover:underline"
            >
              Blogs
            </Link>
          </nav>
        </header>

        {/* Main content section */}
        <main className="min-h-[80vh]">{children}</main>

        {/* Footer section */}
        <footer className="bg-[#eee] p-4 text-center text-gray-700">
          <p>© 2026 Next.js Practice Project</p>
        </footer>
      </body>
    </html>
  );
}
