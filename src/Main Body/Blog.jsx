import bookmark from '../assets/bookmark.svg'
const Blog = ({blog, handleMarkasRead, handleBookmarkAdd}) => {
    const {title, cover, reading_time,author,hashtags, author_img, posted_date} = blog;
    

    return (
        <div>
            <img className="lg:w-[98%] rounded-md" src={cover} alt="" />
            <div className="my-[2rem] flex justify-between items-center">
                <div className="flex gap-7 items-center">
                    <img className="w-[3.75rem] h-[3.75rem]" src={author_img} alt="" />
                    <div>
                        <h3 className="text-black text-2xl font-bold">{author}</h3>
                        <h3 className="text-[#11111199] text-base font-semibold">{posted_date}</h3>
                    </div>
                </div>
                <div className='flex gap-2 items-center pr-5'>
                    <p className="text-[#11111199] font-medium">{reading_time} min read</p>
                    <button onClick={()=>handleBookmarkAdd(blog)}><img src={bookmark} alt="" /></button>
                </div>
            </div>

            <h2 className='text-black text-4xl font-bold pr-10 my-5'>{title}</h2>

            <div className='text-[#11111199] text-xl font-medium mb-6'>
                {
                    hashtags.map((hash, index)=><a key={index}>#{hash} </a>)
                }
            </div>
            <button onClick={()=> handleMarkasRead(reading_time)} className='text-[#6047EC] text-xl font-semibold mb-12 underline'>Mark as Read</button>
            
            
        </div>
    );
};

export default Blog;