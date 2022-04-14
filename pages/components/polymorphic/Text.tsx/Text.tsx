import React from 'react'

type Props<E extends React.ElementType> = {
  size?: 'sm' | 'lg' | 'md'  
  color?: 'primary' | 'secondary'
  children?: React.ReactNode
  as?:React.ElementType
}
type textProps<E extends React.ElementType>= Props<E> & Omit<React.ComponentProps<E>,keyof Props<E>>

const Text = <E extends React.ElementType = 'div'>(props: textProps<E>) => {
  const Component = props.as || 'div';
  return (
    <Component  className={`class-with-${props.size}-${props.color}`}>{props.children}</Component>
  )
}

export default Text