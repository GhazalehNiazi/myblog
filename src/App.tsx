import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "components/About";
import Articles from "components/Articles";
import Resume from "components/Resume";

import HomePage from "pages/HomePage";

import MainLayout from "Layout/MainLayout";
import Redirect404 from "components/404Redirect";

const App: FC = () => {
  return (
    <BrowserRouter basename="/myblog">
      <Redirect404 />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="aboutme" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="articles" element={<Articles />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
