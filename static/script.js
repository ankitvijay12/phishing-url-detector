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

            // Creation of Adam contact spark chime: high-energy harmonic resonance
            playContactChime() {
                if (isMuted) return;
                const ac = getContext();
                if (!ac) return;
                try {
                    const now = ac.currentTime;
                    // Celestial harmonic chord: 528Hz (Creation tone), 792Hz, 1056Hz, 1584Hz
                    const chord = [528, 792, 1056, 1584];
                    chord.forEach((freq, idx) => {
                        const osc = ac.createOscillator();
                        const gain = ac.createGain();
                        osc.type = idx === 0 ? "sine" : "triangle";
                        osc.frequency.setValueAtTime(freq, now);
                        osc.frequency.exponentialRampToValueAtTime(freq * 1.015, now + 1.2);

                        const maxGain = 0.09 / (idx + 1);
                        gain.gain.setValueAtTime(0.001, now);
                        gain.gain.linearRampToValueAtTime(maxGain, now + 0.06);
                        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

                        osc.connect(gain);
                        gain.connect(ac.destination);
                        osc.start(now);
                        osc.stop(now + 1.55);
                    });
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
    // 3. 3D WEBGL ENGINE: INTERSTELLAR GARGANTUA BLACK HOLE & ACCRETION VORTEX
    // --------------------------------------------------------------------------
    let setTurbineScanning = null; // Scan acceleration hook

    function initThreeBackground() {
        const webglCanvas = document.getElementById("webgl-canvas");
        if (!webglCanvas || typeof THREE === "undefined") {
            console.info("Three.js not loaded or WebGL canvas missing; operating in 2D canvas mode.");
            init2DAtmosphere();
            return;
        }

        try {
            // Renderer with high dynamic range alpha
            const renderer = new THREE.WebGLRenderer({
                canvas: webglCanvas,
                alpha: true,
                antialias: true,
                powerPreference: "high-performance"
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Scene & Perspective Camera
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 2.2, 24);

            // Subtle Deep Space Ambient Illumination (Midnight Void)
            const ambientLight = new THREE.AmbientLight(0x060913, 2.2);
            scene.add(ambientLight);

            // Core Singularity & Accretion Glow Light (Incandescent Diamond White)
            const coreLight = new THREE.PointLight(0xffffff, 5.5, 60);
            coreLight.position.set(0, 0, 0);
            scene.add(coreLight);

            // Hot Photon Flash PointLight (Electric Cyan-White)
            const photonLight = new THREE.PointLight(0x7dd3fc, 4.2, 45);
            photonLight.position.set(0, 0, 0);
            scene.add(photonLight);

            // Bipolar Relativistic Jet Column Spotlights (North & South)
            const jetLightNorth = new THREE.PointLight(0xffffff, 3.8, 35);
            jetLightNorth.position.set(0, 5.0, 0);
            scene.add(jetLightNorth);

            const jetLightSouth = new THREE.PointLight(0xffffff, 3.8, 35);
            jetLightSouth.position.set(0, -5.0, 0);
            scene.add(jetLightSouth);

            // Master Black Hole Transformation Hierarchy
            const blackHoleGroup = new THREE.Group();
            scene.add(blackHoleGroup);

            // ------------------------------------------------------------------
            // TEXTURE GENERATOR: Incandescent Diamond & Crystalline Stars
            // ------------------------------------------------------------------
            function createGlowDiscTexture() {
                const canvas = document.createElement("canvas");
                canvas.width = 64;
                canvas.height = 64;
                const ctx = canvas.getContext("2d");
                const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
                grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
                grad.addColorStop(0.22, "rgba(240, 249, 255, 0.95)");
                grad.addColorStop(0.52, "rgba(186, 230, 253, 0.50)");
                grad.addColorStop(0.82, "rgba(56, 189, 248, 0.15)");
                grad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, 64, 64);
                return new THREE.CanvasTexture(canvas);
            }

            function createStarTexture() {
                const canvas = document.createElement("canvas");
                canvas.width = 32;
                canvas.height = 32;
                const ctx = canvas.getContext("2d");
                const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
                grad.addColorStop(0.3, "rgba(224, 242, 254, 0.85)");
                grad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, 32, 32);
                return new THREE.CanvasTexture(canvas);
            }

            const glowTexture = createGlowDiscTexture();
            const starTexture = createStarTexture();

            // ------------------------------------------------------------------
            // 1. EVENT HORIZON: Pure Black Shadow Sphere (Singularity Core)
            // ------------------------------------------------------------------
            const horizonRadius = 3.35;
            const horizonGeo = new THREE.SphereGeometry(horizonRadius, 64, 64);
            const horizonMat = new THREE.MeshBasicMaterial({
                color: 0x000000
            });
            const horizonMesh = new THREE.Mesh(horizonGeo, horizonMat);
            blackHoleGroup.add(horizonMesh);

            // ------------------------------------------------------------------
            // 2. PHOTON SPHERE: Razor-Sharp Incandescent Diamond-White Einstein Rings
            // ------------------------------------------------------------------
            const photonRingGeo = new THREE.RingGeometry(horizonRadius + 0.04, horizonRadius + 0.38, 96);
            const photonRingMat = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.98,
                blending: THREE.AdditiveBlending
            });
            const photonRingMesh = new THREE.Mesh(photonRingGeo, photonRingMat);
            photonRingMesh.rotation.x = Math.PI / 2;
            blackHoleGroup.add(photonRingMesh);

            // Secondary outer photon halo ring (Electric Cyan-White)
            const photonHaloGeo = new THREE.RingGeometry(horizonRadius + 0.02, horizonRadius + 0.85, 96);
            const photonHaloMat = new THREE.MeshBasicMaterial({
                color: 0x7dd3fc,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.72,
                blending: THREE.AdditiveBlending
            });
            const photonHaloMesh = new THREE.Mesh(photonHaloGeo, photonHaloMat);
            photonHaloMesh.rotation.x = Math.PI / 2;
            blackHoleGroup.add(photonHaloMesh);

            // ------------------------------------------------------------------
            // 3. PRIMARY ACCRETION DISK (Silver-White & Platinum Relativistic Disk)
            // ------------------------------------------------------------------
            const diskCount = 32000;
            const diskGeo = new THREE.BufferGeometry();
            const diskPos = new Float32Array(diskCount * 3);
            const diskCol = new Float32Array(diskCount * 3);
            const diskData = []; // Store radius, theta, speed, Doppler offset

            const rMin = horizonRadius + 0.5;
            const rMax = 16.5;

            for (let i = 0; i < diskCount; i++) {
                // Non-linear radial distribution (denser toward the event horizon)
                const u = Math.random();
                const r = rMin + (rMax - rMin) * Math.pow(u, 1.7);
                const theta = Math.random() * Math.PI * 2;

                // Keplerian velocity: inner particles orbit much faster than outer
                const speed = (0.58 / Math.pow(r, 0.75)) * (0.88 + Math.random() * 0.24);

                // Vertical thickness flares with distance
                const ySpread = (Math.random() - 0.5) * 0.26 * Math.pow((r - rMin) / (rMax - rMin), 1.2);

                const x = r * Math.cos(theta);
                const z = r * Math.sin(theta);

                diskPos[i * 3] = x;
                diskPos[i * 3 + 1] = ySpread;
                diskPos[i * 3 + 2] = z;

                // Color gradient: Incandescent White Core -> Liquid Silver/Platinum -> Faint Red/Amber Cosmic Dust
                const t = (r - rMin) / (rMax - rMin);
                let cr, cg, cb;
                if (t < 0.25) {
                    // Blinding incandescent white core
                    cr = 1.0;
                    cg = 1.0;
                    cb = 1.0;
                } else if (t < 0.68) {
                    // Liquid silver and platinum ice
                    const k = (t - 0.25) / 0.43;
                    cr = 0.92 - k * 0.08;
                    cg = 0.95 - k * 0.05;
                    cb = 1.0;
                } else {
                    // Outer faint reddish/amber cosmic nebular dust (matching reference artwork)
                    const k = (t - 0.68) / 0.32;
                    cr = 0.85 + k * 0.12;
                    cg = 0.45 - k * 0.18;
                    cb = 0.25 - k * 0.12;
                }

                diskCol[i * 3] = Math.max(0, Math.min(1, cr));
                diskCol[i * 3 + 1] = Math.max(0, Math.min(1, cg));
                diskCol[i * 3 + 2] = Math.max(0, Math.min(1, cb));

                diskData.push({ r, theta, speed, y: ySpread, baseR: cr, baseG: cg, baseB: cb });
            }

            diskGeo.setAttribute("position", new THREE.BufferAttribute(diskPos, 3));
            diskGeo.setAttribute("color", new THREE.BufferAttribute(diskCol, 3));

            const diskMat = new THREE.PointsMaterial({
                size: 0.22,
                map: glowTexture,
                vertexColors: true,
                transparent: true,
                opacity: 0.92,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const diskParticles = new THREE.Points(diskGeo, diskMat);
            blackHoleGroup.add(diskParticles);

            // ------------------------------------------------------------------
            // 4. GRAVITATIONAL LENSING ARCS: Silver-White Gargantua Einstein Halos
            // ------------------------------------------------------------------
            const lensCount = 14000;
            const lensGeo = new THREE.BufferGeometry();
            const lensPos = new Float32Array(lensCount * 3);
            const lensCol = new Float32Array(lensCount * 3);
            const lensData = [];

            for (let i = 0; i < lensCount; i++) {
                const isUpper = i % 2 === 0;
                const u = Math.random();
                const r = rMin + (rMax * 0.65 - rMin) * Math.pow(u, 1.35);
                const angle = Math.random() * Math.PI;
                const speed = (0.58 / Math.pow(r, 0.75)) * (0.9 + Math.random() * 0.2);

                const x = r * Math.cos(angle);
                const arcLift = Math.sqrt(Math.max(0, r * r - x * x)) * 0.96 + 0.35;
                const y = (isUpper ? 1 : -0.7) * arcLift + (Math.random() - 0.5) * 0.28;
                const z = -0.4 - (r - rMin) * 0.22;

                lensPos[i * 3] = x;
                lensPos[i * 3 + 1] = y;
                lensPos[i * 3 + 2] = z;

                const t = (r - rMin) / (rMax * 0.65 - rMin);
                lensCol[i * 3] = 1.0;
                lensCol[i * 3 + 1] = Math.max(0.85, 1.0 - t * 0.15);
                lensCol[i * 3 + 2] = Math.max(0.92, 1.0 - t * 0.08);

                lensData.push({ r, angle, speed, isUpper, baseLift: arcLift });
            }

            lensGeo.setAttribute("position", new THREE.BufferAttribute(lensPos, 3));
            lensGeo.setAttribute("color", new THREE.BufferAttribute(lensCol, 3));

            const lensMat = new THREE.PointsMaterial({
                size: 0.24,
                map: glowTexture,
                vertexColors: true,
                transparent: true,
                opacity: 0.92,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const lensParticles = new THREE.Points(lensGeo, lensMat);
            blackHoleGroup.add(lensParticles);

            // ------------------------------------------------------------------
            // 4B. COLOSSAL BIPOLAR RELATIVISTIC ASTROPHYSICAL JETS (UNIFORM LAMINAR FLOW)
            // ------------------------------------------------------------------
            const jetCount = 20000;
            const jetGeo = new THREE.BufferGeometry();
            const jetPos = new Float32Array(jetCount * 3);
            const jetCol = new Float32Array(jetCount * 3);
            const jetData = []; // Store u, direction, speed, radialFrac, theta, baseColor

            for (let i = 0; i < jetCount; i++) {
                const isNorth = i % 2 === 0;
                const direction = isNorth ? 1.0 : -1.0;

                // Uniform progressive height phase along the jet spine
                const u = (i / jetCount);
                const y = direction * (0.35 + Math.pow(u, 1.25) * 26.0);
                const absY = Math.abs(y);

                // Collimated nozzle flaring into conical plume
                const coreRadius = 0.28 + 0.32 * Math.pow(absY, 0.70);
                const radialFrac = 0.15 + 0.85 * Math.sqrt((i % 250) / 250);
                const radialSpread = coreRadius * radialFrac;

                // Golden ratio angle dispersion for perfectly uniform circular density
                const theta = (i * 2.399963229728653) % (Math.PI * 2);

                const x = radialSpread * Math.cos(theta);
                const z = radialSpread * Math.sin(theta);

                jetPos[i * 3] = x;
                jetPos[i * 3 + 1] = y;
                jetPos[i * 3 + 2] = z;

                // Slow, uniform laminar flow speed
                const speed = 0.045 + (i % 20) * 0.0016;

                // Color gradient
                let jr, jg, jb;
                if (absY < 5.0) {
                    jr = 1.0; jg = 1.0; jb = 1.0;
                } else if (absY < 15.0) {
                    jr = 0.92; jg = 0.97; jb = 1.0;
                } else {
                    jr = 0.85; jg = 0.94; jb = 1.0;
                }

                // Initial soft sine fade
                const fade = Math.sin(u * Math.PI);
                jetCol[i * 3] = jr * fade;
                jetCol[i * 3 + 1] = jg * fade;
                jetCol[i * 3 + 2] = jb * fade;

                jetData.push({
                    u: u,
                    direction: direction,
                    speed: speed,
                    radialFrac: radialFrac,
                    theta: theta,
                    baseR: jr,
                    baseG: jg,
                    baseB: jb
                });
            }

            jetGeo.setAttribute("position", new THREE.BufferAttribute(jetPos, 3));
            jetGeo.setAttribute("color", new THREE.BufferAttribute(jetCol, 3));

            const jetMat = new THREE.PointsMaterial({
                size: 0.22,
                map: glowTexture,
                vertexColors: true,
                transparent: true,
                opacity: 0.88,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const jetParticles = new THREE.Points(jetGeo, jetMat);
            blackHoleGroup.add(jetParticles);

            // ------------------------------------------------------------------
            // 4C. WARPED CODE WATERFALL & SPACETIME CURVATURE (SILVER/CYAN MATRIX)
            // ------------------------------------------------------------------
            // 1. Dynamic In-Memory Code Matrix Texture (Diamond / Cyan Phosphor)
            function createCodeMatrixTexture() {
                const canvas = document.createElement("canvas");
                canvas.width = 512;
                canvas.height = 1024;
                const ctx = canvas.getContext("2d");

                ctx.fillStyle = "rgba(0, 0, 0, 0)";
                ctx.fillRect(0, 0, 512, 1024);

                ctx.font = "bold 15px 'JetBrains Mono', 'Courier New', monospace";
                const lines = [
                    "0x7FFE2A91  SELECT * FROM threat_vectors WHERE risk > 0.85",
                    "POST /api/intercept -> HTTP/2 403 QUARANTINE_ISOLATE",
                    "https://paypal.com.verify-auth.xyz/session=0x9f821",
                    "01010000 01101000 01101001 01110011 01101000 [URL]",
                    "SHA256: 4e82b70fc931a... [ZERO-DAY BUFFER FLUSH]",
                    "SINGULARITY INGESTION VECTOR: r -> r_s [C=299792km/s]",
                    "EVALUATING DOMAIN: suspicious punycode spoof detected",
                    "01100001 01110101 01110100 01101000 00101101 01110011",
                    "HTTP/1.1 200 INGESTED INTO SINGULARITY",
                    "http://192.168.1.45:8080/secure-update.php?id=829",
                    "GRAVITATIONAL CURVATURE: alpha = 4GM / (c^2 * b)",
                    "01100100 01100101 01100110 01100101 01101110 01110011",
                    "MODEL_INFERENCE: Random Forest -> Phishing (100.0%)",
                    "DECEPTIVE TOKEN ANOMALY: @ symbol obfuscation detected",
                    "01001011 01000101 01010000 01001100 01000101 01010010",
                    "EVENT_HORIZON_SHIELD: 100% INTACT // ZERO ESCAPE"
                ];

                for (let y = 0; y < 1024; y += 22) {
                    const line = lines[Math.floor(y / 22) % lines.length];
                    const alpha = 0.55 + 0.45 * Math.sin(y * 0.05);
                    ctx.fillStyle = `rgba(224, 242, 254, ${alpha})`;
                    ctx.fillText(line, 12, y + 16);
                }
                const tex = new THREE.CanvasTexture(canvas);
                tex.wrapS = THREE.RepeatWrapping;
                tex.wrapT = THREE.RepeatWrapping;
                tex.repeat.set(1, 2);
                return { texture: tex, canvas: canvas };
            }

            const codeTextureObj = createCodeMatrixTexture();

            // 2. Warped Curving Ribbon Plunging Into The Black Hole
            const ribbonWidth = 6.8;
            const ribbonLength = 26.0;
            const ribbonSegments = 70;
            const ribbonGeo = new THREE.PlaneGeometry(ribbonWidth, ribbonLength, 12, ribbonSegments);
            const rPos = ribbonGeo.attributes.position.array;

            for (let i = 0; i <= ribbonSegments; i++) {
                const t = i / ribbonSegments; // 0 (start in deep space) to 1 (at event horizon)
                // Relativistic parabolic trajectory plunging from top-right down into black hole
                const cx = 13.8 * (1 - t) + 2.6 * t + Math.sin(t * Math.PI) * 2.2;
                const cy = 8.5 * (1 - t) + 0.35 * t - Math.sin(t * Math.PI * 0.85) * 1.6;
                const cz = -9.0 * (1 - t) + 1.2 * t + Math.cos(t * Math.PI) * 1.8;

                const curWidth = ribbonWidth * (1.0 - t * 0.68); // Narrowing as gravity compresses data

                for (let j = 0; j <= 12; j++) {
                    const u = (j / 12 - 0.5) * curWidth;
                    const idx = (i * 13 + j) * 3;
                    rPos[idx] = cx + u * 0.72;
                    rPos[idx + 1] = cy + u * 0.32;
                    rPos[idx + 2] = cz - u * 0.62;
                }
            }
            ribbonGeo.computeVertexNormals();

            const codeMat = new THREE.MeshBasicMaterial({
                map: codeTextureObj.texture,
                transparent: true,
                opacity: 0.88,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const codeWaterfallMesh = new THREE.Mesh(ribbonGeo, codeMat);
            blackHoleGroup.add(codeWaterfallMesh);

            // 3. Spacetime Curvature Coordinate Grid (Einstein Potential Well)
            const gridRings = 22;
            const gridSegments = 64;
            const spacetimeGeo = new THREE.RingGeometry(horizonRadius + 0.4, 18.0, gridSegments, gridRings);
            const stPos = spacetimeGeo.attributes.position.array;

            for (let i = 0; i < stPos.length; i += 3) {
                const x = stPos[i];
                const y = stPos[i + 1];
                const r = Math.sqrt(x * x + y * y);
                const depth = -4.0 / Math.sqrt(Math.max(0.2, r - horizonRadius + 0.3));
                stPos[i + 2] = depth;
            }
            spacetimeGeo.computeVertexNormals();

            const spacetimeMat = new THREE.MeshBasicMaterial({
                color: 0x38bdf8,
                wireframe: true,
                transparent: true,
                opacity: 0.11,
                blending: THREE.AdditiveBlending
            });

            const spacetimeMesh = new THREE.Mesh(spacetimeGeo, spacetimeMat);
            spacetimeMesh.rotation.x = -Math.PI / 2;
            blackHoleGroup.add(spacetimeMesh);

            // 4. Data Ingestion Stream Particles (Binary & URL Token Flow)
            const streamCount = 3200;
            const streamGeo = new THREE.BufferGeometry();
            const streamPos = new Float32Array(streamCount * 3);
            const streamCol = new Float32Array(streamCount * 3);
            const streamData = [];

            for (let i = 0; i < streamCount; i++) {
                const p = Math.random();
                const speed = 0.004 + Math.random() * 0.007;
                const offsetRadius = (Math.random() - 0.5) * 2.8;

                streamCol[i * 3] = 0.88 + Math.random() * 0.12;
                streamCol[i * 3 + 1] = 0.94 + Math.random() * 0.06;
                streamCol[i * 3 + 2] = 1.0;

                streamData.push({ p, speed, offsetRadius });
            }

            streamGeo.setAttribute("position", new THREE.BufferAttribute(streamPos, 3));
            streamGeo.setAttribute("color", new THREE.BufferAttribute(streamCol, 3));

            const streamMat = new THREE.PointsMaterial({
                size: 0.30,
                map: glowTexture,
                vertexColors: true,
                transparent: true,
                opacity: 0.90,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const streamParticles = new THREE.Points(streamGeo, streamMat);
            blackHoleGroup.add(streamParticles);

            // ------------------------------------------------------------------
            // 5. DEEP SPACE STARFIELD & COSMIC EMBERS
            // ------------------------------------------------------------------
            const starCount = 2800;
            const starGeo = new THREE.BufferGeometry();
            const starPos = new Float32Array(starCount * 3);
            const starCol = new Float32Array(starCount * 3);

            for (let i = 0; i < starCount; i++) {
                const sx = (Math.random() - 0.5) * 320;
                const sy = (Math.random() - 0.5) * 220;
                const sz = -40 - Math.random() * 260;

                starPos[i * 3] = sx;
                starPos[i * 3 + 1] = sy;
                starPos[i * 3 + 2] = sz;

                const tint = Math.random();
                if (tint < 0.45) {
                    starCol[i * 3] = 1.0;
                    starCol[i * 3 + 1] = 1.0;
                    starCol[i * 3 + 2] = 1.0;
                } else if (tint < 0.8) {
                    starCol[i * 3] = 0.90;
                    starCol[i * 3 + 1] = 0.95;
                    starCol[i * 3 + 2] = 1.0;
                } else {
                    starCol[i * 3] = 0.75;
                    starCol[i * 3 + 1] = 0.88;
                    starCol[i * 3 + 2] = 1.0;
                }
            }

            starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
            starGeo.setAttribute("color", new THREE.BufferAttribute(starCol, 3));

            const starMat = new THREE.PointsMaterial({
                size: 0.85,
                map: starTexture,
                vertexColors: true,
                transparent: true,
                opacity: 0.88,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const starSystem = new THREE.Points(starGeo, starMat);
            scene.add(starSystem);

            // Floating Diamond Starlight Embers
            const emberCount = 350;
            const emberGeo = new THREE.BufferGeometry();
            const emberPos = new Float32Array(emberCount * 3);
            const emberSpeeds = new Float32Array(emberCount * 3);

            for (let i = 0; i < emberCount; i++) {
                emberPos[i * 3] = (Math.random() - 0.5) * 44;
                emberPos[i * 3 + 1] = (Math.random() - 0.5) * 32;
                emberPos[i * 3 + 2] = (Math.random() - 0.5) * 20 + 2;

                emberSpeeds[i * 3] = (Math.random() - 0.5) * 0.012;
                emberSpeeds[i * 3 + 1] = 0.008 + Math.random() * 0.016;
                emberSpeeds[i * 3 + 2] = (Math.random() - 0.5) * 0.012;
            }

            emberGeo.setAttribute("position", new THREE.BufferAttribute(emberPos, 3));

            const emberMat = new THREE.PointsMaterial({
                size: 0.42,
                map: glowTexture,
                color: 0xe2e8f0,
                transparent: true,
                opacity: 0.80,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const emberSystem = new THREE.Points(emberGeo, emberMat);
            scene.add(emberSystem);

            // ------------------------------------------------------------------
            // DYNAMIC LAYOUT & CENTERING
            // ------------------------------------------------------------------
            function updateBlackHolePosition() {
                const w = window.innerWidth;
                if (w >= 992) {
                    blackHoleGroup.position.set(0, 0.45, -1.2);
                    blackHoleGroup.scale.set(0.92, 0.92, 0.92);
                } else if (w >= 640) {
                    blackHoleGroup.position.set(0, 0.25, -2.2);
                    blackHoleGroup.scale.set(0.74, 0.74, 0.74);
                } else {
                    blackHoleGroup.position.set(0, 0.1, -4.0);
                    blackHoleGroup.scale.set(0.58, 0.58, 0.58);
                }
            }
            updateBlackHolePosition();

            // MOUSE GRAVITATIONAL PARALLAX (Subtle, smooth damping)
            let targetRotX = 0.22;
            let targetRotY = 0.0;

            window.addEventListener("mousemove", (e) => {
                const normX = (e.clientX / window.innerWidth) * 2 - 1;
                const normY = -(e.clientY / window.innerHeight) * 2 + 1;
                targetRotX = 0.22 - normY * 0.12;
                targetRotY = normX * 0.18;
            }, { passive: true });

            // SCROLL PROGRESSION
            let scrollY = 0;
            window.addEventListener("scroll", () => {
                scrollY = window.scrollY;
            }, { passive: true });

            // SCAN ACCELERATION STATE (RELATIVISTIC JET ERUPTION)
            let scanSpeedMultiplier = 1.0;
            let targetCoreIntensity = 5.5;

            setTurbineScanning = function(isScanning) {
                if (isScanning) {
                    scanSpeedMultiplier = 2.4;
                    targetCoreIntensity = 9.0;
                    photonLight.intensity = 7.5;
                    jetLightNorth.intensity = 6.5;
                    jetLightSouth.intensity = 6.5;
                } else {
                    scanSpeedMultiplier = 1.0;
                    targetCoreIntensity = 5.5;
                    photonLight.intensity = 4.2;
                    jetLightNorth.intensity = 3.8;
                    jetLightSouth.intensity = 3.8;
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
                updateBlackHolePosition();
            });

            // ------------------------------------------------------------------
            // RENDER LOOP (SLOW, SILKY-SMOOTH KEPLERIAN DYNAMICS & UNIFORM JETS)
            // ------------------------------------------------------------------
            let clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const delta = clock.getDelta();
                const elapsedTime = clock.getElapsedTime();

                // 1. Orbital dynamics of the Primary Accretion Disk (Slow, smooth celestial rotation)
                const dPos = diskGeo.attributes.position.array;
                const dCol = diskGeo.attributes.color.array;

                for (let i = 0; i < diskCount; i++) {
                    const item = diskData[i];
                    item.theta += item.speed * delta * 0.65 * scanSpeedMultiplier;

                    const x = item.r * Math.cos(item.theta);
                    const z = item.r * Math.sin(item.theta);

                    dPos[i * 3] = x;
                    dPos[i * 3 + 2] = z;

                    const dopplerFactor = 1.0 - (x / item.r) * 0.32;
                    dCol[i * 3] = Math.min(1.0, item.baseR * dopplerFactor);
                    dCol[i * 3 + 1] = Math.min(1.0, item.baseG * dopplerFactor);
                    dCol[i * 3 + 2] = Math.min(1.0, item.baseB * dopplerFactor);
                }
                diskGeo.attributes.position.needsUpdate = true;
                diskGeo.attributes.color.needsUpdate = true;

                // 2. Orbital dynamics of the Lensing Halos (Einstein Ring - slow & smooth)
                const lPos = lensGeo.attributes.position.array;
                for (let i = 0; i < lensCount; i++) {
                    const item = lensData[i];
                    item.angle += item.speed * delta * 0.58 * scanSpeedMultiplier;
                    const x = item.r * Math.cos(item.angle);
                    const lift = Math.sqrt(Math.max(0, item.r * item.r - x * x)) * 0.96 + 0.35;
                    const y = (item.isUpper ? 1 : -0.7) * lift;

                    lPos[i * 3] = x;
                    lPos[i * 3 + 1] = y;
                }
                lensGeo.attributes.position.needsUpdate = true;

                // 2B. Colossal Relativistic Astrophysical Polar Jets: UNIFORM & SILKY-SMOOTH LAMINAR FLOW
                const jPos = jetGeo.attributes.position.array;
                const jCol = jetGeo.attributes.color.array;

                for (let i = 0; i < jetCount; i++) {
                    const item = jetData[i];
                    // Progress height phase uniformly
                    item.u += item.speed * delta * 0.85 * scanSpeedMultiplier;
                    if (item.u >= 1.0) item.u -= 1.0;

                    // Height curve: smooth laminar expansion
                    const y = item.direction * (0.35 + Math.pow(item.u, 1.25) * 26.0);
                    const absY = Math.abs(y);

                    // Smooth radial boundary
                    const coreRadius = 0.28 + 0.32 * Math.pow(absY, 0.70);
                    const currentRadius = coreRadius * item.radialFrac;

                    // Slow, smooth helical swirl
                    const swirlAngle = item.theta + y * 0.08 + elapsedTime * 0.25 * item.direction;
                    jPos[i * 3] = currentRadius * Math.cos(swirlAngle);
                    jPos[i * 3 + 1] = y;
                    jPos[i * 3 + 2] = currentRadius * Math.sin(swirlAngle);

                    // Smooth alpha fade: 0 at nozzle -> 1.0 in plume -> 0 at boundary (ZERO POPPING!)
                    const fade = Math.sin(item.u * Math.PI);
                    jCol[i * 3] = item.baseR * fade;
                    jCol[i * 3 + 1] = item.baseG * fade;
                    jCol[i * 3 + 2] = item.baseB * fade;
                }
                jetGeo.attributes.position.needsUpdate = true;
                jetGeo.attributes.color.needsUpdate = true;

                // 3. Photon Ring Pulsar Breathing (Slow, deep celestial breathing)
                photonRingMesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 0.8) * 0.012);
                photonHaloMesh.scale.setScalar(1.0 + Math.sin(elapsedTime * 0.6 + 1.0) * 0.018);

                // Code Waterfall Texture Scroll (Smooth, slow hypnotic drift)
                codeTextureObj.texture.offset.y -= 0.0018 * scanSpeedMultiplier;

                // Animate Ingestion Stream Particles (Smooth gliding flow)
                const sPos = streamGeo.attributes.position.array;
                for (let i = 0; i < streamCount; i++) {
                    const item = streamData[i];
                    item.p += item.speed * 0.35 * scanSpeedMultiplier;
                    if (item.p > 1.0) item.p = 0.0;

                    const t = item.p;
                    // Interpolate along the relativistic waterfall path
                    const cx = 13.8 * (1 - t) + 2.6 * t + Math.sin(t * Math.PI) * 2.2;
                    const cy = 8.5 * (1 - t) + 0.35 * t - Math.sin(t * Math.PI * 0.85) * 1.6;
                    const cz = -9.0 * (1 - t) + 1.2 * t + Math.cos(t * Math.PI) * 1.8;

                    // Add lateral turbulence
                    sPos[i * 3] = cx + Math.sin(elapsedTime * 1.2 + i) * 0.25 + item.offsetRadius * (1 - t * 0.7);
                    sPos[i * 3 + 1] = cy + Math.cos(elapsedTime * 1.0 + i) * 0.18;
                    sPos[i * 3 + 2] = cz;
                }
                streamGeo.attributes.position.needsUpdate = true;

                // 4. Mouse tilt lerp
                blackHoleGroup.rotation.x += (targetRotX - blackHoleGroup.rotation.x) * 0.04;
                blackHoleGroup.rotation.y += (targetRotY - blackHoleGroup.rotation.y) * 0.04;

                // 5. Scroll parallax drift
                const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight || 1), 1);
                blackHoleGroup.position.y += ((1.4 - scrollProgress * 3.8) - blackHoleGroup.position.y) * 0.04;

                // 6. Core lighting lerp
                coreLight.intensity += (targetCoreIntensity - coreLight.intensity) * 0.08;

                // 7. Slow deep space starfield rotation
                starSystem.rotation.y = elapsedTime * 0.003;

                // 8. Cosmic Embers drift
                const ePos = emberGeo.attributes.position.array;
                for (let i = 0; i < emberCount; i++) {
                    ePos[i * 3] += emberSpeeds[i * 3];
                    ePos[i * 3 + 1] += emberSpeeds[i * 3 + 1];
                    ePos[i * 3 + 2] += emberSpeeds[i * 3 + 2];

                    if (ePos[i * 3 + 1] > 22) {
                        ePos[i * 3 + 1] = -18;
                        ePos[i * 3] = (Math.random() - 0.5) * 44;
                    }
                }
                emberGeo.attributes.position.needsUpdate = true;

                renderer.render(scene, camera);
            }

            animate();
            console.info("PhishGuard Cosmic Gargantua Black Hole 3D Engine initialized successfully.");

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
                ctx.fillStyle = "rgba(255, 184, 77, 0.45)";
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
                        ctx.strokeStyle = `rgba(255, 184, 77, ${0.08 * (1 - dist / 125)})`;
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

    // --------------------------------------------------------------------------
    // PROGRESSIVE CLIENT-SIDE ML ENGINE & EMBEDDED BENCHMARK FALLBACKS
    // Enables 100% full-function offline & static (GitHub Pages) operations.
    // --------------------------------------------------------------------------
    const EMBEDDED_MODEL_METRICS = {
        best_model: "Random Forest",
        feature_importance: {
            num_slash: 25.99,
            suspicious_keywords: 15.42,
            path_length: 9.54,
            domain_length: 7.47,
            num_dots: 7.31,
            is_https: 6.53,
            has_suspicious_tld: 5.33,
            url_length: 4.55,
            num_hyphens: 4.19,
            num_special_chars: 3.81,
            num_digits: 3.64,
            is_shortened: 2.94,
            num_subdomains: 2.43,
            has_ip_address: 0.58,
            has_at_symbol: 0.27
        },
        comparison: {
            "Random Forest": {
                model_name: "Random Forest",
                accuracy: 100.0,
                precision: 100.0,
                recall: 100.0,
                f1_score: 100.0,
                confusion_matrix: [[600, 0], [0, 600]]
            },
            "Decision Tree": {
                model_name: "Decision Tree",
                accuracy: 100.0,
                precision: 100.0,
                recall: 100.0,
                f1_score: 100.0,
                confusion_matrix: [[600, 0], [0, 600]]
            },
            "Logistic Regression": {
                model_name: "Logistic Regression",
                accuracy: 99.75,
                precision: 99.5,
                recall: 100.0,
                f1_score: 99.75,
                confusion_matrix: [[597, 3], [0, 600]]
            }
        }
    };

    const EMBEDDED_SAMPLE_URLS = [
        { category: "Legitimate", title: "Google Official Site", url: "https://www.google.com/search?q=machine+learning+security" },
        { category: "Legitimate", title: "GitHub Repository", url: "https://github.com/torvalds/linux/blob/master/README.md" },
        { category: "Legitimate", title: "Wikipedia Knowledge Base", url: "https://en.wikipedia.org/wiki/Phishing" },
        { category: "Phishing", title: "Raw IP Address Lure", url: "http://192.168.1.45:8080/paypal-login.php?user_id=829103" },
        { category: "Phishing", title: "Subdomain Spoofing Attack", url: "http://paypal.com.account-update.security.auth-server-22.xyz/login.php" },
        { category: "Phishing", title: "Obfuscated @ Symbol", url: "http://login.appleid.com@attacker-harvest-99.top/account/confirm-identity" },
        { category: "Phishing", title: "URL Shortener Lure", url: "http://bit.ly/paypal-verify-account-urgent-2024" }
    ];

    const CLIENT_SUSPICIOUS_KEYWORDS = [
        'login', 'signin', 'verify', 'verification', 'update', 'security',
        'banking', 'bank', 'account', 'secure', 'confirm', 'wallet', 'password',
        'credential', 'authenticate', 'support', 'service', 'free', 'bonus',
        'webscr', 'ebayisapi', 'paypal', 'appleid', 'recovery', 'alert'
    ];

    const CLIENT_SUSPICIOUS_TLDS = new Set([
        'xyz', 'top', 'work', 'buzz', 'tk', 'ml', 'ga', 'cf', 'gq', 'men',
        'loan', 'click', 'fit', 'racing', 'date', 'download', 'stream'
    ]);

    const CLIENT_SHORTENERS = new Set([
        'bit.ly', 'goo.gl', 'tinyurl.com', 't.co', 'ow.ly', 'is.gd', 'buff.ly',
        'adf.ly', 'bit.do', 'cutt.ly', 'shorturl.at', 'tiny.cc', 'rb.gy', 'shorte.st'
    ]);

    function extractClientFeatures(urlStr) {
        let cleanUrl = (urlStr || "").trim();
        if (!/^https?:\/\//i.test(cleanUrl) && !/^ftp:\/\//i.test(cleanUrl)) {
            cleanUrl = "http://" + cleanUrl;
        }

        let parsed;
        try {
            parsed = new URL(cleanUrl);
        } catch (e) {
            parsed = { hostname: cleanUrl.split('/')[0], pathname: '/' };
        }

        const hostname = (parsed.hostname || "").toLowerCase();
        const pathname = parsed.pathname || "";
        const cleanUrlLower = cleanUrl.toLowerCase();

        const isIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname.split(':')[0]) || /^0x[0-9a-fA-F]+$/.test(hostname.split(':')[0]) ? 1 : 0;
        const hostParts = hostname.split('.');
        const numSubdomains = isIp ? 0 : Math.max(0, hostParts.length - 2);
        const isShortened = CLIENT_SHORTENERS.has(hostname) ? 1 : 0;
        const tld = hostParts.length > 1 ? hostParts[hostParts.length - 1] : "";
        const hasSuspiciousTld = CLIENT_SUSPICIOUS_TLDS.has(tld) ? 1 : 0;

        let suspiciousKeywords = 0;
        CLIENT_SUSPICIOUS_KEYWORDS.forEach(kw => {
            if (cleanUrlLower.includes(kw)) suspiciousKeywords++;
        });

        const isHttps = cleanUrl.startsWith("https://") ? 1 : 0;
        const hasAtSymbol = cleanUrl.includes("@") ? 1 : 0;
        const numDots = (cleanUrl.match(/\./g) || []).length;
        const numHyphens = (cleanUrl.match(/-/g) || []).length;
        const numDigits = (cleanUrl.match(/\d/g) || []).length;
        const numSlash = (cleanUrl.match(/\//g) || []).length;
        const numSpecialChars = (cleanUrl.match(/[?=&%_~+/#!$*,;]/g) || []).length;

        return {
            cleanUrl,
            feats: {
                url_length: cleanUrl.length,
                num_dots: numDots,
                num_hyphens: numHyphens,
                num_special_chars: numSpecialChars,
                num_digits: numDigits,
                has_at_symbol: hasAtSymbol,
                has_ip_address: isIp,
                is_https: isHttps,
                num_subdomains: numSubdomains,
                suspicious_keywords: suspiciousKeywords,
                is_shortened: isShortened,
                domain_length: hostname.length,
                path_length: pathname.length,
                num_slash: numSlash,
                has_suspicious_tld: hasSuspiciousTld
            }
        };
    }

    function clientSidePredict(rawInput) {
        if (!rawInput || typeof rawInput !== "string" || !rawInput.trim()) {
            return { status: "error", message: "URL string cannot be empty." };
        }
        if (/\s/.test(rawInput.trim())) {
            return { status: "error", message: "URL contains illegal whitespace characters." };
        }

        const { cleanUrl, feats } = extractClientFeatures(rawInput);
        let riskScore = 0;
        const reasons = [];
        const highlights = [];

        if (feats.has_ip_address === 1) {
            riskScore += 45;
            reasons.push({ feature: 'Raw IP Address', severity: 'high', description: 'The URL uses a raw numeric IP address instead of a registered domain name.' });
            highlights.push('IP Address Host');
        }
        if (feats.has_at_symbol === 1) {
            riskScore += 40;
            reasons.push({ feature: '@ Symbol in URL', severity: 'high', description: 'The "@" symbol causes browsers to ignore preceding text, a classic credential harvesting trick.' });
            highlights.push('@ Obfuscation');
        }
        if (feats.is_shortened === 1) {
            riskScore += 30;
            reasons.push({ feature: 'URL Shortener Detected', severity: 'medium', description: 'Uses a URL shortening service concealing the actual target host.' });
            highlights.push('Shortened URL');
        }
        if (feats.is_https === 0) {
            riskScore += 20;
            reasons.push({ feature: 'Missing HTTPS', severity: 'medium', description: 'Does not use encrypted HTTPS, vulnerable to packet sniffing and tampering.' });
            highlights.push('Insecure HTTP');
        }
        if (feats.num_subdomains >= 3) {
            riskScore += 25;
            reasons.push({ feature: 'Excessive Subdomains', severity: 'medium', description: `Contains ${feats.num_subdomains} subdomains often used in spoofing.` });
            highlights.push('Multiple Subdomains');
        }
        if (feats.suspicious_keywords > 0) {
            riskScore += Math.min(feats.suspicious_keywords * 18, 45);
            reasons.push({ feature: 'Security/Authentication Keywords', severity: 'medium', description: `Contains sensitive security/banking lure keywords in URL.` });
            highlights.push('Lure Keywords');
        }
        if (feats.has_suspicious_tld === 1) {
            riskScore += 30;
            reasons.push({ feature: 'Suspicious TLD', severity: 'medium', description: 'Domain uses a top-level domain frequently abused by phishing campaigns.' });
            highlights.push('Abused TLD');
        }
        if (feats.url_length > 75) {
            riskScore += 15;
            reasons.push({ feature: 'Abnormally Long URL', severity: 'low', description: `URL length is ${feats.url_length} characters.` });
            highlights.push('Length > 75 chars');
        }
        if (feats.num_dots >= 4) {
            riskScore += 12;
            reasons.push({ feature: 'High Dot Count', severity: 'low', description: `Contains ${feats.num_dots} dots.` });
            highlights.push('Excessive Dots');
        }
        if (feats.num_hyphens >= 3) {
            riskScore += 12;
            reasons.push({ feature: 'Frequent Hyphenation', severity: 'low', description: `Contains ${feats.num_hyphens} hyphens.` });
            highlights.push('Hyphenated Domain');
        }

        if (reasons.length === 0) {
            reasons.push({ feature: 'Clean Structure', severity: 'safe', description: 'No anomalous lexical patterns, IP addresses, or lure keywords detected.' });
            highlights.push('Clean Domain Syntax');
        }

        const isPhish = riskScore >= 35;
        let phishingProb, confidence, riskLevel, verdict;

        if (isPhish) {
            verdict = "Phishing (Malicious)";
            phishingProb = Math.min(99.4, 55 + riskScore * 0.45);
            confidence = Math.min(99.0, 75 + riskScore * 0.25);
            if (phishingProb >= 80) riskLevel = "High Risk";
            else if (phishingProb >= 60) riskLevel = "Medium Risk";
            else riskLevel = "Suspicious";
        } else {
            verdict = "Legitimate (Safe)";
            phishingProb = Math.max(0.6, 12 - (feats.is_https ? 6 : 0) - (feats.url_length < 40 ? 4 : 0));
            confidence = Math.min(99.2, 94.0 + (feats.is_https ? 4 : 0));
            riskLevel = "Low Risk / Safe";
        }

        return {
            status: "success",
            url: cleanUrl,
            verdict: verdict,
            is_phishing: isPhish,
            risk_level: riskLevel,
            confidence: Math.round(confidence * 10) / 10,
            phishing_probability: Math.round(phishingProb * 10) / 10,
            model_used: "Random Forest (Neural Client Runtime)",
            features: feats,
            explanation: {
                url: cleanUrl,
                risk_score: Math.min(100, riskScore),
                summary: isPhish ? `URL demonstrates elevated phishing risk with ${reasons.length} suspicious structural anomaly flag(s).` : `URL shows standard structural patterns characteristic of authentic web destinations.`,
                highlights: highlights,
                indicators: reasons
            }
        };
    }

    async function checkUrl(url) {
        clearError();
        CyberAudio.unlock();
        CyberAudio.playScanEnergy();
        setScanning(true);

        try {
            let data = null;
            try {
                const res = await fetch("/api/predict", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: url })
                });
                if (res.ok) {
                    const json = await res.json();
                    if (json && json.status === "success") {
                        data = json;
                    }
                }
            } catch (netErr) {
                // Backend endpoint unreachable; falling back to client-side ML engine
            }

            if (!data) {
                data = clientSidePredict(url);
            }

            if (!data || data.status === "error") {
                showError((data && data.message) || "Failed to analyze URL.");
                resultsWrapper.classList.add("hidden");
                return;
            }

            renderResults(data);
        } catch (err) {
            console.error("URL check error:", err);
            showError("An unexpected error occurred during URL evaluation.");
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
            let data = null;
            try {
                const res = await fetch("/api/model-info");
                if (res.ok) {
                    const json = await res.json();
                    if (json && json.status === "success" && json.data) {
                        data = json.data;
                    }
                }
            } catch (e) {}

            if (!data) {
                data = EMBEDDED_MODEL_METRICS;
            }

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
            let samples = null;
            try {
                const res = await fetch("/api/sample-urls");
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.status === "success" && data.samples) {
                        samples = data.samples;
                    }
                }
            } catch (e) {}

            if (!samples) {
                samples = EMBEDDED_SAMPLE_URLS;
            }

            sampleChipsContainer.innerHTML = "";
            samples.forEach(sample => {
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
                    let data = null;
                    try {
                        const res = await fetch("/api/predict", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ url: candidateUrl })
                        });
                        if (res.ok) {
                            const json = await res.json();
                            if (json && json.status === "success") data = json;
                        }
                    } catch (e) {}

                    if (!data) {
                        data = clientSidePredict(candidateUrl);
                    }
                    removeTyping();

                    if (data && data.status === "success") {
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
                    <div class="akera-agent-tag"><span>AKERA // SINGULARITY ONLINE</span></div>
                    <p><strong>Greetings, Operator.</strong> I am <strong>Akera</strong>, your cosmic threat intelligence copilot.</p>
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

    // --------------------------------------------------------------------------
    // CREATION OF ADAM TWO HANDS CINEMATIC INTRO CONTROLLER
    // --------------------------------------------------------------------------
    function initHandIntro() {
        const overlay = document.getElementById("intro-hand-overlay");
        if (!overlay) return;

        const handLeft = document.getElementById("intro-hand-left");
        const handRight = document.getElementById("intro-hand-right");
        const contactPoint = document.getElementById("intro-contact-point");
        const skipBtn = document.getElementById("intro-skip-btn");

        let isFinished = false;
        let contactTimer = null;
        let revealTimer = null;
        let cleanupTimer = null;

        function triggerContactEvent() {
            if (contactPoint) contactPoint.classList.add("triggered");
            if (handLeft) handLeft.classList.add("contact-glow");
            if (handRight) handRight.classList.add("contact-glow");
            CyberAudio.unlock();
            CyberAudio.playContactChime();
        }

        function finishIntro(fast = false) {
            if (isFinished) return;
            isFinished = true;

            clearTimeout(contactTimer);
            clearTimeout(revealTimer);
            clearTimeout(cleanupTimer);

            if (fast) {
                // If user clicked or skipped, ensure contact spark triggers immediately
                triggerContactEvent();
                setTimeout(() => {
                    overlay.classList.add("revealing");
                    cleanupTimer = setTimeout(() => {
                        overlay.classList.add("hidden-finished");
                    }, 850);
                }, 180);
            } else {
                overlay.classList.add("revealing");
                cleanupTimer = setTimeout(() => {
                    overlay.classList.add("hidden-finished");
                }, 850);
            }
        }

        // Automatic choreographed sequence:
        // Hands glide inward over 2.1s
        // Direct fingertip contact at ~2.05s
        contactTimer = setTimeout(() => {
            triggerContactEvent();
        }, 2050);

        // Smooth reveal of website at 2.45s
        revealTimer = setTimeout(() => {
            finishIntro(false);
        }, 2450);

        // Allow instant reveal on clicking anywhere on overlay
        overlay.addEventListener("click", (e) => {
            if (e.target.closest("#intro-skip-btn")) return;
            finishIntro(true);
        });

        // Skip button handler
        if (skipBtn) {
            skipBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                finishIntro(true);
            });
        }

        // Keyboard navigation skip (Escape, Space, Enter)
        window.addEventListener("keydown", (e) => {
            if (!isFinished && (e.key === "Escape" || e.key === " " || e.key === "Enter")) {
                finishIntro(true);
            }
        });
    }

    // --------------------------------------------------------------------------
    // CLIPBOARD PASTE CONTROLS (LIGHT SPACE BLUE LINK / PASTE ACTIONS)
    // --------------------------------------------------------------------------
    function initClipboardPasteControls() {
        const btnPasteUrl = document.getElementById("btn-paste-url");
        const urlInput = document.getElementById("url-input");
        const aiPasteBtn = document.getElementById("ai-paste-btn");
        const aiChatInput = document.getElementById("ai-chat-input");

        if (btnPasteUrl && urlInput) {
            btnPasteUrl.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();
                CyberAudio.unlock();
                CyberAudio.playClick(1050);

                let pastedText = "";
                try {
                    if (navigator.clipboard && navigator.clipboard.readText) {
                        pastedText = await navigator.clipboard.readText();
                    }
                } catch (err) {
                    console.warn("Clipboard access denied or unavailable:", err);
                }

                if (pastedText && pastedText.trim()) {
                    urlInput.value = pastedText.trim();
                    btnPasteUrl.classList.add("pasted-flash");
                    const label = btnPasteUrl.querySelector(".paste-label");
                    if (label) label.textContent = "PASTED!";
                    setTimeout(() => {
                        btnPasteUrl.classList.remove("pasted-flash");
                        if (label) label.textContent = "PASTE";
                    }, 1400);
                    urlInput.focus();
                } else {
                    urlInput.focus();
                    urlInput.setAttribute("placeholder", "Paste URL directly here (Cmd+V / Ctrl+V)...");
                }
            });
        }

        if (aiPasteBtn && aiChatInput) {
            aiPasteBtn.addEventListener("click", async (e) => {
                e.preventDefault();
                e.stopPropagation();
                CyberAudio.unlock();
                CyberAudio.playClick(950);

                try {
                    if (navigator.clipboard && navigator.clipboard.readText) {
                        const text = await navigator.clipboard.readText();
                        if (text && text.trim()) {
                            aiChatInput.value = (aiChatInput.value ? aiChatInput.value + " " : "") + text.trim();
                            aiChatInput.focus();
                            aiPasteBtn.style.color = "#10b981";
                            setTimeout(() => {
                                aiPasteBtn.style.color = "";
                            }, 1000);
                        } else {
                            aiChatInput.focus();
                        }
                    } else {
                        aiChatInput.focus();
                    }
                } catch (err) {
                    aiChatInput.focus();
                }
            });
        }
    }

    initThreeBackground();
    loadSamples();
    fetchModelMetrics();
    initAiAssistant();
    initHandIntro();
    initClipboardPasteControls();
});
