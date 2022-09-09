import React from 'react';
import TimeOutput from "../TimeOutput/TimeOutput";
import './Table.css'

const Table = ({fullName, days}) => {

    let arr = [];
    let date = [];
    let lost = [];

    days.forEach((item) => arr.push(item));

    arr.forEach((item) => date.push(+item.Date.slice(-2)));

    for (let i = 1; i<= 31; i++) {
        if(!date.includes(i)) {
            lost.push(i);
        }
    }

    lost.forEach((item) => arr.splice(item-1, 0, 0));

    let result=[];
    let data = arr.map((item) => {

        let start = item.Start;
        let end = item.End;
        let time;

        if(item===0) {
            time=0
        } else {
            if (start !== undefined && end !== undefined) {
                let startMinute = +(start.slice(3, 5));
                let startHour = +(start.slice(0, 2));
                let endMinute = +(end.slice(3, 5));
                let endHour = +(end.slice(0, 2));

                let beginTime = startHour*60+startMinute;
                let endTime = endHour*60+endMinute;
                result.push(endTime-beginTime);


                if (startMinute > endMinute) {
                    if (Math.abs(endMinute - startMinute) < 10) {
                        time = `${endHour - startHour - 1}:${60 - startMinute + endMinute}`;
                    } else {
                        time = `${endHour - startHour - 1}:${60 - startMinute + endMinute}`;
                    }
                } else {
                    if (Math.abs(endMinute - startMinute) < 10) {
                        time = `${endHour - startHour}:0${endMinute - startMinute}`;
                    } else {
                        time = `${endHour - startHour}:${endMinute - startMinute}`;
                    }
                }
            }
        }
        return <TimeOutput className='cellData' time={time}/>;
    })

    let sum=0;
    result.forEach((item) => sum+=item);
    let timeResult = `${Math.floor(sum/60)}:${sum-Math.floor(sum/60)*60}`;

    return (
        <div className='cellsData'>
            <div className='cellData'>{fullName}</div>
           {data}
            <div className='cellData'>{timeResult}</div>
        </div>
    );
};

export default Table;