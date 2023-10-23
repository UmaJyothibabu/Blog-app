import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Addpost from "./components/Addpost";
import ViewallPosts from "./components/ViewallPosts";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addpost"
          element={
            <Main
              child={
                <Addpost
                  method="post"
                  data={{ title: "", content: "", img_url: "" }}
                />
              }
            />
          }
        />
        <Route
          path="/viewallposts"
          element={<Main child={<ViewallPosts />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
