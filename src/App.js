import React from "react";
import './App.css';
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import WriteRecommendation from "./components/writerecommendation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/notfound";
import BlogPage from "./components/BlogPage";
import AddProject from "./components/AddProject";
import AddBlog from "./components/AddBlog";
import {Provider} from "./context";
import AllProjects from "./components/allprojects";
import AllBlogs from "./components/allblogs.js";
import ScrollToTop from "./components/ScrollToTheTop";
import Test from "./components/Test";

function App() {
  return (
    <Provider>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write-recommendation" element={<WriteRecommendation />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/project/add" element={<AddProject />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/test" element={<Test />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
