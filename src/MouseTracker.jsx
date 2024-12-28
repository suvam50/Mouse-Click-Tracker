import { useEffect, useState } from 'react'

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({x:0,y:0});
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

   // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <h2>Mouse Position</h2>
    <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  )
}

export default MouseTracker