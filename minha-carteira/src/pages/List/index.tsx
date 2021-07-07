import React from 'react'
import Style from './style.module.scss'
import ContentHeader from '../../Components/ContentHeader'
import SelectInput from '../../SelectInput'
import Content from '../../Components/Content'
import HistoryFinanceCard from '../../Components/HistoryFinanceCard'

const List: React.FC = () => {
    const months = [
        {value: 7, lable: 'Julho'},
        {value: 8, lable: 'Agosto'},
        {value: 9, lable: 'Setembro'}
    ];

    const years = [
        {value: 2020, lable: 2020},
        {value: 2019, lable: 2019},
        {value: 2018, lable: 2018},
    ];
    return (
        <div className={Style.Container}>
            <ContentHeader title="Saídas" lineColor="#fff">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <filter className={Style.Filters}>
                <button type="button" className={[Style.tagFilter, Style.tagFilterRecurrent].join(' ')}>Recorrentes</button>
                <button type="button" className={[Style.tagFilter, Style.tagFilterEventual].join(' ')}>Eventuais</button>

            </filter>
            
            <Content>
                <HistoryFinanceCard 
                    tagColor="#e44c4e"
                    title="Conta de luz" 
                    subtitle="07/07/2021" 
                    amount = "R$ 130,00"              
                />
                
            </Content>
        </div>
    )
}

export default List;