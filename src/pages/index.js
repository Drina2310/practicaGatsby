import * as React from "react";
import { Button } from 'react-bootstrap';
import LayoutBasic from '../layouts/LayoutBasic';
import SeoC from '../components/SeoC';
import './index.scss';

export default function IndexPage() {
  return (

    <LayoutBasic>
      <SeoC title="Home" />
      <h2 className="title">Estamos en la home</h2>
      <Button variant="danger">Danger</Button>
    </LayoutBasic>

  )
}
