import profile from "../assets/person.svg"
const Header = () => {
    return (
       <div>
        <div className="my-[3rem] flex justify-between items-center">
            <h1 className="text-black text-[2.5rem] font-bold">Knowledge Cafe</h1>
            <img src={profile} alt="" />
            
        </div>
        <hr />
       </div> 
    );
};

export default Header;