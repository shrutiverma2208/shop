
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
import BottomNavigation from './Components/BottomNavigation';
import home from './images/home.svg'
import search from './images/search.svg'
import account from './images/account.svg'
import shopping from './images/shopping.svg'
import Calender from './Components/Calender/Calender';
import Table from './Components/Table/Table';

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
   const handleHome=()=>{
    console.log('Home clicked')
   }
   const handleSearch=()=>{
    console.log('Search clicked')
   }
   const handleShopping=()=>{
    console.log('Shopping clicked')
   }
   const handleAccount=()=>{
    console.log('Account clicked')
   }
   const data = [
    { id: 1, name: 'SHRUTI', age: 25, cgpa:7 },
    { id: 2, name: 'ANT', age: 30,cgpa:6 },
    { id: 3, name: 'DONKEY', age: 35, cgpa:9 },
  ];
  
   
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

     <BottomNavigation
   image1={home}
   image2={search}
   image3={account}
   image4={shopping}
   title1='Home'
   title2='Search'
   title3='Account'
   title4='Shopping'
   onClick1={handleHome}
   onClick2={handleSearch}
   onClick3={handleAccount}
   onClick4={handleShopping} 
     />
     <Calender/>
     <Table data={data} />
     </>
    </div>
  );
}

export default App;
