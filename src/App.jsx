
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './Main Body/Left/Blogs'
import SpentTime from './Main Body/Left/SpentTime'
import Bookmarks from './Main Body/Left/Bookmarks'

function App() {

  const [readingTime, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  const handleMarkasRead= (reading_time)=>{
    const newReadingTime = readingTime+reading_time;
    setReadingTime(newReadingTime);
}
const handleBookmarkAdd = blog=>{
const newBookmarks = [...bookmarks, blog]
setBookmarks(newBookmarks);
}

  return (
    <>
    <div className='w-[95%] lg:w-[75%] mx-auto' >
      <Header></Header>
      <div className='flex flex-col lg:flex-row gap-7'>
        <Blogs handleMarkasRead={handleMarkasRead} handleBookmarkAdd={handleBookmarkAdd}></Blogs>
        <div>
          <SpentTime readingTime={readingTime}></SpentTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
      
      
      
      

    </div>
      
      
    </>
  )
}

export default App
