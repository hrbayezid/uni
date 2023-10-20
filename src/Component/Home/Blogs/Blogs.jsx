import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart,} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import line from "../../../assets/Img/line.png"

const Blogs = () => {

  const [blogData, setBlogData] = useState([]);
  console.log(blogData);
  const [loading, setLoading] = useState(true);

  


  // fetch Blog data
  useEffect(() => {
 

    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBlogData(data);
      })
      .catch((error) => {
        console.error('Error fetching blog data:', error);
        setLoading(false);
        // Handle the error or set blogData to a default value (e.g., [])
        setBlogData([]);
      });
  }, []);

    return (
      <div >
      <Link to='/addblog' className=' m-4  btn glass bg-red-600'>Add Your Blog</Link>
        <div className='m-10 flex flex-col justify-center'>
         {/* title  */}
         <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice text-[#272932] dark:text-white">Our Latest Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          {blogData.map((blog) => (
          <div  key={blog._id} className="card w-96 glass bg-blue-800 text-white glass">

<div className="card-body items-center text-center">
  <h2 className="card-title ">{blog?.title}</h2>
  <div className="divider"></div>
  <p>{blog?.details}</p>
  
  
           
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Learn now!</button>
  </div>
</div>
</div>
          ))}
         
      </div>
  
        </div>
      </div>
       
    );
};

export default Blogs;