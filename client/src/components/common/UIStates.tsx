export function PageLoader({ message = "Loading..." }: { message?: string }) {
  return <main className="max-w-2xl mx-auto p-6 text-gray-500">{message}</main>;
}

export function PageError({
  message = "Failed to load data.",
}: {
  message?: string;
}) {
  return <main className="max-w-2xl mx-auto p-6 text-red-600">{message}</main>;
}
