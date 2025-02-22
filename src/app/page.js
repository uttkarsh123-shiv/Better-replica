import Navbar from "./component/Navbar";
import First from "./component/First";
import Third from "./component/Third";
import Fourth from "./component/Fourth";
import Fifeth from "./component/Fifeth";
import Second from "./component/Second";
export default function Home() {
  return (
    <div className="main">
<Navbar
  bgColor="#004733" 
  textColor="white"  
  animateOnScroll={true} 
/>
   <First />
      <Second />
      <Third />
      <Fourth />
      <Fifeth />
    </div>
  );
}
