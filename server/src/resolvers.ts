import crypto from "node:crypto";
import { mockedForms, mockedResponses } from "./mock.js";

export interface Form {
  id: string;
  title: string;
  description?: string | null;
  questions: Question[];
}

type QuestionType = "TEXT" | "MULTIPLE_CHOICE" | "CHECKBOX" | "DATE";

interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options?: string[] | null;
}

interface Answer {
  questionId: string;
  value: string[];
}

export interface Response {
  id: string;
  formId: string;
  answers: Answer[];
  submittedAt: string;
}

const forms: Form[] = [...mockedForms];

const responses: Response[] = [...mockedResponses];

export const resolvers = {
  Query: {
    forms: () => forms,
    form: (parent: unknown, args: { id: string }) => {
      return forms.find((form) => form.id === args.id);
    },
    responses: (parent: unknown, args: { formId: string }) => {
      return responses.filter((response) => response.formId === args.formId);
    },
  },
  Mutation: {
    createForm: (
      parent: unknown,
      args: {
        title: string;
        description?: string;
        questions: Question[];
      },
    ) => {
      const { title, description, questions } = args;

      const newForm: Form = {
        id: crypto.randomUUID() as string,
        title,
        description: description ?? null,
        questions: questions.map((question) => {
          return { ...question, id: crypto.randomUUID() as string };
        }),
      };

      forms.push(newForm);

      return newForm;
    },

    submitResponse: (
      parent: unknown,
      args: {
        formId: string;
        answers: Answer[];
      },
    ) => {
      const { formId, answers } = args;

      const newResponse: Response = {
        id: crypto.randomUUID() as string,
        formId,
        answers,
        submittedAt: new Date().toISOString(),
      };

      responses.push(newResponse);

      return newResponse;
    },
  },
};
