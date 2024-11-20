import React from 'react'
import {NextUIProvider} from "@nextui-org/system";

const Provider = ({children}) => {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}

export default Provider
