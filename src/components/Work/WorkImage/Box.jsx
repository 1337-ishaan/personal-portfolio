import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";


export default function Box(props) {
    const mesh = useRef()
    const [state, setState] = useState({isHovered: false, isActive: false})
    useFrame(state => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = mesh.current.position.y + Math.sin(time*2)/100;
        mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
      })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setState({...state, isActive: !state.isActive, })}
        onPointerOver={(e) => setState({...state, isHovered: true})}
        onPointerOut={(e) => setState({...state, isHovered: false})}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={state.isActive ? '#820263' : '#D90368'} />
      </mesh>
    )
  }