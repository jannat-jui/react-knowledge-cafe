import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="my-[2rem] w-[23rem] mx-auto lg:mx-[2rem] pb-6 bg-[#c9c3c380] rounded-lg pl-8 pt-6">
            <h1 className="text-black text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>

            <div>
                {
                    bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>

            
        </div>
    );
};

export default Bookmarks;