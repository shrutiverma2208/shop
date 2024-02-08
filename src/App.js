
import './App.css';
import Button from './Components/Button';
import img1 from './images/img1.avif';
import logo1 from './images/logo1.jpeg';
import milkshake from './images/milkshake.jpeg'
import Featured from './Components/Featured';
import shoes from './images/shoes.avif'
import Browse from './Components/Browse';
import Beverage from './Components/Beverage';
import haircut from './images/haircut.jpeg'

function App() {
   const handleClick=()=>{
    console.log('clicked');
   }

   const hndleFeaturedClicked=()=>{
    console.log('Featured Clicked')
   }

   const handleBeverage=()=>{
    console.log('Beverage clicked')
   }
   const handleBrowser=()=>{
    console.log('Browser Clicked')
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
     mainText="Tom's bakery"
     subText='30 mins'
     distance='600km'
     onClick={handleClick}
     
     />
     
     <Beverage
     onClick={handleBeverage}
     beverage='Black Eye Milkshake'
     subText='oreo cookies with chocolates'
     price='$22'
     image={milkshake}

     />
     <Browse
     onClick={handleBrowser}
     BrowserImage={haircut}
     BrowserName='Salon'
     />
     </>
    </div>
  );
}

export default App;
