import { Button, type ButtonOwnProps } from "@mui/material";

interface TabsButtonProps {
    label: "Trades" | "Analytics", // TODO: change to map object combined with type of useState
    variant: ButtonOwnProps["variant"],
    onClick: () => void
}

const TabsButton = ({ label, variant, onClick }: TabsButtonProps) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            sx={{
                flex: 1,
                padding: '0.7rem',
                cursor: 'pointer',
            }}
        >
            {label}
        </Button>
    );
};

export default TabsButton;