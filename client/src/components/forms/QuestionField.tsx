import type { QuestionFieldProps } from "../../helpers/types";

export function QuestionField({ question }: QuestionFieldProps) {
  const { id, title, type, options } = question;

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm space-y-3">
      <h3 className="font-semibold text-gray-900">{title}</h3>

      {type === "TEXT" && (
        <input
          type="text"
          name={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your answer"
        />
      )}

      {type === "DATE" && (
        <input
          type="date"
          name={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      )}

      {(type === "CHECKBOX" || type === "MULTIPLE_CHOICE") && (
        <div className="space-y-2">
          {options?.map((option) => {
            const optionId = `${id}-${option}`;
            const inputType = type === "CHECKBOX" ? "checkbox" : "radio";

            return (
              <div key={optionId} className="flex items-center gap-3">
                <input
                  type={inputType}
                  name={id}
                  value={option}
                  id={optionId}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                />
                <label
                  htmlFor={optionId}
                  className="text-sm text-gray-700 cursor-pointer select-none"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
