import Sidebar from '../components/Sidebar';
import MyPokemons from '../components/MyPokemons';


function Home() {
  return (
    <div className="flex">
        <Sidebar highlight='home' />
        <MyPokemons />
    </div>
  )
}

export default Home