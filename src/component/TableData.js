import React from "react";


function TableData(props) 
{
  const arr=props.datas
  console.log(arr)
  return (
   
    <div style={{textAlign:"center"}}>
      <table  align=" center" cellSpacing="20px"  cellPadding="20px" className="table table-stripped">
      
	  
          <tr >
            <th>ID</th>
            <th > name</th>
            <th>email</th>
            <th >username</th>
            <th>city</th>
          </tr>
        
     
          {props.datas.map((val, ind) => (
            <tr key={val.id}>
			       
              <td > {val.id}</td>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
              <td>{val.address.city}</td>
              
            </tr>
          ))}
    
      </table>
      </div>
  )


}

export default TableData;
