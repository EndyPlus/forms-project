import { Link } from "react-router";
import type { FormCardProps } from "../../helpers/types";

export function FormCard({ id, title, description }: FormCardProps) {
  return (
    <li className="p-4 bg-white border border-gray-200 rounded-lg flex items-center justify-between gap-4">
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <div className="flex items-center gap-2">
        <Link
          to={`/forms/${id}/fill`}
          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded transition-colors"
        >
          Fill
        </Link>
        <Link
          to={`/forms/${id}/responses`}
          className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-medium rounded transition-colors"
        >
          Responses
        </Link>
      </div>
    </li>
  );
}
