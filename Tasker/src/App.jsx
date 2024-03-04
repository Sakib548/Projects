import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";
function App() {
  return (
    <>
      <p>Welcome to Tasker</p>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>

      <Footer />
    </>
  );
}

export default App;
