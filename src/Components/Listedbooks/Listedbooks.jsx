import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/Adddb';
import Book from '../Book/Book';
const Listedbooks = () => {
    const [redlist,setreadlist]=useState([]);
    const [sort,setSort]=useState('');
    const allBooks=useLoaderData();
    useEffect(()=>{
        const stordredlist=getStoredReadList();
        const stordlistInt=stordredlist.map(id=>parseInt(id));
        console.log(stordredlist,allBooks,stordlistInt);
        const readbooklist=allBooks.filter(book=>stordlistInt.includes(book.bookId))
        setreadlist(readbooklist)
    },[])
    const handleshort=sortType=>{
      setSort(sortType);
      if(sortType==='No of Page'){
        const shortedredlist=[...redlist].sort((a,b)=>a.totalPages-b.totalPages);
        setreadlist(shortedredlist)
      }
      if(sortType === 'Ratings'){
        const sortedReadList = [...redlist].sort((a, b) => a.rating - b.rating);
        setreadlist(sortedReadList);
    }
    }
    return (
        <div>
            <h3 className="text-2xl">listedbook</h3>
            <details className="dropdown">
  <summary className="btn m-1">{sort?`Sort By:${sort}`: 'Sort BY}'}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleshort('Ratings')}><a>Ratings</a></li>
    <li onClick={()=>handleshort('No of Page')}><a>No of page</a></li>
  </ul>
</details>
            <Tabs>
    <TabList>
      <Tab>Redlist</Tab>
      <Tab>wishlist</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I read{redlist.length}</h2>
      {
      redlist.map(book=><Book key={book.bookId} book={book}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>my wishlist</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Listedbooks;