

const Bookmark = ({bookmark}) => {
    return (
        <div className="w-[85%] bg-white rounded-lg mt-4">
                <h1 className="p-[1.25rem] text-[1.125rem] font-semibold">{bookmark.title}</h1>

            </div>
    );
};

export default Bookmark;