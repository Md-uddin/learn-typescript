import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary'
  children: string;
} & Omit< React.ComponentProps<'button'>,"children">///saying that all the props can have any react button value but children should have only string
const CustomButton = ({variant,children,...rest}:ButtonProps) => {
  return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}

export default CustomButton 