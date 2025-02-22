
import { useEffect, useState } from "react";
import "./App.css";

const StepsCompleted: React.FC<{ progress: number }> = ({ progress }) => {

  const[animatedProgress,setAnimatedProgress]=useState(0);

  useEffect(()=>{
    setTimeout(()=>setAnimatedProgress(progress) ,100)
  },[progress])
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //  width: `${progress}%`,
          transform:`translateX(${animatedProgress-100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuenow={progress}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};
function App() {
  const data = [10, 40, 50, 70, 30, 1];
  return (
    <>
      <h1>Progress Bar</h1>
      {data.map((value) => {
        return <StepsCompleted key={value} progress={value} />;
      })}
    </>
  );
}

export default App;
