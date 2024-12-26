import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
   const {image,bookId,bookName,author,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    return (
<Link to={`/books/${bookId}`}>
<div>
            <div className="card bg-base-100  shadow-xl p-6">
  <figure className='bg-[#F3F3F3]  py-8  rounded-2xl'>
    <img
      src={image}
      className='h-[166px] w-fit'
      alt={bookName} />
  </figure>
  <div className="card-body">
 <div className='flex justify-center gap-4'>
 {tags.map((tag,index)=><button key={index} className="btn btn-xs bg-green-200 text-green-500">{tag}</button>)}
 </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>By:{author}</p>
    <div className="divider"></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div>{rating}</div>
      <div>{totalPages}</div>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
      </div>
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;