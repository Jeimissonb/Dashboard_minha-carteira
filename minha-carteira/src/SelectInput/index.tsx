import React from 'react'
import Style from './style.module.scss'

interface ISelectInputProps {
    options: {
        value: string | number;
        lable: string | number;
    }[],
}

const SelectInput: React.FC<ISelectInputProps> = ({options}) => {
    return (
        <div className={Style.Container}>
            <select>
                {
                    options.map(option =>(
                        <option value={option.value}>{option.lable}</option>
                    ) )
                }
            </select>

        </div>
    )
}

export default SelectInput;