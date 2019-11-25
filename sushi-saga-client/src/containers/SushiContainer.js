import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const {sushiList, renderedSushi} = props

  //passed into Sushi to determine whether sushi has been clicked on/eaten
  const sushiEaten = (sushi) => {
    props.handleSushiEaten(sushi);
  }

  const displayMoreSushi = () => {
    props.renderFourSushi(sushiList)
  }

  return (
    <Fragment>
      <div className="belt">
         {renderedSushi.map(sushi => 
            <Sushi sushi={sushi} key={sushi.id} sushiEaten={sushiEaten} />
         )}
        <MoreButton displayMoreSushi={displayMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer