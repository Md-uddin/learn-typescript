import React from 'react'

type Props = PositiveNumber | negativeNumber | zero;
type RandomNumberTyp = {
  value: number;

}
type PositiveNumber = RandomNumberTyp & { ///extending previous type and adding one more and restricting other props to be passed
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
}
type negativeNumber = RandomNumberTyp & { ///extending previous type and adding one more and restricting other props to be passed
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
}
type zero = RandomNumberTyp & { ///extending previous type and adding one more and restricting other props to be passed
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
}
const Test = ({value, isPositive, isNegative, isZero}: Props) => {
  return (
    <div>
      <h2>{value} {isPositive && "positive"} {isNegative && "negative"} {isZero && "zero"}</h2>
    </div>
  )
}

export default Test