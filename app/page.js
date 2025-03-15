import Image from "next/image";
import "./globals.css";
import Card from '../components/cards.jsx';
import { Button } from "@/components/ui/button";
import { client, urlFor } from "./lib/sanity"

async function getData(){
  const query = `
  *[_type == 'ecommerceStore'] | order(_createdAt asc){
  name,
    description,
    price,
    image
  }`
  const data = await client.fetch(query)
  return data;
}
export default async function Home() {
  //await is used with the async functions only 
  //if we write await then it will wait until the data is fetched
  const data = await getData()
  return (
    <>
      <div style={{ width: '100%', height: '1000px', position: 'relative' }}>
        {/* Main Image */}
        <img src="img1.jpg" className="w-full"></img>
        
        {/* Div on top of the image */}
        <div
          style={{
            position: 'absolute',
            top: '30px', // Adjust this for the vertical position on the image
            left: '20px', // Adjust horizontal position if necessary
            height: '500px', // Adjust the height of the div
            width: '700px', // Adjust the width of the div
            backgroundColor: '#FFF3E3', // Set the background color
            marginLeft:"1100px",
            marginTop:"320px",
            paddingLeft:"50px",
            paddingTop:"100px"

            
          }}
        >
          <p className="font-semibold text-2xl">New Arrival</p>
          <p className="font-bold text-6xl text-[#B88E2F]">Disocver Our</p>
          <p className="font-bold text-6xl text-[#B88E2F]">New Collection</p>
          <br></br>
          <p className="font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut </p>
          <p className="font-semibold">elit tellus, luctus nec ullamcorper mattis.</p>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#B88E2F] text-white border border-[#B88E2F] w-[200px] h-[80px] mt-[40px] rounded-none text-lg font-bold"
          >
            Buy Now
          </Button>
        </div>
      </div>

      <p style={{color:'#333333', fontWeight:'bold', fontSize:'30px', textAlign:'center', marginTop:'30px'}}>Browse The Range</p>
      <p style={{color:'#666666', fontWeight:'normal', textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      {/* Image sets */}
      <div className="image2">
        <div id="imageset2">
          <Image
            id="RangeImages"
            src="/Dinning.png"
            alt="Main Image"
            width={500}
            height={550}
            style={{objectFit:'contain'}}
          />
        </div>
        <div id="imageset2">
          <Image
            id="RangeImages"
            src="/living.png"
            alt="Main Image"
            width={500}
            height={550}
            style={{objectFit:'contain'}}
          />
        </div>
        <div id="imageset2">
          <Image
            id="RangeImages"
            src="/bedroom.png"
            alt="Main Image"
            width={500}
            height={550}
            style={{objectFit:'contain'}}
          />
        </div>
      </div>

      <h1>Our Products</h1>
      
      <div id="cards-div">
      {data.slice(0, 4).map((item) => (
              <Card 
                key={item.name}
                image={urlFor(item.image).url()} 
                name={item.name}
                description={item.description} 
                price={item.price} 
              />
      ))}
      </div>
      <div id="cards-div">
            {data.slice(4, 8).map((item) => (
                    <Card 
                      key={item.name}
                      image={urlFor(item.image).url()} 
                      name={item.name}
                      description={item.description} 
                      price={item.price} 
                    />
            ))}
      </div>

      {/* Show More Button */}
      <div className='flex justify-center item-center'>
        <Button
          variant="outline"
          size="lg"
          className="w-[250px] h-[50px] text-[20px] border-[#B88E2F] mt-8 text-[#B88E2F] rounded-none"
        >
          Show More
        </Button>
      </div>

      {/* Section with Beautiful Rooms Inspiration */}
      <div className="h-[650px] w-[full] bg-[#FCF8F3] border-none mt-[4%] flex items-center gap-[300px]">
        <div className="ml-[150px] flex flex-col">
          <div>
              <p className="font-bold text-6xl no-wrap">50+ Beautiful rooms </p>
          </div>
          <p className="font-bold text-6xl">inspiration</p><br />
          <p className="text-[#616161] text-xl font-semibold">Our designer already made a lot of beautiful</p>
          <p className="text-[#616161] text-xl font-semibold">prototipe of rooms that inspire you</p>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#B88E2F] text-white border border-[#B88E2F] w-[250px] h-[50px] mt-6 rounded-none text-lg font-normal"
          >
            Explore More
          </Button>
        </div>
        <div className="flex gap-8">
          <img src="bear.png" alt="bear" className="h-[600px] w-[650px]" />
          <img src="bear2.png" className="h-[500px] mb-[6%] w-[650px]" />
          <img src="cut.png" className="h-[500px] mb-[6%] " />
        </div>
        
          
        
      </div>

      {/* Share your setup */}
      <p style={{color:'#616161', fontWeight:'bold', textAlign:'center', marginTop:"40px"}}>share your setup with</p>
      <p style={{fontWeight:'bolder', color:'#3A3A3A', fontSize:'40px', textAlign:'center'}}>#FuniroFurniture</p>
      <img src="grid.png"></img>
      <div><hr style={{ backgroundColor: '#9F9F9F', height: '1px', border: 'none', marginTop: '20px' }} /></div>
    </>
  );
}