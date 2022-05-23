import React from 'react'

type Props<t> = {
  items: t[]  ,
  onClick:(value: t )=>void
}


const List = <t extends  {id:string}>({items,onClick}:Props<t>) => { ///this is called as generic props
  return (
    <div>
      <h2>list of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item.id}
          </div>
        )
      })}
    </div>
  )
}

export default List