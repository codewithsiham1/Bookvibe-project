import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/Adddb';


const Bookdetails = () => {
    const {bookId}=useParams();
    const id=parseInt(bookId)
    const data=useLoaderData();
    const book=data.find(book=>book.bookId===id);
   const {image,bookId:currentBook}=book;
   const MarkRed=(id)=>{
 addToStoredReadList(id)
   }
    return (
        <div>
            <h1>Bookdetails:{bookId}</h1>
            <img src={image} alt="" />
            <br />
            <button onClick={()=>MarkRed(bookId)} className="btn btn-outline mr-4">Red</button>
            <button className="btn btn-outline">Wishlist</button>
        </div>
    );
};

export default Bookdetails;