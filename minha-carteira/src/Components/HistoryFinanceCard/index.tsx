import { title } from 'process'
import React from 'react'
import Style from './style.module.scss'

interface IHistoryFinanceCard {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
    tagColor,
    title,
    subtitle,
    amount

}) => {
    return (
        <div className={Style.Container}>
            <div className={Style.Tag} color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div> 
            <h3>{amount}</h3>
        </div>
    )
}

export default HistoryFinanceCard;