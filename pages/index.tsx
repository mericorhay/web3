import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

// Enhanced version: tighter messages, more futuristic AirDarwin glow, and Galapagos NEO green-themed addition.

export default function Home() {
return (
<main className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-white/10 selection:text-white">
<GradientFog />
<Starfield />
<ScrollScene />
<AirDarwinSection />
<GalapagosSection />
<NoiseOverlay />
<CursorAura />
<TopBar />
<FooterCredit />
</main>
);
}

function TopBar() {
return (
<div className="pointer-events-none absolute inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10">
<motion.div
initial={{ y: -24, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
className="flex items-center gap-3"
>
<div className="relative">
<motion.div
className="h-7 w-7 rounded-full bg-white/5 ring-1 ring-white/10"
animate={{
boxShadow: [
"0 0 0px 0px rgba(255,255,255,0)",
"0 0 40px 12px rgba(255,255,255,0.08)",
"0 0 0px 0px rgba(255,255,255,0)",
],
}}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
<Sparkles className="absolute -right-2 -top-2 h-3 w-3 text-white/40" />
</div>
<motion.span
className="font-medium tracking-widest text-white/70"
initial={{ opacity: 0 }}
animate={{ opacity: 0.7 }}
transition={{ delay: 0.6, duration: 1.6 }}
>
yörünge mini
</motion.span>
</motion.div>
</div>
);
}

function ScrollScene() {
const scrollY = useMotionValue(0);
const rotate = useSpring(useTransform(scrollY, [0, 1000], [0, 35]), {
stiffness: 50,
damping: 15,
});
const translateZ = useSpring(useTransform(scrollY, [0, 1000], [0, -400]), {
stiffness: 60,
damping: 20,
});
const glow = useTransform(scrollY, [0, 1000], [0.3, 1]);

useEffect(() => {
const onScroll = () => scrollY.set(window.scrollY);
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, [scrollY]);

return (
<motion.div style={{ perspective: 1200 }} className="relative z-10 flex min-h-[200vh] items-center justify-center">
<motion.div
style={{ rotateX: rotate, translateZ, opacity: glow }}
className="text-center text-[14vw] font-black tracking-[0.1em] text-white/90"
>
<motion.span
className="block leading-none"
animate={{ textShadow: [
"0 0 20px rgba(255,255,255,0.2)",
"0 0 80px rgba(255,255,255,0.7)",
"0 0 20px rgba(255,255,255,0.2)",
]}}
transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
YÖRÜNGE
</motion.span>
<motion.div
style={{ rotateY: useTransform(scrollY, [0, 1000], [0, 20]) }}
animate={{ opacity: [0.7, 1, 0.7] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
className="mt-4 text-[6vw] font-light text-white/40"
>
mini
</motion.div>
</motion.div>
</motion.div>
);
}

function AirDarwinSection() {
return (
<section className="relative z-10 flex min-h-[140vh] flex-col items-center justify-center overflow-hidden text-center">
<motion.div
initial={{ opacity: 0, scale: 0.9, rotateY: -40 }}
whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
transition={{ duration: 1.8, ease: "easeInOut" }}
animate={{ textShadow: [
"0 0 20px rgba(0,180,255,0.4)",
"0 0 80px rgba(0,200,255,0.8)",
"0 0 30px rgba(0,160,255,0.4)",
]}}
className="text-[10vw] font-black tracking-[0.12em] text-blue-400 drop-shadow-[0_0_25px_rgba(0,150,255,0.8)]"
>
AirDarwin
</motion.div>

{/* Messages closer and lower */}
<div className="relative mt-20 w-full max-w-md space-y-2 px-6">
<motion.div
initial={{ x: 200, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
className="ml-auto w-fit max-w-[75%] rounded-2xl bg-green-500/20 px-4 py-1.5 text-left text-sm text-green-300 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,100,0.15)] border border-green-500/10"
>
Kalkış yap.
</motion.div>

<motion.div
initial={{ x: -200, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
className="mr-auto w-fit max-w-[75%] rounded-2xl bg-green-700/10 px-4 py-1.5 text-left text-sm text-green-400 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,100,0.1)] border border-green-500/10"
>
Komut alındı. Kalkış yapılıyor...
</motion.div>
</div>

<motion.div
className="absolute inset-0 -z-10"
animate={{
background: [
"radial-gradient(circle at 50% 50%, rgba(0,120,255,0.25), transparent 70%)",
"radial-gradient(circle at 60% 60%, rgba(0,180,255,0.35), transparent 70%)",
"radial-gradient(circle at 40% 40%, rgba(0,120,255,0.25), transparent 70%)",
],
}}
transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>
<motion.div
className="mt-12 h-40 w-[80%] max-w-3xl rounded-full bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-blue-500/10 blur-2xl"
animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.9, 0.4] }}
transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>
</section>
);
}

function GalapagosSection() {
return (
<section className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center text-center overflow-hidden">
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1.4, ease: "easeOut" }}
animate={{ textShadow: [
"0 0 20px rgba(0,255,150,0.3)",
"0 0 60px rgba(0,255,100,0.5)",
"0 0 20px rgba(0,255,150,0.3)",
]}}
className="text-[9vw] font-black tracking-[0.1em] text-green-400 drop-shadow-[0_0_20px_rgba(0,255,120,0.6)]"
>
Galapagos NEO
</motion.div>

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 0.8, y: 0 }}
transition={{ duration: 1.6, ease: "easeInOut" }}
className="mt-10 h-36 w-[70%] max-w-2xl rounded-full bg-gradient-to-r from-green-500/10 via-green-400/10 to-green-500/10 blur-2xl"
/>
</section>
);
}

function GradientFog() {
return (
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
<motion.div
className="absolute -top-56 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(120,120,255,0.18),rgba(0,0,0,0))] blur-[80px]"
animate={{ rotate: [0, 15, -10, 0] }}
transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
/>
</div>
);
}

function Starfield() {
const canvasRef = useRef<HTMLCanvasElement | null>(null);
useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;
const ctx = canvas.getContext("2d");
if (!ctx) return;

let frame: number;
const DPR = Math.min(2, window.devicePixelRatio || 1);
const resize = () => {
canvas.width = canvas.clientWidth * DPR;
canvas.height = canvas.clientHeight * DPR;
};
resize();

const stars = Array.from({ length: 500 }, () => ({
x: Math.random(),
y: Math.random(),
z: Math.random(),
}));

function render(t: number) {
const { width, height } = canvas;
ctx.clearRect(0, 0, width, height);
const time = t * 0.00015;
for (const s of stars) {
const depth = (s.z + time) % 1.0;
const sx = (s.x - 0.5) * width * (1 + depth * 0.5) + width / 2;
const sy = (s.y - 0.5) * height * (1 + depth * 0.5) + height / 2;
const alpha = 1 - depth;
ctx.beginPath();
ctx.arc(sx, sy, 1.2 * DPR, 0, Math.PI * 2);
ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
ctx.fill();
}
frame = requestAnimationFrame(render);
}
frame = requestAnimationFrame(render);
window.addEventListener("resize", resize);
return () => {
cancelAnimationFrame(frame);
window.removeEventListener("resize", resize);
};
}, []);
return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-20 h-full w-full" />;
}

function CursorAura() {
const mx = useMotionValue(-9999);
const my = useMotionValue(-9999);
const x = useSpring(mx, { stiffness: 120, damping: 20 });
const y = useSpring(my, { stiffness: 120, damping: 20 });
useEffect(() => {
const onMove = (e: MouseEvent) => {
mx.set(e.clientX);
my.set(e.clientY);
};
window.addEventListener("mousemove", onMove);
return () => window.removeEventListener("mousemove", onMove);
}, [mx, my]);
return (
<motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2">
<motion.div
className="h-32 w-32 rounded-full bg-white/6 blur-3xl"
animate={{ scale: [0.9, 1.2, 1] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>
</motion.div>
);
}

function NoiseOverlay() {
const svg = encodeURIComponent(
'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.6"/></svg>'
);
return (
<div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.17] mix-blend-overlay">
<div className={`absolute inset-0 bg-[url('data:image/svg+xml;utf8,${svg}')]`} />
</div>
);
}

function FooterCredit() {
return (
<footer className="absolute bottom-3 left-0 right-0 z-50 text-center text-[9px] text-white/30">
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.7 }} transition={{ duration: 2, ease: "easeOut" }}>
Meriç Orhay tarafından yapıldı · 2027/6 tanıtım planlanıyor
</motion.div>
</footer>
);
}
