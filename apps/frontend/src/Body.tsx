import { FC } from "react";

interface BodyProps {
    Component: FC<any>;
}

const Body: FC<BodyProps> = ({ Component }) => {
    return <Component />
}

export default Body;