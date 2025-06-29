import "./header.scss";
// const Header = () => {
//     return (
//         <div>
//             <div>
//                 <img src="public/logo.png" width="100" height="100" />
//                 <div>
//                     <h1 id="title" className='underline'>Trading Journal</h1>
//                     <LogoAndCatchphrase />
//                 </div>
//             </div>
//             <div>
//                 <AddNewButton />
//             </div>


//         </div>
//     );
// };

export default function Header() {
    return (
        <div className="header">
            <div className="header__text">
                <h1 >Trading Journal</h1>
                <p >Track and analyze your stock trades</p>
            </div>
            <button>
                + Add New Trade
            </button>
        </div>
    );
}
