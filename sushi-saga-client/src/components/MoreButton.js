import React from 'react'

const MoreButton = (props) => {
 
  const handleClick = () => {
    props.displayMoreSushi()
  }

    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton