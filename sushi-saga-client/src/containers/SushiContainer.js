import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const {sushi, handleSushiEaten} = props
 
  return (
    <Fragment>
      <div className="belt">
         {sushi.map(s => 
            <Sushi sushi={s} key={s.id} handleSushiEaten={handleSushiEaten} />
         )}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer