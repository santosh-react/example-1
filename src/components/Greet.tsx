import React from 'react'

interface IGreetProps {
  name?: string,
  address?: string,
  age?: number,
  city?: string,
}
const Greet: React.FC<IGreetProps> = (prop: IGreetProps) => {
  return <>
    <h5>Name : {prop.name}</h5>
    <h5>Age : {prop.age}</h5>
  </>
}
export default Greet;
