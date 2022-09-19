import TableHeader from "./TableHeader/TableHeader";
import React, {useEffect, useState} from "react";
import GetTableData from "../api/getTableData"
import Table from "./Table/Table";

export const App = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");

    const searchName = (e) => {
        setValue(e);
        GetTableData.getElementFilter(e).then((resp) => {
            setItems(resp);
        });
    }

    useEffect(() => {
        GetTableData.getAll().then(resp => {
            setItems(resp);
        });
    }, []);

    return (
        <>
            <input type="text"
                   name="fullname"
                   placeholder="Введите имя"
                   value={value}
                   onChange={e => searchName(e.target.value)}/>
            <TableHeader />
            {items.map(item => <Table fullName={item.Fullname} id={item.id} days={item.Days} />)}
        </>
    );
}



