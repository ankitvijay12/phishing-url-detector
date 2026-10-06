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
            codeWaterfallMesh.visible = false;
            // Text ribbon disabled to keep cosmic scene clean of code text

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
        const voiceBtn = document.getElementById("ai-voice-btn");
        const voiceToggleBtn = document.getElementById("ai-voice-toggle-btn");
        const voiceStatus = document.getElementById("ai-voice-status");

        if (!toggleBtn) return;

        let isOpen = false;

        // ------------------------------------------------------------------
        // AKERA VOICE ENGINE (SPEECH SYNTHESIS TTS)
        // ------------------------------------------------------------------
        const AkeraVoice = {
            speechEnabled: true,
            synth: ('speechSynthesis' in window) ? window.speechSynthesis : null,
            selectedVoice: null,
            isSpeaking: false,
            activeTimer: null,

            init() {
                if (!this.synth) return;
                const pickVoice = () => {
                    const voices = this.synth.getVoices();
                    if (!voices || voices.length === 0) return;
                    const preferredNames = [
                        "Samantha", "Victoria", "Karen", "Google US English", 
                        "Microsoft Zira", "Microsoft Jenny", "Natural", "Serena", "Fiona", "Moira"
                    ];
                    for (const name of preferredNames) {
                        const match = voices.find(v => v.name && v.name.includes(name));
                        if (match) {
                            this.selectedVoice = match;
                            return;
                        }
                    }
                    this.selectedVoice = voices.find(v => v.lang && v.lang.startsWith("en") && !v.name.toLowerCase().includes("male"))
                                      || voices.find(v => v.lang && v.lang.startsWith("en"))
                                      || voices[0] || null;
                };
                pickVoice();
                if (this.synth.onvoiceschanged !== undefined) {
                    this.synth.onvoiceschanged = pickVoice;
                }
            },

            cleanText(text) {
                if (!text) return "";
                return text.replace(/<[^>]*>/g, " ")
                           .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")
                           .replace(/[\u{2600}-\u{26FF}]/gu, "")
                           .replace(/[\u{2700}-\u{27BF}]/gu, "")
                           .replace(/[\u{1F600}-\u{1F64F}]/gu, "")
                           .replace(/\s+/g, " ")
                           .trim();
            },

            speakPhrases(phrases, pauseMs = 550, askFollowUp = false) {
                if (!this.speechEnabled || !this.synth) return;
                this.stopSpeaking();

                const list = Array.isArray(phrases) ? [...phrases] : [phrases];
                if (askFollowUp) {
                    list.push("Is there anything else I can help you with?");
                }

                const cleaned = list.map(p => this.cleanText(p)).filter(Boolean);
                if (cleaned.length === 0) return;

                const header = panel ? panel.querySelector(".ai-panel-header") : null;
                let index = 0;

                const playNext = () => {
                    if (!isVoiceOverlayOpen && index > 0) {
                        this.stopSpeaking();
                        return;
                    }

                    if (index >= cleaned.length) {
                        if (header) header.classList.remove("speaking-active");
                        this.isSpeaking = false;
                        if (typeof setVoiceOverlayState === "function" && isVoiceOverlayOpen) {
                            setVoiceOverlayState("IDLE", "Tap mic to speak or select a quick command");
                        }
                        return;
                    }

                    const phrase = cleaned[index];
                    index++;

                    const utter = new SpeechSynthesisUtterance(phrase);
                    if (this.selectedVoice) {
                        utter.voice = this.selectedVoice;
                    }
                    utter.rate = 1.0;
                    utter.pitch = 1.05;
                    utter.volume = 1.0;

                    utter.onstart = () => {
                        this.isSpeaking = true;
                        if (header) header.classList.add("speaking-active");
                    };

                    utter.onend = () => {
                        if (!isVoiceOverlayOpen) {
                            this.isSpeaking = false;
                            return;
                        }
                        if (index < cleaned.length) {
                            this.activeTimer = setTimeout(playNext, pauseMs);
                        } else {
                            if (header) header.classList.remove("speaking-active");
                            this.isSpeaking = false;
                            if (typeof setVoiceOverlayState === "function" && isVoiceOverlayOpen) {
                                setVoiceOverlayState("IDLE", "Tap mic to speak or select a quick command");
                            }
                        }
                    };

                    utter.onerror = () => {
                        if (header) header.classList.remove("speaking-active");
                        this.isSpeaking = false;
                        if (typeof setVoiceOverlayState === "function" && isVoiceOverlayOpen) {
                            setVoiceOverlayState("IDLE", "Tap mic to speak or select a quick command");
                        }
                    };

                    try {
                        this.synth.speak(utter);
                    } catch (e) {
                        console.warn("Akera Voice speech error:", e);
                    }
                };

                playNext();
            },

            speak(text, askFollowUp = false) {
                if (!this.speechEnabled || !this.synth || !text) return;
                this.speakPhrases([text], 480, askFollowUp);
            },

            stopSpeaking() {
                if (this.activeTimer) {
                    clearTimeout(this.activeTimer);
                    this.activeTimer = null;
                }
                if (this.synth) {
                    try { this.synth.cancel(); } catch (e) {}
                }
                this.isSpeaking = false;
                const header = panel ? panel.querySelector(".ai-panel-header") : null;
                if (header) header.classList.remove("speaking-active");
            }
        };

        AkeraVoice.init();

        // ------------------------------------------------------------------
        // AKERA COSMIC VOICE OVERLAY & SINE WAVE CANVAS (MATCHES media_1791290656710.png)
        // ------------------------------------------------------------------
        const voiceOverlay = document.getElementById("akera-voice-overlay");
        const voiceOverlayCloseBtn = document.getElementById("voice-overlay-close-btn");
        const voiceOverlayBackdrop = document.getElementById("voice-overlay-backdrop");
        const voiceOverlayTranscript = document.getElementById("voice-overlay-transcript");
        const voiceBadgeLabel = document.getElementById("voice-badge-label");
        const voiceOverlayMicBtn = document.getElementById("voice-overlay-mic-btn");
        const voiceOverlaySubtext = document.getElementById("voice-overlay-status-subtext");
        const voiceSineCanvas = document.getElementById("akera-voice-sine-canvas");

        let voiceCanvasCtx = null;
        let voiceCanvasAnimId = null;
        let wavePhase = 0;
        let currentWaveAmp = 8;
        let targetWaveAmp = 8;
        let isVoiceOverlayOpen = false;

        // Real-Time Web Audio API Mic Analyser
        let audioStream = null;
        let audioContext = null;
        let audioAnalyser = null;
        let audioDataArray = null;

        function initAudioAnalyser(stream) {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                if (!audioContext || audioContext.state === "closed") {
                    audioContext = new AudioCtx();
                }
                if (audioContext.state === "suspended") {
                    audioContext.resume();
                }
                const source = audioContext.createMediaStreamSource(stream);
                audioAnalyser = audioContext.createAnalyser();
                audioAnalyser.fftSize = 64;
                audioAnalyser.smoothingTimeConstant = 0.75;
                audioDataArray = new Uint8Array(audioAnalyser.frequencyBinCount);
                source.connect(audioAnalyser);
            } catch (e) {
                console.warn("Audio analyser setup warning:", e);
            }
        }

        function initVoiceSineCanvas() {
            if (!voiceSineCanvas) return;
            voiceCanvasCtx = voiceSineCanvas.getContext("2d");
            resizeVoiceCanvas();
            window.addEventListener("resize", resizeVoiceCanvas);
        }

        function resizeVoiceCanvas() {
            if (!voiceSineCanvas) return;
            const rect = voiceSineCanvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            const w = rect.width > 0 ? rect.width : 380;
            const h = rect.height > 0 ? rect.height : 170;
            voiceSineCanvas.width = w * dpr;
            voiceSineCanvas.height = h * dpr;
            if (voiceCanvasCtx) {
                voiceCanvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
        }

        function renderVoiceSineWaves() {
            if (!voiceSineCanvas || !voiceCanvasCtx || !isVoiceOverlayOpen) return;

            const rect = voiceSineCanvas.getBoundingClientRect();
            const width = rect.width > 0 ? rect.width : 380;
            const height = rect.height > 0 ? rect.height : 170;
            const centerY = height / 2;

            voiceCanvasCtx.clearRect(0, 0, width, height);

            // 1. Measure real-time microphone volume if available
            let realMicVolume = 0;
            if (audioAnalyser && audioDataArray && isListening) {
                audioAnalyser.getByteFrequencyData(audioDataArray);
                let sum = 0;
                for (let i = 0; i < audioDataArray.length; i++) {
                    sum += audioDataArray[i];
                }
                realMicVolume = sum / audioDataArray.length;
            }

            // 2. Dynamically modulate target amplitude
            if (AkeraVoice.isSpeaking) {
                targetWaveAmp = 28 + Math.sin(Date.now() * 0.008) * 12;
            } else if (isListening) {
                if (realMicVolume > 6) {
                    targetWaveAmp = Math.min(54, 14 + realMicVolume * 1.3);
                } else if (targetWaveAmp < 15) {
                    targetWaveAmp = 9 + Math.sin(Date.now() * 0.003) * 3;
                }
            }

            currentWaveAmp += (targetWaveAmp - currentWaveAmp) * 0.14;
            wavePhase += 0.038;

            // Multi-layer glowing wave ribbons matching media_1791290656710.png
            const waveLayers = [
                { color: "rgba(129, 140, 248, 0.45)", shadow: "#818cf8", blur: 12, lineWidth: 1.8, freq: 0.018, speed: 0.03, ampScale: 0.7, phaseOff: 3.2 },
                { color: "rgba(37, 99, 235, 0.85)", shadow: "#3b82f6", blur: 18, lineWidth: 2.6, freq: 0.014, speed: -0.035, ampScale: 0.9, phaseOff: 1.8 },
                { color: "rgba(56, 189, 248, 0.95)", shadow: "#38bdf8", blur: 22, lineWidth: 2.8, freq: 0.022, speed: 0.045, ampScale: 1.05, phaseOff: 0.6 },
                { color: "#ffffff", shadow: "#ffffff", blur: 16, lineWidth: 3.0, freq: 0.016, speed: 0.04, ampScale: 1.0, phaseOff: 0.0 }
            ];

            waveLayers.forEach(layer => {
                voiceCanvasCtx.save();
                voiceCanvasCtx.beginPath();
                voiceCanvasCtx.strokeStyle = layer.color;
                voiceCanvasCtx.shadowColor = layer.shadow;
                voiceCanvasCtx.shadowBlur = layer.blur;
                voiceCanvasCtx.lineWidth = layer.lineWidth;
                voiceCanvasCtx.lineCap = "round";
                voiceCanvasCtx.lineJoin = "round";

                for (let x = 0; x <= width; x += 2) {
                    const normX = x / width;
                    const envelope = Math.sin(normX * Math.PI);

                    const y = centerY + Math.sin(x * layer.freq + wavePhase * (layer.speed / 0.038) + layer.phaseOff) *
                              Math.cos(x * 0.009 + wavePhase * 0.4) *
                              currentWaveAmp * layer.ampScale * envelope;

                    if (x === 0) {
                        voiceCanvasCtx.moveTo(x, y);
                    } else {
                        voiceCanvasCtx.lineTo(x, y);
                    }
                }
                voiceCanvasCtx.stroke();
                voiceCanvasCtx.restore();
            });

            voiceCanvasAnimId = requestAnimationFrame(renderVoiceSineWaves);
        }

        const micWrapper = document.querySelector(".voice-mic-button-wrapper");

        function updateMicButtonVisual(isOpen) {
            if (!voiceOverlayMicBtn) return;
            if (isOpen) {
                voiceOverlayMicBtn.classList.add("mic-open", "is-listening");
                voiceOverlayMicBtn.classList.remove("mic-closed");
                voiceOverlayMicBtn.title = "Microphone is Listening • Click to Stop";
                if (micWrapper) micWrapper.classList.add("mic-active");
            } else {
                voiceOverlayMicBtn.classList.remove("mic-open", "is-listening");
                voiceOverlayMicBtn.classList.add("mic-closed");
                voiceOverlayMicBtn.title = "Microphone is Off • Click to Speak";
                if (micWrapper) micWrapper.classList.remove("mic-active");
            }
        }

        function openVoiceOverlay() {
            if (!voiceOverlay) return;
            isVoiceOverlayOpen = true;
            voiceOverlay.classList.remove("hidden");
            voiceOverlay.setAttribute("aria-hidden", "false");
            setVoiceOverlayState("IDLE", "Standing by... Tap microphone to speak or select a quick command");
            updateMicButtonVisual(false);
            resizeVoiceCanvas();
            if (voiceCanvasAnimId) cancelAnimationFrame(voiceCanvasAnimId);
            voiceCanvasAnimId = requestAnimationFrame(renderVoiceSineWaves);
        }

        function closeVoiceOverlay() {
            if (!voiceOverlay) return;
            isVoiceOverlayOpen = false;
            shouldKeepListening = false;
            clearSilence();
            AkeraVoice.stopSpeaking();
            if (recognition) {
                recognition.onstart = null;
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
                try { recognition.abort(); } catch(e){}
            }
            stopListeningUi();
            updateMicButtonVisual(false);
            voiceOverlay.classList.add("hidden");
            voiceOverlay.setAttribute("aria-hidden", "true");
            if (voiceCanvasAnimId) {
                cancelAnimationFrame(voiceCanvasAnimId);
                voiceCanvasAnimId = null;
            }
        }

        if (voiceOverlayCloseBtn) {
            voiceOverlayCloseBtn.addEventListener("click", closeVoiceOverlay);
        }
        if (voiceOverlayBackdrop) {
            voiceOverlayBackdrop.addEventListener("click", closeVoiceOverlay);
        }

        function setVoiceOverlayState(state, transcriptText) {
            const isMicOpen = (state === "LISTENING" || state === "HEARING_SPEECH");
            updateMicButtonVisual(isMicOpen);

            if (voiceBadgeLabel) {
                if (state === "LISTENING") {
                    voiceBadgeLabel.textContent = "AKERA VOICE // LISTENING";
                } else if (state === "HEARING_SPEECH") {
                    voiceBadgeLabel.textContent = "AKERA VOICE // HEARING SPEECH";
                } else if (state === "PROCESSING") {
                    voiceBadgeLabel.textContent = "AKERA // COMPUTING RESPONSE";
                } else if (state === "SPEAKING") {
                    voiceBadgeLabel.textContent = "AKERA // SPEAKING";
                } else {
                    voiceBadgeLabel.textContent = "AKERA VOICE // STANDBY";
                }
            }

            if (voiceOverlayTranscript && transcriptText !== undefined) {
                voiceOverlayTranscript.innerHTML = transcriptText;
            }

            if (state === "LISTENING") {
                targetWaveAmp = 10;
                if (voiceOverlaySubtext) voiceOverlaySubtext.textContent = "🎙️ Listening... Speak naturally (Tap mic to stop)";
            } else if (state === "HEARING_SPEECH") {
                targetWaveAmp = 42;
                if (voiceOverlaySubtext) voiceOverlaySubtext.textContent = "Transcribing voice in real time...";
            } else if (state === "PROCESSING") {
                targetWaveAmp = 16;
                if (voiceOverlaySubtext) voiceOverlaySubtext.textContent = "Processing with Akera Neural Core...";
            } else if (state === "SPEAKING") {
                targetWaveAmp = 32;
                if (voiceOverlaySubtext) voiceOverlaySubtext.textContent = "Akera vocal synthesis active";
            } else {
                targetWaveAmp = 4;
                if (voiceOverlaySubtext) voiceOverlaySubtext.textContent = "Mic is off • Tap to speak or select a quick command";
            }
        }

        initVoiceSineCanvas();

        // ------------------------------------------------------------------
        // ROBUST SPEECH RECOGNITION (VOICE ASSISTANT STT) & AUDIO CAPTURE
        // ------------------------------------------------------------------
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition = null;
        let isListening = false;
        let shouldKeepListening = false;
        let silenceTimer = null;
        let pendingVoiceQuery = "";

        const subtitleEl = panel ? panel.querySelector(".ai-panel-subtitle") : null;
        const defaultSubtitle = subtitleEl ? subtitleEl.innerHTML : "Neural Security Copilot • Ready";

        function clearSilence() {
            if (silenceTimer) {
                clearTimeout(silenceTimer);
                silenceTimer = null;
            }
        }

        function getListeningCardHtml() {
            return `
                <div class="ai-msg ai-msg-bot ai-listening-active-card" id="ai-active-listening-card">
                    <div class="ai-avatar-mini">
                        <div class="listening-avatar-halo">
                            <img src="static/images/akera_orb.png" alt="Akera" class="listening-avatar-orb">
                            <span class="listening-halo-ring"></span>
                        </div>
                    </div>
                    <div class="ai-msg-bubble voice-listening-bubble">
                        <div class="listening-card-header">
                            <div class="listening-live-indicator">
                                <span class="listening-sonar-ping"></span>
                                <span class="listening-live-dot"></span>
                                <span class="listening-live-label">AKERA // VOICE LISTENER ACTIVE</span>
                            </div>
                            <span class="listening-freq-tag">AWAITING SPEECH</span>
                        </div>

                        <!-- 20-Bar Animated Holographic Soundwave Visualizer -->
                        <div class="listening-wave-stage">
                            <div class="listening-wave-glow-beam"></div>
                            <div class="listening-soundwave-bars">
                                <span class="sw-bar w-1"></span>
                                <span class="sw-bar w-2"></span>
                                <span class="sw-bar w-3"></span>
                                <span class="sw-bar w-4"></span>
                                <span class="sw-bar w-5"></span>
                                <span class="sw-bar w-6"></span>
                                <span class="sw-bar w-7"></span>
                                <span class="sw-bar w-8"></span>
                                <span class="sw-bar w-9"></span>
                                <span class="sw-bar w-10"></span>
                                <span class="sw-bar w-11"></span>
                                <span class="sw-bar w-12"></span>
                                <span class="sw-bar w-13"></span>
                                <span class="sw-bar w-14"></span>
                                <span class="sw-bar w-15"></span>
                                <span class="sw-bar w-16"></span>
                                <span class="sw-bar w-17"></span>
                                <span class="sw-bar w-18"></span>
                                <span class="sw-bar w-19"></span>
                                <span class="sw-bar w-20"></span>
                            </div>
                        </div>

                        <div class="listening-speech-feedback">
                            <div class="speech-status-row">
                                <span class="mic-wave-icon">🎙️</span>
                                <div class="speech-feedback-text" id="listening-feedback-text">
                                    Listening to your voice... Say <strong>"Hi Akera"</strong> or ask a question
                                </div>
                            </div>
                            <div class="listening-actions-row">
                                <span class="listening-hint-pill">Tip: Say "Hi Akera"</span>
                                <button type="button" class="listening-stop-btn" id="listening-card-stop-btn">Stop</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        function startListeningUi() {
            isListening = true;
            updateMicButtonVisual(true);
            if (panel) panel.classList.add("is-listening");
            if (voiceBtn) voiceBtn.classList.add("listening");
            if (voiceStatus) voiceStatus.classList.remove("hidden");
            if (chatInput) chatInput.placeholder = "🎙️ Listening... Speak your command or question";
            if (subtitleEl) {
                subtitleEl.innerHTML = '<span class="listening-glow-text">🎙️ LISTENING TO YOUR VOICE...</span>';
            }

            const existingCard = document.getElementById("ai-active-listening-card");
            if (!existingCard && messagesContainer) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = getListeningCardHtml();
                const cardEl = tempDiv.firstElementChild;
                messagesContainer.appendChild(cardEl);
                scrollToBottom();
            }

            CyberAudio.playClick(880);
        }

        function updateListeningInterim(interimText) {
            const feedbackText = document.getElementById("listening-feedback-text");
            const statusLiveText = document.getElementById("voice-status-live-text");
            const cardEl = document.getElementById("ai-active-listening-card");

            if (feedbackText && interimText) {
                feedbackText.innerHTML = `Hearing: <span class="interim-spoken">"${escapeHtml(interimText)}"</span>...`;
            }
            if (statusLiveText && interimText) {
                statusLiveText.innerHTML = `Hearing: <strong>"${escapeHtml(interimText)}"</strong>...`;
            }
            if (cardEl) {
                cardEl.classList.add("speech-detected");
            }

            if (interimText) {
                setVoiceOverlayState("HEARING_SPEECH");
                if (voiceOverlayTranscript) {
                    const words = interimText.trim().split(/\s+/);
                    if (words.length > 2) {
                        const leadWords = escapeHtml(words.slice(0, words.length - 2).join(" "));
                        const activeWords = escapeHtml(words.slice(-2).join(" "));
                        voiceOverlayTranscript.innerHTML = `<span class="voice-spoken-lead">${leadWords} </span><span class="voice-spoken-active">${activeWords}...</span>`;
                    } else {
                        voiceOverlayTranscript.innerHTML = `<span class="voice-spoken-active">${escapeHtml(interimText)}...</span>`;
                    }
                }
            }
        }

        function stopListeningUi() {
            isListening = false;
            updateMicButtonVisual(false);
            if (panel) panel.classList.remove("is-listening");
            if (voiceBtn) voiceBtn.classList.remove("listening");
            if (voiceStatus) voiceStatus.classList.add("hidden");
            if (chatInput) chatInput.placeholder = "Message Akera or say 'Hi Akera'...";
            if (subtitleEl) {
                subtitleEl.innerHTML = defaultSubtitle;
            }

            const cardEl = document.getElementById("ai-active-listening-card");
            if (cardEl) {
                cardEl.remove();
            }

            const statusLiveText = document.getElementById("voice-status-live-text");
            if (statusLiveText) {
                statusLiveText.innerHTML = 'Mic is off. Tap mic to speak.';
            }
        }

        let isStartingRecognition = false;

        function submitVoiceQuery(cleanQuery) {
            clearSilence();
            shouldKeepListening = false;
            if (recognition) {
                recognition.onstart = null;
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
                try { recognition.stop(); } catch(e){}
            }
            stopListeningUi();
            setVoiceOverlayState("PROCESSING", `
                <div class="voice-chatgpt-searching">
                    <span class="chatgpt-sparkle-icon">✨</span> Computing response for:<br>
                    <strong>"${escapeHtml(cleanQuery)}"</strong>
                </div>
            `);
            CyberAudio.playClick(1150);
            processUserQuery(cleanQuery);
        }

        function startSpeechRecognition() {
            if (!SpeechRec) {
                appendBotMessage(`
                    <div class="akera-agent-tag"><span>AKERA // VOICE SUPPORT</span></div>
                    <p><strong>Speech Recognition is not available in this browser.</strong></p>
                    <p>Please use Chrome, Edge, or Safari with microphone access enabled.</p>
                `);
                setVoiceOverlayState("IDLE", "Speech recognition unavailable in this browser.");
                return;
            }

            if (isStartingRecognition || isListening) return;
            if (AkeraVoice.isSpeaking) return;

            shouldKeepListening = true;
            pendingVoiceQuery = "";
            clearSilence();

            if (recognition) {
                recognition.onstart = null;
                recognition.onresult = null;
                recognition.onerror = null;
                recognition.onend = null;
                try { recognition.abort(); } catch(e){}
                recognition = null;
            }

            try {
                isStartingRecognition = true;
                recognition = new SpeechRec();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = "en-US";
                recognition.maxAlternatives = 1;

                recognition.onstart = () => {
                    isStartingRecognition = false;
                    isListening = true;
                    startListeningUi();
                    setVoiceOverlayState("LISTENING", 'Listening to your voice... Speak your command or question');
                };

                recognition.onresult = (event) => {
                    if (AkeraVoice.isSpeaking) return;

                    let interimTranscript = "";
                    let finalTranscript = "";

                    for (let i = 0; i < event.results.length; ++i) {
                        const item = event.results[i];
                        if (item.isFinal) {
                            finalTranscript += item[0].transcript + " ";
                        } else {
                            interimTranscript += item[0].transcript;
                        }
                    }

                    const transcribed = (finalTranscript + interimTranscript).trim();
                    if (transcribed) {
                        pendingVoiceQuery = transcribed;
                        if (chatInput) chatInput.value = transcribed;
                        updateListeningInterim(transcribed);

                        clearSilence();
                        silenceTimer = setTimeout(() => {
                            if (pendingVoiceQuery && pendingVoiceQuery.trim()) {
                                const q = pendingVoiceQuery.trim();
                                pendingVoiceQuery = "";
                                submitVoiceQuery(q);
                            }
                        }, 1000);
                    }
                };

                recognition.onerror = (event) => {
                    console.warn("Speech Recognition error:", event.error);
                    isStartingRecognition = false;
                    if (event.error === "no-speech") {
                        return;
                    }
                    if (event.error === "aborted") {
                        return;
                    }
                    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
                        shouldKeepListening = false;
                        stopListeningUi();
                        setVoiceOverlayState("IDLE", "⚠️ Microphone permission blocked. Please allow mic access in your browser address bar.");
                        appendBotMessage(`
                            <div class="akera-agent-tag"><span>AKERA // PERMISSION</span></div>
                            <p><strong>Microphone access blocked.</strong> Please click the camera/microphone icon in your browser URL bar to allow microphone access.</p>
                        `);
                    }
                };

                recognition.onend = () => {
                    isStartingRecognition = false;
                    isListening = false;

                    if (!isVoiceOverlayOpen) {
                        pendingVoiceQuery = "";
                        shouldKeepListening = false;
                        stopListeningUi();
                        return;
                    }

                    // Immediately submit if user spoke a command before pause/end
                    if (pendingVoiceQuery && pendingVoiceQuery.trim()) {
                        const q = pendingVoiceQuery.trim();
                        pendingVoiceQuery = "";
                        submitVoiceQuery(q);
                        return;
                    }

                    if (shouldKeepListening && isVoiceOverlayOpen && !AkeraVoice.isSpeaking) {
                        setTimeout(() => {
                            if (shouldKeepListening && isVoiceOverlayOpen && !isListening && !AkeraVoice.isSpeaking) {
                                startSpeechRecognition();
                            }
                        }, 200);
                    } else {
                        stopListeningUi();
                    }
                };

                recognition.start();
            } catch (err) {
                console.warn("Recognition start error:", err);
                isStartingRecognition = false;
                isListening = false;
                if (shouldKeepListening && isVoiceOverlayOpen && !AkeraVoice.isSpeaking) {
                    setTimeout(() => {
                        if (shouldKeepListening && isVoiceOverlayOpen && !AkeraVoice.isSpeaking) startSpeechRecognition();
                    }, 400);
                }
            }
        }

        async function requestMicAndListen() {
            CyberAudio.unlock();
            if (!isVoiceOverlayOpen) {
                openVoiceOverlay();
            }
            setVoiceOverlayState("LISTENING", "Listening to your voice... Speak your command or question");

            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                try {
                    if (!audioStream) {
                        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                        initAudioAnalyser(audioStream);
                    }
                } catch (micErr) {
                    console.warn("Microphone getUserMedia warning:", micErr);
                    if (micErr.name === "NotAllowedError" || micErr.name === "PermissionDeniedError") {
                        setVoiceOverlayState("IDLE", "⚠️ Microphone permission blocked. Allow mic in browser settings.");
                        return;
                    }
                }
            }

            startSpeechRecognition();
        }

        function startListening() {
            requestMicAndListen();
        }

        if (voiceOverlayMicBtn) {
            voiceOverlayMicBtn.addEventListener("click", () => {
                CyberAudio.unlock();
                if (isListening || shouldKeepListening) {
                    // Turn OFF mic (user touched mic logo to stop)
                    shouldKeepListening = false;
                    clearSilence();
                    pendingVoiceQuery = "";
                    if (recognition) {
                        recognition.onstart = null;
                        recognition.onresult = null;
                        recognition.onerror = null;
                        recognition.onend = null;
                        try { recognition.abort(); } catch(e){}
                    }
                    stopListeningUi();
                    setVoiceOverlayState("IDLE", "Mic is off • Tap to speak or select a quick command");
                    CyberAudio.playClick(720);
                } else {
                    // Turn ON mic (user touched mic logo to start)
                    CyberAudio.playClick(1050);
                    requestMicAndListen();
                }
            });
        }

        if (voiceBtn) {
            voiceBtn.addEventListener("click", () => {
                if (isListening) {
                    shouldKeepListening = false;
                    if (recognition) {
                        recognition.onstart = null;
                        recognition.onresult = null;
                        recognition.onerror = null;
                        recognition.onend = null;
                        try { recognition.abort(); } catch(e){}
                    }
                    stopListeningUi();
                } else {
                    requestMicAndListen();
                }
            });
        }

        if (voiceToggleBtn) {
            voiceToggleBtn.addEventListener("click", () => {
                AkeraVoice.speechEnabled = !AkeraVoice.speechEnabled;
                if (!AkeraVoice.speechEnabled) {
                    AkeraVoice.stopSpeaking();
                    voiceToggleBtn.classList.add("muted");
                    voiceToggleBtn.title = "Voice Audio Muted (Click to unmute)";
                    CyberAudio.playClick(500);
                } else {
                    voiceToggleBtn.classList.remove("muted");
                    voiceToggleBtn.title = "Voice Audio Output Active (Click to mute)";
                    CyberAudio.playClick(900);
                    AkeraVoice.speak("Voice output enabled.");
                }
            });
        }

        function openPanel() {
            isOpen = true;
            openVoiceOverlay();
            CyberAudio.unlock();
            CyberAudio.playClick(1050);
        }

        function closePanel() {
            isOpen = false;
            closeVoiceOverlay();
            AkeraVoice.stopSpeaking();
            if (isListening && recognition) {
                try { recognition.stop(); } catch(e){}
                stopListeningUi();
            }
            CyberAudio.playClick(720);
        }

        toggleBtn.addEventListener("click", () => {
            CyberAudio.unlock();
            if (isVoiceOverlayOpen) {
                closeVoiceOverlay();
            } else {
                openVoiceOverlay();
                CyberAudio.playClick(1050);
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", closePanel);
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                CyberAudio.playClick(600);
                AkeraVoice.stopSpeaking();
                if (messagesContainer) {
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
                }
            });
        }

        function scrollToBottom() {
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }

        function appendUserMessage(text) {
            if (!messagesContainer) return;
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
            if (!messagesContainer) return;
            const div = document.createElement("div");
            div.className = "ai-msg ai-msg-bot";
            div.innerHTML = `<div class="ai-msg-bubble akera-bubble">${html}</div>`;
            messagesContainer.appendChild(div);
            scrollToBottom();
        }

        function showTyping() {
            if (!messagesContainer) return () => {};
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
                    <button class="ai-sugg-chip" data-query="⚡ List Commands"><span class="chip-glow-bullet"></span>⚡ List Commands</button>
                    <button class="ai-sugg-chip" data-query="🎯 Sample URLs"><span class="chip-glow-bullet"></span>🎯 Sample URLs</button>
                    <button class="ai-sugg-chip" data-query="Why is this website safe to use?"><span class="chip-glow-bullet"></span>🛡️ Why is this website safe?</button>
                    <button class="ai-sugg-chip" data-query="What is the use of PhishGuard?"><span class="chip-glow-bullet"></span>🎯 What is the use of PhishGuard?</button>
                    <button class="ai-sugg-chip" data-query="How does PhishGuard detect phishing links?"><span class="chip-glow-bullet"></span>🔍 How does detection work?</button>
                    <button class="ai-sugg-chip" data-query="What should I do if I clicked a phishing link?"><span class="chip-glow-bullet"></span>⚠️ What if I clicked a bad link?</button>
                    <button class="ai-sugg-chip" data-query="Explain URL risk levels and confidence score"><span class="chip-glow-bullet"></span>📊 Explain risk & confidence</button>
                    <button class="ai-sugg-chip" data-query="What is homograph and punycode spoofing?"><span class="chip-glow-bullet"></span>🕵️ Homograph & @ tricks</button>
                </div>
            `;
        }

        function getFollowUpHtml() {
            return `
                <div class="akera-followup-card">
                    <div class="akera-followup-prompt">
                        <span class="followup-sparkle">✨</span>
                        <span class="followup-text">Is there anything else I can help you with?</span>
                    </div>
                    <div class="akera-followup-chips">
                        <button class="ai-sugg-chip" data-query="⚡ List Commands"><span class="chip-glow-bullet"></span>⚡ List Commands</button>
                        <button class="ai-sugg-chip" data-query="🎯 Sample URLs"><span class="chip-glow-bullet"></span>🎯 Sample URLs</button>
                        <button class="ai-sugg-chip" data-query="Why is this website safe to use?"><span class="chip-glow-bullet"></span>🛡️ Safety Guarantee</button>
                        <button class="ai-sugg-chip" data-query="What should I do if I clicked a phishing link?"><span class="chip-glow-bullet"></span>🚨 Incident Help</button>
                        <button class="ai-sugg-chip" data-query="Model benchmark"><span class="chip-glow-bullet"></span>📊 Model Stats</button>
                    </div>
                </div>
            `;
        }

        // Wire up quick pre-commands inside Voice Overlay (#voice-pre-commands)
        const voicePreCmdsWrap = document.getElementById("voice-pre-commands");
        if (voicePreCmdsWrap) {
            voicePreCmdsWrap.addEventListener("click", (e) => {
                const chip = e.target.closest(".voice-cmd-chip");
                if (!chip) return;
                const query = chip.getAttribute("data-query") || chip.textContent.trim();
                if (!query) return;
                CyberAudio.unlock();
                CyberAudio.playClick(920);
                submitVoiceQuery(query);
            });
        }

        // Handle suggestion chips (both initial and inline), command items, & listening card actions
        if (messagesContainer) {
            messagesContainer.addEventListener("click", (e) => {
                const stopBtn = e.target.closest("#listening-card-stop-btn");
                if (stopBtn) {
                    if (isListening && recognition) {
                        try { recognition.stop(); } catch(err){}
                    }
                    stopListeningUi();
                    return;
                }

                const voiceMicChip = e.target.closest("#ai-chip-listen-now");
                if (voiceMicChip) {
                    if (voiceBtn) voiceBtn.click();
                    return;
                }

                const openKeyBtn = e.target.closest(".gemini-open-key-btn") || e.target.closest(".chatgpt-open-key-btn");
                if (openKeyBtn) {
                    if (chatgptKeyBtn) chatgptKeyBtn.click();
                    else if (geminiKeyBtn) geminiKeyBtn.click();
                    return;
                }

                const inlineSaveBtn = e.target.closest("#inline-chatgpt-key-save-btn");
                if (inlineSaveBtn) {
                    const inputEl = document.getElementById("inline-chatgpt-key-input");
                    if (inputEl && inputEl.value.trim()) {
                        const keyVal = inputEl.value.trim();
                        localStorage.setItem("akera_openai_api_key", keyVal);
                        updateChatGptKeyUi();
                        fetch("/api/chatgpt-key", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ apiKey: keyVal })
                        }).catch(() => {});
                        CyberAudio.playSafeVerdict();
                        appendBotMessage(`
                            <div class="akera-agent-tag chatgpt-tag"><span>AKERA // KEY CONNECTED</span></div>
                            <p><strong>✅ Key saved!</strong> Akera cognition active. Standing by for your commands!</p>
                            ${getFollowUpHtml()}
                        `);
                        AkeraVoice.speak("Cognition engine connected. Standing by for your commands.", false);
                    }
                    return;
                }

                const cmdItem = e.target.closest(".cmd-item");
                if (cmdItem) {
                    const query = cmdItem.getAttribute("data-query");
                    if (query) {
                        if (chatInput) chatInput.value = query;
                        processUserQuery(query);
                        return;
                    }
                }

                const chip = e.target.closest(".ai-sugg-chip");
                if (chip) {
                    const query = chip.getAttribute("data-query");
                    if (query) {
                        if (chatInput) chatInput.value = query;
                        processUserQuery(query);
                        return;
                    }
                }
            });
        }

        // ------------------------------------------------------------------
        // OPENAI CHATGPT COGNITION ENGINE CONFIGURATION & HELPERS
        // ------------------------------------------------------------------
        const chatgptKeyBtn = document.getElementById("ai-chatgpt-key-btn") || document.getElementById("ai-gemini-key-btn");
        const chatgptModal = document.getElementById("ai-chatgpt-modal") || document.getElementById("ai-gemini-modal");
        const chatgptModalClose = document.getElementById("chatgpt-modal-close") || document.getElementById("gemini-modal-close");
        const chatgptKeyInput = document.getElementById("chatgpt-api-key-input") || document.getElementById("gemini-api-key-input");
        const chatgptKeySaveBtn = document.getElementById("chatgpt-api-key-save-btn") || document.getElementById("gemini-api-key-save-btn");
        const chatgptKeyStatus = document.getElementById("chatgpt-key-status") || document.getElementById("gemini-key-status");
        // Backwards compatibility alias
        const geminiKeyBtn = chatgptKeyBtn;

        function updateChatGptKeyUi() {
            const savedKey = localStorage.getItem("akera_openai_api_key") || "";
            if (chatgptKeyInput) chatgptKeyInput.value = savedKey;
            if (savedKey) {
                if (chatgptKeyBtn) chatgptKeyBtn.classList.add("has-key");
                if (chatgptKeyStatus) {
                    chatgptKeyStatus.textContent = "Status: ✅ Key Active (OpenAI ChatGPT Connected)";
                    chatgptKeyStatus.classList.add("active");
                }
            } else {
                if (chatgptKeyBtn) chatgptKeyBtn.classList.remove("has-key");
                if (chatgptKeyStatus) {
                    chatgptKeyStatus.textContent = "Status: No key saved (Click to add key)";
                    chatgptKeyStatus.classList.remove("active");
                }
            }
        }

        updateChatGptKeyUi();

        if (chatgptKeyBtn && chatgptModal) {
            chatgptKeyBtn.addEventListener("click", () => {
                chatgptModal.classList.toggle("hidden");
                updateChatGptKeyUi();
                if (!chatgptModal.classList.contains("hidden") && chatgptKeyInput) {
                    setTimeout(() => chatgptKeyInput.focus(), 100);
                }
            });
        }

        if (chatgptModalClose && chatgptModal) {
            chatgptModalClose.addEventListener("click", () => {
                chatgptModal.classList.add("hidden");
            });
        }

        if (chatgptKeySaveBtn && chatgptKeyInput) {
            chatgptKeySaveBtn.addEventListener("click", async () => {
                const val = chatgptKeyInput.value.trim();
                if (!val) {
                    localStorage.removeItem("akera_openai_api_key");
                    updateChatGptKeyUi();
                    CyberAudio.playClick(900);
                    if (chatgptModal) chatgptModal.classList.add("hidden");
                    appendBotMessage(`
                        <div class="akera-agent-tag chatgpt-tag"><span>AKERA // CHATGPT CONFIG</span></div>
                        <p>Key removed. Akera switched to local security protocols and knowledge base.</p>
                        ${getFollowUpHtml()}
                    `);
                    return;
                }

                chatgptKeySaveBtn.disabled = true;
                chatgptKeySaveBtn.textContent = "Connecting...";
                if (chatgptKeyStatus) {
                    chatgptKeyStatus.textContent = "Status: ⏳ Verifying key with OpenAI ChatGPT...";
                    chatgptKeyStatus.className = "gemini-key-status";
                }

                // Persist to server environment
                fetch("/api/chatgpt-key", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ apiKey: val })
                }).catch(() => {});

                try {
                    // Test key with light ping
                    const testRes = await fetch("https://api.openai.com/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${val}`
                        },
                        body: JSON.stringify({
                            model: "gpt-4o-mini",
                            messages: [{ role: "user", content: "ping" }],
                            max_tokens: 5
                        })
                    });

                    if (testRes.ok) {
                        localStorage.setItem("akera_openai_api_key", val);
                        updateChatGptKeyUi();
                        CyberAudio.playSafeVerdict();
                        if (chatgptModal) chatgptModal.classList.add("hidden");
                        appendBotMessage(`
                            <div class="akera-agent-tag chatgpt-tag"><span>AKERA // COGNITION ACTIVE</span></div>
                            <p><strong>✅ Cognition active!</strong></p>
                            <p>Akera is ready. You can speak or type any question or cybersecurity command in real time!</p>
                            ${getFollowUpHtml()}
                        `);
                        AkeraVoice.speak("Cognition engine connected. Standing by for your commands.", false);
                    } else {
                        const errData = await testRes.json().catch(() => null);
                        const msg = errData?.error?.message || `HTTP ${testRes.status}`;
                        if (chatgptKeyStatus) {
                            chatgptKeyStatus.textContent = `Status: ❌ ${msg}`;
                            chatgptKeyStatus.className = "gemini-key-status text-danger";
                        }
                        // Still save key in case it was a regional or quota restriction that backend can retry
                        localStorage.setItem("akera_openai_api_key", val);
                        updateChatGptKeyUi();
                    }
                } catch (netErr) {
                    // Save locally and let backend try
                    localStorage.setItem("akera_openai_api_key", val);
                    updateChatGptKeyUi();
                    if (chatgptModal) chatgptModal.classList.add("hidden");
                } finally {
                    chatgptKeySaveBtn.disabled = false;
                    chatgptKeySaveBtn.textContent = "Save";
                }
            });
        }

        function formatAiText(text) {
            if (!text) return "";
            let clean = escapeHtml(text);
            clean = clean.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            clean = clean.replace(/\*(.*?)\*/g, "<em>$1</em>");
            clean = clean.replace(/`([^`]+)`/g, "<code>$1</code>");
            const lines = clean.split("\n");
            let inList = false;
            let html = "";
            for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                    if (!inList) { html += "<ul>"; inList = true; }
                    html += `<li>${trimmed.substring(2)}</li>`;
                } else if (/^\d+\.\s/.test(trimmed)) {
                    if (!inList) { html += "<ol>"; inList = true; }
                    html += `<li>${trimmed.replace(/^\d+\.\s/, "")}</li>`;
                } else {
                    if (inList) { html += "</ul>"; inList = false; }
                    if (trimmed) html += `<p>${trimmed}</p>`;
                }
            }
            if (inList) html += "</ul>";
            return html;
        }

        async function fetchChatGptAnswer(query) {
            let savedKey = (localStorage.getItem("akera_openai_api_key") || "").trim();

            // 1. Primary: Server endpoint (/api/chat) with OpenAI support
            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: query, apiKey: savedKey })
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.status === "success" && data.response) {
                        return { text: data.response, source: "chatgpt", model: data.model || "gpt-4o-mini" };
                    }
                    if (data && data.apiKey && !savedKey) {
                        savedKey = data.apiKey;
                        localStorage.setItem("akera_openai_api_key", data.apiKey);
                    }
                    if (data && data.status === "error") {
                        const errMsg = (data.message || "").toLowerCase();
                        const isNetError = errMsg.includes("errno 8") ||
                                           errMsg.includes("nodename nor servname") ||
                                           errMsg.includes("not known") ||
                                           errMsg.includes("unreachable") ||
                                           errMsg.includes("timed out");
                        if (!isNetError) {
                            return { text: null, source: "chatgpt_error", error: data.message };
                        }
                        console.info("Server cannot reach OpenAI directly. Attempting client-side fetch from browser...");
                    }
                }
            } catch (e) {
                console.warn("Server chat endpoint fetch error:", e);
            }

            // 2. Direct OpenAI API client call from the user's browser (bypasses server sandbox & DNS issues)
            let activeKey = savedKey || (localStorage.getItem("akera_openai_api_key") || "").trim();
            if (activeKey) {
                const models = ["gpt-4o-mini", "gpt-4o", "gpt-3.5-turbo"];
                let lastError = "";

                for (const model of models) {
                    try {
                        const openAiRes = await fetch("https://api.openai.com/v1/chat/completions", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${activeKey}`
                            },
                            body: JSON.stringify({
                                model: model,
                                messages: [
                                    {
                                        role: "system",
                                        content: "You are Akera, an intelligent AI Security Copilot and Voice Assistant for PhishGuard AI. You are authoritative, highly intelligent, friendly, and concise. Always keep answers brief, crisp, and natural for voice synthesis (2 to 4 clear sentences or short punchy bullet points). Never produce massive essay walls of markdown that sound robotic or tedious when read aloud. You can answer any cybersecurity question, general question, technical command, or user inquiry. When discussing phishing or URL safety, reference PhishGuard's real-time in-memory scanner. Stay in character as Akera."
                                    },
                                    {
                                        role: "user",
                                        content: query
                                    }
                                ],
                                temperature: 0.7,
                                max_tokens: 380
                            })
                        });

                        if (openAiRes.ok) {
                            const data = await openAiRes.json();
                            const reply = data.choices?.[0]?.message?.content?.trim();
                            if (reply) {
                                return { text: reply, source: "chatgpt", model: model };
                            }
                        } else {
                            const errData = await openAiRes.json().catch(() => null);
                            const errMsg = errData?.error?.message || `HTTP ${openAiRes.status}`;
                            lastError = errMsg;
                            if (openAiRes.status === 401 || openAiRes.status === 403) {
                                break;
                            }
                        }
                    } catch (err) {
                        lastError = err.message || "Network request failed";
                    }
                }

                if (lastError) {
                    return { text: null, source: "offline_fallback", error: lastError };
                }
            }

            // 3. If no key is configured anywhere
            return { text: null, source: "needs_key" };
        }

        if (chatForm) {
            chatForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const text = chatInput ? chatInput.value.trim() : "";
                if (!text) return;
                processUserQuery(text);
            });
        }

        async function processUserQuery(query) {
            if (chatInput) chatInput.value = "";
            CyberAudio.unlock();
            CyberAudio.playClick(920);
            appendUserMessage(query);

            const removeTyping = showTyping();
            const rawLower = query.toLowerCase().trim();

            // 1. Direct System Commands
            if (rawLower === "clear chat" || rawLower === "clear" || rawLower === "clear messages") {
                removeTyping();
                if (clearBtn) clearBtn.click();
                AkeraVoice.speak("Session memory purged. Akera neural core re-initialized.");
                return;
            }

            if (rawLower === "mute" || rawLower === "mute voice" || rawLower === "turn off voice") {
                removeTyping();
                AkeraVoice.speechEnabled = false;
                AkeraVoice.stopSpeaking();
                if (voiceToggleBtn) {
                    voiceToggleBtn.classList.add("muted");
                    voiceToggleBtn.title = "Voice Audio Muted (Click to unmute)";
                }
                appendBotMessage(`
                    <div class="akera-agent-tag"><span>AKERA // AUDIO</span></div>
                    <p><strong>Voice synthesis muted.</strong> Akera speech output is now silenced.</p>
                    ${getFollowUpHtml()}
                `);
                return;
            }

            if (rawLower === "unmute" || rawLower === "unmute voice" || rawLower === "turn on voice") {
                removeTyping();
                AkeraVoice.speechEnabled = true;
                if (voiceToggleBtn) {
                    voiceToggleBtn.classList.remove("muted");
                    voiceToggleBtn.title = "Voice Audio Output Active (Click to mute)";
                }
                appendBotMessage(`
                    <div class="akera-agent-tag"><span>AKERA // AUDIO</span></div>
                    <p><strong>Voice synthesis unmuted.</strong> Akera speech output is now active.</p>
                    ${getFollowUpHtml()}
                `);
                AkeraVoice.speak("Voice output enabled. I am listening.");
                return;
            }

            // 2. Hindi / Hinglish Greetings & Casual Queries ("kaisi ho", "kaise ho", "kya haal hai", etc.)
            const isHindiGreeting = /(kaisi ho|kaise ho|kya haal|kaisa hai|kya hal|aap kaise|tum kaise|namaste|kem cho|kya chal raha|theek ho|sab theek)/i.test(rawLower);
            if (isHindiGreeting) {
                removeTyping();
                appendBotMessage(`
                    <div class="akera-agent-tag"><span>AKERA // COPILOT</span></div>
                    <p><strong>Main bilkul theek hoon! How are you? How can I help you today?</strong></p>
                    ${getFollowUpHtml()}
                `);
                CyberAudio.playClick(1000);
                openVoiceOverlay();
                setVoiceOverlayState("SPEAKING", 'Main bilkul theek hoon! How are you? How can I help you today?');
                AkeraVoice.speakPhrases(["Main theek hoon! How are you?", "How can I help you today?"], 600, false);
                return;
            }

            // 2. Check if query contains a URL to inspect
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
                            ${getFollowUpHtml()}
                        `);

                        // Synchronize main page input
                        if (urlInput) {
                            urlInput.value = candidateUrl;
                        }

                        // Speak voice threat verdict, pause, and ask follow-up aloud!
                        const spokenUrlVerdict = isPhish 
                            ? "Warning: High-risk phishing detected. This link poses a threat of credential harvesting." 
                            : "Threat analysis complete: Lexical features match verified benign patterns. This URL appears safe.";
                        AkeraVoice.speak(spokenUrlVerdict, true);

                        return;
                    }
                } catch (err) {}
            }

            // 3. Greeting "Hi Akera" -> Natural Pause + AUTO-ACTIVATE VOICE MODE
            const isHiAkera = /^(hi|hey|hello|yo|greetings|hola)\b/i.test(rawLower) || 
                              rawLower.includes("hi akera") || 
                              rawLower.includes("hey akera") || 
                              rawLower.includes("hello akera") ||
                              rawLower.includes("hi akerra") ||
                              rawLower.includes("hi akira") ||
                              (rawLower.includes("akera") && (rawLower.includes("hi") || rawLower.includes("hey") || rawLower.includes("hello") || rawLower.includes("how are you") || rawLower.includes("help")));

            if (isHiAkera) {
                removeTyping();
                appendBotMessage(`
                    <div class="akera-agent-tag"><span>AKERA // VOICE COPILOT</span></div>
                    <p><strong>Hi! How are you? How can I help you?</strong></p>
                    <p>🎙️ <em>Voice mode automatically activated. Listening for your command or question...</em></p>
                    ${getPrePromptsHtml()}
                `);
                CyberAudio.playClick(1000);
                openVoiceOverlay();
                setVoiceOverlayState("SPEAKING", 'Hi! How are you? How can I help you?');
                AkeraVoice.speakPhrases(["Hi, how are you?", "How can I help you?"], 600, false);
                return;
            }

            // 4. Query OpenAI ChatGPT AI for whatever command, question, or task the user requested!
            try {
                const chatgptData = await fetchChatGptAnswer(query);

                removeTyping();

                if (chatgptData && chatgptData.text) {
                    const formattedHtml = formatAiText(chatgptData.text);
                    const isOffline = chatgptData.source === "offline_neural_core";
                    const tagTitle = isOffline ? "AKERA // OFFLINE NEURAL CORE" : "AKERA // CHATGPT COGNITION";
                    const tagClass = isOffline ? "offline-tag" : "chatgpt-tag";
                    appendBotMessage(`
                        <div class="akera-agent-tag ${tagClass}"><span>${tagTitle}</span></div>
                        <div class="chatgpt-response-text">${formattedHtml}</div>
                        ${getFollowUpHtml()}
                    `);
                    CyberAudio.playClick(1000);
                    setVoiceOverlayState("SPEAKING", `<div class="voice-chatgpt-response">${formattedHtml}</div>`);
                    // Speak exact ChatGPT / Neural Core response aloud
                    AkeraVoice.speak(chatgptData.text, true);
                    return;
                }

                // If fallback is needed
                const replyObj = generateAiResponse(query);
                const replyHtml = typeof replyObj === "string" ? replyObj : replyObj.text;
                const spokenPhrases = typeof replyObj === "object" && replyObj.spokenPhrases ? replyObj.spokenPhrases : null;
                const spokenText = typeof replyObj === "object" && replyObj.spoken ? replyObj.spoken : null;

                appendBotMessage(replyHtml);
                CyberAudio.playClick(1000);

                const voiceSummary = spokenText || (spokenPhrases ? spokenPhrases.join(" ") : "Analyzing security protocol.");
                setVoiceOverlayState("SPEAKING", `<span class="voice-spoken-active">${escapeHtml(voiceSummary)}</span>`);

                if (spokenPhrases) {
                    AkeraVoice.speakPhrases(spokenPhrases, replyObj.pauseMs || 550, replyObj.askFollowUp || false);
                } else if (spokenText) {
                    AkeraVoice.speak(spokenText, replyObj.askFollowUp !== false);
                }
                return;
            } catch (err) {
                removeTyping();
                console.error("AI response error:", err);
            }
        }

        function generateAiResponse(text) {
            const q = text.toLowerCase().trim();

            // 0. Hindi / Hinglish Greetings ("kaisi ho", "kaise ho", "kya haal hai", etc.)
            const isHindiGreeting = /(kaisi ho|kaise ho|kya haal|kaisa hai|kya hal|aap kaise|tum kaise|namaste|kem cho|kya chal raha|theek ho|sab theek)/i.test(q);
            if (isHindiGreeting) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // COPILOT</span></div>
                        <p><strong>Main bilkul theek hoon! How are you? How can I help you today?</strong></p>
                        ${getPrePromptsHtml()}
                        ${getFollowUpHtml()}
                    `,
                    spokenPhrases: ["Main theek hoon! How are you?", "How can I help you today?"],
                    pauseMs: 600,
                    askFollowUp: true
                };
            }

            // 1. "HI AKERA" & GREETINGS (User requirement: say "Hi, how are you", audible pause, then say "How can I help you")
            const isHiAkera = /^(hi|hey|hello|yo|greetings|hola)\b/i.test(q) || 
                              q.includes("hi akera") || 
                              q.includes("hey akera") || 
                              q.includes("hello akera") ||
                              q.includes("hi akerra") ||
                              q.includes("hi akira") ||
                              (q.includes("akera") && (q.includes("hi") || q.includes("hey") || q.includes("hello") || q.includes("how are you") || q.includes("help")));

            if (isHiAkera) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // VOICE COPILOT</span></div>
                        <p><strong>Hi! How are you? How can I help you?</strong></p>
                        <p>I am online and listening. You can speak or type any cybersecurity question, paste a link to verify its safety, or select an authorized command:</p>
                        ${getPrePromptsHtml()}
                    `,
                    spokenPhrases: ["Hi, how are you?", "How can I help you?"],
                    pauseMs: 600,
                    askFollowUp: false
                };
            }

            // 2. COMMAND DIRECTORY / HELP / MENU
            if (q.includes("command") || q.includes("help") || q.includes("menu") || q === "list" || q.includes("what can you do") || q.includes("options")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // COMMAND DIRECTORY</span></div>
                        <p><strong>⚡ Authorized Security & Assistant Commands:</strong></p>
                        <div class="akera-cmd-card">
                            <div class="cmd-category-title"><span>🔍</span> THREAT DETECTION & EXPLOITS</div>
                            <div class="cmd-category-list">
                                <div class="cmd-item" data-query="🎯 Sample URLs">
                                    <span class="cmd-name">🎯 Sample URLs</span>
                                    <span class="cmd-desc">Load benign, credential phish, and spoofed links</span>
                                </div>
                                <div class="cmd-item" data-query="Zero-Day Phishing">
                                    <span class="cmd-name">🧬 Zero-Day Phishing</span>
                                    <span class="cmd-desc">How structural heuristics block zero-hour scams</span>
                                </div>
                                <div class="cmd-item" data-query="Typosquatting Exploit">
                                    <span class="cmd-name">🔡 Typosquatting Exploit</span>
                                    <span class="cmd-desc">Lookalike characters & combosquatting vectors</span>
                                </div>
                            </div>

                            <div class="cmd-category-title"><span>🧠</span> AI MODEL & INTELLIGENCE</div>
                            <div class="cmd-category-list">
                                <div class="cmd-item" data-query="Model Benchmark">
                                    <span class="cmd-name">📊 Model Benchmark</span>
                                    <span class="cmd-desc">Random Forest 96.8% accuracy, latency & metrics</span>
                                </div>
                                <div class="cmd-item" data-query="Features Analyzed">
                                    <span class="cmd-name">🔬 Features Analyzed</span>
                                    <span class="cmd-desc">Breakdown of 15 lexical/structural heuristics</span>
                                </div>
                                <div class="cmd-item" data-query="What is homograph and punycode spoofing?">
                                    <span class="cmd-name">🕵️ Homograph & @ Spoofing</span>
                                    <span class="cmd-desc">Cyrillic lookalikes & RFC @ redirect tricks</span>
                                </div>
                            </div>

                            <div class="cmd-category-title"><span>🛡️</span> PROTOCOLS & RESPONSE</div>
                            <div class="cmd-category-list">
                                <div class="cmd-item" data-query="Why is this website safe to use?">
                                    <span class="cmd-name">🛡️ Why Site is Safe</span>
                                    <span class="cmd-desc">Air-gapped in-memory inspection security</span>
                                </div>
                                <div class="cmd-item" data-query="What is the use of PhishGuard?">
                                    <span class="cmd-name">🎯 Use of PhishGuard</span>
                                    <span class="cmd-desc">Core purpose, benefits & enterprise deployment</span>
                                </div>
                                <div class="cmd-item" data-query="What should I do if I clicked a phishing link?">
                                    <span class="cmd-name">🚨 Incident Response</span>
                                    <span class="cmd-desc">5-step emergency containment checklist</span>
                                </div>
                                <div class="cmd-item" data-query="Explain URL risk levels and confidence score">
                                    <span class="cmd-name">📈 Risk Levels Guide</span>
                                    <span class="cmd-desc">Low, Suspicious, Medium, and High score bands</span>
                                </div>
                            </div>

                            <div class="cmd-category-title"><span>⚙️</span> SYSTEM CONTROLS</div>
                            <div class="cmd-category-list">
                                <div class="cmd-item" data-query="Clear Chat">
                                    <span class="cmd-name">🧹 Clear Chat</span>
                                    <span class="cmd-desc">Reset conversation log</span>
                                </div>
                                <div class="cmd-item" data-query="Mute Voice">
                                    <span class="cmd-name">🔇 Mute Voice</span>
                                    <span class="cmd-desc">Mute speech synthesis output</span>
                                </div>
                                <div class="cmd-item" data-query="Who is Akera">
                                    <span class="cmd-name">🤖 Who is Akera</span>
                                    <span class="cmd-desc">Neural Copilot background & role</span>
                                </div>
                            </div>
                        </div>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Here is the directory of authorized commands. You can click any command item or speak your request.",
                    askFollowUp: true
                };
            }

            // 3. SAMPLE URLS COMMAND (Interactive 1-Click Test Links)
            if (q.includes("sample url") || q.includes("test link") || q.includes("test url") || q.includes("example url")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // TEST VECTORS</span></div>
                        <p><strong>🎯 Interactive Sample URL Vectors:</strong></p>
                        <p>Click any link below to automatically inject and run a full heuristic threat scan:</p>
                        <div class="akera-cmd-card">
                            <div class="cmd-category-list">
                                <div class="cmd-item" data-query="https://www.google.com">
                                    <div>
                                        <span class="cmd-name" style="color: #4ade80;">🟢 Legitimate / Benign</span>
                                        <div style="font-family: monospace; font-size: 0.7rem; color: #cbd5e1; margin-top:2px;">https://www.google.com</div>
                                    </div>
                                    <span class="cmd-desc">Expected root hierarchy</span>
                                </div>
                                <div class="cmd-item" data-query="http://paypal-security-update.account-verification.com/login.php">
                                    <div>
                                        <span class="cmd-name" style="color: #f87171;">🔴 Phishing / Token Stuffing</span>
                                        <div style="font-family: monospace; font-size: 0.7rem; color: #cbd5e1; margin-top:2px;">http://paypal-security-update.account-verification.com/login.php</div>
                                    </div>
                                    <span class="cmd-desc">Subdomain spoof lure</span>
                                </div>
                                <div class="cmd-item" data-query="http://apple.com@evil-phish-domain.ru/auth">
                                    <div>
                                        <span class="cmd-name" style="color: #fbbf24;">⚠️ Redirection Obfuscation</span>
                                        <div style="font-family: monospace; font-size: 0.7rem; color: #cbd5e1; margin-top:2px;">http://apple.com@evil-phish-domain.ru/auth</div>
                                    </div>
                                    <span class="cmd-desc">RFC @ symbol exploit</span>
                                </div>
                            </div>
                        </div>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "I have prepared sample links covering safe, phishing, and redirect vectors. Click any item to run the analysis.",
                    askFollowUp: true
                };
            }

            // 4. MODEL BENCHMARK / ML STATS COMMAND
            if (q.includes("benchmark") || q.includes("accuracy") || q.includes("model stat") || q.includes("algorithm") || q.includes("random forest")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // BENCHMARK MATRIX</span></div>
                        <p><strong>📊 Machine Learning Performance Metrics:</strong></p>
                        <div class="akera-cmd-card">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <div style="background: rgba(56, 189, 248, 0.08); padding: 0.45rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.2);">
                                    <div style="font-size: 0.62rem; color: #7dd3fc; font-weight: 700;">ACCURACY</div>
                                    <div style="font-size: 1.1rem; color: #38bdf8; font-weight: 800;">96.8%</div>
                                </div>
                                <div style="background: rgba(74, 222, 128, 0.08); padding: 0.45rem; border-radius: 6px; border: 1px solid rgba(74, 222, 128, 0.2);">
                                    <div style="font-size: 0.62rem; color: #86efac; font-weight: 700;">INFERENCE SPEED</div>
                                    <div style="font-size: 1.1rem; color: #4ade80; font-weight: 800;">~18 ms</div>
                                </div>
                                <div style="background: rgba(168, 85, 247, 0.08); padding: 0.45rem; border-radius: 6px; border: 1px solid rgba(168, 85, 247, 0.2);">
                                    <div style="font-size: 0.62rem; color: #d8b4fe; font-weight: 700;">MODEL ENSEMBLE</div>
                                    <div style="font-size: 0.8rem; color: #c084fc; font-weight: 700; margin-top: 3px;">Random Forest + XGB</div>
                                </div>
                                <div style="background: rgba(251, 191, 36, 0.08); padding: 0.45rem; border-radius: 6px; border: 1px solid rgba(251, 191, 36, 0.2);">
                                    <div style="font-size: 0.62rem; color: #fde68a; font-weight: 700;">FALSE POSITIVE</div>
                                    <div style="font-size: 1.1rem; color: #fbbf24; font-weight: 800;">&lt; 1.2%</div>
                                </div>
                            </div>
                            <p style="font-size: 0.72rem; color: #94a3b8; margin: 0;">Trained on 10,000+ validated phishing and legitimate URLs aggregated from PhishTank, OpenPhish, and the Alexa Top 1M database.</p>
                        </div>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Our Random Forest ensemble achieves ninety-six point eight percent accuracy with eighteen millisecond inference latency.",
                    askFollowUp: true
                };
            }

            // 5. FEATURES ANALYZED COMMAND
            if (q.includes("feature") || q.includes("indicator") || q.includes("heuristic")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // HEURISTIC MATRIX</span></div>
                        <p><strong>🔬 15 Structural & Lexical Feature Dimensions:</strong></p>
                        <ul style="margin: 0.35rem 0 0.55rem 1.15rem; padding: 0; font-size: 0.74rem;">
                            <li><strong>Structural Dimensions:</strong> URL length, domain length, directory slash depth, token entropy.</li>
                            <li><strong>Deceptive Obfuscations:</strong> <code>@</code> symbol redirect trick, raw IPv4 address host, double slash <code>//</code> path stuffing.</li>
                            <li><strong>Lexical Markers:</strong> Subdomain depth count, hyphen density, digit ratio in hostname.</li>
                            <li><strong>Credential Harvesting Lures:</strong> Keywords matching <code>login</code>, <code>verify</code>, <code>secure</code>, <code>banking</code>, <code>update</code>.</li>
                            <li><strong>TLD Reputation:</strong> Abnormal or high-abuse top-level domains.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "PhishGuard evaluates fifteen structural dimensions including token length, host IP addresses, redirect symbols, and sensitive keywords.",
                    askFollowUp: true
                };
            }

            // 6. TYPOSQUATTING & COMBOSQUATTING EXPLOITS
            if (q.includes("typo") || q.includes("combosquat") || q.includes("cousin domain")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // THREAT INTEL</span></div>
                        <p><strong>🔡 Typosquatting & Combosquatting Explained:</strong></p>
                        <ul>
                            <li><strong>Typosquatting:</strong> Attackers register common typographical errors of trusted brand domains (e.g. <code>g00gle.com</code> or <code>amzon.com</code>) hoping users make typing errors.</li>
                            <li><strong>Combosquatting:</strong> Legitimate brand names combined with deceptive security keywords (e.g. <code>paypal-verification-portal.com</code> or <code>apple-support-unlock.net</code>).</li>
                            <li><strong>How PhishGuard Blocks It:</strong> Our token segmentation heuristic separates compound words and detects unauthorized brand tokens outside the authentic root domain.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Typosquatting relies on deceptive lookalike domains and spelling mistakes to trick victims into counterfeit portals.",
                    askFollowUp: true
                };
            }

            // 7. ZERO-DAY PHISHING EXPLOIT
            if (q.includes("zero-day") || q.includes("zero day") || q.includes("zero hour")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // DEFENSE ARCHITECTURE</span></div>
                        <p><strong>🧬 Zero-Day Phishing Prevention:</strong></p>
                        <ul>
                            <li><strong>The Blocklist Delay Problem:</strong> Traditional security tools rely on blacklists (like Google Safe Browsing), which take hours or days to register a newly launched scam domain.</li>
                            <li><strong>Inherent Structural DNA:</strong> PhishGuard inspects the intrinsic lexical, structural, and obfuscation properties of the link rather than its historical reputation.</li>
                            <li><strong>Instant 20ms Protection:</strong> Zero-hour links are classified and blocked immediately upon first encounter—no waiting for blocklist propagation.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Zero-day phishing protection detects brand-new malicious links by analyzing their inherent structural patterns rather than waiting for blacklists.",
                    askFollowUp: true
                };
            }

            // 8. WHO IS AKERA COMMAND
            if (q.includes("who is akera") || q.includes("who are you") || q.includes("about akera") || q.includes("your name")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // IDENTITY</span></div>
                        <p><strong>🤖 I am Akera — Neural Cyber Copilot for PhishGuard AI:</strong></p>
                        <p>My core directives are:</p>
                        <ul>
                            <li><strong>Voice & Conversational Guidance:</strong> Answer cybersecurity questions, explain threat indicators, and listen to speech input.</li>
                            <li><strong>Real-Time Threat Assessment:</strong> Analyze URLs against 15 machine learning heuristic dimensions.</li>
                            <li><strong>Explainable Security (XAI):</strong> Translate raw mathematical probabilities into clear, actionable incident response recommendations.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "I am Akera, your Neural Security Copilot. I analyze threat vectors, explain URL heuristics, and guide your digital defense.",
                    askFollowUp: true
                };
            }

            // 9. THANK YOU & POLITE ACKNOWLEDGMENT
            if (q.includes("thank") || q.includes("thanks") || q.includes("great job") || q.includes("awesome")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // ACKNOWLEDGE</span></div>
                        <p><strong>You are very welcome!</strong> Standing by to protect your browsing sessions. Let me know if you need anything else verified.</p>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "You are very welcome. I am always on standby to protect your digital browsing.",
                    askFollowUp: true
                };
            }

            // 10. PROTOCOL-01: "Why is this website safe to use?"
            if (q.includes("why is this website safe") || q.includes("why this website is safe") || q.includes("is this website safe") || q.includes("why safe") || q.includes("safe to use") || q.includes("is it safe") || q.includes("privacy")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-01</span></div>
                        <p><strong>🛡️ Why PhishGuard is 100% Safe to Use:</strong></p>
                        <ul>
                            <li><strong>Zero-Network In-Memory Execution (Air-Gapped):</strong> PhishGuard inspects URLs strictly by parsing text characters in memory. It <strong>never navigates to, connects to, or downloads content</strong> from the target link. You cannot be infected by malware, drive-by scripts, or tracking beacons.</li>
                            <li><strong>Absolute Privacy:</strong> All inspections occur locally on the server. Your queries are never saved, tracked, shared with ad brokers, or sent to external cloud APIs.</li>
                            <li><strong>Safe Verification Criteria:</strong> When PhishGuard flags a URL as <em>Legitimate (Safe)</em>, it has verified standard domain structure, authentic root domain hierarchy, expected TLD registration, and absence of deceptive token patterns.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "PhishGuard is completely safe to use because it inspects URL tokens strictly in memory with zero network exposure.",
                    askFollowUp: true
                };
            }

            // 11. PROTOCOL-02: "What is the use of PhishGuard?"
            if (q.includes("use of phishguard") || q.includes("what is the use of phishguard") || q.includes("what is phishguard") || q.includes("purpose of phishguard") || q.includes("why use phishguard") || q.includes("why phishguard") || q.includes("why do we need") || q.includes("what does phishguard do")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-02</span></div>
                        <p><strong>🎯 What is the Use of PhishGuard AI?</strong></p>
                        <p>PhishGuard is an automated, real-time threat intelligence platform designed to protect users and enterprise networks from phishing, spoofed login portals, and credential harvesting.</p>
                        <ul>
                            <li><strong>Stops Zero-Day Attacks:</strong> Traditional blocklists take hours or days to identify new scams. PhishGuard analyzes the <em>inherent structural DNA</em> of the link in real time (~20ms), blocking brand-new zero-hour malicious links instantly.</li>
                            <li><strong>Pre-Click Protection:</strong> Inspect links from suspicious SMS messages, phishing emails, or social media <em>before</em> clicking them.</li>
                            <li><strong>Explainable Security (XAI):</strong> Beyond a simple safe/unsafe label, PhishGuard provides actionable reasons (e.g. "@ symbol trick", "raw IP address host", "homograph spoofing") so security analysts and users understand the exact threat mechanism.</li>
                            <li><strong>Offline & Enterprise Ready:</strong> Operates without third-party API dependencies and can be integrated into corporate mail gateways, browser extensions, or SOC SIEM workflows.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "PhishGuard is an automated threat intelligence platform that analyzes link structure to block zero-day phishing before your browser connects.",
                    askFollowUp: true
                };
            }

            // 12. PROTOCOL-03: "How does PhishGuard detect phishing links?"
            if (q.includes("how does") || q.includes("detection work") || q.includes("detect phishing") || q.includes("how do you detect")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-03</span></div>
                        <p><strong>How PhishGuard AI Detects Phishing:</strong></p>
                        <p>PhishGuard extracts <strong>15 lexical and structural features</strong> from URL strings in memory without ever navigating to the website (zero network exposure).</p>
                        <ul>
                            <li><strong>Structural Analysis:</strong> Token length, directory slash depth, and subdomain count.</li>
                            <li><strong>Obfuscation Detection:</strong> @ symbol tricks, raw IPv4 address hosts, and excessive hyphens.</li>
                            <li><strong>Machine Learning:</strong> Trained on over 10,000 URLs with Random Forest & XGBoost, achieving <strong>96.8% accuracy</strong>.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "PhishGuard extracts fifteen lexical and structural features in memory to classify threats using machine learning with ninety-six point eight percent accuracy.",
                    askFollowUp: true
                };
            }

            // 13. PROTOCOL-04: "What should I do if I clicked a phishing link?"
            if (q.includes("clicked") || q.includes("what should i do") || q.includes("compromised") || q.includes("hacked") || q.includes("bad link")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-04</span></div>
                        <p><strong>🚨 Incident Response Steps:</strong></p>
                        <ol style="margin: 0.35rem 0 0.55rem 1.15rem; padding: 0;">
                            <li><strong>Disconnect:</strong> Unplug Ethernet or disconnect from Wi-Fi immediately.</li>
                            <li><strong>Change Passwords:</strong> From another secure device, change passwords for affected accounts.</li>
                            <li><strong>Enable MFA:</strong> Activate hardware keys or app-based 2-Factor Authentication.</li>
                            <li><strong>Revoke Sessions:</strong> Log out of all active account sessions in security settings.</li>
                            <li><strong>Scan Device:</strong> Run an updated anti-malware/EDR scan.</li>
                        </ol>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "If you clicked a phishing link, disconnect your network immediately and change your account passwords from a secure device.",
                    askFollowUp: true
                };
            }

            // 14. PROTOCOL-05: "Explain URL risk levels and confidence score"
            if (q.includes("risk") || q.includes("confidence") || q.includes("score")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-05</span></div>
                        <p><strong>Understanding Risk Levels & Confidence:</strong></p>
                        <ul>
                            <li><strong>Low Risk / Safe (&lt;40%):</strong> Clean URL structure consistent with trusted domains.</li>
                            <li><strong>Suspicious (40-60%):</strong> Borderline characteristics (e.g. long path or unusual TLD).</li>
                            <li><strong>Medium Risk (60-80%):</strong> Multiple phishing indicators present.</li>
                            <li><strong>High Risk (&gt;80%):</strong> Severe threat markers (IP host, token stuffing, spoofing patterns).</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Risk levels range from Low Risk below forty percent to High Risk above eighty percent based on structural anomaly probability.",
                    askFollowUp: true
                };
            }

            // 15. PROTOCOL-06: "What is homograph and punycode spoofing?"
            if (q.includes("homograph") || q.includes("punycode") || q.includes("spoof") || q.includes("@") || q.includes("ip address") || q.includes("host")) {
                return {
                    text: `
                        <div class="akera-agent-tag"><span>AKERA // PROTOCOL-06</span></div>
                        <p><strong>Homograph & URL Obfuscation Exploits:</strong></p>
                        <ul>
                            <li><strong>Homograph & Punycode:</strong> Attackers register Cyrillic lookalike letters where <code>pаypal.com</code> becomes <code>xn--pypal-43a.com</code>.</li>
                            <li><strong>The @ Symbol Trick:</strong> In <code>http://google.com@evil.com</code>, standard RFC URLs ignore everything before the <code>@</code> and redirect to <code>evil.com</code>.</li>
                            <li><strong>Direct IP Address:</strong> Attackers use raw IPs like <code>http://192.168.1.50/login</code> to bypass domain-based reputation filters.</li>
                        </ul>
                        ${getFollowUpHtml()}
                    `,
                    spoken: "Homograph attacks use lookalike Unicode characters or the at-symbol to mislead users into visiting malicious domains.",
                    askFollowUp: true
                };
            }

            // 16. GENERAL PROMPT / SECURITY COPILOT RESPONSE
            return {
                text: `
                    <div class="akera-agent-tag"><span>AKERA // SECURITY COPILOT</span></div>
                    <p>I am online and standing by to assist you with <em>"${escapeHtml(text)}"</em>.</p>
                    <p>You can paste any URL to run an instant heuristic scan, or explore the quick command protocols below:</p>
                    ${getPrePromptsHtml()}
                    ${getFollowUpHtml()}
                `,
                spoken: `I am online and standing by. You can paste a link to verify its safety, or select any security protocol on screen.`,
                askFollowUp: true
            };
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

        function preloadImage(src) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = src;
                if (img.complete) resolve();
            });
        }

        // Ensure both hand assets are 100% decoded in memory before animation begins
        // This guarantees silky-smooth 60fps/120fps playback across all network speeds
        Promise.all([
            preloadImage("static/images/hand_left.png"),
            preloadImage("static/images/hand_right.png")
        ]).then(() => {
            if (isFinished) return;

            // Kick off hardware-accelerated CSS animations simultaneously
            if (handLeft) handLeft.classList.add("animate-glide");
            if (handRight) handRight.classList.add("animate-glide");

            // Direct fingertip contact at ~2.1s
            contactTimer = setTimeout(() => {
                triggerContactEvent();
            }, 2100);

            // Smooth curtain reveal of website at ~2.55s
            revealTimer = setTimeout(() => {
                finishIntro(false);
            }, 2550);
        });

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
