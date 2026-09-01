import { Link } from "react-router";
import { useGetFormsQuery } from "../services/generatedFormsApi";
import { PageError, PageLoader } from "../components/common/UIStates";
import { FormCard } from "../components/forms/FormCard";

export function HomePage() {
  const { data, isLoading, isError } = useGetFormsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) return <PageLoader message="Loading forms..." />;
  if (isError) return <PageError message="Failed to load forms." />;

  const forms = data?.forms || [];

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forms</h1>
          <p className="text-sm text-gray-500">Manage and fill out forms</p>
        </div>
        <Link
          to="/forms/new"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors"
        >
          + Create Form
        </Link>
      </div>

      {forms.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No forms available yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {forms.map((form) => (
            <FormCard
              key={form.id}
              id={form.id}
              title={form.title}
              description={form.description}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
