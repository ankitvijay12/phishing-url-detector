/**
 * PhishGuard AI — High-End Cybersecurity Intelligence Controller
 * Faint Neural Constellation Canvas • Trailing Cursor • Smooth Scroll Spy •
 * Interactive Operations Center • Full REST API Integration
 */

document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------------------------------------
    // 0. PROCEDURAL CYBER AUDIO ENGINE (HTML5 WEB AUDIO API)
    // --------------------------------------------------------------------------
    const CyberAudio = (() => {
        let ctx = null;
        let isMuted = localStorage.getItem("phishguard_audio_muted") === "true";

        function getContext() {
            if (!ctx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    ctx = new AudioContextClass();
                }
            }
            if (ctx && ctx.state === "suspended") {
                ctx.resume().catch(() => {});
            }
            return ctx;
        }

        function unlock() {
            const ac = getContext();
            if (ac && ac.state === "suspended") {
                ac.resume().catch(() => {});
            }
        }

        // Auto-unlock on first user gesture
        ["click", "keydown", "touchstart", "mousedown"].forEach(evt => {
            window.addEventListener(evt, () => unlock(), { passive: true, once: false });
        });

        return {
            unlock,
            get isMuted() {
                return isMuted;
            },
            toggleMute() {
                isMuted = !isMuted;
                localStorage.setItem("phishguard_audio_muted", isMuted ? "true" : "false");
                return isMuted;
            },

            // Crisp cyber click / tactile ping for chips, buttons, tabs
            playClick(freq = 920) {
                if (isMuted) return;
                const ac = getContext();
                if (!ac) return;
                try {
                    const now = ac.currentTime;
                    const osc = ac.createOscillator();
                    const gain = ac.createGain();

                    osc.type = "sine";
                    osc.frequency.setValueAtTime(freq, now);
                    osc.frequency.exponentialRampToValueAtTime(freq * 1.45, now + 0.035);

                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

                    osc.connect(gain);
                    gain.connect(ac.destination);

                    osc.start(now);
                    osc.stop(now + 0.05);
                } catch (e) {}
            },

            // High-tech scan energy pulse when scanning starts
            playScanEnergy() {
                if (isMuted) return;
                const ac = getContext();
                if (!ac) return;
                try {
                    const now = ac.currentTime;
                    const dur = 0.45;

                    const osc1 = ac.createOscillator();
                    const osc2 = ac.createOscillator();
                    const filter = ac.createBiquadFilter();
                    const gain = ac.createGain();

                    osc1.type = "triangle";
                    osc1.frequency.setValueAtTime(160, now);
                    osc1.frequency.exponentialRampToValueAtTime(560, now + dur);

                    osc2.type = "sine";
                    osc2.frequency.setValueAtTime(320, now);
                    osc2.frequency.exponentialRampToValueAtTime(1120, now + dur);

                    filter.type = "bandpass";
                    filter.frequency.setValueAtTime(220, now);
                    filter.frequency.exponentialRampToValueAtTime(1500, now + dur);
                    filter.Q.setValueAtTime(2.6, now);

                    gain.gain.setValueAtTime(0.001, now);
                    gain.gain.linearRampToValueAtTime(0.14, now + 0.04);
                    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

                    osc1.connect(filter);
                    osc2.connect(filter);
                    filter.connect(gain);
                    gain.connect(ac.destination);

                    osc1.start(now);
                    osc2.start(now);
                    osc1.stop(now + dur + 0.02);
                    osc2.stop(now + dur + 0.02);
                } catch (e) {}
            },

            // Safe URL verdict: soothing cybernetic major-chord arpeggio chime
            playSafeVerdict() {
                if (isMuted) return;
                const ac = getContext();
                if (!ac) return;
                try {
                    const now = ac.currentTime;
                    // Major chord arpeggio: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
                    const freqs = [523.25, 659.25, 783.99, 1046.50];
                    const noteDelay = 0.07;

                    freqs.forEach((freq, idx) => {
                        const noteTime = now + (idx * noteDelay);
                        const osc = ac.createOscillator();
                        const gain = ac.createGain();

                        osc.type = "sine";
                        osc.frequency.setValueAtTime(freq, noteTime);

                        gain.gain.setValueAtTime(0.001, noteTime);
                        gain.gain.linearRampToValueAtTime(0.13, noteTime + 0.015);
                        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.42);

                        osc.connect(gain);
                        gain.connect(ac.destination);

                        osc.start(noteTime);
                        osc.stop(noteTime + 0.45);
                    });
                } catch (e) {}
            },

            // Phishing URL verdict: urgent dual-pulse tactical threat alarm
            playPhishAlarm() {
                if (isMuted) return;
                const ac = getContext();
                if (!ac) return;
                try {
                    const now = ac.currentTime;
                    [0, 0.16].forEach(offset => {
                        const pulseTime = now + offset;
                        const osc = ac.createOscillator();
                        const filter = ac.createBiquadFilter();
                        const gain = ac.createGain();

                        osc.type = "sawtooth";
                        osc.frequency.setValueAtTime(580, pulseTime);
                        osc.frequency.exponentialRampToValueAtTime(220, pulseTime + 0.12);

                        filter.type = "lowpass";
                        filter.frequency.setValueAtTime(1600, pulseTime);

                        gain.gain.setValueAtTime(0.001, pulseTime);
                        gain.gain.linearRampToValueAtTime(0.15, pulseTime + 0.015);
                        gain.gain.exponentialRampToValueAtTime(0.0001, pulseTime + 0.14);

                        osc.connect(filter);
                        filter.connect(gain);
                        gain.connect(ac.destination);

                        osc.start(pulseTime);
                        osc.stop(pulseTime + 0.15);
                    });
                } catch (e) {}
            }
        };
    })();

    // Sound toggle button UI helper
    function updateAudioToggleUI(muted) {
        const desktopBtn = document.getElementById("sound-toggle-btn");
        const desktopIcon = document.getElementById("sound-icon");
        const desktopText = document.getElementById("sound-text");

        const mobileBtn = document.getElementById("mobile-sound-btn");
        const mobileIcon = document.getElementById("mobile-sound-icon");
        const mobileText = document.getElementById("mobile-sound-text");

        const iconStr = muted ? "🔇" : "🔊";
        const textStr = muted ? "MUTED" : "AUDIO ON";

        if (desktopBtn) {
            desktopBtn.classList.toggle("muted", muted);
            if (desktopIcon) desktopIcon.textContent = iconStr;
            if (desktopText) desktopText.textContent = textStr;
            desktopBtn.setAttribute("title", muted ? "Unmute Sound Effects" : "Mute Sound Effects");
        }
        if (mobileBtn) {
            mobileBtn.classList.toggle("muted", muted);
            if (mobileIcon) mobileIcon.textContent = iconStr;
            if (mobileText) mobileText.textContent = textStr;
        }
    }

    function setupSoundButtons() {
        const desktopBtn = document.getElementById("sound-toggle-btn");
        const mobileBtn = document.getElementById("mobile-sound-btn");

        const onToggle = () => {
            CyberAudio.unlock();
            const muted = CyberAudio.toggleMute();
            updateAudioToggleUI(muted);
            if (!muted) {
                CyberAudio.playClick(1050);
            }
        };

        if (desktopBtn) desktopBtn.addEventListener("click", onToggle);
        if (mobileBtn) mobileBtn.addEventListener("click", onToggle);
        updateAudioToggleUI(CyberAudio.isMuted);
    }
    setupSoundButtons();

    // --------------------------------------------------------------------------
    // 1. SCROLL PROGRESS INDICATOR
    // --------------------------------------------------------------------------
    const scrollProgressBar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && scrollProgressBar) {
            const progress = (window.scrollY / totalHeight) * 100;
            scrollProgressBar.style.width = `${progress}%`;
        }
    }, { passive: true });

    // --------------------------------------------------------------------------
    // 2. DISCREET CUSTOM TRAILING CURSOR (DISABLED ON TOUCH)
    // --------------------------------------------------------------------------
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

    if (!isTouchDevice && cursorDot && cursorRing) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        function renderCursor() {
            ringX += (mouseX - ringX) * 0.2;
            ringY += (mouseY - ringY) * 0.2;
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            requestAnimationFrame(renderCursor);
        }
        requestAnimationFrame(renderCursor);

        const interactiveSelectors = "button, a, input, .chip, .intel-card, .viva-brief-card";
        document.body.addEventListener("mouseover", (e) => {
            if (e.target.closest(interactiveSelectors)) {
                cursorRing.classList.add("cursor-active");
            }
        });
        document.body.addEventListener("mouseout", (e) => {
            if (e.target.closest(interactiveSelectors)) {
                cursorRing.classList.remove("cursor-active");
            }
        });
    }

    // --------------------------------------------------------------------------
    // 3. 3D WEBGL ENGINE: MECHANICAL TURBINE SPIRAL, BOKEH PARTICLES & CYBER WAVE
    // --------------------------------------------------------------------------
    let setTurbineScanning = null;

    function initThreeBackground() {
        const webglCanvas = document.getElementById("webgl-canvas");
        if (!webglCanvas || typeof THREE === "undefined") {
            console.info("Three.js not loaded or WebGL canvas missing; operating in 2D canvas mode.");
            init2DAtmosphere();
            return;
        }

        try {
            // Renderer
            const renderer = new THREE.WebGLRenderer({
                canvas: webglCanvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Scene & Camera
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 24);

            // Lighting System
            const ambientLight = new THREE.AmbientLight(0x0a1128, 2.2);
            scene.add(ambientLight);

            // Directional key light (Electric Cyan)
            const keyLight = new THREE.DirectionalLight(0x00f2fe, 3.2);
            keyLight.position.set(15, 18, 14);
            scene.add(keyLight);

            // Directional rim light (Crisp White/Silver for metallic edge reflections)
            const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
            rimLight.position.set(-18, -12, -10);
            scene.add(rimLight);

            // Core Point Light
            const coreLight = new THREE.PointLight(0x00f2fe, 3.5, 35);
            coreLight.position.set(0, 0, 0);
            scene.add(coreLight);

            // ----------------------------------------------------------------------
            // 3D MECHANICAL TURBINE SPIRAL HIERARCHY
            // ----------------------------------------------------------------------
            const turbineRoot = new THREE.Group();
            scene.add(turbineRoot);

            const rotorGroup = new THREE.Group();
            turbineRoot.add(rotorGroup);

            // Generate Soft Bokeh Disc Texture
            function createBokehTexture() {
                const bCanvas = document.createElement("canvas");
                bCanvas.width = 128;
                bCanvas.height = 128;
                const bCtx = bCanvas.getContext("2d");
                const grad = bCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
                grad.addColorStop(0, "rgba(255, 255, 255, 1)");
                grad.addColorStop(0.2, "rgba(0, 242, 254, 0.85)");
                grad.addColorStop(0.55, "rgba(0, 242, 254, 0.28)");
                grad.addColorStop(0.85, "rgba(2, 132, 199, 0.08)");
                grad.addColorStop(1, "rgba(0, 0, 0, 0)");
                bCtx.fillStyle = grad;
                bCtx.fillRect(0, 0, 128, 128);
                return new THREE.CanvasTexture(bCanvas);
            }

            const bokehTexture = createBokehTexture();

            // Materials for the Metallic Turbine
            const metallicVaneMaterial = new THREE.MeshStandardMaterial({
                color: 0x121d30,
                metalness: 0.92,
                roughness: 0.22,
                emissive: 0x02162a,
                emissiveIntensity: 0.45
            });

            const chromeRimMaterial = new THREE.MeshStandardMaterial({
                color: 0x1e3a5f,
                metalness: 0.95,
                roughness: 0.15,
                emissive: 0x00f2fe,
                emissiveIntensity: 0.25
            });

            const glowingAccentMaterial = new THREE.MeshBasicMaterial({
                color: 0x00f2fe,
                wireframe: true,
                transparent: true,
                opacity: 0.45
            });

            // PROCEDURAL SLATTED CURVED VANES (TURBINE ROTOR)
            const vaneCount = 36;
            const radius = 4.2;
            const vaneHeight = 6.2;
            const vaneGeometry = new THREE.BoxGeometry(0.12, 1.8, vaneHeight);

            for (let i = 0; i < vaneCount; i++) {
                const angle = (i / vaneCount) * Math.PI * 2;
                const vaneMesh = new THREE.Mesh(vaneGeometry, metallicVaneMaterial);

                // Position around cylindrical radius
                const vx = Math.cos(angle) * radius;
                const vy = Math.sin(angle) * radius;
                vaneMesh.position.set(vx, vy, 0);

                // Pitch angle: angled louver fins forming a helical vortex
                vaneMesh.rotation.z = angle + Math.PI / 4;
                vaneMesh.rotation.x = 0.35; // Helical pitch twist
                vaneMesh.rotation.y = angle * 0.15;

                rotorGroup.add(vaneMesh);
            }

            // Central Core Hub & Concentric Structural Rings
            const hubGeo = new THREE.CylinderGeometry(1.6, 1.6, 6.4, 32);
            const hubMesh = new THREE.Mesh(hubGeo, metallicVaneMaterial);
            hubMesh.rotation.x = Math.PI / 2;
            rotorGroup.add(hubMesh);

            const innerGlowCylinder = new THREE.CylinderGeometry(0.9, 0.9, 6.6, 24);
            const innerGlowMat = new THREE.MeshBasicMaterial({
                color: 0x00f2fe,
                transparent: true,
                opacity: 0.75
            });
            const innerMesh = new THREE.Mesh(innerGlowCylinder, innerGlowMat);
            innerMesh.rotation.x = Math.PI / 2;
            rotorGroup.add(innerMesh);

            // Precision Outer & Inner Torus Rings
            const outerRingGeo1 = new THREE.TorusGeometry(radius + 0.9, 0.06, 16, 80);
            const outerRingMesh1 = new THREE.Mesh(outerRingGeo1, chromeRimMaterial);
            rotorGroup.add(outerRingMesh1);

            const outerRingGeo2 = new THREE.TorusGeometry(radius + 0.9, 0.06, 16, 80);
            const outerRingMesh2 = new THREE.Mesh(outerRingGeo2, chromeRimMaterial);
            outerRingMesh2.position.z = -vaneHeight / 2 + 0.2;
            rotorGroup.add(outerRingMesh2);

            const outerRingGeo3 = new THREE.TorusGeometry(radius + 0.9, 0.06, 16, 80);
            const outerRingMesh3 = new THREE.Mesh(outerRingGeo3, chromeRimMaterial);
            outerRingMesh3.position.z = vaneHeight / 2 - 0.2;
            rotorGroup.add(outerRingMesh3);

            // Delicate Wireframe Concentric Gyro Cage
            const cageGeo = new THREE.IcosahedronGeometry(radius + 1.6, 1);
            const cageMesh = new THREE.Mesh(cageGeo, glowingAccentMaterial);
            turbineRoot.add(cageMesh);

            // ----------------------------------------------------------------------
            // FLOATING DEPTH-OF-FIELD BOKEH DUST PARTICLES
            // ----------------------------------------------------------------------
            const bokehCount = 65;
            const bokehGeo = new THREE.BufferGeometry();
            const bokehPos = new Float32Array(bokehCount * 3);
            const bokehSpeeds = new Float32Array(bokehCount * 3);

            for (let i = 0; i < bokehCount; i++) {
                bokehPos[i * 3] = (Math.random() - 0.5) * 40;
                bokehPos[i * 3 + 1] = (Math.random() - 0.5) * 30;
                bokehPos[i * 3 + 2] = Math.random() * 20 - 5; // Near camera for bokeh blur

                bokehSpeeds[i * 3] = (Math.random() - 0.5) * 0.015;
                bokehSpeeds[i * 3 + 1] = Math.random() * 0.02 + 0.008; // Gentle upward drift
                bokehSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
            }

            bokehGeo.setAttribute("position", new THREE.BufferAttribute(bokehPos, 3));

            const bokehMat = new THREE.PointsMaterial({
                size: 2.8,
                map: bokehTexture,
                transparent: true,
                opacity: 0.45,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const bokehSystem = new THREE.Points(bokehGeo, bokehMat);
            scene.add(bokehSystem);

            // Atmospheric Micro Cyber Dust
            const dustCount = 260;
            const dustGeo = new THREE.BufferGeometry();
            const dustPos = new Float32Array(dustCount * 3);

            for (let i = 0; i < dustCount; i++) {
                dustPos[i * 3] = (Math.random() - 0.5) * 50;
                dustPos[i * 3 + 1] = (Math.random() - 0.5) * 40;
                dustPos[i * 3 + 2] = (Math.random() - 0.5) * 35;
            }

            dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));

            const dustMat = new THREE.PointsMaterial({
                size: 0.65,
                color: 0x00f2fe,
                transparent: true,
                opacity: 0.5,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const dustSystem = new THREE.Points(dustGeo, dustMat);
            scene.add(dustSystem);

            // ----------------------------------------------------------------------
            // UNDULATING 3D CYBER WAVE MESH (Point Cloud Terrain)
            // ----------------------------------------------------------------------
            const waveCols = 45;
            const waveRows = 25;
            const waveCount = waveCols * waveRows;
            const waveGeo = new THREE.BufferGeometry();
            const wavePos = new Float32Array(waveCount * 3);

            for (let r = 0; r < waveRows; r++) {
                for (let c = 0; c < waveCols; c++) {
                    const idx = (r * waveCols + c) * 3;
                    wavePos[idx] = (c / (waveCols - 1) - 0.5) * 46;
                    wavePos[idx + 1] = -9.0;
                    wavePos[idx + 2] = (r / (waveRows - 1) - 0.5) * 32 - 4;
                }
            }

            waveGeo.setAttribute("position", new THREE.BufferAttribute(wavePos, 3));

            const waveMat = new THREE.PointsMaterial({
                size: 0.45,
                color: 0x0284c7,
                transparent: true,
                opacity: 0.35,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const waveSystem = new THREE.Points(waveGeo, waveMat);
            scene.add(waveSystem);

            // ----------------------------------------------------------------------
            // DYNAMIC LAYOUT & POSITIONING
            // ----------------------------------------------------------------------
            function updateTurbinePosition() {
                const isDesktop = window.innerWidth >= 992;
                if (isDesktop) {
                    turbineRoot.position.set(6.2, 0.4, 0);
                    turbineRoot.scale.set(1.0, 1.0, 1.0);
                } else if (window.innerWidth >= 640) {
                    turbineRoot.position.set(0, -1.0, -2);
                    turbineRoot.scale.set(0.72, 0.72, 0.72);
                } else {
                    turbineRoot.position.set(0, -1.5, -4);
                    turbineRoot.scale.set(0.55, 0.55, 0.55);
                }
            }
            updateTurbinePosition();

            // MOUSE INTERACTION & PARALLAX
            let targetRotX = 0.45;
            let targetRotY = -0.38;

            window.addEventListener("mousemove", (e) => {
                const normX = (e.clientX / window.innerWidth) * 2 - 1;
                const normY = -(e.clientY / window.innerHeight) * 2 + 1;
                targetRotX = 0.45 - normY * 0.32;
                targetRotY = -0.38 + normX * 0.38;
            }, { passive: true });

            // SCROLL PROGRESSION
            let scrollY = 0;
            window.addEventListener("scroll", () => {
                scrollY = window.scrollY;
            }, { passive: true });

            // SCAN ACCELERATION STATE
            let targetSpinSpeed = 0.007;
            let currentSpinSpeed = 0.007;
            let targetCoreIntensity = 3.5;

            setTurbineScanning = function(isScanning) {
                if (isScanning) {
                    targetSpinSpeed = 0.048; // High speed scan vortex
                    targetCoreIntensity = 8.0;
                    keyLight.intensity = 5.0;
                } else {
                    targetSpinSpeed = 0.007; // Return to idle pace
                    targetCoreIntensity = 3.5;
                    keyLight.intensity = 3.2;
                }
            };

            // WINDOW RESIZE
            window.addEventListener("resize", () => {
                const w = window.innerWidth;
                const h = window.innerHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                updateTurbinePosition();
            });

            // ----------------------------------------------------------------------
            // RENDER LOOP (LOCKED 60 FPS)
            // ----------------------------------------------------------------------
            let clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                // Smooth rotation dampening (lerp)
                currentSpinSpeed += (targetSpinSpeed - currentSpinSpeed) * 0.06;
                rotorGroup.rotation.z += currentSpinSpeed;
                cageMesh.rotation.y -= currentSpinSpeed * 0.4;
                cageMesh.rotation.x += currentSpinSpeed * 0.2;

                // Mouse tilt lerp
                turbineRoot.rotation.x += (targetRotX - turbineRoot.rotation.x) * 0.05;
                turbineRoot.rotation.y += (targetRotY - turbineRoot.rotation.y) * 0.05;

                // Core light intensity breathing / scan surge
                coreLight.intensity += (targetCoreIntensity - coreLight.intensity) * 0.08;

                // Scroll parallax adaptation
                const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight || 1), 1);
                turbineRoot.position.y += ((0.4 - scrollProgress * 3.5) - turbineRoot.position.y) * 0.04;

                // Animate Floating Bokeh Discs
                const bPos = bokehGeo.attributes.position.array;
                for (let i = 0; i < bokehCount; i++) {
                    bPos[i * 3 + 1] += bokehSpeeds[i * 3 + 1];
                    bPos[i * 3] += Math.sin(elapsedTime * 0.6 + i) * 0.01;

                    // Wrap around top
                    if (bPos[i * 3 + 1] > 20) {
                        bPos[i * 3 + 1] = -18;
                        bPos[i * 3] = (Math.random() - 0.5) * 40;
                    }
                }
                bokehGeo.attributes.position.needsUpdate = true;

                // Animate Cyber Dust
                dustSystem.rotation.y = elapsedTime * 0.015;
                dustSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

                // Animate Undulating Cyber Wave
                const wPos = waveGeo.attributes.position.array;
                for (let r = 0; r < waveRows; r++) {
                    for (let c = 0; c < waveCols; c++) {
                        const idx = (r * waveCols + c) * 3;
                        const x = wPos[idx];
                        const z = wPos[idx + 2];
                        wPos[idx + 1] = -8.8 + Math.sin(x * 0.18 + elapsedTime * 1.4) * Math.cos(z * 0.22 + elapsedTime * 0.9) * 1.35;
                    }
                }
                waveGeo.attributes.position.needsUpdate = true;

                renderer.render(scene, camera);
            }

            animate();
            console.info("PhishGuard 3D WebGL Engine initialized successfully.");

        } catch (err) {
            console.warn("WebGL initialization encountered an issue, falling back to 2D canvas:", err);
            init2DAtmosphere();
        }
    }

    // --------------------------------------------------------------------------
    // AUXILIARY / FALLBACK 2D ATMOSPHERE CANVAS
    // --------------------------------------------------------------------------
    function init2DAtmosphere() {
        const canvas = document.getElementById("ambient-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let w, h;
        let nodes = [];

        function resizeCanvas() {
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * window.devicePixelRatio;
            canvas.height = h * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initNodes();
        }

        class ConstellationNode {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;
                this.radius = Math.random() * 1.5 + 0.8;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0, 242, 254, 0.45)";
                ctx.fill();
            }
        }

        function initNodes() {
            nodes = [];
            const count = Math.min(Math.floor(w / 30), 45);
            for (let i = 0; i < count; i++) {
                nodes.push(new ConstellationNode());
            }
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        function renderAtmosphere() {
            ctx.clearRect(0, 0, w, h);

            for (let i = 0; i < nodes.length; i++) {
                nodes[i].update();
                nodes[i].draw();

                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 125) {
                        ctx.strokeStyle = `rgba(0, 242, 254, ${0.08 * (1 - dist / 125)})`;
                        ctx.lineWidth = 0.7;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(renderAtmosphere);
        }
        requestAnimationFrame(renderAtmosphere);
    }

    // --------------------------------------------------------------------------
    // 4. SCROLL SPY & NAVIGATION HIGHLIGHTING
    // --------------------------------------------------------------------------
    const navItems = document.querySelectorAll(".menu-item, .mobile-link");
    const sections = document.querySelectorAll(".story-section");
    const mobileToggleBtn = document.getElementById("mobile-toggle-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");

    if (mobileToggleBtn && mobileDrawer) {
        mobileToggleBtn.addEventListener("click", () => {
            mobileDrawer.classList.toggle("open");
        });
        document.querySelectorAll(".mobile-link").forEach(link => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("open");
            });
        });
    }

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPos = window.scrollY + 200;

        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            const secHeight = sec.offsetHeight;
            if (scrollPos >= secTop && scrollPos < secTop + secHeight) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            const href = link.getAttribute("href");
            if (href === `#${currentSectionId}` || (currentSectionId === "hero-section" && href === "#threat-section")) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }, { passive: true });

    // --------------------------------------------------------------------------
    // 5. ANIMATED NUMBER LERP COUNTERS
    // --------------------------------------------------------------------------
    function animateNumber(element, start, end, duration, decimals = 1, suffix = "%") {
        if (!element) return;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (end - start) * easeOut;

            element.textContent = `${currentVal.toFixed(decimals)}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = `${end.toFixed(decimals)}${suffix}`;
            }
        }
        requestAnimationFrame(update);
    }

    function animateInteger(element, start, end, duration) {
        if (!element) return;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(start + (end - start) * easeOut);

            element.textContent = currentVal;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = end;
            }
        }
        requestAnimationFrame(update);
    }

    // --------------------------------------------------------------------------
    // 6. OPS CENTER TAB MANAGEMENT
    // --------------------------------------------------------------------------
    const opsTabButtons = document.querySelectorAll(".ops-tab-btn");
    const opsSubpanes = document.querySelectorAll(".ops-subpane");

    opsTabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            CyberAudio.unlock();
            CyberAudio.playClick(780);
            const target = btn.getAttribute("data-tab");

            opsTabButtons.forEach(b => b.classList.remove("active"));
            opsSubpanes.forEach(pane => pane.classList.add("hidden"));

            btn.classList.add("active");
            const activePane = document.getElementById(target);
            if (activePane) activePane.classList.remove("hidden");

            if (target === "metrics-view") {
                fetchModelMetrics();
            }
        });
    });

    // --------------------------------------------------------------------------
    // 7. CORE URL INSPECTION & API INTEGRATION (PRESERVED 100%)
    // --------------------------------------------------------------------------
    const urlForm = document.getElementById("url-form");
    const urlInput = document.getElementById("url-input");
    const scanBtn = document.getElementById("scan-btn");
    const btnText = scanBtn ? scanBtn.querySelector(".btn-text") : null;
    const scanSpinner = document.getElementById("scan-spinner");
    const scanBeam = document.getElementById("scan-beam");
    const sampleChipsContainer = document.getElementById("sample-chips");
    const errorBanner = document.getElementById("error-banner");
    const errorMessage = document.getElementById("error-message");

    const resultsWrapper = document.getElementById("results-wrapper");
    const verdictCard = document.getElementById("verdict-card");
    const verdictIcon = document.getElementById("verdict-icon");
    const verdictTitle = document.getElementById("verdict-title");
    const evaluatedUrl = document.getElementById("evaluated-url");
    const confidenceVal = document.getElementById("confidence-val");
    const riskVal = document.getElementById("risk-val");
    const modelVal = document.getElementById("model-val");
    const probPercentage = document.getElementById("prob-percentage");
    const probFill = document.getElementById("prob-fill");
    const explanationsList = document.getElementById("explanations-list");
    const featuresTbody = document.getElementById("features-tbody");

    const benchmarkTbody = document.getElementById("benchmark-tbody");
    const valTn = document.getElementById("val-tn");
    const valFp = document.getElementById("val-fp");
    const valFn = document.getElementById("val-fn");
    const valTp = document.getElementById("val-tp");
    const importanceList = document.getElementById("importance-list");

    const FEATURE_DESCRIPTIONS = {
        'url_length': { label: 'URL Length', note: 'Higher lengths (>75) frequently correlate with token-stuffed phishing links.' },
        'num_dots': { label: 'Dot Count (.)', note: 'Frequent dots often imply multi-level subdomains or spoofed domains.' },
        'num_hyphens': { label: 'Hyphen Count (-)', note: 'Often used by phishers to mimic brand names (e.g. apple-verify.com).' },
        'num_special_chars': { label: 'Special Characters', note: 'Count of symbols (?, =, &, %, _) used in complex malicious query parameters.' },
        'num_digits': { label: 'Numeric Digits', note: 'High digit frequency indicates hex encoding, session keys, or brute-force paths.' },
        'has_at_symbol': { label: '@ Symbol', note: 'Browsers ignore prefix prior to "@"; classic credential spoofing trick.' },
        'has_ip_address': { label: 'IP Address as Host', note: 'Direct IP usage bypasses DNS reputation filters.' },
        'is_https': { label: 'HTTPS Usage', note: '1 if secure encrypted protocol, 0 if plain HTTP.' },
        'num_subdomains': { label: 'Subdomains Count', note: 'Multiple subdomains mimic genuine brand domains.' },
        'suspicious_keywords': { label: 'Suspicious Keywords', note: 'Matches terms like login, verify, banking, update, confirm, etc.' },
        'is_shortened': { label: 'URL Shortener', note: 'Services like bit.ly conceal destination domain from initial view.' },
        'domain_length': { label: 'Domain Length', note: 'Length of the main hostname.' },
        'path_length': { label: 'Path Length', note: 'Length of the URL resource path.' },
        'num_slash': { label: 'Slash Count (/)', note: 'Indicates directory path depth.' },
        'has_suspicious_tld': { label: 'Suspicious TLD', note: 'Abused top-level domains like .xyz, .top, .work, .buzz.' }
    };

    const SHIELD_SAFE_SVG = `
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
        </svg>
    `;

    const SHIELD_PHISH_SVG = `
        <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
    `;

    async function checkUrl(url) {
        clearError();
        CyberAudio.unlock();
        CyberAudio.playScanEnergy();
        setScanning(true);

        try {
            const res = await fetch("/api/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: url })
            });

            const data = await res.json();

            if (!res.ok || data.status === "error") {
                showError(data.message || "Failed to analyze URL.");
                resultsWrapper.classList.add("hidden");
                return;
            }

            renderResults(data);
        } catch (err) {
            showError("Network connection error. Ensure the Flask server is running.");
            resultsWrapper.classList.add("hidden");
        } finally {
            setScanning(false);
        }
    }

    function renderResults(res) {
        resultsWrapper.classList.remove("hidden");

        const isPhish = res.is_phishing;
        if (isPhish) {
            CyberAudio.playPhishAlarm();
        } else {
            CyberAudio.playSafeVerdict();
        }

        verdictCard.className = `verdict-summary-card ${isPhish ? "state-phishing" : "state-safe"}`;
        verdictIcon.innerHTML = isPhish ? SHIELD_PHISH_SVG : SHIELD_SAFE_SVG;
        verdictTitle.textContent = res.verdict;
        evaluatedUrl.textContent = res.url;
        riskVal.textContent = res.risk_level;
        modelVal.textContent = res.model_used;

        // Animated Number Counters
        animateNumber(confidenceVal, 0, res.confidence, 800, 1, "%");
        animateNumber(probPercentage, 0, res.phishing_probability, 800, 1, "%");

        setTimeout(() => {
            probFill.style.width = `${res.phishing_probability}%`;
        }, 100);

        // Render Explanations
        explanationsList.innerHTML = "";
        const indicators = res.explanation.indicators || [];
        indicators.forEach(item => {
            const div = document.createElement("div");
            div.className = "reason-bullet-card";
            div.innerHTML = `
                <div class="reason-top-row">
                    <span class="reason-name-text">${item.feature}</span>
                    <span class="sev-tag-badge sev-${item.severity}">${item.severity}</span>
                </div>
                <div class="reason-description-text">${item.description}</div>
            `;
            explanationsList.appendChild(div);
        });

        // Render Features Table
        featuresTbody.innerHTML = "";
        const feats = res.features || {};
        for (const [key, val] of Object.entries(feats)) {
            const meta = FEATURE_DESCRIPTIONS[key] || { label: key, note: "Extracted lexical metric" };
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td><strong>${meta.label}</strong></td>
                <td class="mono-cell">${val}</td>
                <td style="color: var(--text-muted); font-size: 0.82rem;">${meta.note}</td>
            `;
            featuresTbody.appendChild(tr);
        }

        resultsWrapper.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // --------------------------------------------------------------------------
    // 8. MODEL BENCHMARK & METRICS LOADER
    // --------------------------------------------------------------------------
    async function fetchModelMetrics() {
        try {
            const res = await fetch("/api/model-info");
            const json = await res.json();
            if (json.status !== "success" || !json.data) return;

            const data = json.data;
            const comparison = data.comparison || {};
            const bestModel = data.best_model || "";

            benchmarkTbody.innerHTML = "";
            for (const [modelName, m] of Object.entries(comparison)) {
                const tr = document.createElement("tr");
                const isBest = modelName === bestModel;
                tr.innerHTML = `
                    <td><strong>${modelName}</strong> ${isBest ? '<span class="active-winner-tag">Active Best</span>' : ''}</td>
                    <td><strong>${m.accuracy.toFixed(2)}%</strong></td>
                    <td>${m.precision.toFixed(2)}%</td>
                    <td>${m.recall.toFixed(2)}%</td>
                    <td><strong>${m.f1_score.toFixed(2)}%</strong></td>
                    <td>${isBest ? '<strong>Deployed in Runtime</strong>' : 'Evaluated Candidate'}</td>
                `;
                benchmarkTbody.appendChild(tr);
            }

            const bestM = comparison[bestModel];
            if (bestM && bestM.confusion_matrix) {
                const cm = bestM.confusion_matrix;
                animateInteger(valTn, 0, cm[0][0], 700);
                animateInteger(valFp, 0, cm[0][1], 700);
                animateInteger(valFn, 0, cm[1][0], 700);
                animateInteger(valTp, 0, cm[1][1], 700);
            }

            const importance = data.feature_importance || {};
            importanceList.innerHTML = "";
            const entries = Object.entries(importance);
            if (entries.length > 0) {
                entries.slice(0, 7).forEach(([feat, val]) => {
                    const desc = FEATURE_DESCRIPTIONS[feat]?.label || feat;
                    const div = document.createElement("div");
                    div.className = "imp-bar-unit";
                    div.innerHTML = `
                        <div class="imp-label-split">
                            <span>${desc}</span>
                            <span class="imp-val-cyan">${val}%</span>
                        </div>
                        <div class="imp-track-bg">
                            <div class="imp-track-fill" style="width: 0%;"></div>
                        </div>
                    `;
                    importanceList.appendChild(div);
                    setTimeout(() => {
                        const fill = div.querySelector(".imp-track-fill");
                        if (fill) fill.style.width = `${Math.min(val * 2.8, 100)}%`;
                    }, 120);
                });
            }

        } catch (err) {
            console.error("Failed to load model metrics:", err);
            benchmarkTbody.innerHTML = `<tr><td colspan="6" style="color: var(--status-phish);">Unable to fetch metrics.</td></tr>`;
        }
    }

    // --------------------------------------------------------------------------
    // 9. SAMPLE CHIPS LOADER
    // --------------------------------------------------------------------------
    async function loadSamples() {
        try {
            const res = await fetch("/api/sample-urls");
            const data = await res.json();
            if (data.status === "success" && data.samples) {
                sampleChipsContainer.innerHTML = "";
                data.samples.forEach(sample => {
                    const chip = document.createElement("button");
                    chip.type = "button";
                    chip.className = `chip ${sample.category === "Legitimate" ? "chip-legit" : "chip-phish"}`;
                    chip.textContent = sample.title;
                    chip.title = sample.url;
                    chip.addEventListener("click", () => {
                        CyberAudio.unlock();
                        CyberAudio.playClick(920);
                        urlInput.value = sample.url;
                        checkUrl(sample.url);
                    });
                    sampleChipsContainer.appendChild(chip);
                });
            }
        } catch (err) {
            console.warn("Could not load sample URLs:", err);
        }
    }

    function setScanning(isLoading) {
        if (typeof setTurbineScanning === "function") {
            setTurbineScanning(isLoading);
        }
        if (isLoading) {
            if (scanBtn) scanBtn.disabled = true;
            if (btnText) btnText.classList.add("hidden");
            if (scanSpinner) scanSpinner.classList.remove("hidden");
            if (scanBeam) scanBeam.classList.remove("hidden");
        } else {
            if (scanBtn) scanBtn.disabled = false;
            if (btnText) btnText.classList.remove("hidden");
            if (scanSpinner) scanSpinner.classList.add("hidden");
            if (scanBeam) scanBeam.classList.add("hidden");
        }
    }

    function showError(msg) {
        errorMessage.textContent = msg;
        errorBanner.classList.remove("hidden");
    }

    function clearError() {
        errorMessage.textContent = "";
        errorBanner.classList.add("hidden");
    }

    if (urlForm) {
        urlForm.addEventListener("submit", (e) => {
            e.preventDefault();
            CyberAudio.unlock();
            const inputVal = urlInput.value.trim();
            if (!inputVal) {
                CyberAudio.playClick(440);
                showError("Please enter a valid URL.");
                return;
            }
            checkUrl(inputVal);
        });
    }

    // --------------------------------------------------------------------------
    // 10. AI SECURITY ASSISTANT / COPILOT CONTROLLER
    // --------------------------------------------------------------------------
    function initAiAssistant() {
        const toggleBtn = document.getElementById("ai-assistant-toggle");
        const panel = document.getElementById("ai-assistant-panel");
        const closeBtn = document.getElementById("ai-close-btn");
        const clearBtn = document.getElementById("ai-clear-btn");
        const messagesContainer = document.getElementById("ai-messages-container");
        const chatForm = document.getElementById("ai-chat-form");
        const chatInput = document.getElementById("ai-chat-input");
        const suggestionsWrap = document.getElementById("ai-suggestions");

        if (!toggleBtn || !panel || !chatForm || !chatInput || !messagesContainer) return;

        let isOpen = false;

        function openPanel() {
            isOpen = true;
            panel.classList.remove("hidden");
            CyberAudio.unlock();
            CyberAudio.playClick(1050);
            setTimeout(() => chatInput.focus(), 150);
            scrollToBottom();
        }

        function closePanel() {
            isOpen = false;
            panel.classList.add("hidden");
            CyberAudio.playClick(720);
        }

        toggleBtn.addEventListener("click", () => {
            if (isOpen) {
                closePanel();
            } else {
                openPanel();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", closePanel);
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                CyberAudio.playClick(600);
                messagesContainer.innerHTML = `
                    <div class="ai-msg ai-msg-bot">
                        <div class="ai-msg-bubble akera-bubble">
                            <div class="akera-agent-tag"><span>AKERA // RESET</span></div>
                            <p><strong>Session memory purged.</strong> Akera neural core re-initialized. Select an authorized security protocol to proceed:</p>
                        </div>
                    </div>
                `;
                if (suggestionsWrap) messagesContainer.appendChild(suggestionsWrap);
                scrollToBottom();
            });
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function appendUserMessage(text) {
            const div = document.createElement("div");
            div.className = "ai-msg ai-msg-user";
            div.innerHTML = `
                <span class="akera-user-tag">OPERATOR</span>
                <div class="ai-msg-bubble">${escapeHtml(text)}</div>
            `;
            messagesContainer.appendChild(div);
            scrollToBottom();
        }

        function appendBotMessage(html) {
            const div = document.createElement("div");
            div.className = "ai-msg ai-msg-bot";
            div.innerHTML = `<div class="ai-msg-bubble akera-bubble">${html}</div>`;
            messagesContainer.appendChild(div);
            scrollToBottom();
        }

        function showTyping() {
            const div = document.createElement("div");
            div.className = "ai-msg ai-msg-bot ai-typing-wrapper";
            div.innerHTML = `
                <div class="ai-msg-bubble akera-bubble">
                    <div class="akera-agent-tag"><span>AKERA // COMPUTING</span></div>
                    <div class="ai-typing-indicator">
                        <span class="ai-typing-dot"></span>
                        <span class="ai-typing-dot"></span>
                        <span class="ai-typing-dot"></span>
                    </div>
                </div>
            `;
            messagesContainer.appendChild(div);
            scrollToBottom();
            return () => {
                div.remove();
            };
        }

        function escapeHtml(str) {
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        function getPrePromptsHtml() {
            return `
                <div class="akera-inline-prompts">
                    <button class="ai-sugg-chip" data-query="Why is this website safe to use?"><span class="chip-glow-bullet"></span>🛡️ Why is this website safe?</button>
                    <button class="ai-sugg-chip" data-query="What is the use of PhishGuard?"><span class="chip-glow-bullet"></span>🎯 What is the use of PhishGuard?</button>
                    <button class="ai-sugg-chip" data-query="How does PhishGuard detect phishing links?"><span class="chip-glow-bullet"></span>🔍 How does detection work?</button>
                    <button class="ai-sugg-chip" data-query="What should I do if I clicked a phishing link?"><span class="chip-glow-bullet"></span>⚠️ What if I clicked a bad link?</button>
                    <button class="ai-sugg-chip" data-query="Explain URL risk levels and confidence score"><span class="chip-glow-bullet"></span>📊 Explain risk & confidence</button>
                    <button class="ai-sugg-chip" data-query="What is homograph and punycode spoofing?"><span class="chip-glow-bullet"></span>🕵️ Homograph & @ tricks</button>
                </div>
            `;
        }

        // Handle suggestion chips (both initial and inline)
        messagesContainer.addEventListener("click", (e) => {
            const chip = e.target.closest(".ai-sugg-chip");
            if (chip) {
                const query = chip.getAttribute("data-query");
                if (query) {
                    chatInput.value = query;
                    processUserQuery(query);
                }
            }
        });

        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;
            processUserQuery(text);
        });

        async function processUserQuery(query) {
            chatInput.value = "";
            CyberAudio.unlock();
            CyberAudio.playClick(920);
            appendUserMessage(query);

            const removeTyping = showTyping();

            // Check if query contains a URL
            const urlMatch = query.match(/(https?:\/\/[^\s]+)|((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*)?)/i);

            if (urlMatch) {
                let candidateUrl = urlMatch[0];
                if (!candidateUrl.startsWith("http://") && !candidateUrl.startsWith("https://")) {
                    candidateUrl = "https://" + candidateUrl;
                }

                try {
                    const res = await fetch("/api/predict", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ url: candidateUrl })
                    });
                    const data = await res.json();
                    removeTyping();

                    if (data.status === "success") {
                        const isPhish = data.is_phishing;
                        if (isPhish) {
                            CyberAudio.playPhishAlarm();
                        } else {
                            CyberAudio.playSafeVerdict();
                        }

                        const indicators = data.explanation?.indicators || [];
                        let indicatorsHtml = "";
                        if (indicators.length > 0) {
                            indicatorsHtml = "<ul>" + indicators.slice(0, 3).map(ind => `<li><strong>${escapeHtml(ind.feature)}:</strong> ${escapeHtml(ind.description)}</li>`).join("") + "</ul>";
                        }

                        appendBotMessage(`
                            <div class="akera-agent-tag"><span>AKERA // THREAT REPORT</span></div>
                            <p><strong>Evaluated Target:</strong> <code>${escapeHtml(data.url)}</code></p>
                            <div class="ai-report-card ${isPhish ? 'report-phish' : 'report-safe'}">
                                <div class="ai-report-header">
                                    <span>${data.verdict}</span>
                                    <span class="ai-report-tag ${isPhish ? 'tag-phish' : 'tag-safe'}">${data.risk_level}</span>
                                </div>
                                <div>Phishing Probability: <strong>${data.phishing_probability}%</strong> | Confidence: <strong>${data.confidence}%</strong></div>
                            </div>
                            ${indicatorsHtml}
                            <p><em>${isPhish ? '⚠️ High risk of credential harvesting or payload delivery. Avoid visiting or supplying authentication data.' : '✅ Lexical features match verified benign structural patterns.'}</em></p>
                        `);

                        // Synchronize main page input
                        if (urlInput) {
                            urlInput.value = candidateUrl;
                        }
                        return;
                    }
                } catch (err) {}
            }

            // Fallback to Knowledge Base / Pre-prompt Router
            setTimeout(() => {
                removeTyping();
                const reply = generateAiResponse(query);
                appendBotMessage(reply);
                CyberAudio.playClick(1000);
            }, 420);
        }

        function generateAiResponse(text) {
            const q = text.toLowerCase().trim();

            // 1. GREETINGS (hi, hello, hey, etc.)
            const greetingWords = ["hi", "hello", "hey", "heya", "greetings", "good morning", "good evening", "good afternoon", "hola", "sup"];
            const isGreeting = greetingWords.some(g => q === g || q.startsWith(g + " ") || q.startsWith(g + "!") || q.startsWith(g + ",") || q.startsWith(g + "."));

            if (isGreeting) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // ONLINE</span></div>
                    <p><strong>Greetings, Operator.</strong> I am <strong>Akera</strong>, your neural cybersecurity copilot.</p>
                    <p>I am online and ready. You can paste any link to run a zero-network threat analysis, or select one of the authorized security protocols below:</p>
                    ${getPrePromptsHtml()}
                `;
            }

            // 2. AUTHORIZED PRE-PROMPT: "Why is this website safe to use?"
            if (q.includes("why is this website safe") || q.includes("why this website is safe") || q.includes("is this website safe") || q.includes("why safe") || q.includes("safe to use") || q.includes("is it safe") || q.includes("privacy")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-01</span></div>
                    <p><strong>🛡️ Why PhishGuard is 100% Safe to Use:</strong></p>
                    <ul>
                        <li><strong>Zero-Network In-Memory Execution (Air-Gapped):</strong> PhishGuard inspects URLs strictly by parsing text characters in memory. It <strong>never navigates to, connects to, or downloads content</strong> from the target link. You cannot be infected by malware, drive-by scripts, or tracking beacons.</li>
                        <li><strong>Absolute Privacy:</strong> All inspections occur locally on the server. Your queries are never saved, tracked, shared with ad brokers, or sent to external cloud APIs.</li>
                        <li><strong>Safe Verification Criteria:</strong> When PhishGuard flags a URL as <em>Legitimate (Safe)</em>, it has verified standard domain structure, authentic root domain hierarchy, expected TLD registration, and absence of deceptive token patterns.</li>
                    </ul>
                `;
            }

            // 3. AUTHORIZED PRE-PROMPT: "What is the use of PhishGuard?"
            if (q.includes("use of phishguard") || q.includes("what is the use of phishguard") || q.includes("what is phishguard") || q.includes("purpose of phishguard") || q.includes("why use phishguard") || q.includes("why phishguard") || q.includes("why do we need") || q.includes("what does phishguard do")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-02</span></div>
                    <p><strong>🎯 What is the Use of PhishGuard AI?</strong></p>
                    <p>PhishGuard is an automated, real-time threat intelligence platform designed to protect users and enterprise networks from phishing, spoofed login portals, and credential harvesting.</p>
                    <ul>
                        <li><strong>Stops Zero-Day Attacks:</strong> Traditional blocklists (like DNS blacklists or browser warnings) take hours or days to identify new scams. PhishGuard analyzes the <em>inherent structural DNA</em> of the link in real time (~20ms), blocking brand-new zero-hour malicious links instantly.</li>
                        <li><strong>Pre-Click Protection:</strong> Inspect links from suspicious SMS messages, phishing emails, or social media <em>before</em> clicking them.</li>
                        <li><strong>Explainable Security (XAI):</strong> Beyond a simple safe/unsafe label, PhishGuard provides actionable reasons (e.g. "@ symbol trick", "raw IP address host", "homograph spoofing") so security analysts and users understand the exact threat mechanism.</li>
                        <li><strong>Offline & Enterprise Ready:</strong> Operates without third-party API dependencies and can be integrated into corporate mail gateways, browser extensions, or SOC SIEM workflows.</li>
                    </ul>
                `;
            }

            // 4. AUTHORIZED PRE-PROMPT: "How does PhishGuard detect phishing links?"
            if (q.includes("how does") || q.includes("detection work") || q.includes("detect phishing") || q.includes("how do you detect")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-03</span></div>
                    <p><strong>How PhishGuard AI Detects Phishing:</strong></p>
                    <p>PhishGuard extracts <strong>15 lexical and structural features</strong> from URL strings in memory without ever navigating to the website (zero network exposure).</p>
                    <ul>
                        <li><strong>Structural Analysis:</strong> Token length, directory slash depth, and subdomain count.</li>
                        <li><strong>Obfuscation Detection:</strong> @ symbol tricks, raw IPv4 address hosts, and excessive hyphens.</li>
                        <li><strong>Machine Learning:</strong> Trained on over 10,000 URLs with Random Forest & XGBoost, achieving <strong>96.8% accuracy</strong>.</li>
                    </ul>
                `;
            }

            // 5. AUTHORIZED PRE-PROMPT: "What should I do if I clicked a phishing link?"
            if (q.includes("clicked") || q.includes("what should i do") || q.includes("compromised") || q.includes("hacked") || q.includes("bad link")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-04</span></div>
                    <p><strong>🚨 Incident Response Steps:</strong></p>
                    <ol style="margin: 0.35rem 0 0.55rem 1.15rem; padding: 0;">
                        <li><strong>Disconnect:</strong> Unplug Ethernet or disconnect from Wi-Fi immediately.</li>
                        <li><strong>Change Passwords:</strong> From another secure device, change passwords for affected accounts.</li>
                        <li><strong>Enable MFA:</strong> Activate hardware keys or app-based 2-Factor Authentication.</li>
                        <li><strong>Revoke Sessions:</strong> Log out of all active account sessions in security settings.</li>
                        <li><strong>Scan Device:</strong> Run an updated anti-malware/EDR scan.</li>
                    </ol>
                `;
            }

            // 6. AUTHORIZED PRE-PROMPT: "Explain URL risk levels and confidence score"
            if (q.includes("risk") || q.includes("confidence") || q.includes("score")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-05</span></div>
                    <p><strong>Understanding Risk Levels & Confidence:</strong></p>
                    <ul>
                        <li><strong>Low Risk / Safe (&lt;40%):</strong> Clean URL structure consistent with trusted domains.</li>
                        <li><strong>Suspicious (40-60%):</strong> Borderline characteristics (e.g. long path or unusual TLD).</li>
                        <li><strong>Medium Risk (60-80%):</strong> Multiple phishing indicators present.</li>
                        <li><strong>High Risk (&gt;80%):</strong> Severe threat markers (IP host, token stuffing, spoofing patterns).</li>
                    </ul>
                `;
            }

            // 7. AUTHORIZED PRE-PROMPT: "What is homograph and punycode spoofing?"
            if (q.includes("homograph") || q.includes("punycode") || q.includes("spoof") || q.includes("@") || q.includes("ip address") || q.includes("host")) {
                return `
                    <div class="akera-agent-tag"><span>AKERA // PROTOCOL-06</span></div>
                    <p><strong>Homograph & URL Obfuscation Exploits:</strong></p>
                    <ul>
                        <li><strong>Homograph & Punycode:</strong> Attackers register Cyrillic lookalike letters (e.g. Cyrillic <code>а</code> instead of Latin <code>a</code>) where <code>pаypal.com</code> becomes <code>xn--pypal-43a.com</code>.</li>
                        <li><strong>The @ Symbol Trick:</strong> In <code>http://google.com@evil.com</code>, standard RFC URLs ignore everything before the <code>@</code> and redirect to <code>evil.com</code>.</li>
                        <li><strong>Direct IP Address:</strong> Attackers use raw IPs like <code>http://192.168.1.50/login</code> to bypass domain-based reputation filters.</li>
                    </ul>
                `;
            }

            // 8. MANDATORY FALLBACK: For ANY question other than hi/hello, URL, or authorized protocols:
            // "if someone is asking question other than hi hello then it should show select one pre promts"
            return `
                <div class="akera-agent-tag"><span>AKERA // DIRECTIVE</span></div>
                <p><strong>Query unrecognized under active security parameters.</strong></p>
                <p>I am trained strictly to assist with cybersecurity inquiries and URL inspections. <strong>Please select one of the verified pre-prompts below</strong>, or paste any URL directly into the chat:</p>
                ${getPrePromptsHtml()}
            `;
        }
    }

    initThreeBackground();
    loadSamples();
    fetchModelMetrics();
    initAiAssistant();
});
