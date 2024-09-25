import React, { useState } from "react";
import StopWatch from "./StopWatch";
import { toast } from "react-toastify";
interface CounterProps {
  counter?: number;
  style?: React.CSSProperties;
}
const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const [countValue, setCountValue] = useState(0);

  return <>
    <div className="row mt-4">
      <div className="col-sm-3">
        <div className="card shadow">
          <div className="card-header text-white bg-info">
            <h5 className="text center" style={props.style}>Counter APP</h5>
          </div>
          <div className="card-body">
            <h1 className="text-center">{countValue}</h1>
            <div className="d-flex justify-content-center mt-4">
              <button onClick={() =>
                countValue === 0 ?
                  toast.error("Count value cannot go below 0") : setCountValue(countValue - 1)
              } className="btn btn-outline-warning me-2">Decrement!</button>
              <button onClick={() =>
                countValue === 10 ? toast.error("Count value cannot go above 10") : setCountValue(countValue + 1)
              } className="btn btn-outline-info">Increment!</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <StopWatch />
      </div>
    </div >

  </>
}
export default Counter;