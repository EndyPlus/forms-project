import { useNavigate, useParams } from "react-router";

import type { SubmitEvent } from "react";
import {
  useGetFormQuery,
  useSubmitResponseMutation,
} from "../../services/generatedFormsApi";

export const useFormFiller = () => {
  const navigate = useNavigate();
  const { formId } = useParams();

  const {
    isLoading: isFormLoading,
    isError: isFormError,
    data,
  } = useGetFormQuery({ id: formId || "" }, { skip: !formId });

  const form = data?.form;

  const [submitResponse, { isLoading: isFormSubmitting }] =
    useSubmitResponseMutation();

  async function handleSubmitForm(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form || !formId) return;

    const formData = new FormData(e.currentTarget);

    const answers = form.questions.map((question) => {
      const values = formData.getAll(question.id) as string[];

      return {
        questionId: question.id,
        value: values,
      };
    });

    console.log("Payload:", answers);

    try {
      await submitResponse({ formId, answers }).unwrap();
      console.log("successful");
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  }

  return {
    form,
    isFormLoading,
    isFormError,
    isFormSubmitting,
    handleSubmitForm,
  };
};
