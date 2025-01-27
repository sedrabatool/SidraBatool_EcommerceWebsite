
import '../globals.css';  // If golden.css is in the parent folder
import Card from '../../components/cards.jsx';
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Head from 'next/head';

export default function Product() {
    <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
  return (
    <div>
           <div className='h-[120px] w-full bg-[#F9F1E7] border-1 border-[#F9F1E7] mt-8 flex gap-10'>
                    <div className='flex items-center h-full ml-[120px] gap-4'>
                        <div><p className='text-[#9F9F9F] text-[25px]'>Home</p></div>
                        <div>
                                <Button variant="outline" size="icon" className="border-none mt-2.5">
                                    <ChevronRight />
                                </Button>
                        </div>
                    </div>
                    <div className='flex items-center h-full  gap-4'>
                        <div><p className='text-[#9F9F9F] text-[25px]'>Shop</p></div>
                        <div>
                                <Button variant="outline" size="icon" className="border-none mt-2.5">
                                    <ChevronRight />
                                </Button>
                        </div>
                    </div>
                    <div className="h-[60px] border-l-4 border-[#9F9F9F] self-center"></div>
                    <div className='text-2xl h-full items-center flex' ><p>Asgaard sofa</p></div>
                    
           </div>
           <div className='flex gap-[40px]'>
                <div className=' flex flex-col mt-10 ml-[120px] gap-[20px]'>
                    <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center " ><img src="sofa1.png"  className="h-auto max-h-full w-auto mb-2"></img></div>
                    <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center " ><img src="sofa2.png" className="h-auto max-h-full w-auto mb-4" ></img></div>
                    <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center " ><img src="sofa3.png" className="h-auto max-h-full w-auto mb-10" ></img></div>
                    <div className="h-[120px] w-[120px] bg-[#F9F1E7] border-none rounded-[10px] flex items-center justify-center " ><img src="sofa4.png" className="h-auto max-h-full w-auto" ></img></div>
                </div>
                <div className="h-[600px] w-[500px] bg-[#F9F1E7] border-none rounded-[10px]  mt-10 flex items-center "><img src="sofa5.png" className="h-auto max-h-full  mb-2"  ></img></div>
                <div className="ml-[70px] mt-10">
                    <div><p className='text-[60px] font-poppins font-4xl'>Asgaard sofa</p></div>
                    <div><pre className='text-[30px] font-poppins text-[#9F9F9F] font-semibold mt-2'>Rs. 250,000.00</pre></div>
                    <div className='whitespace-pre mt-[50px] text-[25px] '>
                       Setting the bar as one of the loudest speakers in its class, the <br></br>
                       Kilburn is a compact, stout-hearted hero with a well-balanced <br></br>
                       audio which boasts a clear midrange and extended highs for a  <br></br>
                       sound. <br></br>
                    </div>
                    <br></br>
                    <p className='text-[#9F9F9F] text-[30px]'>Size</p>
                    <div className='flex gap-4'>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" mt-4 bg-[#B88E2F] text-black border border-[#B88E2F] w-[60px] h-[60px] rounded-md text-lg font-normal">L
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" mt-4 bg-[#F9F1E7] text-black border border-[#F9F1E7] w-[60px] h-[60px] rounded-md text-lg font-normal">XL
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" mt-4 bg-[#F9F1E7] text-black border border-[#F9F1E7] w-[60px] h-[60px] rounded-md text-lg font-normal">XS
                        </Button>
                    </div>
                    <br></br>
                    <p className='text-[#9F9F9F] text-[30px]'>Color</p>
                    <div className='flex gap-4 mt-4'>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" bg-[#816DFA] text-black border border-[#816DFA] w-[55px] h-[55px] rounded-full text-lg font-normal">
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" bg-[#000000] text-black border border-[#000000] w-[55px] h-[55px] rounded-full text-lg font-normal">
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className=" bg-[#B88E2F] text-black border border-[#B88E2F] w-[55px] h-[55px] rounded-full text-lg font-normal">
                        </Button>
                    </div>
                    <Button
                            variant="outline"
                            size="lg"
                            className="  w-[240px] h-[65px]   text-[20px] rounded-[15px] border-black mt-8">Add To Cart
                    </Button>
                    <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width:"90%", border: 'none' , marginTop:"8%"}} />
                    <pre className='text-[#9F9F9F] mt-10 text-[20px] font-sans-serif'>SKU      : SS001</pre>
                    <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>Category : Sofas</pre>
                    <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>Tags     : Sofa,Chair,Home,Shop</pre>
                    <pre className='text-[#9F9F9F] mt-1 text-[20px] font-sans-serif'>
                    Share    :  
                    <div className='inline-flex gap-6 ml-4 mt-1'>
                            <div>
                                <Button variant="outline" className="border-none mt-2.5"><img src='in.png' className=" w-8 h-8" alt='in' />
                                    
                                </Button>
                            </div>
                        <img src='in.png' alt='in' />
                        <img src='twiter.png' alt='twitter' />
                    </div>
                    </pre>
                    

                </div>

            </div>
            <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width:"full", border: 'none' ,marginTop:"3%" }} />
            <div className='flex gap-10'>
                  <p className='font-semibold text-4xl mt-10 ml-[30%]'>Description</p>
                  <p className='font-normal text-4xl mt-10  text-[#9F9F9F]'>Additional Information</p>
            </div>
                <div className='flex justify-center item-center mt-8'>
                      <p className='text-[#9F9F9F] text-lg '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                      <br></br>
                       sound of Marshall, unplugs the chords, and takes the show on the road.
                       <br></br>
                       <br></br>
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest<br></br>
                        speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange<br></br>
                        and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br></br>
                        to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                       </p>
                </div>
                <div className='flex justify-center gap-12 mt-12'>
                      <div className="h-[400px] w-[800px] bg-[#F9F1E7] border-none rounded-[10px]   flex items-center justify-center "><img src="s1.png" className="h-auto max-h-full  "  ></img></div>
                      <div className="h-[400px] w-[800px] bg-[#F9F1E7] border-none rounded-[10px]   flex items-center justify-center "><img src="s2.png" className="h-auto max-h-full  mb-[20%] w-[100%]"  ></img></div>
                </div>
                <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width:"full", border: 'none' ,marginTop:"3%" }} />
                <p className='font-semibold text-[50px] text-center mt-8'>Related Products</p>
                <div id="cards-div" className='mb-15'>
                              <Card 
                                image="/1.png" 
                                name="Syltherine" 
                                description="Stylish cafe chair" 
                                price="Rp 2.500.000" 
                              />
                              <Card 
                                image="/2.png" 
                                name="Modern Lamp" 
                                description="Elegant lighting for home" 
                                price="Rp 1.200.000" 
                              />
                              <Card 
                                image="/3.png" 
                                name="Comfort Sofa" 
                                description="Luxurious and comfortable" 
                                price="Rp 5.400.000" 
                              />
                              <Card 
                                image="/4.png" 
                                name="Comfort Sofa" 
                                description="Luxurious and comfortable" 
                                price="Rp 5.400.000" 
                              />
                        </div>
                        <div className='flex justify-center item-center'>
                            <Button
                                variant="outline"
                                size="lg"
                                className="  w-[250px] h-[50px]  text-[20px]  border-[#B88E2F] mt-8 text-[#B88E2F] rounded-none ">Show More
                            </Button>
                        </div>
                        <hr style={{ backgroundColor: '#D9D9D9', height: '1px', width:"full", border: 'none' ,marginTop:"4%" }} />
            
        
           
    </div>
  )
}
