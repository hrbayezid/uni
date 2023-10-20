import React, { useEffect, useState } from 'react';
import line from "../../../../assets/Img/line.png"
const AllNoticeCard = () => {
  const [noticeData, setNoticeData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(noticeData);
    // fetch Notice data
    useEffect(() => {
 

      fetch("http://localhost:5000/notice")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setNoticeData(data);
        })
        .catch((error) => {
          console.error('Error fetching blog data:', error);
          setLoading(false);
          // Handle the error or set noticeData to a default value (e.g., [])
          setNoticeData([]);
        });
    }, []);
    return (
        <div >
           <div className='m-10 flex flex-col justify-center'>
           {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice text-[#272932] dark:text-white">Latest Notice </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {noticeData.map((notice) => (
          <div  key={notice._id} className="card w-96 bg-blue-800 text-white glass">
           
  <div className="card-body items-center text-center">
    <h2 className="card-title">{notice.title}</h2>
    <div className="divider "></div>
    <p>{notice.details}</p>
   
  </div>
            
</div>
        ))}
          </div>
      </div>
        </div>
    );
};

export default AllNoticeCard;