import React from 'react';

// Symmetrical luxury divider ornament for section separation
export const ElegantDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-wedding-gold" />
    <svg className="w-16 h-8 text-wedding-gold fill-current" viewBox="0 0 100 30" fill="none">
      <path d="M50,15 C54,10 58,8 64,12 C69,15 67,20 62,20 C58,20 56,16 54,16 C53,16 51,19 50,18 C49,19 47,16 46,16 C44,16 42,20 38,20 C33,20 31,15 36,12 C42,8 46,10 50,15 Z" />
      <circle cx="50" cy="15" r="2" />
      <circle cx="43" cy="15" r="1" />
      <circle cx="57" cy="15" r="1" />
      <path d="M10,15 L32,15" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
      <path d="M68,15 L90,15" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
    </svg>
    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-wedding-gold" />
  </div>
);

// Large elegant filigree frame accent for cards and top banners
export const FiligreeOrnament = ({ className = "" }) => (
  <svg className={`w-32 h-10 text-wedding-gold fill-none stroke-current ${className}`} viewBox="0 0 120 40" strokeWidth="1">
    {/* Center scroll design */}
    <path d="M60,10 C65,15 75,15 80,10 C85,5 78,0 72,5 C66,10 70,25 60,30 C50,25 54,10 48,5 C42,0 35,5 40,10 C45,15 55,15 60,10 Z" />
    <circle cx="60" cy="10" r="1.5" className="fill-wedding-gold" />
    {/* Left wings */}
    <path d="M40,10 C30,12 20,8 10,12 C5,14 8,18 15,16 C25,14 30,12 35,14" />
    <path d="M30,15 C20,17 15,13 8,18" />
    {/* Right wings */}
    <path d="M80,10 C90,12 100,8 110,12 C115,14 112,18 105,16 C95,14 90,12 85,14" />
    <path d="M90,15 C100,17 105,13 112,18" />
  </svg>
);

// Double interlocking rings with glow/shading
export const RingsIcon = ({ className = "" }) => (
  <svg className={`w-16 h-16 text-wedding-gold ${className}`} viewBox="0 0 100 100" fill="none">
    {/* Left ring */}
    <circle cx="42" cy="55" r="22" stroke="currentColor" strokeWidth="4" className="drop-shadow-md" />
    <circle cx="42" cy="55" r="17" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 3" />
    
    {/* Right ring (interlocking visual: layer drawn over the left ring) */}
    <path d="M 52 45 A 22 22 0 1 1 58 68" stroke="currentColor" strokeWidth="4" className="drop-shadow-md" />
    <circle cx="58" cy="45" r="22" stroke="currentColor" strokeWidth="4" />
    <circle cx="58" cy="45" r="17" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 3" />

    {/* Diamonds and sparkles */}
    <path d="M58,23 L62,17 L58,11 L54,17 Z" fill="currentColor" />
    <path d="M58,11 L60,13 L58,15 L56,13 Z" fill="#fff" />
    
    {/* Sparkle lines */}
    <line x1="58" y1="6" x2="58" y2="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="68" y1="10" x2="72" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="48" y1="10" x2="44" y2="8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// Opened ring box with gold patterns and single diamond ring
export const RingBoxIcon = ({ className = "" }) => (
  <svg className={`w-20 h-20 text-wedding-gold ${className}`} viewBox="0 0 100 100" fill="none">
    {/* Upper lid opened */}
    <path d="M50,10 L75,25 L75,40 L50,25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50,10 L25,25 L25,40 L50,25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M25,25 L50,15 L75,25" stroke="currentColor" strokeWidth="2" />

    {/* Bottom velvet cushion base */}
    <path d="M50,55 L85,42 L85,75 L50,90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M50,55 L15,42 L15,75 L50,90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M15,75 L50,90 L85,75" stroke="currentColor" strokeWidth="2.5" />
    <path d="M15,42 L50,55 L85,42" stroke="currentColor" strokeWidth="2.5" />
    
    {/* Shadow lines and velvet details */}
    <ellipse cx="50" cy="55" rx="25" ry="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />

    {/* Diamond Ring sticking up from box */}
    <g transform="translate(0, -5)">
      {/* Ring shank */}
      <circle cx="50" cy="48" r="10" stroke="currentColor" strokeWidth="2" />
      {/* Diamond setting */}
      <path d="M50,38 L54,32 L50,28 L46,32 Z" fill="currentColor" />
      {/* Sparkles */}
      <circle cx="50" cy="32" r="1" fill="#fff" />
      <line x1="50" y1="25" x2="50" y2="21" stroke="currentColor" strokeWidth="1" />
      <line x1="42" y1="28" x2="38" y2="26" stroke="currentColor" strokeWidth="1" />
      <line x1="58" y1="28" x2="62" y2="26" stroke="currentColor" strokeWidth="1" />
    </g>
  </svg>
);

// Chapel/Mosque/Ceremony venue illustration in detailed line art
export const ChapelIcon = ({ className = "" }) => (
  <svg className={`w-24 h-24 text-wedding-gold fill-none stroke-current ${className}`} viewBox="0 0 120 120" strokeWidth="1.5">
    {/* Base foundation and steps */}
    <path d="M10,110 L110,110" strokeWidth="3" />
    <path d="M25,110 L25,102 L95,102 L95,110" />
    <path d="M35,102 L35,96 L85,96 L85,102" />
    <path d="M45,96 L45,92 L75,92 L75,96" />

    {/* Main central building block */}
    <rect x="40" y="55" width="40" height="37" />
    {/* Side pillars / walls */}
    <rect x="25" y="65" width="15" height="37" />
    <rect x="80" y="65" width="15" height="37" />

    {/* Arched double front doors */}
    <path d="M50,92 L50,75 C50,70 70,70 70,75 L70,92" />
    <line x1="60" y1="72" x2="60" y2="92" strokeWidth="1" />
    <circle cx="57" cy="84" r="1" fill="currentColor" />
    <circle cx="63" cy="84" r="1" fill="currentColor" />

    {/* Gothic Rose Window above door */}
    <circle cx="60" cy="42" r="10" />
    <circle cx="60" cy="42" r="6" strokeDasharray="2 2" />
    <circle cx="60" cy="42" r="2" fill="currentColor" />

    {/* Main central roof / triangular gable */}
    <path d="M38,55 L60,28 L82,55 Z" />
    
    {/* High central spire and cross */}
    <line x1="60" y1="28" x2="60" y2="10" />
    <path d="M57,15 L63,15" />
    <path d="M60,12 L60,18" />

    {/* Left and Right side spires */}
    <path d="M25,65 L32.5,45 L40,65" />
    <line x1="32.5" y1="45" x2="32.5" y2="30" />
    <path d="M80,65 L87.5,45 L95,65" />
    <line x1="87.5" y1="45" x2="87.5" y2="30" />

    {/* Decorative Gothic Windows on side walls */}
    <path d="M30,85 L30,75 C30,72 35,72 35,75 L35,85" strokeWidth="1" />
    <path d="M85,85 L85,75 C85,72 90,72 90,75 L90,85" strokeWidth="1" />
  </svg>
);

// Elegant multi-tier wedding cake with stand, topper, and details
export const CakeIcon = ({ className = "" }) => (
  <svg className={`w-24 h-24 text-wedding-gold fill-none stroke-current ${className}`} viewBox="0 0 120 120" strokeWidth="1.5">
    {/* Cake stand base */}
    <path d="M30,105 L90,105" strokeWidth="2.5" />
    <path d="M45,105 L50,113 L70,113 L75,105" />

    {/* Bottom Cake tier */}
    <path d="M25,80 L25,105 C25,105 30,105 35,105 L85,105 C90,105 95,105 95,105 L95,80 Z" fill="currentColor" fillOpacity="0.05" />
    <rect x="25" y="80" width="70" height="25" rx="2" />
    
    {/* Middle Cake tier */}
    <path d="M35,58 L35,80 L85,80 L85,58 Z" fill="currentColor" fillOpacity="0.05" />
    <rect x="35" y="58" width="50" height="22" rx="2" />
    
    {/* Top Cake tier */}
    <path d="M45,38 L45,58 L75,58 L75,38 Z" fill="currentColor" fillOpacity="0.05" />
    <rect x="45" y="38" width="30" height="20" rx="2" />

    {/* Topper: Bride and groom or heart design */}
    <path d="M55,38 C55,32 60,32 60,35 C60,32 65,32 65,38 Q60,38 55,38 Z" fill="currentColor" />
    <line x1="60" y1="38" x2="60" y2="35" />

    {/* Cake piping/icing decor */}
    <path d="M25,87 Q60,95 95,87" strokeDasharray="2 2" />
    <path d="M35,65 Q60,71 85,65" strokeDasharray="2 2" />
    <path d="M45,45 Q60,49 75,45" strokeDasharray="2 2" />

    {/* Flower decorations on tiers */}
    <g transform="translate(25, 76)" fill="currentColor">
      <circle cx="0" cy="0" r="3" />
      <circle cx="-3" cy="-3" r="2" />
      <circle cx="3" cy="3" r="2" />
    </g>
    <g transform="translate(78, 55)" fill="currentColor">
      <circle cx="0" cy="0" r="3" />
      <circle cx="-3" cy="-3" r="2" />
      <circle cx="3" cy="3" r="2" />
    </g>
    <g transform="translate(42, 35)" fill="currentColor">
      <circle cx="0" cy="0" r="3" />
      <circle cx="3" cy="3" r="2" />
    </g>
  </svg>
);

// Silhouette Couple under tree for Love Story section
export const CoupleUnderTree = ({ className = "" }) => (
  <svg className={`w-36 h-36 text-wedding-gold fill-none stroke-current ${className}`} viewBox="0 0 120 120" strokeWidth="1.2">
    {/* Ground */}
    <path d="M10,105 L110,105" strokeWidth="2" />

    {/* Majestic Oak Tree Trunk & Branches */}
    <path d="M25,105 Q25,85 20,60 Q18,40 28,30" strokeWidth="3" />
    <path d="M23,75 Q35,65 48,55 Q55,48 50,38" strokeWidth="1.5" />
    <path d="M21,90 Q12,78 10,65" strokeWidth="2" />
    
    {/* Tree Leaves Canopy - Soft circular paths */}
    <circle cx="20" cy="35" r="16" className="fill-wedding-gold/10" strokeDasharray="3 3" />
    <circle cx="38" cy="25" r="14" className="fill-wedding-gold/10" strokeDasharray="3 3" />
    <circle cx="10" cy="50" r="12" className="fill-wedding-gold/10" strokeDasharray="2 2" />
    <circle cx="48" cy="45" r="15" className="fill-wedding-gold/10" strokeDasharray="3 3" />

    {/* Little hanging hearts in tree */}
    <path d="M35,45 Q36,42 38,45 Q40,42 41,45 L38,49 Z" fill="currentColor" />
    <path d="M15,55 Q16,52 18,55 Q20,52 21,55 L18,59 Z" fill="currentColor" />
    <path d="M28,32 Q29,29 31,32 Q33,29 34,32 L31,36 Z" fill="currentColor" />

    {/* Silhouette Couple (standing on right side under the branches) */}
    <g transform="translate(62, 70)" fill="currentColor" className="text-wedding-burgundy">
      {/* Groom (Left figure) */}
      {/* Head */}
      <circle cx="8" cy="4" r="2.5" />
      {/* Body */}
      <path d="M4,10 L12,10 L10,35 L6,35 Z" />
      {/* Arm holding bride */}
      <path d="M12,10 Q16,16 18,17" stroke="currentColor" strokeWidth="1.5" fill="none" />

      {/* Bride (Right figure) */}
      {/* Head */}
      <circle cx="20" cy="6" r="2.3" />
      {/* Veil */}
      <path d="M18,6 Q13,12 14,35 L17,35 Z" fill="currentColor" fillOpacity="0.4" />
      {/* Wedding Gown */}
      <path d="M17,13 L23,13 L28,35 L12,35 Z" />
      {/* Arm */}
      <path d="M17,13 Q15,18 18,17" stroke="currentColor" strokeWidth="1" fill="none" />
    </g>
  </svg>
);

// Map Marker Heart
export const HeartMapMarker = ({ className = "" }) => (
  <svg className={`w-8 h-10 text-wedding-burgundy ${className}`} viewBox="0 0 30 40" fill="currentColor">
    <path d="M15,40 C15,40 30,24 30,15 C30,6.7 23.3,0 15,0 C6.7,0 0,6.7 0,15 C0,24 15,40 15,40 Z" className="drop-shadow-md" />
    <path d="M15,22 C18.3,22 21,19.3 21,16 C21,12.7 18.3,10 15,10 C11.7,10 9,12.7 9,16 C9,19.3 11.7,22 15,22 Z" fill="#D4AF37" />
  </svg>
);
// Organic organic-shaped rose petal SVG with rich burgundy 3D gradient
export const RosePetalSVG = ({ className = "" }) => {
  // Use a unique ID for the gradient to prevent conflict across duplicate SVGs
  const gradientId = "rose-petal-grad-shading";
  return (
    <svg className={`${className}`} viewBox="0 0 30 30" fill="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#300105" />
          <stop offset="30%" stopColor="#5C0612" />
          <stop offset="70%" stopColor="#8B1827" />
          <stop offset="100%" stopColor="#B32435" />
        </linearGradient>
      </defs>
      {/* Hand-traced asymmetrical organic rose petal shape from user mockup */}
      <path 
        d="M7.5,20 C4.5,15.5 5,10 9.5,6.5 C14,3 20.5,4 23.5,8 C26.5,12 25,18.5 20,21 C15,23.5 10.5,23.5 7.5,20 Z" 
        fill={`url(#${gradientId})`}
        className="drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)]"
      />
    </svg>
  );
};

// Organic golden leaf SVG with metallic gradient shading
export const GoldLeafSVG = ({ className = "" }) => {
  const gradientId = "gold-leaf-metallic-grad";
  return (
    <svg className={`${className}`} viewBox="0 0 30 30" fill="none">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8A6621" />
          <stop offset="25%" stopColor="#C5A85A" />
          <stop offset="50%" stopColor="#F5E4B3" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#FAF0D0" />
        </linearGradient>
      </defs>
      {/* Crescent-like curved golden leaf path based on user's cropped mockup */}
      <path 
        d="M5,18 C4,14 7,8 13,6 C19,4 23,7 25,10 C25,10 19,10 14,12 C9,14 7,16 5,18 Z" 
        fill={`url(#${gradientId})`}
        className="drop-shadow-[1px_2px_2px_rgba(0,0,0,0.2)]"
      />
    </svg>
  );
};

// Intricate Gold Corner Ornament to frame card corners
export const GoldCornerOrnament = ({ className = "" }) => (
  <svg className={`w-12 h-12 text-[#c5a880] fill-none stroke-current ${className}`} viewBox="0 0 100 100" strokeWidth="1.5">
    {/* Outer frame */}
    <path d="M 5,5 L 5,95 M 5,5 L 95,5" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 12,12 L 12,80 M 12,12 L 80,12" strokeWidth="0.75" strokeDasharray="2 2" />
    {/* Corner leaves/filigree */}
    <path d="M 5,5 C 22,22 25,35 18,52 C 15,58 8,64 16,60 C 26,55 35,45 45,45 C 45,45 55,35 60,16 C 64,8 58,15 52,18 C 35,25 22,22 5,5 Z" fill="currentColor" fillOpacity="0.05" />
    <path d="M 12,12 C 28,28 32,42 42,42 C 42,42 42,32 28,12" />
    <circle cx="16" cy="60" r="1.5" className="fill-current" />
    <circle cx="60" cy="16" r="1.5" className="fill-current" />
    <circle cx="22" cy="22" r="2" className="fill-current" />
  </svg>
);

// Floating soft-white and gold dust falling particles effect
export const SnowfallEffect = () => {
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    const totalParticles = 25;
    const generated = Array.from({ length: totalParticles }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 100}%`,
      size: `${3 + (i % 4)}px`,
      duration: `${7 + (i % 8)}s`,
      delay: `${i * 0.3}s`,
      isGold: i % 2 === 0
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-snowfall"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.isGold ? "#c5a880" : "#ffffff",
            opacity: p.isGold ? 0.3 : 0.15,
            animationDuration: p.duration,
            animationDelay: p.delay,
            top: "-20px"
          }}
        />
      ))}
    </div>
  );
};


