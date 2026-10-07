'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

/* ==========================================================================
   Studio-rendered 3D objects for the landing page.
   Each variant is a small physically-based scene: obsidian, chrome and glass
   lit by a room environment, animated only while on screen.
   ========================================================================== */

function createMaterials() {
  return {
    obsidian: new THREE.MeshPhysicalMaterial({
      color: 0x0c0c10,
      metalness: 0.35,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
    }),
    chrome: new THREE.MeshPhysicalMaterial({
      color: 0xdfe3ea,
      metalness: 1,
      roughness: 0.1,
    }),
    satin: new THREE.MeshPhysicalMaterial({
      color: 0x9aa0aa,
      metalness: 1,
      roughness: 0.34,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.04,
      transmission: 1,
      thickness: 0.9,
      ior: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      attenuationColor: new THREE.Color(0xc9d4ff),
      attenuationDistance: 2.5,
    }),
    glow: new THREE.MeshBasicMaterial({
      color: 0xe8edff,
      transparent: true,
      opacity: 0.9,
    }),
  };
}

/* ---------- Variant builders ---------- */

// Hero — three floating slabs: the layered stack we build for every client.
function buildStack(mats) {
  const group = new THREE.Group();
  const slabGeo = new RoundedBoxGeometry(2.5, 0.34, 2.5, 6, 0.14);
  const layers = [mats.glass, mats.satin, mats.obsidian].map((mat) => {
    const m = new THREE.Mesh(slabGeo, mat);
    group.add(m);
    return m;
  });

  // Thin light planes glowing between the slabs
  const lightGeo = new THREE.PlaneGeometry(2.1, 2.1);
  const lights = [0, 1].map(() => {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xdfe6ff,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const p = new THREE.Mesh(lightGeo, mat);
    p.rotation.x = -Math.PI / 2;
    group.add(p);
    return p;
  });

  // Chrome bead hovering above the stack
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.22, 48, 48), mats.chrome);
  group.add(bead);

  group.rotation.set(0.52, -0.62, 0);

  return {
    group,
    camZ: 9,
    update(t) {
      const gap = 0.62 + Math.sin(t * 0.9) * 0.14;
      layers.forEach((m, i) => {
        m.position.y = (1 - i) * gap;
        m.rotation.y = Math.sin(t * 0.35 + i * 0.6) * 0.08;
      });
      lights.forEach((p, i) => {
        p.position.y = (0.5 - i) * gap;
        p.material.opacity = 0.18 + (Math.sin(t * 1.6 + i * 1.4) * 0.5 + 0.5) * 0.3;
      });
      bead.position.y = gap + 0.75 + Math.sin(t * 1.3) * 0.08;
      group.rotation.y = -0.62 + t * 0.12;
    },
  };
}

// Websites — a floating browser window with cards lifting off the screen.
function buildBrowser(mats) {
  const group = new THREE.Group();
  const frame = new THREE.Mesh(new RoundedBoxGeometry(3.0, 2.05, 0.14, 4, 0.06), mats.obsidian);
  group.add(frame);

  const bar = new THREE.Mesh(new RoundedBoxGeometry(2.86, 0.06, 0.02, 2, 0.01), mats.satin);
  bar.position.set(0, 0.74, 0.08);
  group.add(bar);

  const dotGeo = new THREE.SphereGeometry(0.045, 24, 24);
  [-1.3, -1.17, -1.04].forEach((x) => {
    const d = new THREE.Mesh(dotGeo, mats.chrome);
    d.position.set(x, 0.88, 0.09);
    group.add(d);
  });

  const cards = [
    { w: 1.6, h: 0.5, x: -0.5, y: 0.35, mat: mats.glass },
    { w: 0.95, h: 0.95, x: 0.82, y: 0.12, mat: mats.satin },
    { w: 0.78, h: 0.5, x: -0.9, y: -0.42, mat: mats.chrome },
    { w: 0.78, h: 0.5, x: -0.05, y: -0.42, mat: mats.obsidian },
  ].map((c, i) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(c.w, c.h, 0.08, 3, 0.04), c.mat);
    m.position.set(c.x, c.y, 0.12);
    m.userData.phase = i * 0.9;
    group.add(m);
    return m;
  });

  group.rotation.set(0.12, -0.42, 0.02);

  return {
    group,
    camZ: 6.4,
    update(t) {
      cards.forEach((m) => {
        m.position.z = 0.14 + (Math.sin(t * 1.1 + m.userData.phase) * 0.5 + 0.5) * 0.32;
      });
      group.rotation.y = -0.42 + Math.sin(t * 0.4) * 0.12;
      group.position.y = Math.sin(t * 0.8) * 0.06;
    },
  };
}

// Custom software — a grid of modules rising and settling in waves.
function buildModules(mats) {
  const group = new THREE.Group();
  const geo = new RoundedBoxGeometry(0.62, 0.62, 0.62, 4, 0.08);
  const cubes = [];
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      let mat = mats.obsidian;
      if (x === 1 && z === -1) mat = mats.chrome;
      if (x === -1 && z === 1) mat = mats.glass;
      if (x === 0 && z === 0) mat = mats.satin;
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x * 0.74, 0, z * 0.74);
      m.userData.phase = (x + 1) * 0.7 + (z + 1) * 0.45;
      group.add(m);
      cubes.push(m);
    }
  }
  group.rotation.set(0.6, Math.PI / 4, 0);

  return {
    group,
    camZ: 6.2,
    update(t) {
      cubes.forEach((m) => {
        const s = Math.max(0, Math.sin(t * 1.15 - m.userData.phase));
        m.position.y = Math.pow(s, 3) * 0.55;
      });
      group.rotation.y = Math.PI / 4 + t * 0.15;
    },
  };
}

// AI — a faceted glass shell around a rotating chrome core, with orbits.
function buildCore(mats) {
  const group = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3, 0), mats.glass);
  group.add(shell);

  const coreMat = mats.chrome.clone();
  coreMat.flatShading = true;
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.62, 0), coreMat);
  group.add(core);

  const orbits = [0.4, -0.9].map((tilt, i) => {
    const pivot = new THREE.Group();
    pivot.rotation.set(Math.PI / 2 + tilt, 0, i * 0.8);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.008, 12, 160), mats.satin);
    pivot.add(ring);
    const sat = new THREE.Mesh(new THREE.SphereGeometry(0.075, 24, 24), mats.glow);
    pivot.add(sat);
    group.add(pivot);
    return { sat, speed: i === 0 ? 0.7 : -0.5, offset: i * 2 };
  });

  return {
    group,
    // The orbit rings (r = 1.9) swing toward the camera; leave room so they never clip.
    camZ: 8.8,
    update(t) {
      shell.rotation.set(t * 0.15, t * 0.22, 0);
      core.rotation.set(-t * 0.4, -t * 0.55, 0);
      orbits.forEach((o) => {
        const a = t * o.speed + o.offset;
        o.sat.position.set(Math.cos(a) * 1.9, Math.sin(a) * 1.9, 0);
      });
    },
  };
}

function gearShape(teeth, rRoot, rTip, holeR) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pts = [
      [rRoot, a],
      [rRoot, a + step * 0.15],
      [rTip, a + step * 0.3],
      [rTip, a + step * 0.55],
      [rRoot, a + step * 0.7],
    ];
    pts.forEach(([r, ang], j) => {
      const x = r * Math.cos(ang);
      const y = r * Math.sin(ang);
      if (i === 0 && j === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
  }
  shape.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, holeR, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

// Automation — two gears meshing in perfect sync.
function buildGears(mats) {
  const group = new THREE.Group();
  const extrude = { depth: 0.26, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 3, curveSegments: 24 };

  const n1 = 14;
  const n2 = 9;
  const p1 = 1.05;
  const p2 = (p1 * n2) / n1;
  const depth = 0.17;

  const g1Geo = new THREE.ExtrudeGeometry(gearShape(n1, p1 - depth / 2, p1 + depth / 2, 0.3), extrude);
  const g2Geo = new THREE.ExtrudeGeometry(gearShape(n2, p2 - depth / 2, p2 + depth / 2, 0.2), extrude);
  g1Geo.center();
  g2Geo.center();

  const g1 = new THREE.Mesh(g1Geo, mats.satin);
  const g2 = new THREE.Mesh(g2Geo, mats.obsidian);

  const phi = 0.35; // direction from gear 1 to gear 2
  const dist = p1 + p2 + 0.03;
  g1.position.set(-dist * Math.cos(phi) * 0.42, -dist * Math.sin(phi) * 0.42, 0);
  g2.position.set(g1.position.x + dist * Math.cos(phi), g1.position.y + dist * Math.sin(phi), 0);

  const axleGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.5, 32);
  [g1, g2].forEach((g) => {
    const axle = new THREE.Mesh(axleGeo, mats.chrome);
    axle.rotation.x = Math.PI / 2;
    axle.position.copy(g.position);
    group.add(axle);
    group.add(g);
  });

  // Phase so a tooth of gear 1 sits in a gap of gear 2 along the contact line
  const s1 = (Math.PI * 2) / n1;
  const s2 = (Math.PI * 2) / n2;
  const theta1At = phi - 0.425 * s1;
  const theta2At = phi + Math.PI - 0.925 * s2;
  const c = theta2At + theta1At * (n1 / n2);

  group.rotation.set(-0.45, 0.5, 0.05);

  return {
    group,
    camZ: 6.9,
    update(t) {
      const th1 = t * 0.45;
      g1.rotation.z = th1;
      g2.rotation.z = -th1 * (n1 / n2) + c;
      group.rotation.y = 0.5 + Math.sin(t * 0.35) * 0.15;
    },
  };
}

// Donna — a liquid chrome voice orb with sound rings rippling outward.
function buildVoiceOrb(mats) {
  const group = new THREE.Group();
  const geo = new THREE.SphereGeometry(1.05, 96, 96);
  const base = geo.attributes.position.array.slice();
  const orb = new THREE.Mesh(geo, mats.chrome);
  group.add(orb);

  const rings = [0, 1, 2].map((i) => {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xdfe6ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const r = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.006, 8, 200), mat);
    r.userData.offset = i / 3;
    group.add(r);
    return r;
  });

  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.02, 16, 200), mats.glass);
  group.add(halo);

  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  const n = new THREE.Vector3();

  return {
    group,
    camZ: 9.6,
    update(t) {
      // Speech envelope: bursts of talking with pauses
      const env = Math.max(0, Math.sin(t * 0.9)) * (0.6 + 0.4 * Math.sin(t * 7.3)) * (0.7 + 0.3 * Math.sin(t * 13.1));
      const amp = 0.015 + env * 0.07;
      for (let i = 0; i < pos.count; i++) {
        v.set(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]);
        n.copy(v).normalize();
        const d = Math.sin(n.x * 4 + t * 3.1) * Math.sin(n.y * 5 + t * 2.3) * Math.sin(n.z * 3 + t * 1.7);
        v.addScaledVector(n, d * amp);
        pos.setXYZ(i, v.x, v.y, v.z);
      }
      pos.needsUpdate = true;
      geo.computeVertexNormals();

      rings.forEach((r) => {
        const p = (t * 0.45 + r.userData.offset) % 1;
        r.scale.setScalar(1 + p * 1.1);
        r.material.opacity = (1 - p) * (0.25 + env * 0.6);
      });
      halo.rotation.set(Math.PI / 2 + Math.sin(t * 0.5) * 0.35, Math.cos(t * 0.4) * 0.3, 0);
      orb.rotation.y = t * 0.2;
    },
  };
}

// Final CTA — a glass ring refracting a chrome sphere.
function buildRing(mats) {
  const group = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.42, 64, 200), mats.glass);
  group.add(ring);
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.55, 64, 64), mats.chrome);
  group.add(sphere);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.012, 12, 220), mats.satin);
  group.add(inner);

  return {
    group,
    camZ: 10,
    update(t) {
      ring.rotation.set(0.9 + Math.sin(t * 0.3) * 0.25, t * 0.25, 0);
      inner.rotation.set(-0.5 + Math.cos(t * 0.25) * 0.2, -t * 0.12, 0.3);
      sphere.position.y = Math.sin(t * 0.9) * 0.12;
    },
  };
}


// Mobile apps — a phone with interface cards floating off its screen.
function buildPhone(mats) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(new RoundedBoxGeometry(1.3, 2.6, 0.14, 6, 0.2), mats.obsidian);
  group.add(body);
  const screen = new THREE.Mesh(new RoundedBoxGeometry(1.16, 2.44, 0.02, 4, 0.16), mats.satin);
  screen.position.z = 0.07;
  screen.material = screen.material.clone();
  screen.material.color = new THREE.Color(0x2a2c33);
  screen.material.roughness = 0.2;
  group.add(screen);
  const notch = new THREE.Mesh(new RoundedBoxGeometry(0.34, 0.08, 0.02, 2, 0.04), mats.obsidian);
  notch.position.set(0, 1.1, 0.09);
  group.add(notch);

  const cards = [
    { w: 0.96, h: 0.5, y: 0.62, mat: mats.glass },
    { w: 0.96, h: 0.34, y: 0.08, mat: mats.chrome },
    { w: 0.44, h: 0.44, y: -0.45, x: -0.26, mat: mats.satin },
    { w: 0.44, h: 0.44, y: -0.45, x: 0.26, mat: mats.obsidian },
  ].map((c, i) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(c.w, c.h, 0.06, 3, 0.05), c.mat);
    m.position.set(c.x || 0, c.y, 0.12);
    m.userData.phase = i * 0.8;
    group.add(m);
    return m;
  });

  group.rotation.set(0.1, -0.5, 0.08);

  return {
    group,
    camZ: 7.2,
    update(t) {
      cards.forEach((m) => {
        m.position.z = 0.12 + (Math.sin(t * 1.2 + m.userData.phase) * 0.5 + 0.5) * 0.4;
      });
      group.rotation.y = -0.5 + Math.sin(t * 0.45) * 0.25;
      group.position.y = Math.sin(t * 0.8) * 0.06;
    },
  };
}

// Enterprise systems — rack units sliding in and out, status lights blinking.
function buildServer(mats) {
  const group = new THREE.Group();
  const unitGeo = new RoundedBoxGeometry(2.6, 0.34, 1.7, 4, 0.06);
  const ledGeo = new THREE.BoxGeometry(0.22, 0.04, 0.02);
  const units = [0, 1, 2, 3].map((i) => {
    const u = new THREE.Group();
    u.add(new THREE.Mesh(unitGeo, i === 1 ? mats.satin : mats.obsidian));
    const leds = [0, 1, 2].map((k) => {
      const mat = new THREE.MeshBasicMaterial({ color: 0xe8edff, transparent: true, opacity: 0.6 });
      const led = new THREE.Mesh(ledGeo, mat);
      led.position.set(-1.0 + k * 0.3, 0, 0.86);
      u.add(led);
      return led;
    });
    const grill = new THREE.Mesh(new RoundedBoxGeometry(1.1, 0.16, 0.02, 2, 0.02), mats.chrome);
    grill.position.set(0.6, 0, 0.86);
    u.add(grill);
    u.position.y = (1.5 - i) * 0.44;
    u.userData = { leds, phase: i * 1.3 };
    group.add(u);
    return u;
  });
  group.rotation.set(0.42, -0.6, 0);

  return {
    group,
    camZ: 8.4,
    update(t) {
      units.forEach((u) => {
        const s = Math.max(0, Math.sin(t * 0.8 - u.userData.phase));
        u.position.z = Math.pow(s, 4) * 0.5;
        u.userData.leds.forEach((l, k) => {
          l.material.opacity = 0.25 + (Math.sin(t * (3 + k) + u.userData.phase * 2) > 0.2 ? 0.7 : 0);
        });
      });
      group.rotation.y = -0.6 + Math.sin(t * 0.35) * 0.18;
    },
  };
}

// Industries / locations — a glass globe with meridians and live points.
function buildGlobe(mats) {
  const group = new THREE.Group();
  const globe = new THREE.Group();
  group.add(globe);
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(1.25, 64, 64), mats.glass));
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.42, 48, 48), mats.chrome);
  globe.add(core);
  const lineGeo = new THREE.TorusGeometry(1.32, 0.006, 8, 200);
  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(lineGeo, mats.satin);
    m.rotation.y = (i / 4) * Math.PI;
    globe.add(m);
  }
  [-0.6, 0, 0.6].forEach((y) => {
    const r = Math.sqrt(1.32 * 1.32 - y * y);
    const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.006, 8, 200), mats.satin);
    m.rotation.x = Math.PI / 2;
    m.position.y = y;
    globe.add(m);
  });
  const dotGeo = new THREE.SphereGeometry(0.05, 16, 16);
  const dots = [];
  for (let i = 0; i < 14; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / 14);
    const theta = i * 2.39996;
    const d = new THREE.Mesh(dotGeo, mats.glow.clone());
    d.position.setFromSphericalCoords(1.34, phi, theta);
    d.userData.phase = i * 0.7;
    globe.add(d);
    dots.push(d);
  }
  const orbit = new THREE.Group();
  orbit.rotation.set(1.1, 0, 0.4);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.008, 8, 200), mats.satin);
  orbit.add(ring);
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), mats.chrome);
  orbit.add(bead);
  group.add(orbit);
  globe.rotation.z = 0.35;

  return {
    group,
    camZ: 8.4,
    update(t) {
      globe.rotation.y = t * 0.25;
      dots.forEach((d) => {
        d.material.opacity = 0.35 + (Math.sin(t * 2 + d.userData.phase) * 0.5 + 0.5) * 0.65;
      });
      bead.position.set(Math.cos(t * 0.6) * 1.95, Math.sin(t * 0.6) * 1.95, 0);
    },
  };
}

// Pricing — a stack of minted discs, the top one turning over.
function buildDiscs(mats) {
  const group = new THREE.Group();
  const geo = new THREE.CylinderGeometry(1, 1, 0.14, 96, 1);
  const rimGeo = new THREE.TorusGeometry(0.82, 0.02, 12, 120);
  const discs = [mats.obsidian, mats.satin, mats.obsidian, mats.chrome, mats.obsidian].map((mat, i) => {
    const d = new THREE.Group();
    d.add(new THREE.Mesh(geo, mat));
    const rim = new THREE.Mesh(rimGeo, mats.chrome);
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 0.075;
    d.add(rim);
    d.position.set(Math.sin(i * 1.7) * 0.08, -0.6 + i * 0.18, Math.cos(i * 1.7) * 0.08);
    group.add(d);
    return d;
  });
  const top = new THREE.Group();
  top.add(new THREE.Mesh(geo, mats.glass));
  group.add(top);
  group.rotation.set(0.5, 0, -0.12);

  return {
    group,
    camZ: 7.6,
    update(t) {
      discs.forEach((d, i) => {
        d.rotation.y = t * 0.2 + i * 0.3;
      });
      const cycle = (t * 0.35) % 1;
      top.position.y = 0.55 + Math.sin(cycle * Math.PI) * 0.45;
      top.rotation.x = cycle * Math.PI * 2;
      group.rotation.y = t * 0.1;
    },
  };
}

const BUILDERS = {
  stack: buildStack,
  browser: buildBrowser,
  modules: buildModules,
  core: buildCore,
  gears: buildGears,
  voice: buildVoiceOrb,
  ring: buildRing,
  phone: buildPhone,
  server: buildServer,
  globe: buildGlobe,
  discs: buildDiscs,
};

export default function RenderedObject({ variant = 'stack', interactive = true, className = '', style, onReady }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.85;

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-4, 6, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xbfcaff, 3.2);
    rim.position.set(5, 2, -6);
    scene.add(rim);

    const mats = createMaterials();
    const obj = (BUILDERS[variant] || buildStack)(mats);
    const pivot = new THREE.Group();
    pivot.add(obj.group);
    scene.add(pivot);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 0, obj.camZ);

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Pull the camera back on narrow canvases so the object never clips
      camera.position.z = obj.camZ * Math.max(1, 1 / camera.aspect);
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // Pointer parallax
    const target = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (interactive && !reducedMotion) window.addEventListener('pointermove', onPointer, { passive: true });

    let visible = false;
    let raf = 0;
    let t = 0;
    let last = performance.now();
    let firstFrame = true;

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt * 1.35;
      obj.update(t, dt);
      // Turn toward the cursor quickly (frame-rate independent easing) and drift slightly with it
      const ease = 1 - Math.pow(1 - 0.12, dt * 60);
      pivot.rotation.y += (target.x * 0.45 - pivot.rotation.y) * ease;
      pivot.rotation.x += (target.y * 0.3 - pivot.rotation.x) * ease;
      pivot.position.x += (target.x * 0.18 - pivot.position.x) * ease;
      pivot.position.y += (-target.y * 0.12 - pivot.position.y) * ease;
      renderer.render(scene, camera);
      if (firstFrame) {
        firstFrame = false;
        setReady(true);
        onReadyRef.current?.();
      }
      if (visible && !reducedMotion) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(raf);
        if (visible) {
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      },
      { rootMargin: '120px' }
    );
    io.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      Object.values(mats).forEach((m) => m.dispose());
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [variant, interactive]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        opacity: ready ? 1 : 0,
        transform: ready ? 'scale(1)' : 'scale(0.96)',
        transition: 'opacity 1.2s ease, transform 1.4s cubic-bezier(.2,.7,.2,1)',
        ...style,
      }}
    />
  );
}
