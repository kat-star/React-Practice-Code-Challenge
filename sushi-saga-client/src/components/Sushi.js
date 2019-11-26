import React from 'react'

const Sushi = (props) => {

  const {sushi: {name, img_url, price, eaten}, handleSushiEaten, sushi} = props

  //added in eaten variable to keep track of whether the piece has been eaten or not to display the image
  //adding eaten in sushi is going to be initially null
  const handleClick = () => {
    handleSushiEaten(sushi);
    sushi.eaten = true
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { eaten ? null : <img src={img_url} width="100%" alt="" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div> 
  )
}

export default Sushi