import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md: flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
