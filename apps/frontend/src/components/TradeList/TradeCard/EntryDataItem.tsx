
interface StatCardItemProps {
    label: string,
    value: string | number
}

const EntryDataItem = ({ label, value }: StatCardItemProps) => {
    return (
        <div className="entryDataItem">
            <div>{label}</div>
            <div>{value}</div>
        </div>
    );
};

export default EntryDataItem;