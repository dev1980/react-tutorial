import React from 'react'

const List = ({person}) => {
   
  return (
    <>
    {
  person.map((item)=>{
    const{id, name, age, image} = item;
   return ( <div key={id} className="card">
    
    <img src={image} alt={name} />
   
       

        <div card__text>
            <h5>{name}</h5>
            <p>{age}</p>
        </div>

    </div>)

})
    }
  
    
    </>
  )
}

export default List