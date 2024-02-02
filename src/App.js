
import './App.css';
import Button from './Components/Button';
import img1 from './images/img1.avif';
import logo1 from './images/logo1.jpeg';

function App() {
   const handleClick=()=>{
    console.log('clicked');
   }
  return (
    <div className="App">
     <Button
     mainImage={img1}
     iconImage={logo1}
     mainText='abcd'
     subText='1234'
     onClick={handleClick}
     
     />
    </div>
  );
}

export default App;
