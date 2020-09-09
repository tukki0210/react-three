/** @jsx jsx */
import * as THREE from 'three';
import * as CANNON from 'cannon';
import React, { useEffect, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { css, jsx } from '@emotion/core';
import { useCannon, Provider } from './useCannon';
import Box from './components//Box'
import Plane from './components/Plane'

const theme = css`
   *{ width: 100vw;
      height: 100vh;
      background-color: #272727;
   }
`;

/*
const Thing = () => {
    const ref = useRef();

    useFrame(() => {
        ref.current.rotation.y += 0.01
    });

    return (
        <mesh ref={ref}>
            <boxGeometry attach='geometry' args={[400, 400, 400]} />
            <meshNormalMaterial attach='material' />
        </mesh>
    );
};*/

 
export const Work = () => {
    return (
        <div css={theme}>
            <Canvas camera={{ position: [0, 5, 15] }}>
                <ambientLight intensity={0.5} />
                <spotLight
                    intensity={0.6}
                    position={[30, 30, 50]}
                    angle={0.2}
                    penumbra={1}
                    castShadow
                />
                <Provider>
                    <Plane position={[0,0,-50]} />
                    <Box position={[1, 0, 1]} args={[2, 2, 2]} />
                    <Box position={[1, 0, 1]} args={[1, 1, 5]} />
                    <Box position={[2, 1, 5]} args={[3, 3, 3]} />
                    <Box position={[0, 0, 6]} args={[2, 4, 2]} />
                    <Box position={[-1, 1, 8]} args={[2, 3, 2]} />
                    <Box position={[0, 2, 3]} args={[5, 5, 1]} />
                    <Box position={[2, -1, 13]} args={[1, 1, 10]} />
                </Provider>
            </Canvas>
        </div>
    )
}