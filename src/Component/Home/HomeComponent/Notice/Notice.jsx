
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Notice = () => {
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
        <div className="my-4 bg-red-200 flex text-black">
          <p className="bg-red-500 text-lg text-white p-2 rounded">  Notice:</p>
          {noticeData.map((notice) => (
              <Marquee key={noticeData._id}>
   <Link to='/noticeard' className="mx-4">{notice?.title}</Link>
   
  
  </Marquee>
   ))}
        </div>
    );
};

export default Notice;