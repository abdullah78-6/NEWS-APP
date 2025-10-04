import But from "./components/buttons";
import Head from "./components/header";
import Navbar from "./components/navbar"
import News from "./components/news";
import { Gives } from "./store/context"

function App() {
  
  return  <Gives>
      <Navbar/>
      <Head/>
      <But/>
      <News/>
    </Gives>

  

}

export default App;
