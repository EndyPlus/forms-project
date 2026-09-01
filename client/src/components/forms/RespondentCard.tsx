import type { RespondentCardProps } from "../../helpers/types";

export function RespondentCard({
  index,
  submittedAt,
  answers,
  questionsMap,
}: RespondentCardProps) {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <span className="text-sm font-bold text-gray-900">
          Respondent #{index + 1}
        </span>
        {submittedAt && (
          <span className="text-xs text-gray-400">
            {new Date(Number(submittedAt)).toLocaleString()}
          </span>
        )}
      </div>

      <ul className="space-y-2 text-sm">
        {answers.map((answer) => {
          const { questionId, value } = answer;
          const isEmpty =
            value.length === 0 || (value.length === 1 && value[0] === "");

          return (
            <li key={questionId} className="flex flex-col sm:flex-row sm:gap-2">
              <span className="font-semibold text-gray-700">
                {questionsMap.get(questionId) || questionId}:
              </span>
              <span
                className={isEmpty ? "text-gray-400 italic" : "text-gray-900"}
              >
                {isEmpty ? "Empty" : value.join(", ")}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
