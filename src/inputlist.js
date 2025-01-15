import React from "react"
import ListItem from "./ListItem";
function Inputlist(props)
{


    
    return (
        
        <div>   
            
            
            {
            
                props.arrN.map((user,index)=>{return <ListItem name={user.name} email={user.email} index={index}  delItem={props.delA} edit={props.edit}/>})
               
                
            
            }

        </div>

        
    );

}
export default Inputlist;



