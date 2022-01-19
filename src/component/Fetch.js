import React, { useEffect, useState } from 'react'
import TableData from './TableData'


function Fetch() {
    const [display,setdisplay]=useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users ')
        .then((res) => res.json())
            .then(data => {
                setdisplay(data)
                console.log(data);
            })
    }, [])
    
    return (
<div>

    <TableData datas={display}/>
</div>
    )
}

export default Fetch
