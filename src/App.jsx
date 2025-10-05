import But from "./components/buttons";
import Head from "./components/header";
import Navbar from "./components/navbar"
import News from "./components/news";
import { Gives } from "./store/context"
import { useContext } from "react";
import { Helper } from "./store/context";
import Application from "./components/application";
import Footer from "./components/footer";
function Inner(){
  const {color}=useContext(Helper);

return <div className={color?`bg-black text-gray-600 transition duration-500 ease-in-out`:"transition duration-500 ease-in-out"}>
    <Navbar />
      <Head />
      <But />
      <News />
      <Application/>
      <Footer/>

  </div>
}

function App() {
  
  return  <Gives>
      <Inner/>
    </Gives>

  

}

export default App;
