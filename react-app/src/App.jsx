import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import hero from "./assets/hero.png";

const courses = [
  { title: "Web development", desc: "Learn Web development with react" },
  { title: "SEO", desc: "Learn SEO with modern tips and tricks" },
  { title: "CEH", desc: "Learn CEH with modern tips and tricks" },
];

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Navbar />
      <button
        className="border-2 border-blue-400 px-2 py-1 rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Count {count}
      </button>

      <button
        className="border-2 border-purple-400 px-2 py-1 ml-2 rounded-lg"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </button>

      {/* <div className='card-container'>
        <Card img={hero} title="Web Development" desc='Learn web development' />
        <Card img='./hero.png' title="SEO" desc='Learn SEO' />
        <Card title="CEH" desc='Learn CEH' />
      </div> */}

      {isVisible && (
        <div className="card-container">
          {courses.map((course) => (
            <Card title={course.title} desc={course.desc} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
