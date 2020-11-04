import React from 'react';
import { useState } from 'react';
import Autocomplete from "react-autocomplete";

const CityForcastAutocomplete = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <Autocomplete
                 getItemValue={(item) => item.label}
                 items={[
                   { label: 'apple' },
                   { label: 'banana' },
                   { label: 'pear' }
                 ]}

                 renderItem={(item, isHighlighted) =>
                   <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                     {item.label}
                   </div>
                 }

                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 onSelect={(selectedCity) => {
                     console.log(selectedCity);
                 }}
                 
                 shouldItemRender={(item, inputValue) => item.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1}
            />
        </div>
    )
}

export default CityForcastAutocomplete
