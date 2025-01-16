<template>
  <div ref="background" class="background"></div>
</template>

<script>
import * as THREE from "three";

export default {
  mounted() {
    // Initialize Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    this.$refs.background.appendChild(renderer.domElement);

    // Particle Count
    const particlesCount = 1000;

    // Create a BufferGeometry for particles
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Spread particles in a -5 to 5 range
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Add custom ShaderMaterial for particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        pointSize: { value: 9.0 },
        color: { value: new THREE.Color(0xffdd20) },
        mouse: { value: new THREE.Vector3(0, 0, 0) }, // Mouse position in 3D space
        time: { value: 0.0 }, // For dynamic animations
        glowIntensity: { value: 10.0 }, // Increased glow intensity
        hoverRadius: { value: 2.1 }, // Smaller hover effect area
      },
      vertexShader: `
        uniform float pointSize;
        uniform vec3 mouse;
        uniform float hoverRadius;
        varying float distanceToMouse;

        void main() {
          // Calculate distance between the particle and the mouse
          distanceToMouse = distance(position, mouse);

          // Dynamically size particles based on distance to mouse
          float size = pointSize * (0.7 / (distanceToMouse + 0.2));
          gl_PointSize = size;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float glowIntensity;
        uniform float hoverRadius;
        varying float distanceToMouse;

        void main() {
          vec2 uv = gl_PointCoord.xy - vec2(0.5); // Center the point
          float alpha = 1.0 - length(uv) * 2.0;   // Circular fade-out

          // Only apply highlight effect within a certain radius
          float brightness = 0.0;
          if (distanceToMouse < hoverRadius) {
            brightness = glowIntensity / (distanceToMouse + 0.1); // Highlight near mouse with bigger glow
          }

          vec3 starColor = color * brightness;

          // Discard non-circular parts
          if (alpha < 0.0) discard;

          gl_FragColor = vec4(starColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Handle Mouse Movement
    const mouse3D = new THREE.Vector3();
    window.addEventListener("mousemove", (event) => {
      // Convert mouse position to normalized device coordinates (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Unproject the mouse position to 3D space
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      mouse3D.copy(camera.position).add(dir.multiplyScalar(distance));

      // Update mouse uniform
      particlesMaterial.uniforms.mouse.value = mouse3D;
    });

    // Animation Loop
    camera.position.z = 5;
    const clock = new THREE.Clock();

    function animate() {
      particlesMaterial.uniforms.time.value = clock.getElapsedTime();

      // Animate particle positions dynamically (optional)
      const positions = particlesGeometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const x = i * 3;
        const y = i * 3 + 1;
        const z = i * 3 + 2;

        positions[x] += Math.sin(clock.getElapsedTime() + i) * 0.001;
        positions[y] += Math.cos(clock.getElapsedTime() + i) * 0.001;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Render the scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // Handle Window Resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  },
};
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: radial-gradient(circle, #131d47, #03033b);
}
</style>
