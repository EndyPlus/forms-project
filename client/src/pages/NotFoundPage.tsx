import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-center space-y-4">
      <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm space-y-3">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-lg font-semibold text-gray-800">Page Not Found</p>
        <p className="text-sm text-gray-500">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
