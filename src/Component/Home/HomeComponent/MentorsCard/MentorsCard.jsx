import React from 'react';
import line from "../../../../assets/Img/line.png"
const MentorsCard = () => {
    return (
       <div>

        {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice text-[#272932] dark:text-white">Our Honorable Mentors </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
      
      <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 '>
        {/* card 0ne  */}
         <div className=" font-sans m-4 w-80 flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-sky-900  shadow-xl hover:shadow py-2">
           <img className="w-32 mx-auto rounded-full -mt-10  border-8 border-gray-200 " src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
           <div className="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
           <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
           <div className="text-center font-normal text-lg">Kerala</div>
           <div className="px-6 text-center mt-2 font-light text-sm">
             <p>
               Front end Developer, avid reader. Love to take a long walk, swim
             </p>
           </div>
          
           
        </div>
      </div>
        {/* card 0ne  */}
         <div className=" font-sans m-4 w-80 flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-sky-900
  shadow-xl hover:shadow py-2">
           <img className="w-32 mx-auto rounded-full -mt-10  border-8 border-gray-200 " src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
           <div className="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
           <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
           <div className="text-center font-normal text-lg">Kerala</div>
           <div className="px-6 text-center mt-2 font-light text-sm">
             <p>
               Front end Developer, avid reader. Love to take a long walk, swim
             </p>
           </div>
          
           
        </div>
      </div>
        {/* card 0ne  */}
         <div className=" font-sans m-4 w-80 flex flex-row justify-center items-center">
        <div className="card w-96 mx-auto bg-sky-900
  shadow-xl hover:shadow py-2">
           <img className="w-32 mx-auto rounded-full -mt-10 border-8 border-gray-200 " src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
           <div className="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
           <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
           <div className="text-center font-normal text-lg">Kerala</div>
           <div className="px-6 text-center mt-2 font-light text-sm">
             <p>
               Front end Developer, avid reader. Love to take a long walk, swim
             </p>
           </div>
          
           
        </div>
      </div>
       
   
      </div>
      </div>
       </div>
       
    );
};

export default MentorsCard;