import React from 'react'

const MenuCard = ({menuDeta}) => {
    // console.log(menuDeta)
  return (
    <>
    <section className='main-card--cointainer' >

      {menuDeta.map((curElem)=>{

        const {id,name, category,description,image}=curElem
          return(
              <>
            
            <div className="card-container" key={curElem.id}>
                        <div className="card">
                            <div className="card-bordy">
                                <span className='card-number card-circle subtle'>{id}</span>
                                <span className='card-author subtle'>{category}</span>
                                <h2 className='card-title'> {name}</h2>
                                <span className='card-description subtle'>
                                    {description}
                                </span>
                                <div className="card-read">Read</div>
                                <div>
                                    <img src={image} alt="images"  className='card-media'/>
                                    <span className='card-tag subtle'>order Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    })}
    </section>

    </>
  )
}

export default MenuCard

