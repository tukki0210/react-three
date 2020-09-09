import * as CANNON from 'cannon';
import React from 'react';
import { useCannon } from '../useCannon';

const Box = ({ position, args}) => {
    const ref = useCannon({ mass:100000 }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1,1,1)));
        body.position.set(...position);
    });
    return (
        <mesh ref={ref} castShadow receiveShadow>
            <boxGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' />
        </mesh>
    )
}
export default Box;