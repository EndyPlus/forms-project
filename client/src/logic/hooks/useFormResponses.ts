import { useParams } from "react-router";
import { useGetResponsesQuery } from "../../services/generatedFormsApi";

export const useFormResponses = () => {
  const { formId } = useParams();

  const { data, isLoading, isError } = useGetResponsesQuery(
    { formId: formId || "" },
    { skip: !formId, refetchOnMountOrArgChange: true },
  );

  const form = data?.form;
  const responses = data?.responses || [];

  const questionsMap = new Map(
    form?.questions.map((question) => [question.id, question.title]) || [],
  );

  return {
    form,
    responses,
    isLoading,
    isError,
    questionsMap,
  };
};
