"use client";

import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { type FC, Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

export interface ViewerProps {
	url: string;
	width?: number | string;
	height?: number | string;
	rotationX?: number;
	rotationY?: number;
	rotationZ?: number;
	cameraDistance?: number;
	minZoom?: number;
	maxZoom?: number;
	autoRotate?: boolean;
	autoRotateSpeed?: number;
	backgroundColor?: string;
	showEnvironment?: boolean;
}

const Model: FC<{
	url: string;
	rotation: [number, number, number];
	onLoad: () => void;
}> = ({ url, rotation, onLoad }) => {
	const { scene } = useGLTF(url);
	const groupRef = useRef<THREE.Group>(null);
	const loadedRef = useRef(false);

	useEffect(() => {
		if (!groupRef.current || loadedRef.current) return;

		// Center and scale the model
		const box = new THREE.Box3().setFromObject(scene);
		const center = box.getCenter(new THREE.Vector3());
		const size = box.getSize(new THREE.Vector3());

		const maxDim = Math.max(size.x, size.y, size.z);
		const scale = 2 / maxDim;

		groupRef.current.scale.setScalar(scale);
		groupRef.current.position.set(
			-center.x * scale,
			-center.y * scale,
			-center.z * scale,
		);

		loadedRef.current = true;

		// Small delay to ensure rendering is complete
		requestAnimationFrame(() => {
			onLoad();
		});
	}, [scene, onLoad]);

	return (
		<group rotation={rotation}>
			<group ref={groupRef}>
				<primitive object={scene} />
			</group>
		</group>
	);
};

const ModelViewer: FC<ViewerProps> = ({
	url,
	width = 400,
	height = 400,
	rotationX = 0,
	rotationY = 0,
	rotationZ = 0,
	cameraDistance = 5,
	minZoom = 2,
	maxZoom = 20,
	autoRotate = false,
	autoRotateSpeed = 2,
	backgroundColor = "transparent",
	showEnvironment = true,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [key, setKey] = useState(0);

	// Reset loading state when URL changes
	useEffect(() => {
		setIsLoaded(false);
		setKey((prev) => prev + 1);
	}, []);

	const rotation: [number, number, number] = [
		(rotationX * Math.PI) / 180,
		(rotationY * Math.PI) / 180,
		(rotationZ * Math.PI) / 180,
	];

	return (
		<div
			style={{
				width,
				height,
				background: backgroundColor,
				position: "relative",
			}}
		>
			{!isLoaded && (
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						color: "white",
						fontSize: "14px",
						background: "rgba(0, 0, 0, 0.5)",
						padding: "10px 20px",
						borderRadius: "4px",
						zIndex: 10,
						pointerEvents: "none",
					}}
				>
					Loading...
				</div>
			)}
			<Canvas
				key={key}
				camera={{ position: [0, 0, cameraDistance], fov: 50 }}
				style={{ width: "100%", height: "100%" }}
				gl={{
					alpha: true,
					antialias: true,
				}}
			>
				{showEnvironment && <Environment preset="studio" />}

				{/* Ambient light for overall illumination */}
				<ambientLight intensity={0.6} />

				{/* Main directional light (sunlight) */}
				<directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

				{/* Fill light from the opposite side */}
				<directionalLight position={[-5, 3, -5]} intensity={0.4} />

				{/* Rim light from behind */}
				<directionalLight position={[0, 5, -5]} intensity={0.6} />

				{/* Spot light for dramatic effect */}
				<spotLight
					position={[0, 10, 0]}
					angle={0.3}
					penumbra={1}
					intensity={0.5}
					castShadow
				/>

				<Suspense fallback={null}>
					<Model
						url={url}
						rotation={rotation}
						onLoad={() => setIsLoaded(true)}
					/>
				</Suspense>

				<OrbitControls
					enablePan={false}
					enableZoom={true}
					enableRotate={true}
					minDistance={minZoom}
					maxDistance={maxZoom}
					autoRotate={autoRotate}
					autoRotateSpeed={autoRotateSpeed}
				/>
			</Canvas>
		</div>
	);
};

export default ModelViewer;
