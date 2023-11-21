import React from "react";
import {Placeholder,Card} from 'react-bootstrap'
const DisplayLoadData = ()=>{
    return(
        <>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
    </>
    )
}
export default DisplayLoadData