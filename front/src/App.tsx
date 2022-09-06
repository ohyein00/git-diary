import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from "./assets/GlobalStyles";
import SearchPage from "./pages/SearchPage";
import BookmarkPage from "./pages/BookmarkPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookmark/all" element={<BookmarkPage />} />
        <Route path="/bookmark/:id/:repoName" element={<BookmarkPage />} />
      </Routes>
    </>
  );
}

export default App;
