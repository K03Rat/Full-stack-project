import React from 'react';
interface VerticalContainerProps{
    children:React.ReactNode;
}
const VerticalContainer: React.FC<VerticalContainerProps> = ({children} )=>{
return(
    <div className="vertical-container">
        {children}
    </div>
);
}
export default VerticalContainer;