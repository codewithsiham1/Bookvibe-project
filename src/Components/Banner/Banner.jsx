import React from 'react';
import BannerImg from'../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
      src={BannerImg}
      className=" w-full rounded-lg shadow-2xl" />
    <div className='ml-14'>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;