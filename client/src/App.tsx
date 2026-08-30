import { BrowserRouter, Route, Routes } from "react-router";

import { HomePage } from "./pages/HomePage";
import { CreateFormPage } from "./pages/CreateFormPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { FillFormPage } from "./pages/FillFormPage";
import { ResponseFormPage } from "./pages/ResponseFormPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />

        <Route path="forms">
          <Route path="new" element={<CreateFormPage />} />
          <Route path=":formId/fill" element={<FillFormPage />} />
          <Route path=":formId/responses" element={<ResponseFormPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
