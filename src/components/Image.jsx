import React from 'react'

const Image = ({ src, alt, className }) => {
  return <img className={`w-full ${className}`} src={src} alt={alt} />
}

export default Image
