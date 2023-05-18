import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src={require("./images/logo.png")} class="h-20 mr-5" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arunoday Foundation </span>
  </a>
  <div class="flex md:order-2">
     <a href="#donate"> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donate</button></a>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#aboutus" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
      </li>
      <li>
        <a href="#trustees" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Trustees</a>
      </li>
      <li>
        <a href="#gallery" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
<div class="p-8">
<section class="bg-white dark:bg-gray-900 mt-5">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h6 class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Vision and Mission</h6>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">To make quality education and healthcare accessible to the underprivileged children of remote villages.</p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">To build and run elementary schools in villages, using local resources as far as possible, together with healthcare and hygiene education to children and their parents. To provide high quality education using modern techniques, teaching aids and computers to bring village children on par with city children.  
</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                
                Contact Us
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={require("./images/logo1.png")} alt="mockup"/>
        </div>                
    </div>
</section>
</div>


<div id="indicators-carousel" class="relative w-full" data-carousel="static">
   
    <div class="relative h-76 overflow-hidden rounded-lg md:h-96">
  
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={require("./images/pasted image 0 (1).jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img1"/>
        </div>
   
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={require("./images/pasted image 0 (2).jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img2"/>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={require("./images/pasted image 0 (3).jpg")}class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img3"/>
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={require("./images/pasted image 0 (4).jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img4"/>
        </div>
 
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={require("./images/pasted image 0.jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="img5"/>
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
  
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>



<section class="bg-white dark:bg-gray-900" id='aboutus'>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About us</h2>
            <p class="mb-4">Tapovani Mata Sant Subhadra mataji of Gangori Ashram, Uttarkashi, has been inspiring her followers to take up promotion of ‘Shiksha, Swasthya and Sanskar’ particularly in the remote villages of Uttarkashi which has been her ‘karma bhoomi’. Two of her followers, Gajendra Singh of Juguldi village, and Narendra Shetty of Mumbai, decided to put their resources together in this service to humanity & service to the nation. They formed Arunoday Foundation on 25th of Feb 2016. The mission of the foundation is to provide quality education and healthcare to the rural children & their family.</p>

<p class="mb-4">A beginning was made taking a tough challenge. A pre-primary school was opened at a remote mountain village called Juguldi in Uttarkashi, with no transport or other amenities, 5 km away from the nearest tar road. The inauguration was done on 5th May 2016 by Mrs. Jayendri Rana, President of Nagar Palika Parishad, Uttarkashi, in the presence of several supporters from outside and parents from the village. Several local dignitaries, including MLA, Mr. Gopal Singh Rawatji have extended their support and good wishes to this noble effort. 
.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={require("./images/pasted image 0.png")} alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={require("./images/pasted image 0 (11).jpg")} alt="office content 2"/>
        </div>
    </div>
</section>
 


<section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src={require("./images/pasted image 0 (1).png")} alt="dashboard image"/>
        <img class="w-full hidden dark:block" s src={require("./images/pasted image 0 (1).png")} alt="dashboard image"/>
        <div class="mt-4 md:mt-0">
   
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">In addition to providing quality education to the local children, Medical check-ups of the school children and their parents are done at regular intervals and a record is maintained. Healthcare and hygiene education is provided to parents at every Parent-teacher meeting. India has a rich cultural heritage. Imparting these cultural values to children is part of our education process. The endeavor is to create a successful sustainable model and then replicate the model in other such remote villages.
</p>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">The school has a building with 5 class rooms + office + 2 toilets & sufficient playground. There are classes from Jr.KG up to 5th std., with 70 plus students and 5 teachers. A computer was provided by Mr. Dheeraj Kaushik of Delhi, to familiarize the children and download study materials. A vehicle is provided to transport teachers to & from the nearest township & main road to the school. Our endeavor is to get well qualified and motivated teachers and provide the children with quality education which will put them on par with the city children. We are also introducing computer aided education and preparing the children for modern society.
</p>
            
        </div>
    </div>
</section>

<section class="bg-white dark:bg-gray-900 " id="trustees">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Trustees</h2>
         
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (2).png")} alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Capt. Narendra Shetty</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">	
 

 Founder</span>
                  
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (3).png")} alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Gajendra Singh</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Secretary</span>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (4).png")} alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Puneethkumar Shetty</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Treasurer</span>
                  
              </div>
          </div> 
          
      </div>  
  </div>


  <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Members</h2>
         
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (5).png")} alt="Bonnie Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Anil Singh Panwar</a>
                  </h3>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (6).png")} alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Shakuntala Devi</a>
                  </h3>
                 
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-md" src={require("./images/pasted_image_0_12_70.jpg")} alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Dr. Kuldeep Singh</a>
                  </h3>
                  
              </div>
          </div> 
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={require("./images/pasted image 0 (13).jpg")} alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Mahesh Singh Panwar</a>
                  </h3>
                  
              </div>
          </div>  
      </div>  
  </div>
</section>
</section>





<div class="grid grid-cols-2 md:grid-cols-3 gap-4" id="gallery">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/fwdindependencedayimagesofarunodayschooljuguldi/IMG_20200214_091629.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/Inaugaration 050516/IMG_20170911_194909.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/Inaugaration 050516/IMG_20170911_194924.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/Inaugaration 050516/IMG_20170911_194938.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/Inaugaration 050516/IMG_20170911_194955.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/pasted image 0 (5).jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/pasted image 0 (9).jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/pasted image 0 (7).jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/fwdindependencedayimagesofarunodayschooljuguldi/IMG_20200219_101814.jpg")}alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/fwdindependencedayimagesofarunodayschooljuguldi/IMG_20200219_101834.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/fwdindependencedayimagesofarunodayschooljuguldi/IMG_20200219_101955.jpg")} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={require("./images/fwdindependencedayimagesofarunodayschooljuguldi/IMG_20200219_102023.jpg")} alt=""/>
    </div>
</div>

<section class="bg-white dark:bg-gray-900" id="donate">
  <div class="py-8 px-6 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-9 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Donate Us
</h2>
          <p class="mb-3 text-gray-500 dark:text-gray-400">To add further classes the school needs additional building, classroom furniture and importantly more good teachers. Construction of a building of 3 floors with a total of thirteen rooms is planned over a period of 3 years with an estimated cost of about Rs. One crore, including class room furniture & teaching aids. That should take care of the requirements of the next 10 years, teaching the children up to 10th standard. Hence we appeal to benevolent donors to contribute to this nation building cause. The Trust is now more than 6 years old and has received income tax exemptions under 12A and 80G for trust income as well as donor’s donations.</p>
          <p class="mb-3 text-gray-500 dark:text-gray-400">Individual donors are requested to donate any amount that they feel comfortable to contribute. What comes from the heart is our most prized gift and it will be used in various expenses of the school. A list of Donors will be displayed in the school.
</p>
          
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
</svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Classroom</h3>
              <p class="text-gray-500 dark:text-gray-400">
              <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    One classroom named after donor (new building, larger classroom) – Rs. 6,00,000/-

    </li>
    <li>
    One classroom named after donor (present building – smaller classroom) – Rs. 4,0,000/-
    </li>
    <li>
    One large classroom furniture & teaching aids – Rs. 2,00,000/-

    </li>
    <li>
    One large classroom furniture & teaching aids – Rs. 2,00,000/-

    </li>
</ul>

              </p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
</svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Administration</h3>
              <p class="text-gray-500 dark:text-gray-400">
              <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    One teacher sponsored for a year – Rs. 2,00,000/-


    </li>
   
    <li>
    Computer and related accessories for on-line teaching – Rs. 50,000/-


    </li>
</ul></p>
          </div>
          <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
  <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
</svg>              
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Teaching assistance</h3>
              <p class="text-gray-500 dark:text-gray-400"><ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    <li>
    Used or new computers/Laptops in working condition.


    </li>
   
    <li>
    Used or new teaching aids, children’s books, stationary, sports goods, toys, furniture.



    </li>
</ul></p>


          </div>


          
        
      </div>
      
  </div>

  
</section>
<section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Donate us at</h2>
          
      </div> 
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
          
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Bank details of Arunoday Foundation:
                  
</h3>
                  <p class="my-4">Acc Name:      	Arunoday Foundation
</p>
                  <p class="my-4">Acc No.:           	76013119882
</p>
                  <p class="my-4">Bank Name:   	Uttarakhand Gramin Bank
</p>
                  <p class="my-4">Branch:             	Matli, Uttarkashi

</p>
                  <p class="my-4">IFSC Code:      	SBIN0RRUTGB
</p>
              </blockquote>
              
         
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400" id="contact">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Contact Us
</h3>
                  <p class="my-4">Secretary: Gajendra Singh – 9997180800 </p>
                  <p class="my-4">Founder: Narendra Shetty – 9920075306</p>
                  <p class="my-4">Email:  arunodayf@gmail.com          </p>
                  <p class="my-4">    Web:  www.arunodayfoundation.com
</p>
                 
              </blockquote>
                
   
          
      </div>
      <div class="text-center">
          <a href="#" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Our certifications</a> 
      </div>
      </div>
</section>





<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Arunoday Foundation™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

     </div>
  );
}

export default App;
