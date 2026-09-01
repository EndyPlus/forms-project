import { Link } from "react-router";
import { useFormFiller } from "../logic/hooks/useFormFiller";
import { PageError, PageLoader } from "../components/common/UIStates";
import { QuestionField } from "../components/forms/QuestionField";

export function FillFormPage() {
  const {
    form,
    isFormLoading,
    isFormError,
    isFormSubmitting,
    handleSubmitForm,
  } = useFormFiller();

  if (isFormLoading) return <PageLoader message="Loading form..." />;

  if (isFormError || !form) {
    return (
      <main className="max-w-2xl mx-auto p-6 space-y-4">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          &larr; Back to Forms
        </Link>
        <PageError message="Failed to load form." />
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
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">{form.title}</h1>
          {form.description && (
            <p className="text-sm text-gray-500">{form.description}</p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmitForm} className="space-y-4">
        {form.questions.map((question) => (
          <QuestionField key={question.id} question={question} />
        ))}

        <button
          type="submit"
          disabled={isFormSubmitting}
          className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium text-sm rounded-md transition-colors cursor-pointer"
        >
          {isFormSubmitting ? "Submitting..." : "Submit Response"}
        </button>
      </form>
    </main>
  );
}
