import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import { CustomRange } from "../CustomRange";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/CustomRange">
        <CustomRange/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews