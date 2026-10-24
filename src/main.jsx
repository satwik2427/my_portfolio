import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles, Torus, Sphere, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Cpu, CircuitBoard, Code2, Github, Linkedin, Instagram, Mail, Menu, X, ExternalLink, Radio, Microchip, Zap, Wrench, ChevronRight } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Sree Satwik Cherukumudi',
  shortName: 'SATWIK',
  role: 'MULTIDISCIPLINARY ENGINEER',
  intro: 'Exploring hardware, software, embedded systems, and intelligent technologies to turn ideas into working solutions.',
  email: 'ch.sreesatwik@gmail.com',
  phone: '+91 9392650525',
  github: 'https://github.com/satwik2427',
  linkedin: 'https://www.linkedin.com/in/cherukumudi-satwik-404227366/',
  instagram: 'https://www.instagram.com/sreesatwik__cherukumudi/',
};

const projects = [
  {
    number: '01',
    title: 'Intelligent 360° Car Surveillance',
    category: 'ONGOING · EMBEDDED / COMPUTER VISION',
    description: 'A multi-camera surveillance concept for a vehicle, exploring 360-degree monitoring and intelligent event detection. Hardware assembly is currently in progress.',
    tags: ['Raspberry Pi', 'Computer Vision', 'IR Night Vision', 'Multi-camera'],
    status: 'IN PROGRESS',
    icon: Radio,
    color: 'blue'
  },
  {
    number: '02',
    title: 'Bluetooth Smart Door Lock',
    category: 'EMBEDDED SYSTEMS',
    description: 'A smartphone-controlled door locking system using Arduino and an HC-05 Bluetooth module, with wireless access control and an electromagnetic lock.',
    tags: ['Arduino', 'HC-05', 'Bluetooth', 'Electronics'],
    status: 'PROJECT',
    icon: CircuitBoard,
    color: 'orange'
  },
  {
    number: '03',
    title: 'Automatic Irrigation System',
    category: 'AUTOMATION',
    description: 'An Arduino-based irrigation prototype that reads soil moisture and activates a water pump when the soil requires watering.',
    tags: ['Arduino', 'Soil Sensor', 'Automation'],
    status: 'PROJECT',
    icon: Zap,
    color: 'blue'
  },
  {
    number: '04',
    title: 'Smart Medical Dispenser',
    category: 'ASSISTIVE TECHNOLOGY',
    description: 'A compartment-based medication dispenser concept designed to support scheduled medicine routines and reminders.',
    tags: ['Embedded Systems', 'RTC', 'Notifications'],
    status: 'PROJECT',
    icon: Cpu,
    color: 'orange'
  },
  {
    number: '05',
    title: 'Weather Monitoring System',
    category: 'SENSOR SYSTEMS',
    description: 'An Arduino Uno, DHT11 and OLED-based system for collecting and displaying temperature and humidity readings.',
    tags: ['Arduino Uno', 'DHT11', 'OLED', 'Sensors'],
    status: 'PROJECT',
    icon: Radio,
    color: 'blue'
  }
];

const skillGroups = [
  {
    title: 'ELECTRONICS & HARDWARE',
    icon: Wrench,
    items: ['Electronics fundamentals', 'Soldering', 'Microcontrollers', 'Circuit prototyping']
  },
  {
    title: 'EMBEDDED & DIGITAL',
    icon: Microchip,
    items: ['Arduino', 'Verilog', 'Embedded networking', 'Controller systems']
  },
  {
    title: 'TOOLS & SIMULATION',
    icon: Code2,
    items: ['Arduino IDE', 'Keil µVision', 'MATLAB', 'Multisim', 'LabVIEW', 'Solid Edge', 'VS Code']
  },
  {
    title: 'PROGRAMMING',
    icon: Cpu,
    items: ['C', 'Python basics', 'Data Science with Python']
  }
];

function ChipScene() {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.09;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        {/* Outer chip layer */}
        <mesh rotation={[0.18, 0.25, 0]}>
          <boxGeometry args={[2.15, 2.15, 0.22]} />
          <meshStandardMaterial
            color="#101925"
            metalness={0.8}
            roughness={0.28}
          />
        </mesh>

        {/* Middle chip layer */}
        <mesh position={[0, 0, 0.15]} rotation={[0.18, 0.25, 0]}>
          <boxGeometry args={[1.52, 1.52, 0.14]} />
          <meshStandardMaterial
            color="#0b111b"
            metalness={0.7}
            roughness={0.25}
            emissive="#073b68"
            emissiveIntensity={0.55}
          />
        </mesh>

        {/* Central chip layer */}
        <mesh position={[0, 0, 0.25]}>
          <boxGeometry args={[0.85, 0.85, 0.18]} />
          <meshStandardMaterial
            color="#111d2b"
            metalness={0.7}
            roughness={0.2}
            emissive="#0879cf"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* SATWIK text on the front of the chip */}
        <Text
          position={[0, 0, 0.347]}
          fontSize={0.105}
          letterSpacing={0.075}
          anchorX="center"
          anchorY="middle"
          color="#eaf7ff"
          outlineColor="#168ce8"
          outlineWidth={0.002}
          renderOrder={2}
        >
          SATWIK
          <meshBasicMaterial
            color="#eaf7ff"
            toneMapped={false}
          />
        </Text>

        {/* Chip pins */}
        {Array.from({ length: 8 }).map((_, i) => (
          <group key={i} rotation={[0, 0, i * Math.PI / 4]}>
            <mesh position={[0, 0.85, 0.2]}>
              <boxGeometry args={[0.07, 0.45, 0.05]} />
              <meshStandardMaterial
                color={i % 2 ? '#ff7a35' : '#21a8ff'}
                emissive={i % 2 ? '#ff5b18' : '#087dff'}
                emissiveIntensity={1.2}
              />
            </mesh>

            <mesh position={[0, 1.14, 0.13]}>
              <boxGeometry args={[0.1, 0.13, 0.05]} />
              <meshStandardMaterial
                color="#a9c6dc"
                metalness={0.8}
              />
            </mesh>
          </group>
        ))}

        {/* Blue and orange decorative rings */}
        <Torus
          args={[1.62, 0.008, 8, 100]}
          rotation={[0.18, 0.25, 0]}
        >
          <meshBasicMaterial
            color="#168ce8"
            transparent
            opacity={0.6}
          />
        </Torus>

        <Torus
          args={[1.86, 0.004, 8, 100]}
          rotation={[0.4, 0.1, 0.2]}
        >
          <meshBasicMaterial
            color="#ff7838"
            transparent
            opacity={0.5}
          />
        </Torus>

        <Sphere args={[0.055, 16, 16]} position={[1.35, 0.9, 0.5]}>
          <meshBasicMaterial color="#ff7a35" />
        </Sphere>
      </Float>
    </group>
  );
}

function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[3, 3, 4]} intensity={35} color="#178fff" />
      <pointLight position={[-3, -2, 2]} intensity={16} color="#ff7135" />

      <ChipScene />

      <Sparkles
        count={55}
        scale={5.5}
        size={2.1}
        speed={0.25}
        color="#56b8ff"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.55}
      />
    </Canvas>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Journey', '#journey'],
    ['Contact', '#contact']
  ];

  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-mark">S<span>.</span></span>
        <span className="brand-name">
          SATWIK<span> / ENGINEER</span>
        </span>
      </a>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-cta"
          href="#contact"
          onClick={() => setOpen(false)}
        >
          Let's connect <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} <em>{accent}</em>
      </h2>
    </div>
  );
}

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="status-dot" />
              ECE UNDERGRADUATE · CLASS OF 2027
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Building at the<br />
              <span>edge of</span> <em>hardware.</em>
            </motion.h1>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              {profile.intro}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>

              <a className="button button-ghost" href="#contact">
                Get in touch
              </a>
            </motion.div>

            <div className="hero-meta">
              <span><b>01</b> HARDWARE</span>
              <span><b>02</b> EMBEDDED</span>
              <span><b>03</b> EXPLORATION</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-label label-top">
              <span></span>
              <span>3D INTERACTIVE</span>
            </div>

            <div className="chip-canvas">
              <HeroCanvas />
            </div>

            <div className="visual-coordinates">
              12° 58' N&nbsp; / &nbsp;77° 35' E
              <span>•&nbsp; BENGALURU, IN</span>
            </div>

            <div className="visual-note">
              <span className="note-line" />
              <span>Curiosity, engineered.</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={15} />
          </a>
        </section>

        {/* CURRENT FOCUS */}
        <section className="intro-strip">
          <div className="strip-label">CURRENT FOCUS</div>

          <div className="strip-content">
            <span>Embedded systems</span>
            <i>✳</i>
            <span>Microcontrollers</span>
            <i>✳</i>
            <span>Digital design / VLSI</span>
            <i>✳</i>
            <span>Hardware prototyping</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="section-wrap content-section about-section"
          id="about"
        >
          <div className="about-aside">
            <span className="eyebrow">01 / A LITTLE ABOUT ME</span>

            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <span className="portrait-initials">SS</span>
                <span className="portrait-caption">ENGINEER IN PROGRESS</span>
              </div>

              <div className="portrait-corner top-left" />
              <div className="portrait-corner bottom-right" />
            </div>

            <p className="portrait-note">
              Curious by nature. Hands-on by choice.
            </p>
          </div>

          <div className="about-copy">
            <SectionHeading
              eyebrow="THE PERSON BEHIND THE PROJECTS"
              title="Engineering is where"
              accent="ideas get real."
            />

            <p>
              I'm Sree Satwik Cherukumudi, an Electronics and Communication
              Engineering student at CMR Institute of Technology, Bengaluru.
              I enjoy working close to the hardware—understanding circuits,
              soldering components, experimenting with controllers, and
              exploring how intelligent systems can solve practical problems.
            </p>

            <p>
              My interests span embedded applications, digital design, and
              software. I like learning by building, testing, and improving—one
              working prototype at a time.
            </p>

            <div className="about-facts">
              <div>
                <span>01</span>
                <b>ECE</b>
                <small>CLASS OF 2027</small>
              </div>

              <div>
                <span>02</span>
                <b>Hands-on</b>
                <small>HARDWARE MINDSET</small>
              </div>

              <div>
                <span>03</span>
                <b>Curious</b>
                <small>MULTIDISCIPLINARY</small>
              </div>
            </div>

            <a className="text-link" href="#journey">
              Explore my journey <ChevronRight size={16} />
            </a>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <SectionHeading
              eyebrow="02 / TOOLKIT"
              title="Things I work"
              accent="with."
            />

            <p className="section-lede">
              A growing toolkit across physical circuits, embedded logic, and
              the software that brings systems to life.
            </p>

            <div className="skill-grid">
              {skillGroups.map((g, i) => {
                const Icon = g.icon;

                return (
                  <motion.article
                    className="skill-card"
                    key={g.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="skill-card-top">
                      <span className="skill-icon">
                        <Icon size={19} />
                      </span>

                      <span className="skill-number">0{i + 1}</span>
                    </div>

                    <h3>{g.title}</h3>

                    <div className="skill-pills">
                      {g.items.map(s => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <p className="small-note">
              Skills shown are based on the supplied resume and stated
              interests. Proficiency levels are intentionally not invented.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="section-wrap content-section projects-section"
          id="projects"
        >
          <SectionHeading
            eyebrow="03 / SELECTED WORK"
            title="Built to solve"
            accent="real problems."
          />

          <div className="projects-intro">
            <p>
              From connected hardware to environmental sensing, each project
              is a chance to turn an idea into something tangible.
            </p>

            <span>05 PROJECTS / 01 IN PROGRESS</span>
          </div>

          <div className="project-list">
            {projects.map((p, i) => {
              const Icon = p.icon;

              return (
                <motion.article
                  className={`project-row ${p.color}`}
                  key={p.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <div className="project-number">{p.number}</div>

                  <div className="project-symbol">
                    <Icon size={27} />
                    <span className="symbol-ring" />
                  </div>

                  <div className="project-main">
                    <span className="eyebrow">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>

                    <div className="project-tags">
                      {p.tags.map(t => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-status">
                    {p.status}
                    <span />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section className="journey-section" id="journey">
          <div className="section-wrap content-section">
            <SectionHeading
              eyebrow="04 / THE JOURNEY"
              title="Learning by"
              accent="doing."
            />

            <div className="journey-grid">
              <div className="journey-block">
                <span className="eyebrow">EDUCATION</span>

                <div className="timeline-item">
                  <span className="timeline-dot" />

                  <div>
                    <small>2023 — 2027 · PURSUING</small>
                    <h3>B.E. Electronics & Communication Engineering</h3>
                    <p>CMR Institute of Technology · Bengaluru</p>
                    <span className="metric">
                      CGPA <b>7.5</b>
                    </span>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot orange-dot" />

                  <div>
                    <small>2021 — 2023</small>
                    <h3>12th Grade</h3>
                    <p>Viswasai Junior College · Nellore</p>
                    <span className="metric">
                      SCORE <b>94.7%</b>
                    </span>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot" />

                  <div>
                    <small>2021</small>
                    <h3>10th Grade</h3>
                    <p>Sanghamitra Vidyalayam · Nellore</p>
                  </div>
                </div>
              </div>

              <div className="journey-block">
                <span className="eyebrow">CERTIFICATIONS & BEYOND</span>

                <div className="achievement-card">
                  <span className="achievement-icon">✳</span>

                  <div>
                    <h3>VTU Taekwondo Tournament</h3>
                    <p>Secured 3rd prize · 2026</p>
                  </div>
                </div>

                <div className="achievement-card">
                  <span className="achievement-icon orange">↗</span>

                  <div>
                    <h3>VTU Karate Tournament</h3>
                    <p>Participant · 2025</p>
                  </div>
                </div>

                <div className="cert-list">
                  <h3>Courses & certifications</h3>
                  <p>Python Basics · Coursera</p>
                  <p>Data Science with Python · Great Learning</p>
                  <p>Embedded Networking · Udemy</p>
                </div>

                <div className="club-note">
                  <span className="eyebrow">LEADERSHIP</span>
                  <p>
                    Coordinator, Higher Studies Club — supported event
                    organization and student engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="eyebrow">05 / OPEN CHANNEL</span>

            <h2>
              Have a project<br />
              in <em>mind?</em>
            </h2>

            <p>
              I'm always interested in learning, collaborating, and building
              something useful. Let's connect.
            </p>

            <div className="contact-actions">
              <button
                className="button button-primary"
                onClick={copyEmail}
              >
                <Mail size={16} />
                {copied ? 'Email copied!' : 'Copy email address'}
              </button>

              <a className="button button-ghost" href={`mailto:${profile.email}`}>
                Send an email <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ExternalLink size={12} />
              </a>

              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={17} /> LinkedIn <ExternalLink size={12} />
              </a>

              <a href={profile.instagram} target="_blank" rel="noreferrer">
                <Instagram size={17} /> Instagram <ExternalLink size={12} />
              </a>
            </div>

            <div className="contact-email">{profile.email}</div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">
            SATWIK<span> / ENGINEER</span>
          </span>
        </a>

        <span>
          DESIGNED WITH CURIOSITY · © {new Date().getFullYear()} SATWIK
        </span>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
