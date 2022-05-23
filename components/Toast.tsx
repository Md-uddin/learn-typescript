import React from 'react'

type Props = {
position:Exclude<`${HorizontalPosition}-${VerticalPosition}`,"center-center"> | "center"//to exclude the center-center and use center instead
}
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
const Toast = (props: Props) => {
  return (
    <div>Toast notification position - {props.position}</div>
  )
}

export default Toast