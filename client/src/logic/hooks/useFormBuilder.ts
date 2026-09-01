import { useNavigate } from "react-router";
import { useCreateFormMutation } from "../../services/generatedFormsApi";
import { useState, type ChangeEvent } from "react";
import type { QuestionInput, QuestionType } from "../../helpers/generatedTypes";

export const useFormBuilder = () => {
  const navigate = useNavigate();
  const [createForm, { isLoading: isSubmitting }] = useCreateFormMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [questions, setQuestions] = useState<QuestionInput[]>([
    { title: "", type: "TEXT" as QuestionType, options: [] },
  ]);

  const handleSetTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleSetDescription = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { title: "", type: "TEXT" as QuestionType, options: ["Option 1"] },
    ]);
  };

  const removeQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuestionTitle = (index: number, title: string) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, title } : q)),
    );
  };

  const updateQuestionType = (index: number, type: QuestionType) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== index) return q;

        const isChoiceType = type === "MULTIPLE_CHOICE" || type === "CHECKBOX";

        return {
          ...q,
          type,
          options: isChoiceType
            ? q.options && q.options.length > 0
              ? q.options
              : ["Option 1"]
            : [],
        };
      }),
    );
  };

  const addOption = (qIndex: number) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;
        const currentOpts = q.options || [];
        return {
          ...q,
          options: [...currentOpts, `Option ${currentOpts.length + 1}`],
        };
      }),
    );
  };

  const updateOption = (qIndex: number, optIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;
        const updatedOpts = [...(q.options || [])];
        updatedOpts[optIndex] = value;
        return { ...q, options: updatedOpts };
      }),
    );
  };

  const removeOption = (qIndex: number, optIndex: number) => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i !== qIndex) return q;
        return {
          ...q,
          options: (q.options || []).filter((_, idx) => idx !== optIndex),
        };
      }),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await createForm({ title, description, questions }).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return {
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
  };
};
