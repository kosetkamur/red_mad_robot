import React from 'react';
import './TableHeader.css'

const TableHeader = () => {
    let header = []
    for(let i=1;i<=31;i++){
        header.push(i);
    }
    return (
        <div className="cells">
            <div className='cell column_user'>User</div>
            {header.map((item,index) =><div className='cell' key={index}>{item}</div> )}
            <div className='cell column_monthly'>Monthly</div>
        </div>
    );
};

export default TableHeader;