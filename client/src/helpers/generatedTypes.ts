export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  questionId: Scalars['ID']['output'];
  value: Array<Scalars['String']['output']>;
};

export type AnswerInput = {
  questionId: Scalars['ID']['input'];
  value: Array<Scalars['String']['input']>;
};

export type Form = {
  __typename?: 'Form';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  questions: Array<Question>;
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm: Form;
  submitResponse: Response;
};


export type MutationCreateFormArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  questions: Array<QuestionInput>;
  title: Scalars['String']['input'];
};


export type MutationSubmitResponseArgs = {
  answers: Array<AnswerInput>;
  formId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  form?: Maybe<Form>;
  forms: Array<Form>;
  responses: Array<Response>;
};


export type QueryFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryResponsesArgs = {
  formId: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  type: QuestionType;
};

export type QuestionInput = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionType =
  | 'CHECKBOX'
  | 'DATE'
  | 'MULTIPLE_CHOICE'
  | 'TEXT';

export type Response = {
  __typename?: 'Response';
  answers: Array<Answer>;
  formId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  submittedAt: Scalars['String']['output'];
};
