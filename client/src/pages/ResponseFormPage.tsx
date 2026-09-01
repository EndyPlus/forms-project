import { Link } from "react-router";
import { useFormResponses } from "../logic/hooks/useFormResponses";
import { PageError, PageLoader } from "../components/common/UIStates";
import { RespondentCard } from "../components/forms/RespondentCard";

export function ResponseFormPage() {
  const { form, responses, isLoading, isError, questionsMap } =
    useFormResponses();

  if (isLoading) return <PageLoader message="Loading responses..." />;

  if (isError || !form) {
    return (
      <main className="max-w-2xl mx-auto p-6 space-y-4">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          &larr; Back to Forms
        </Link>
        <PageError message="Form or responses could not be loaded." />
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <div>
        <Link
          to="/"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors inline-block mb-3"
        >
          &larr; Back to Forms
        </Link>
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{form.title}</h1>
            {form.description && (
              <p className="text-sm text-gray-500 mt-1">{form.description}</p>
            )}
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 whitespace-nowrap">
            {responses.length}{" "}
            {responses.length === 1 ? "Response" : "Responses"}
          </span>
        </div>
      </div>

      {responses.length === 0 ? (
        <p className="text-center py-8 text-gray-500">
          No responses submitted yet.
        </p>
      ) : (
        <div className="space-y-4">
          {responses.map((response, index) => (
            <RespondentCard
              key={response.id}
              index={index}
              submittedAt={response.submittedAt}
              answers={response.answers}
              questionsMap={questionsMap}
            />
          ))}
        </div>
      )}
    </main>
  );
}
