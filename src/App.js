/**
 * TODO:
 * - [DONE] Login & Authentication System
 * - [IN PROGRESS] Welcome/Home Page (React-Scroll & Requires new Layout)
 * - [IN PROGRESS] Profile/Dashboard Page (Would show functions a user could do including adding an API)
 * - Search Component (To be added to all pages as a quick results version & should be an advanced search on its own page)
 * - Challenges Page/Component
 * - Thrillacons Page/Component
 * - CHQ CV Page/Component (Should be part of the profile)
 * - Add Background to both Login & Register
 */

import React from "react";
import "./Styles/app.scss";
import Main from "./Components/Main/Main";

const App = () => (
  <div className="App">
    <Main />
  </div>
);

export default App;
