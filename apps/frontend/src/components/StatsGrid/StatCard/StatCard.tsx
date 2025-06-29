import "./statsCard.scss";

type StatCardProps = {
    label: string;
    value: string | number;
    valueClass?: string;
};

export default function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="statCard">
            <div>{label}</div>
            <div>{value}</div>
        </div >
    );
}
