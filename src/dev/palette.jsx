import React from "react"
import { Fragment } from "react"
import {
  Category,
  Component,
  Variant,
  Palette,
} from "@react-buddy/ide-toolbox"
import { CustomRange } from "../CustomRange";

export const PaletteTree = () => (
  <Palette>
    <Category name="App">
      <Component name="Loader">
        <Variant>
          <ExampleLoaderComponent/>
        </Variant>
      </Component>
      <Component name="CustomRange">
        <Variant>
          <CustomRange/>
        </Variant>
      </Component>
    </Category>
  </Palette>
)

export function ExampleLoaderComponent() {
  return (
    <Fragment>Loading...</Fragment>
  )
}