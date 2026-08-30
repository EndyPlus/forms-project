import crypto from "node:crypto";

interface Form {
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

interface Response {
  id: string;
  formId: string;
  answers: Answer[];
  submittedAt: string;
}

const forms: Form[] = [
  // {
  //   id: "550b9757-e999-40f6-b4d0-3b57669ceb72",
  //   title: "Test Form",
  //   description: "test description :D",
  //   questions: [
  //     {
  //       id: "527a024f-d00a-4ad8-89bc-799ae3f64fdf",
  //       title: "What is your name?",
  //       type: "TEXT",
  //       options: null,
  //     },
  //     {
  //       id: "8f761e78-96d1-452b-a1b2-0c270eab9136",
  //       title: "What is your favourite day of week?",
  //       type: "MULTIPLE_CHOICE",
  //       options: ["Monday", "Friday", "Saturday"],
  //     },
  //   ],
  // },
];

const responses: Response[] = [];

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
