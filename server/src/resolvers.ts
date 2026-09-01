import crypto from "node:crypto";
import type {
  Answer,
  Form,
  Question,
  Response,
} from "./types/generatedServerTypes.js";
import { forms, responses } from "./db.js";

export const resolvers = {
  Query: {
    forms: () => forms,
    form: (_: unknown, args: { id: string }) => {
      return forms.find((form) => form.id === args.id);
    },
    responses: (_: unknown, args: { formId: string }) => {
      return responses.filter((response) => response.formId === args.formId);
    },
  },
  Mutation: {
    createForm: (
      _: unknown,
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
      _: unknown,
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
