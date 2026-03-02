import cl from './Select.module.scss';

function Select({defaulValue, value, options, onChangeSort}) {
    return (
        <select className={cl.select} name='newsSort' onChange={e => onChangeSort(e.target.value)}>
            <option disabled value={value}>{defaulValue}</option>
            {
                options.map((option => 
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))
            }
        </select>
    )
}

export default Select;