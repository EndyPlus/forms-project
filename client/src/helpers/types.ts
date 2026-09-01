import type { Form, Question, Response } from "./generatedTypes";

export type FormCardProps = Pick<Form, "id" | "title" | "description">;

export interface QuestionFieldProps {
  question: Question;
}

export interface RespondentCardProps extends Pick<
  Response,
  "submittedAt" | "answers"
> {
  index: number;
  questionsMap: Map<string, string>;
}
