import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handelStartTime = () => {
    setIsRunning(true);
    toast.success("Timer started successfully.");
    /*  Swal.fire({
       icon: "question",
       title: "Do you want to start timer?",
       text: "Start timer",
       showCancelButton: true,
       confirmButtonText: "Start Now",
     }).then((result) => {
       if (result.isConfirmed) {
         setIsRunning(true);
       }
     }); */

  }
  const handelStopTime = () => setIsRunning(false);
  const handelResetTime = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes
      }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return <>
    <div className="card shadow">
      <div className="card-header text-white bg-primary">
        <h5 className="text center" style={{ "textAlign": "center" }}>Stopwatch APP</h5>
      </div>
      <div className="card-body">
        <h1 className="text-center">{formatTime(time)}</h1>
        <div className="d-flex justify-content-center mt-4">
          <button className="btn shadow btn-outline-info me-2"
            onClick={handelStartTime} disabled={isRunning}>Start</button>
          <button className="btn shadow btn-outline-warning me-2" onClick={() => handelResetTime()}>Reset Timer</button>
          <button className="btn shadow btn-outline-danger" disabled={!isRunning} onClick={() => handelStopTime()}>Stop</button>
        </div>
      </div>
    </div>
  </>
}
export default StopWatch;