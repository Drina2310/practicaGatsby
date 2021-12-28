import * as React from "react"
import LayoutBasic from '../layouts/LayoutBasic'
import SeoC from '../components/SeoC';

export default function IndexPage() {
  return (

    <LayoutBasic>
      <SeoC title="Home" />
      <h2>Estamos en la home</h2>
    </LayoutBasic>

  )
}
