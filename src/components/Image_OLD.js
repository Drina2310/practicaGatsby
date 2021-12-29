import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


//Sacamos los datos y generamos la imagen
export default function Image() {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "gatsby-astronaut.png"}) {
                sharp: childImageSharp {
                    fluid {
                        src
                    }
                }
            }
        }
    `)

    console.log(data);
    return <img src={data.image.sharp.fluid.src} alt="" />
}
