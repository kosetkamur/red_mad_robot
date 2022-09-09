import TableHeader from "./TableHeader/TableHeader";
import React, {useEffect, useState} from "react";
import GetTableData from "../api/getTableData"
import Table from "./Table/Table";

export const App = () => {

    let cells;


    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    const addValue = (e) => {
        return setValue(e);

    }


    useEffect(() => {
        GetTableData.getAll().then(resp => {
            setItems(resp);
        });
    }, []);


    cells = items.map((item) => {
        return <Table fullName={item.Fullname} id={item.id} days={item.Days} />;
    });

    cells = items.map((item) => {
        if(item.Fullname.indexOf(value)>-1){
            return <Table fullName={item.Fullname} id={item.id} days={item.Days} />;
        }
    });

    return (
        <>
            <input type="text"
                   name="fullname"
                   placeholder="Введите имя"
                   value={value}
                   onChange={e => addValue(e.target.value)}/>
            <TableHeader />
            {cells}
        </>
    );
}



