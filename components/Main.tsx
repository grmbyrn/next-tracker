import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({children}) => {
    return ( 
        <div className="flex-1 flex flex-col">
            {children}
        </div>
    );
}
 
export default Main;