export type Props = {
  name: string,
  count?: number,///for a props which can be optionall to be passed
  status: "loading" | "completed" | "waiting"//it says that the prop can be only one from this above
  component?: React.ReactNode,///////to pass a comp inside props
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,// says that these type is a func and with the props given
  style:React.CSSProperties,
}