import "./header.scss";

export default function Header() {
    return (
        <div className="header">
            <div className="header__text">
                <h1>Trading Journal</h1>
                <p >Track and analyze your stock trades</p>
            </div>
            <button>
                + Add New Trade
            </button>
        </div>
    );
}
