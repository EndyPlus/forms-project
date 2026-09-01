import { Link } from "react-router";
import type { QuestionType } from "../helpers/generatedTypes";
import { useFormBuilder } from "../logic/hooks/useFormBuilder";

export function CreateFormPage() {
  const {
    title,
    description,
    questions,
    isSubmitting,
    handleSetTitle,
    handleSetDescription,
    addQuestion,
    removeQuestion,
    updateQuestionTitle,
    updateQuestionType,
    addOption,
    updateOption,
    removeOption,
    handleSubmit,
  } = useFormBuilder();

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-6">
      <div>
        <Link
          to="/"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors inline-block mb-3"
        >
          &larr; Back to Forms
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Create New Form</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Form Title"
              value={title}
              onChange={handleSetTitle}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Description
            </label>
            <textarea
              placeholder="Form description (optional)"
              value={description}
              onChange={handleSetDescription}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900">Questions</h2>

          {questions.map((question, questionIndex) => {
            const {
              type: questionType,
              title: questionTitle,
              options: questionOptions,
            } = question;

            return (
              <div
                key={questionIndex}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder={`Question ${questionIndex + 1}`}
                    value={questionTitle}
                    onChange={(e) =>
                      updateQuestionTitle(questionIndex, e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />

                  <select
                    value={questionType}
                    onChange={(e) =>
                      updateQuestionType(
                        questionIndex,
                        e.target.value as QuestionType,
                      )
                    }
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="TEXT">Text</option>
                    <option value="DATE">Date</option>
                    <option value="MULTIPLE_CHOICE">Multiple Choice</option>
                    <option value="CHECKBOX">Checkboxes</option>
                  </select>
                </div>

                {(questionType === "MULTIPLE_CHOICE" ||
                  questionType === "CHECKBOX") && (
                  <div className="pl-2 border-l-2 border-gray-100 space-y-2">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Options
                    </span>

                    {questionOptions?.map((opt, optIdx) => (
                      <div key={optIdx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={opt}
                          onChange={(e) =>
                            updateOption(questionIndex, optIdx, e.target.value)
                          }
                          className="flex-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        {questionOptions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeOption(questionIndex, optIdx)}
                            className="px-2 py-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            &#10005;
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addOption(questionIndex)}
                      className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      + Add option
                    </button>
                  </div>
                )}

                {questions.length > 1 && (
                  <div className="pt-2 border-t border-gray-100 flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeQuestion(questionIndex)}
                      className="text-xs font-medium text-red-600 hover:text-red-700 cursor-pointer"
                    >
                      Remove question
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-md transition-colors cursor-pointer"
          >
            + Add question
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium text-sm rounded-md transition-colors cursor-pointer"
          >
            {isSubmitting ? "Saving..." : "Create Form"}
          </button>
        </div>
      </form>
    </main>
  );
}
