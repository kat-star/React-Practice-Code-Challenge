import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {name, img_url, price, eaten} = props.sushi

  //added in eaten variable to keep track of whether the piece has been eaten or not to display the image
  const handleClick = () => {
    props.sushiEaten(props.sushi);
    props.sushi.eaten = true
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