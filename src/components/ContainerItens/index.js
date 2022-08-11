import React from "react";

import { Div }   from './styles'

function container({children, IsBlur}){

    return <Div IsBlur={IsBlur}>{children}</Div>
}

export default container
