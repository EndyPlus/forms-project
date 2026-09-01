/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
import { api } from './formsApi';
export type AnswerInput = {
  questionId: string | number;
  value: Array<string>;
};

export type QuestionInput = {
  options?: Array<string> | null | undefined;
  title: string;
  type: QuestionType;
};

export type QuestionType =
  | 'CHECKBOX'
  | 'DATE'
  | 'MULTIPLE_CHOICE'
  | 'TEXT';

export type GetFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFormsQuery = { forms: Array<{ id: string, title: string, description: string | null }> };

export type GetFormQueryVariables = Exact<{
  id: string | number;
}>;


export type GetFormQuery = { form: { id: string, title: string, description: string | null, questions: Array<{ id: string, title: string, type: QuestionType, options: Array<string> | null }> } | null };

export type GetResponsesQueryVariables = Exact<{
  formId: string | number;
}>;


export type GetResponsesQuery = { form: { id: string, title: string, description: string | null, questions: Array<{ id: string, title: string }> } | null, responses: Array<{ id: string, submittedAt: string, answers: Array<{ questionId: string, value: Array<string> }> }> };

export type SubmitResponseMutationVariables = Exact<{
  formId: string | number;
  answers: Array<AnswerInput> | AnswerInput;
}>;


export type SubmitResponseMutation = { submitResponse: { id: string, submittedAt: string } };

export type CreateFormMutationVariables = Exact<{
  title: string;
  description?: string | null | undefined;
  questions: Array<QuestionInput> | QuestionInput;
}>;


export type CreateFormMutation = { createForm: { id: string, title: string } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetFormsDocument = new TypedDocumentString(`
    query GetForms {
  forms {
    id
    title
    description
  }
}
    `);
export const GetFormDocument = new TypedDocumentString(`
    query GetForm($id: ID!) {
  form(id: $id) {
    id
    title
    description
    questions {
      id
      title
      type
      options
    }
  }
}
    `);
export const GetResponsesDocument = new TypedDocumentString(`
    query GetResponses($formId: ID!) {
  form(id: $formId) {
    id
    title
    description
    questions {
      id
      title
    }
  }
  responses(formId: $formId) {
    id
    submittedAt
    answers {
      questionId
      value
    }
  }
}
    `);
export const SubmitResponseDocument = new TypedDocumentString(`
    mutation SubmitResponse($formId: ID!, $answers: [AnswerInput!]!) {
  submitResponse(formId: $formId, answers: $answers) {
    id
    submittedAt
  }
}
    `);
export const CreateFormDocument = new TypedDocumentString(`
    mutation CreateForm($title: String!, $description: String, $questions: [QuestionInput!]!) {
  createForm(title: $title, description: $description, questions: $questions) {
    id
    title
  }
}
    `);

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetForms: build.query<GetFormsQuery, GetFormsQueryVariables | void>({
      query: (variables) => ({ document: GetFormsDocument as unknown as string, variables })
    }),
    GetForm: build.query<GetFormQuery, GetFormQueryVariables>({
      query: (variables) => ({ document: GetFormDocument as unknown as string, variables })
    }),
    GetResponses: build.query<GetResponsesQuery, GetResponsesQueryVariables>({
      query: (variables) => ({ document: GetResponsesDocument as unknown as string, variables })
    }),
    SubmitResponse: build.mutation<SubmitResponseMutation, SubmitResponseMutationVariables>({
      query: (variables) => ({ document: SubmitResponseDocument as unknown as string, variables })
    }),
    CreateForm: build.mutation<CreateFormMutation, CreateFormMutationVariables>({
      query: (variables) => ({ document: CreateFormDocument as unknown as string, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetFormsQuery, useLazyGetFormsQuery, useGetFormQuery, useLazyGetFormQuery, useGetResponsesQuery, useLazyGetResponsesQuery, useSubmitResponseMutation, useCreateFormMutation } = injectedRtkApi;

