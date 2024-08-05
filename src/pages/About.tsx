import Sidebar from '../components/Sidebar';
import About from '../components/About';


function Home() {
  return (
    <div className="flex">
        <Sidebar highlight='about' />
        <About />
    </div>
  )
}

export default Home