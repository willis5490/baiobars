import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 100%'
  }
  return <div className="slide " style={styles}></div>
}

export default Slide