import React from 'react'
import Style from './style.module.scss'

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
    
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => {
   
    return (
        <div className={Style.Container}>
            <div className={Style.Title}>
                <h1>{title}</h1>
            </div>
            <div className={Style.Controllers}>
                {children}
            </div>
        </div>
    )
}
export default ContentHeader;