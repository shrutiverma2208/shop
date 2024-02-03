
import './App.css';
import Button from './Components/Button';
import img1 from './images/img1.avif';
import logo1 from './images/logo1.jpeg';
import Featured from './Components/Featured';
import shoes from './images/shoes.png'

function App() {
   const handleClick=()=>{
    console.log('clicked');
   }

   const hndleFeaturedClicked=()=>{
    console.log('Featured Clicked')
   }
  return (
    <div className="App">
      <>
      <Featured
      featuredMainImage={shoes}
      title='Shoes & Footwear'
      onClick={hndleFeaturedClicked}
      
      />
     <Button
     mainImage={img1}
     iconImage={logo1}
     mainText='abcd'
     subText='1234'
     onClick={handleClick}
     
     />
     </>
    </div>
  );
}

export default App;
