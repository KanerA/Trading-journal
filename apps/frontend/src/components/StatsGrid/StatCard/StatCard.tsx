import "./statsCard.scss";

type StatCardProps = {
    label: string;
    value: string | number;
    valueClass?: string;
};

export default function StatCard({ label, value, valueClass = "" }: StatCardProps) {
    return (
        <div className="statCard">
            <div className="statCardLabel">{label}</div>
            <div className={`statCardValue ${valueClass}`}>{value}</div>
        </div >
    );
}
