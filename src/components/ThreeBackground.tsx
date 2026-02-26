"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec3 uPointer;
  uniform float uHoverState;
  uniform float uMorphProgress;
  
  attribute vec3 aTarget;

  varying vec2 vUv;
  varying vec3 vPosition;
  varying float vMorphProgress;

  // GLSL textureless classic 3D noise "cnoise",
  // with an RSL-style periodic variant "pnoise".
  // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
  // Version: 2011-10-11
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

  float cnoise(vec3 P){
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
  }

  void main() {
    vUv = uv;
    vMorphProgress = uMorphProgress;

    // 1) Breathing Liquid Noise Dispersion on original sphere
    float noiseFreq = 0.5;
    float noiseAmp = 0.8;
    vec3 noisePos = vec3(position.x * noiseFreq + uTime * 0.2, position.y * noiseFreq + uTime * 0.3, position.z * noiseFreq);
    float noiseValue = cnoise(noisePos) * noiseAmp;

    vec3 spherePosition = position + normal * noiseValue;

    // 2) Mix between Sphere and Target Castle
    // We add slight noise to the castle too, so it doesn't look completely frozen
    float targetNoiseFreq = 1.0;
    float targetNoiseAmp = 0.1;
    vec3 targetNoisePos = vec3(aTarget.x * targetNoiseFreq + uTime * 0.4, aTarget.y * targetNoiseFreq, aTarget.z * targetNoiseFreq + uTime * 0.4);
    float targetNoise = cnoise(targetNoisePos) * targetNoiseAmp;
    
    vec3 mixedPosition = mix(spherePosition, aTarget + vec3(0.0, targetNoise, 0.0), uMorphProgress);
    
    vPosition = mixedPosition;

    // 3) Cursor Magnetic Repulsion
    float dist = distance(mixedPosition, uPointer);
    
    // Smoothstep creates a nice falloff radius around the cursor
    float interactionRadius = 4.0;
    float repulsionForce = 1.5;
    float force = smoothstep(interactionRadius, 0.0, dist) * uHoverState;
    
    // Push the vertex outward along its normal (or away from cursor)
    // Reduce interaction force slightly during morph to keep structure readable
    float activeRepulsion = mix(repulsionForce, repulsionForce * 0.4, uMorphProgress);
    vec3 pushDirection = normalize(mixedPosition - uPointer);
    mixedPosition += pushDirection * force * activeRepulsion;

    // Apply rotation only to the sphere state, lock rotation in castle state
    // We'll calculate a manual Y-rotation here to easily disable it based on morph progress
    float rotAngle = uTime * 0.05 * (1.0 - uMorphProgress);
    float cosRot = cos(rotAngle);
    float sinRot = sin(rotAngle);
    mat3 rotMat = mat3(
      cosRot, 0.0, sinRot,
      0.0,    1.0, 0.0,
      -sinRot, 0.0, cosRot
    );
    
    vec3 rotatedPosition = rotMat * mixedPosition;

    vec4 modelViewPosition = modelViewMatrix * vec4(rotatedPosition, 1.0);
    
    // Scale points by distance from camera
    float pointSize = mix(20.0 * (1.0 + noiseValue * 0.5), 18.0, uMorphProgress);
    gl_PointSize = pointSize * (1.0 / -modelViewPosition.z);
    
    gl_Position = projectionMatrix * modelViewPosition;
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying float vMorphProgress;

  void main() {
    // Soft circular point mapping inside gl_PointCoord
    vec2 ptCoord = gl_PointCoord - vec2(0.5);
    float dist = length(ptCoord);
    
    if (dist > 0.5) discard;
    
    // Soft edge for the circle
    float alpha = smoothstep(0.5, 0.3, dist);

    // Sphere Color Gradient Setup (Warm Orange/Red to Deep Blue)
    vec3 colorLeft = vec3(1.0, 0.3, 0.1); // Warm Orange/Red
    vec3 colorRight = vec3(0.1, 0.4, 1.0); // Deep Blue
    
    float mixFactor = smoothstep(-3.0, 3.0, vPosition.x);
    vec3 sphereColor = mix(colorLeft, colorRight, mixFactor);

    // Castle Color Gradient (Gold/White highlight to Deep Charcoal/Blue)
    float castleYMix = smoothstep(-2.0, 4.0, vPosition.y); 
    vec3 castleBottom = vec3(0.05, 0.05, 0.15);
    vec3 castleTop = vec3(0.9, 0.8, 0.4); // Golden light hitting top
    vec3 castleColor = mix(castleBottom, castleTop, castleYMix);

    vec3 finalColor = mix(sphereColor, castleColor, vMorphProgress);

    gl_FragColor = vec4(finalColor, alpha * 0.8);
  }
`;

// Helper function to generate a pseudo-random point within a castle shape
function getCastlePoint(rndX: number, rndY: number, rndZ: number) {
    // A simple architectural block logic
    // Returns [x, y, z]

    // Base
    // Center block: x [-2, 2], y [-2, 0], z [-1, 1]

    // Towers (Left and Right)
    // Left: x [-2.5, -1.5], y [-2, 2], z [-1.2, 1.2]
    // Right: x [1.5, 2.5], y [-2, 2], z [-1.2, 1.2]

    // Spires (Left and Right)
    // Cone on top of towers: y [2, 4]

    const type = Math.random();

    if (type < 0.4) {
        // Base block
        return [
            (rndX - 0.5) * 4.0,
            (rndY - 0.5) * 2.0 - 1.0,
            (rndZ - 0.5) * 2.0
        ];
    } else if (type < 0.6) {
        // Left Tower
        return [
            (rndX - 0.5) * 1.5 - 2.0,
            (rndY - 0.5) * 4.0,
            (rndZ - 0.5) * 2.4
        ];
    } else if (type < 0.8) {
        // Right Tower
        return [
            (rndX - 0.5) * 1.5 + 2.0,
            (rndY - 0.5) * 4.0,
            (rndZ - 0.5) * 2.4
        ];
    } else if (type < 0.9) {
        // Left Spire (cone approximation using height to scale radius)
        const height = rndY * 2.0 + 2.0; // from y=2 to y=4
        const radius = 1.0 - (height - 2.0) / 2.0; // scales from 1 to 0
        return [
            (rndX - 0.5) * radius * 1.5 - 2.0,
            height,
            (rndZ - 0.5) * radius * 1.5
        ];
    } else {
        // Right Spire
        const height = rndY * 2.0 + 2.0; // from y=2 to y=4
        const radius = 1.0 - (height - 2.0) / 2.0; // scales from 1 to 0
        return [
            (rndX - 0.5) * radius * 1.5 + 2.0,
            height,
            (rndZ - 0.5) * radius * 1.5
        ];
    }
}

export default function ThreeBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        // Move camera back to see the whole sphere / castle
        camera.position.z = 12;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // 1) High Detail Icosahedron Geometry
        const geometry = new THREE.IcosahedronGeometry(3.5, 14);

        // Pre-calculate target positions for the castle morph
        const positions = geometry.attributes.position.array;
        const targets = new Float32Array(positions.length);

        for (let i = 0; i < positions.length; i += 3) {
            const pt = getCastlePoint(Math.random(), Math.random(), Math.random());
            targets[i] = pt[0];
            targets[i + 1] = pt[1];
            targets[i + 2] = pt[2];
        }

        geometry.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3));

        // 2) Shader Material
        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uPointer: { value: new THREE.Vector3(999, 999, 0) },
                uHoverState: { value: 0 }, // Smooth value for hover transition
                uMorphProgress: { value: 0 } // 0 = sphere, 1 = castle
            },
            transparent: true,
            depthWrite: false, // Ensures points blend nicely without z-fighting
        });

        // 3) Points Mesh
        const pointCloud = new THREE.Points(geometry, material);
        scene.add(pointCloud);

        // Interaction state
        const pointer = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        let isPointerActive = false;
        let targetHoverState = 0;
        let targetMorphProgress = 0;

        const onPointerMove = (e: PointerEvent) => {
            isPointerActive = true;
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
            targetHoverState = 1.0;
        };

        const onPointerLeave = () => {
            targetHoverState = 0.0;
        };

        // Custom events from Hero component
        const onExploreEnter = () => {
            targetMorphProgress = 1.0;
        };

        const onExploreLeave = () => {
            targetMorphProgress = 0.0;
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerleave", onPointerLeave);
        document.addEventListener("mouseleave", onPointerLeave);
        window.addEventListener("explore-enter", onExploreEnter);
        window.addEventListener("explore-leave", onExploreLeave);

        const clock = new THREE.Clock();

        // Plane at Z=0 to project the 2D cursor position into 3D space for the shader
        const planeZ0 = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const targetVector = new THREE.Vector3();

        let animationFrameId: number;

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            material.uniforms.uTime.value = elapsedTime;

            // Smoothly interpolate the hover state and morph progress
            material.uniforms.uHoverState.value += (targetHoverState - material.uniforms.uHoverState.value) * 0.1;
            material.uniforms.uMorphProgress.value += (targetMorphProgress - material.uniforms.uMorphProgress.value) * 0.05;

            if (isPointerActive) {
                raycaster.setFromCamera(pointer, camera);
                raycaster.ray.intersectPlane(planeZ0, targetVector);
                material.uniforms.uPointer.value.lerp(targetVector, 0.2);
            }

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(tick);
        };

        tick();

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
            document.removeEventListener("mouseleave", onPointerLeave);
            window.removeEventListener("explore-enter", onExploreEnter);
            window.removeEventListener("explore-leave", onExploreLeave);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 bg-transparent opacity-90" />;
}
