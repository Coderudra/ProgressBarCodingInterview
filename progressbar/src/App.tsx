
import "./App.css";

const StepsCompleted: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
           width: `${progress}%`,
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuenow={progress}
      >
        {progress}%
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
