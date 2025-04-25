import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"


function App() {


  return (
    <div className="h-screen relative w-screen overflow-x-hidden bg-indigo-950 font-['Grenette']">
      <div className="absolute bottom-10 -left-20 h-80 w-80 rounded-full blur-[90px]
      bg-[radial-gradient(circle_at_center,_theme(colors.indigo-600),_transparent)]
      "></div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
