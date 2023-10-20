import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import line from "../../../assets/Img/line.png"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddBlogs = () => {
    const { user } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (blogData) => {
        
        
        console.log(blogData,user)

            const finalData = {
              title: blogData.title,
              details: blogData.details,
             
              react: 0,
              name:user.displayName,
              email: user.email,
              
            };
            
            console.log({  finalData });
        
            fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
              })
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  console.log(data);
            
                  if (data.acknowledged) {
                    Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Blog Added',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate('/blogs');
                  } else {
                    Swal.fire({
                      position: 'center',
                      icon: 'error',
                      title: 'Failed to add a blog',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => console.error(error));
            };
        

    return (
        <div>
             {/* title  */}
        <div className="text-center mb-12 mt-4">
        <p className="text-[48px] font-alice text-[#272932] dark:text-white">Add Blogs </p>
        <img src={line} alt="" className="w-[105px] mx-auto mb-[30px]" />
      
      </div>
              <div className=' max-w-7xl mx-auto'>
      
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 px-10 glass my-10 py-10 w-2/3  mx-auto rounded-[30px]' action="">
        {/* input field */}
        <div>
          <label htmlFor="blog_title" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Blog Tittle</label>
          <input {...register('title', {required: true})} type="text" id="blog_title" className="text-[18px] font-medium font-lato rounded-full py-5 pl-7 bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full "placeholder="Type Blog title" />
        </div>

        {/* input field */}
        <div className="">
          <label htmlFor="description" className="text-[20px] font-lato  block mb-2 font-medium text-gray-900 ">Description</label>
          <textarea {...register('details', {required: true})} id="description" rows="4" className="rounded-[15px] block py-5 pl-7 w-full text-[18px] font-medium font-lato text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
        <button className='text-[20px] font-bold w-[50%] mx-auto bg-blue-500 rounded-full text-white py-[13px]  flex justify-center items-center '>Done</button>
        </form>
</div>
        </div>
    );
};

export default AddBlogs;