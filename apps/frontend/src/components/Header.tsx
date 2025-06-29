import AddNewButton from "./AddNewButton";
import LogoAndCatchphrase from "./LogoAndCatchphrase";

const Header = () => {
    return (
        <div className="flex">
            <div>
                <h1 id="title" className='underline'>Trading Journal</h1>
                <LogoAndCatchphrase />
            </div>
            <div>
                <AddNewButton />
            </div>


        </div>
    );
};

export default Header;