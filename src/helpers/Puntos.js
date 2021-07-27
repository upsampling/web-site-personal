import React from 'react'
import Particles from 'react-particles-js'
export const Puntos = () => {
    return (
<Particles
      className="particles-canvas"
      params= {{
        particles: {

          number:{
            value: 50,
            density:{
              enable: true,
              value_area: 1000
            }
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#000",
              blur: 1
            }
          }, 
          color: {
            value: "#000"
          },
          shape:{
            type: "circle",
            stroke:{
              width: 6,
              color: "#000"
            }
          }
        }

      }} />
    )
}
