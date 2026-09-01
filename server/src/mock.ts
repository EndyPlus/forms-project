import type { Form, Response } from "./types/generatedServerTypes.js";

export const mockedForms: Form[] = [
  {
    id: "550b9757-e999-40f6-b4d0-3b57669ceb72",
    title: "Test Form",
    description: "test description :D",
    questions: [
      {
        id: "527a024f-d00a-4ad8-89bc-799ae3f64fdf",
        title: "What is your name?",
        type: "TEXT",
        options: null,
      },
      {
        id: "8f761e78-96d1-452b-a1b2-0c270eab9136",
        title: "What is your favourite day of week?",
        type: "MULTIPLE_CHOICE",
        options: ["Monday", "Friday", "Saturday"],
      },
    ],
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-111111111111",
    title: "Employee Onboarding Checklist",
    description: "Initial data collection for new hires.",
    questions: [
      {
        id: "q101-name",
        title: "Full Legal Name",
        type: "TEXT",
        options: null,
      },
      {
        id: "q102-start-date",
        title: "Proposed Start Date",
        type: "DATE",
        options: null,
      },
      {
        id: "q103-department",
        title: "Department",
        type: "MULTIPLE_CHOICE",
        options: ["Engineering", "Product", "Design", "Human Resources"],
      },
      {
        id: "q104-equipment",
        title: "Required Equipment",
        type: "CHECKBOX",
        options: [
          "MacBook Pro",
          "External Monitor",
          "Ergonomic Keyboard",
          "Wireless Mouse",
        ],
      },
    ],
  },
  {
    id: "b2c3d4e5-f6a7-8901-bcde-222222222222",
    title: "Event RSVP & Preferences",
    description:
      "Please let us know if you'll be joining our quarterly summit.",
    questions: [
      {
        id: "q201-attendance",
        title: "Will you attend the event?",
        type: "MULTIPLE_CHOICE",
        options: ["Yes, in person", "Yes, remotely", "No"],
      },
      {
        id: "q202-dietary",
        title: "Dietary Restrictions",
        type: "CHECKBOX",
        options: ["Vegetarian", "Vegan", "Gluten-Free", "Nut Allergy"],
      },
      {
        id: "q203-notes",
        title: "Special requests or accessibility needs",
        type: "TEXT",
        options: null,
      },
    ],
  },
  {
    id: "c3d4e5f6-a7b8-9012-cdef-333333333333",
    title: "Product Feedback Survey",
    description: null,
    questions: [
      {
        id: "q301-usage-date",
        title: "Date of last feature usage",
        type: "DATE",
        options: null,
      },
      {
        id: "q302-satisfaction",
        title: "How satisfied are you with the platform performance?",
        type: "MULTIPLE_CHOICE",
        options: ["Very Satisfied", "Neutral", "Unsatisfied"],
      },
      {
        id: "q303-features",
        title: "Which features do you use most often?",
        type: "CHECKBOX",
        options: [
          "Dashboard Analytics",
          "Export Tools",
          "API Integration",
          "User Management",
        ],
      },
    ],
  },
];

export const mockedResponses: Response[] = [
  {
    id: "8c2b1fc6-4012-48e1-8bda-07d184d51bab",
    formId: "a1b2c3d4-e5f6-7890-abcd-111111111111",
    answers: [
      {
        questionId: "q101-name",
        value: ["sadasdsadas"],
      },
      {
        questionId: "q102-start-date",
        value: ["2026-09-01"],
      },
      {
        questionId: "q103-department",
        value: ["Engineering"],
      },
      {
        questionId: "q104-equipment",
        value: ["MacBook Pro", "External Monitor"],
      },
    ],
    submittedAt: "2026-08-31T19:26:34.046Z",
  },
  {
    id: "9e39a7e5-1360-4ff6-84a5-c62515961acd",
    formId: "a1b2c3d4-e5f6-7890-abcd-111111111111",
    answers: [
      {
        questionId: "q101-name",
        value: ["test"],
      },
      {
        questionId: "q102-start-date",
        value: ["2026-09-01"],
      },
      {
        questionId: "q103-department",
        value: ["Design"],
      },
      {
        questionId: "q104-equipment",
        value: [
          "MacBook Pro",
          "External Monitor",
          "Ergonomic Keyboard",
          "Wireless Mouse",
        ],
      },
    ],
    submittedAt: "2026-08-31T19:29:43.660Z",
  },
];
