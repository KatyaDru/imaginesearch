import React from 'react';


export const allData = [
 './promts/general-11_2022_07_01.json',
 './promts/general-11_2022_07_02.json',
 './promts/general-11_2022_07_03.json',
 './promts/general-11_2022_07_04.json',
 './promts/general-11_2022_07_05.json',
 './promts/general-11_2022_07_06.json',
 './promts/general-11_2022_07_07.json',
 './promts/general-11_2022_07_08.json',
 './promts/general-11_2022_07_09.json',
 './promts/general-11_2022_07_10.json'
    ]

const DataBox = () => {
    const data = allData
    return (
        <div>
            <ul className='list-group' st> {
                data.map(promtName =>(
                    <li className='list-group-item list-group-item-action'
                        key={promtName}>
                        <a href='!#' className=''>
                           Filename: {promtName} </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataBox;
