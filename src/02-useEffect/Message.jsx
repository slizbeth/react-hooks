import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
    }

    window.addEventListener( 'mousemove', onMouseMove );
  
    return () => {
      window.removeEventListener( 'mousemove', onMouseMove );
    }
  }, []);
  
  return (
    <div>
      <h3>El usuario ya existe</h3>
    </div>
  )
}
