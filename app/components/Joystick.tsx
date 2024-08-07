"use client";
import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

type JoystickProps = {
  x: number;
  y: number;
  pressed: boolean;
  size?: number;
  setX?: (n: number) => void;
  setY?: (n: number) => void;
};

const Joystick = ({
  x,
  y,
  pressed,
  size = 150,
  setX = (n) => {
    console.log("[CLICK] X :", n);
  },
  setY = (n) => {
    console.log("[CLICK] Y :", n);
  },
}: JoystickProps): JSX.Element => {
  const joystickOuterSize = size; // taille de l'anneau extérieur
  const joystickSize = joystickOuterSize / 1.5; // taille du joystick

  // calcule la position du joystick en pixels
  const joystickPositionX = x * (joystickSize / 2);
  const joystickPositionY = y * (joystickSize / 2);

  // calcule la position de l'anneau extérieur en pixels
  const outerPositionX = (joystickOuterSize - joystickSize) / 2;
  const outerPositionY = (joystickOuterSize - joystickSize) / 2;

  const [mouseLocalCoordinates, setMouseLocalCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    setMouseLocalCoordinates({
      x: event.clientX - target.offsetLeft,
      y: event.clientY - target.offsetTop,
    });
    console.log("[MOUSE LOCATION] : ", mouseLocalCoordinates);
  };
  useEffect(() => {
    console.log("[MOUSE LOCATION] : ", mouseLocalCoordinates);
  }, [mouseLocalCoordinates]);

  // useEffect(()=>{
  //   window.addEventListener('mousemove', mouseMoveHandler);
  //   return(()=>{
  //     window.removeEventListener('mousemove', mouseMoveHandler);
  //   })
  // }, [])

  const joystickRef = useRef<HTMLDivElement>(null);
  const [timeout, setTimeout] = useState(0);

  return (
    <div
      ref={joystickRef}
      onMouseMove={(event) => {
        // TODO: Change to Mouse Down thing, not over like here
        if (Date.now() - timeout - 150 > 0) {
          console.log("Moved", event.clientX, event.clientY);
          setTimeout(Date.now());
          if (joystickRef.current) {
            setX(
              (event.clientX -
                joystickRef.current.offsetLeft -
                joystickOuterSize / 2) /
                (joystickOuterSize / 2)
            );
            setY(
              (event.clientY -
                joystickRef.current.offsetTop -
                joystickOuterSize / 2) /
                (joystickOuterSize / 2)
            );
          }
        }
      }}
      onTouchMove={(event) => {
        if (Date.now() - timeout - 150 > 0) {
          console.log(
            "Moved",
            event.touches[0].clientX,
            event.touches[0].clientY
          );
          setTimeout(Date.now());
          if (joystickRef.current) {
            setX(
              (event.touches[0].clientX -
                joystickRef.current.offsetLeft -
                joystickOuterSize / 2) /
                (joystickOuterSize / 2)
            );
            setY(
              (event.touches[0].clientY -
                joystickRef.current.offsetTop -
                joystickOuterSize / 2) /
                (joystickOuterSize / 2)
            );
          }
        }
      }}
      onMouseLeave={() => {
        setX(0);
        setY(0);
      }}
      onTouchEnd={() => {
        setX(0);
        setY(0);
      }}
      className="joystick-outer"
      style={{
        width: joystickOuterSize,
        height: joystickOuterSize,
        left: outerPositionX,
        top: outerPositionY,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 666,
        boxSizing: "border-box",
        border: "2px solid white",
      }}
    >
      <div
        className="joystick"
        style={{
          width: joystickSize,
          height: joystickSize,
          backgroundColor: pressed ? "gray" : "white",
          transform: `translate(${joystickPositionX}px, ${joystickPositionY}px)`,
          overflow: "hidden",
          borderRadius: 666,
          boxSizing: "border-box",
          // transition: 'transform 0.1s'
        }}
      />
    </div>
  );
};

export default Joystick;
