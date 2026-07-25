import React, { useState, useEffect, useRef } from "react";
import {
  ElegantDivider,
  GoldCornerOrnament,
  SnowfallEffect,
} from "./components/Ornaments";
import waxSealImg from "./assets/ec509663f_1000046671.png";
import heroBg from "./assets/hero section.png";
import ornamentSeparator from "./assets/7a0be9725_6.svg";
import howWeMetImg from "./assets/how_we_met copy يوم فرحنا ان شاء الله copy.png";
import proposalImg from "./assets/proposal  1-1-2026.png";

// Pre-populated guestbook wishes
const MOCK_WISHES = [
  {
    id: "wish_1",
    guest_name: "Eisawy Salem",
    message:
      "مبروك يا حبيبي ربنا يرزقكم الذرية الصالحة ويحفظكم من العين والحسد يارب ❤️",
  },
  {
    id: "wish_2",
    guest_name: "مريم",
    message:
      "بارك الله لكما وبارك عليكما وجمع بينكما في خير. ألف مبروك للعروسين!",
  },
  {
    id: "wish_3",
    guest_name: "Mohamed",
    message:
      "Congratulations to the beautiful couple! So happy to celebrate with you.",
  },
  {
    id: "wish_4",
    guest_name: "Kamel Elmasry",
    message:
      "ألف مبروك للعروسين، مع تمنياتي لكم بحياة زوجية سعيدة ومستقبل مشرق مليء بالحب والبهجة.",
  },
];

// 1. Envelope Cover Component
const EnvelopeCover = ({ isOpen, onOpen, waxSealUrl }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hideEnvelope, setHideEnvelope] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Trigger parent callback (e.g. music play) after panel slide begins
    setTimeout(() => {
      onOpen();
    }, 1200);
    // Unmount envelope card from DOM after transition completes
    setTimeout(() => {
      setHideEnvelope(true);
    }, 2400);
  };

  if (hideEnvelope || (isOpen && !isOpening)) return null;

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden'>
      {/* Blurred background backing */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isOpening ? "opacity-0" : "opacity-100"
          }`}
      />

      {/* Floating particles inside envelope screen */}
      <SnowfallEffect />

      {/* LEFT PANEL */}
      <div
        className='absolute left-0 top-0 w-1/2 h-full transition-transform duration-[2200ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-10'
        style={{
          transform: isOpening ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        <div
          className='absolute inset-0 border-r border-black/5 shadow-[inset_-12px_0_30px_rgba(0,0,0,0.06)]'
          style={{
            background:
              "radial-gradient(circle at 100% 50%, #f9f9f9 0%, #cfcfcf 100%)",
          }}
        />
      </div>

      {/* RIGHT PANEL */}
      <div
        className='absolute right-0 top-0 w-1/2 h-full transition-transform duration-[2200ms] ease-[cubic-bezier(0.76,0,0.24,1)] z-10'
        style={{
          transform: isOpening ? "translateX(100%)" : "translateX(0)",
        }}
      >
        <div
          className='absolute inset-0 border-l border-black/5 shadow-[inset_12px_0_30px_rgba(0,0,0,0.06)]'
          style={{
            background:
              "radial-gradient(circle at 0% 50%, #f9f9f9 0%, #cfcfcf 100%)",
          }}
        />
      </div>

      {/* CENTRAL WAX SEAL BUTTON */}
      <button
        onClick={handleOpenClick}
        disabled={isOpening}
        className={`relative z-20 w-56 h-56 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-[800ms] hover:scale-105 active:scale-95 ${isOpening
          ? "opacity-0 scale-75 rotate-12 pointer-events-none"
          : "opacity-100 scale-100"
          }`}
        style={{
          boxShadow: "0 20px 50px rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.12)",
        }}
      >
        {/* Pulsing ring */}
        {!isOpening && (
          <div className='absolute inset-0 rounded-full border border-black/5 animate-pulse-ring pointer-events-none' />
        )}

        {/* Background image / wax seal fill */}
        <div className='absolute inset-0 rounded-full overflow-hidden'>
          {waxSealUrl && (
            <img
              src={waxSealUrl}
              alt='Wax Seal'
              className='absolute inset-0 w-full h-full object-cover rounded-full z-10 transition-opacity duration-300'
            />
          )}
        </div>

        {/* CSS Patch to cover old names and display new names */}
        <div
          className='absolute z-20 w-[65%] h-[65%] rounded-full flex flex-col items-center justify-center text-center pointer-events-none'
          style={{
            background: "#f9f8f4",
            boxShadow: "0 0 16px 12px #f9f8f4",
          }}
        >
          <span className='font-cinzel text-[15px] font-bold tracking-wide text-[#7d6447] leading-normal uppercase'>
            Mohamed
            <span className='block my-0.5 text-xs font-cinzel opacity-90'>
              &amp;
            </span>
            Sohila
          </span>
          <span className='text-[10px] font-cinzel uppercase tracking-[0.3em] text-[#a4917a] font-medium mt-2'>
            Open
          </span>
        </div>
      </button>
    </div>
  );
};

// 2. RSVP Form Modal Overlay Component
const RSVPModal = ({ isOpen, onClose, onSubmit, isPending }) => {
  const [form, setForm] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    onSubmit(form);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center px-4'>
      {/* Dark backdrop */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className='relative w-full max-w-sm rounded-[24px] overflow-hidden p-6 border border-[#c5a880]/30 shadow-2xl transition-all scale-100 z-50 text-center'
        style={{
          background:
            "radial-gradient(circle at center, #fbfbf6 0%, #f7f5ef 100%)",
        }}
      >
        {/* Frame Ornaments */}
        <GoldCornerOrnament className='absolute top-2 left-2 rotate-0 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute top-2 right-2 rotate-90 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute bottom-2 left-2 -rotate-90 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute bottom-2 right-2 rotate-180 opacity-50 scale-75' />

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-[#7d6447]/70 hover:text-[#7d6447] transition-colors z-50 text-lg w-8 h-8 rounded-full flex items-center justify-center bg-[#c5a880]/15 hover:bg-[#c5a880]/30 cursor-pointer'
        >
          <i className='fa-solid fa-xmark'></i>
        </button>

        <h3 className='font-cinzel text-xl font-semibold text-[#7d6447] mb-2 tracking-wide mt-2'>
          Confirm Attendance
        </h3>
        <p className='text-[14px] font-cairo font-bold text-[#7d6447]/80 mb-6 uppercase tracking-normal'>
          تأكيد الحضور
        </p>

        <form
          onSubmit={handleSubmit}
          className='space-y-4 text-left font-cairo'
        >
          {/* Name Input */}
          <div>
            <label className='block text-[11.5px] font-semibold text-[#7d6447] tracking-wide mb-1.5'>
              Your Name / الاسم بالكامل
            </label>
            <input
              type='text'
              required
              placeholder='Full Name / الاسم بالكامل'
              className='w-full px-4 py-2.5 text-sm rounded-xl border border-[#c5a880]/40 focus:outline-none focus:border-[#7d6447] focus:ring-1 focus:ring-[#7d6447] bg-white/60 text-[#5a483a] font-cairo placeholder-[#5a483a]/40'
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          {/* Attendance Selection */}
          <div>
            <label className='block text-[11.5px] font-semibold text-[#7d6447] tracking-wide mb-1.5'>
              Attendance / الحضور
            </label>
            <select
              className='w-full px-4 py-2.5 text-sm rounded-xl border border-[#c5a880]/40 focus:outline-none focus:border-[#7d6447] bg-white/60 text-[#5a483a] font-cairo'
              value={form.attendance}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, attendance: e.target.value }))
              }
            >
              <option value='yes'>✅ Yes, I will attend / سأحضر</option>
              <option value='no'>
                ❌ No, I cannot attend / لن أتمكن من الحضور
              </option>
            </select>
          </div>

          {/* Guest Count */}
          {form.attendance === "yes" && (
            <div>
              <label className='block text-[11.5px] font-semibold text-[#7d6447] tracking-wide mb-1.5'>
                Number of Guests / عدد المرافقين
              </label>
              <input
                type='number'
                min='1'
                required
                className='w-full px-4 py-2.5 text-sm rounded-xl border border-[#c5a880]/40 focus:outline-none focus:border-[#7d6447] bg-white/60 text-[#5a483a] font-cairo'
                value={form.guests}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, guests: e.target.value }))
                }
              />
            </div>
          )}

          {/* Message / Wishes */}
          <div>
            <label className='block text-[11.5px] font-semibold text-[#7d6447] tracking-wide mb-1.5'>
              Wishes / تهنئة للعروسين
            </label>
            <textarea
              rows='4'
              required
              placeholder='Write your congratulations, wishes, or a nice prayer for the bride and groom... / اكتب تهنئتك، دعواتك الصادقة، أو كلمة طيبة للعروسين هنا...'
              className='w-full px-4 py-2.5 text-sm rounded-xl border border-[#c5a880]/40 focus:outline-none focus:border-[#7d6447] bg-white/60 text-[#5a483a] resize-none font-cairo placeholder-[#5a483a]/40'
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={isPending}
            className='w-full py-3.5 mt-4 text-xs font-bold text-white bg-[#7d6447] hover:bg-[#665139] transition-all duration-300 rounded-full flex items-center justify-center gap-2 uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(125,100,71,0.3)] hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer font-cinzel'
          >
            <i className='fa-regular fa-paper-plane'></i>
            {isPending ? "Submitting..." : "Submit RSVP"}
          </button>
        </form>
      </div>
    </div>
  );
};

// 3. Success RSVP overlay state
const RSVPSuccessOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center px-4'>
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        onClick={onClose}
      />

      {/* Success Modal */}
      <div
        className='relative w-full max-w-sm rounded-[24px] p-8 border border-[#c5a880]/30 shadow-2xl z-50 text-center'
        style={{
          background:
            "radial-gradient(circle at center, #fbfbf6 0%, #f7f5ef 100%)",
        }}
      >
        <GoldCornerOrnament className='absolute top-2 left-2 rotate-0 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute top-2 right-2 rotate-90 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute bottom-2 left-2 -rotate-90 opacity-50 scale-75' />
        <GoldCornerOrnament className='absolute bottom-2 right-2 rotate-180 opacity-50 scale-75' />

        <div className='w-16 h-16 bg-[#7d6447]/10 text-[#7d6447] border border-[#c5a880]/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl'>
          <i className='fa-solid fa-check'></i>
        </div>

        <h3 className='font-cinzel text-lg font-bold text-[#7d6447] mb-2 tracking-wide'>
          RSVP &amp; Wishes Received!
        </h3>
        <p className='text-xs font-cairo text-[#5a483a]/80 mb-4'>
          تم تأكيد حضورك واستلام تهنئتك بنجاح
        </p>

        <p className='text-sm font-cairo text-[#5a483a]/90 mb-6 leading-relaxed'>
          Thank you for confirming your response and sharing your beautiful wishes. We look forward to celebrating with you!
        </p>

        <button
          onClick={onClose}
          className='px-8 py-2.5 bg-[#7d6447] hover:bg-[#665139] text-white text-xs font-semibold rounded-full uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(125,100,71,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer font-cinzel'
        >
          Close
        </button>
      </div>
    </div>
  );
};

// 4. Main App Container
function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [rsvpModalOpen, setRsvpModalOpen] = useState(false);
  const [rsvpSuccessOpen, setRsvpSuccessOpen] = useState(false);
  const [rsvpPending, setRsvpPending] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [wishes, setWishes] = useState(MOCK_WISHES);
  const [attendeesCount, setAttendeesCount] = useState(210); // default mock attendees base

  // Scroll active section tracking
  const [activeTimeline, setActiveTimeline] = useState([]);
  const [activeRules, setActiveRules] = useState([]);
  const [timelineProgress, setTimelineProgress] = useState(0);

  // References
  const audioRef = useRef(null);
  const wishesScrollRef = useRef(null);
  const timelineRef = useRef(null);
  const rulesRef = useRef(null);

  // Sections references for nav scroll
  const greetingRef = useRef(null);
  const detailsRef = useRef(null);
  const programRef = useRef(null);
  const contactRef = useRef(null);
  const mapRef = useRef(null);
  const guestbookRef = useRef(null);

  // Background Music File Source
  const musicFileUrl =
    "https://base44.app/api/apps/6966e1f30fa9fbe508239391/files/public/6966e1f30fa9fbe508239391/404fab829_Duomo-_WildestDreams_TaylorSwiftCoverOfficialMusicfromNetflixsBridgertonSoundtrack.mp3";
  const waxSealUrl = waxSealImg;

  // Target date for countdown: Tuesday, August 4, 2026 at 7:00 PM Cairo time
  // Cairo time: EEST is UTC+3 during DST. Target: 2026-08-04T19:00:00+03:00
  useEffect(() => {
    const targetDate = new Date("2026-08-04T19:00:00+03:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  // Fetch local RSVPs and Wishes on mount
  useEffect(() => {
    const localRsvps = localStorage.getItem("wedding_rsvps");
    const localWishes = localStorage.getItem("wedding_wishes");
    if (localRsvps) {
      let parsedRsvps = JSON.parse(localRsvps);
      // Clean up specific test entries if they exist
      parsedRsvps = parsedRsvps.filter(
        (r) =>
          r.name !== "WEF" &&
          r.name !== "محمد المصري" &&
          r.name.toLowerCase() !== "trge"
      );
      localStorage.setItem("wedding_rsvps", JSON.stringify(parsedRsvps));

      const totalGuests = parsedRsvps.reduce(
        (acc, r) => acc + (r.guests || 1),
        210,
      );
      setAttendeesCount(totalGuests);
    }
    if (localWishes) {
      let parsed = JSON.parse(localWishes);
      // Clean up specific test entries if they exist
      parsed = parsed.filter(
        (w) =>
          w.guest_name !== "WEF" &&
          w.guest_name !== "محمد المصري" &&
          w.guest_name.toLowerCase() !== "trge" &&
          w.message.trim() !== "fgsd"
      );

      // Filter out any older mock wishes to ensure the latest ones from App.jsx are loaded
      const customWishes = parsed.filter(
        (w) => !MOCK_WISHES.some((mock) => mock.id === w.id)
      );
      const combined = [...MOCK_WISHES, ...customWishes];
      setWishes(combined);
      localStorage.setItem("wedding_wishes", JSON.stringify(combined));
    } else {
      localStorage.setItem("wedding_wishes", JSON.stringify(MOCK_WISHES));
    }
  }, []);

  // Audio Playback effect
  useEffect(() => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.play().catch(() => {
        // Handle browser autoplay policy blockers gracefully
        setMusicPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

  // Scroll link highlights & Timeline fills scroll handler
  useEffect(() => {
    const handleScroll = () => {
      // 1. Timeline scroll progression line calculation
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Progress window range: from timeline entering bottom half to top half
        const startThreshold = viewportHeight * 0.85;
        const endThreshold = viewportHeight * 0.25;

        const relativeTop = timelineRect.top;
        const totalHeight = timelineRect.height;

        const scrolledDistance = startThreshold - relativeTop;
        const totalScanDistance = startThreshold - endThreshold + totalHeight;

        const progressPercent = Math.max(
          0,
          Math.min(100, (scrolledDistance / totalScanDistance) * 130),
        );
        setTimelineProgress(progressPercent);

        // Highlight active dots
        const timelineDots =
          timelineRef.current.querySelectorAll(".timeline-node");
        const activeNodes = [];
        timelineDots.forEach((dot, idx) => {
          const dotRect = dot.getBoundingClientRect();
          if (dotRect.top < viewportHeight * 0.7) {
            activeNodes.push(idx);
          }
        });
        setActiveTimeline(activeNodes);
      }

      // 2. Rules highlighting tracking
      if (rulesRef.current) {
        const ruleCards = rulesRef.current.querySelectorAll(".rule-card");
        const activeIds = [];
        ruleCards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          if (rect.top + rect.height / 2 < window.innerHeight * 0.88) {
            activeIds.push(idx);
          }
        });
        setActiveRules(activeIds);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (ref) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Wishes box scroll buttons logic
  const handleWishesScroll = (direction) => {
    if (wishesScrollRef.current) {
      wishesScrollRef.current.scrollBy({
        top: direction * 150,
        behavior: "smooth",
      });
    }
  };

  // Submit RSVP Form handler
  const handleRsvpSubmit = (formData) => {
    setRsvpPending(true);
    setTimeout(() => {
      // 1. Save RSVP
      const localRsvps = localStorage.getItem("wedding_rsvps") || "[]";
      const parsedRsvps = JSON.parse(localRsvps);
      const newRsvp = {
        id: `rsvp_${Date.now()}`,
        name: formData.name,
        attendance: formData.attendance,
        guests: Number(formData.guests || 1),
        message: formData.message,
        date: new Date().toISOString(),
      };
      parsedRsvps.push(newRsvp);
      localStorage.setItem("wedding_rsvps", JSON.stringify(parsedRsvps));

      // 2. Add Wish if message text area is populated
      if (formData.message.trim()) {
        const localWishes = localStorage.getItem("wedding_wishes") || "[]";
        const parsedWishes = JSON.parse(localWishes);
        const newWish = {
          id: `wish_${Date.now()}`,
          guest_name: formData.name,
          message: formData.message,
        };
        parsedWishes.push(newWish);
        localStorage.setItem("wedding_wishes", JSON.stringify(parsedWishes));
        setWishes(parsedWishes);
      }

      // Update counters
      const updatedAttendees = parsedRsvps.reduce(
        (acc, r) => acc + (r.guests || 1),
        210,
      );
      setAttendeesCount(updatedAttendees);

      setRsvpPending(false);
      setRsvpModalOpen(false);
      setRsvpSuccessOpen(true);
    }, 1000);
  };

  // Calendar Event .ics downloader
  const downloadIcsFile = () => {
    const startDateTime = new Date("2026-08-04T19:00:00+03:00"); // 7:00 PM Cairo Time
    const endDateTime = new Date(startDateTime.getTime() + 4 * 60 * 60 * 1000); // 4 hours event

    const formatIcsDate = (date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//MOHAMED & SOHILA//Invitation//EN",
      "BEGIN:VEVENT",
      `DTSTART:${formatIcsDate(startDateTime)}`,
      `DTEND:${formatIcsDate(endDateTime)}`,
      "SUMMARY:Wedding of Mohamed & Sohila",
      "DESCRIPTION:We cordially invite you to the wedding celebration of our son and daughter.",
      "LOCATION:قاعة الياسمين بنادي المقاولون العرب - صلاح سالم - القاهرة",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Wedding_Mohamed_and_Sohila.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden select-none'>
      {/* Background audio file */}
      <audio ref={audioRef} src={musicFileUrl} loop preload='auto' />

      {/* Desktop Background Ambience */}
      <div className='ambient-bg'>
        <div className='ambient-circle-1' />
        <div className='ambient-circle-2' />
      </div>

      {/* ENVELOPE CARD SEAL OPENER */}
      {!envelopeOpen && (
        <EnvelopeCover
          waxSealUrl={waxSealUrl}
          onOpen={() => {
            setEnvelopeOpen(true);
            setMusicPlaying(true);
          }}
          isOpen={envelopeOpen}
        />
      )}

      {/* CENTERED MOBILE CARD CONTAINER */}
      <div className='relative w-full max-w-[393px] mx-auto min-h-screen bg-[#fdfbf7] border-x border-[#c5a880]/15 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 flex flex-col justify-start select-none'>
        {/* Falling soft background dust particles */}
        <SnowfallEffect />

        {/* SECTION 1: GREETINGS HEADER */}
        <section
          ref={greetingRef}
          className='relative min-h-[640px] flex flex-col items-center justify-between text-center px-6 pt-24 pb-30 overflow-hidden'
          style={{
            backgroundImage: `url("${heroBg}")`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Top text */}
          <div className='mt-8'>
            <span className='font-cinzel text-[11px] uppercase tracking-[0.4em] text-[#5a483a] font-semibold'>
              Wedding
            </span>
          </div>

          {/* Names block */}
          <div className='flex flex-col items-center justify-center my-auto py-8'>
            <h1
              className='font-script text-[62px] text-[#776248] leading-none mb-1 select-none'
              style={{
                textShadow:
                  "1px 1px 0px #ffffffff, 2px 2px 0px #ffffff, 0px 4px 8px rgba(90, 77, 65, 0.25)",
              }}
            >
              Mohamed
            </h1>
            <span
              className='font-cinzel text-3xl font-normal text-[#776248] my-3 block select-none'
              style={{
                textShadow: "1px 1px 0px #ffffff",
              }}
            >
              &amp;
            </span>
            <h1
              className='font-script text-[62px] text-[#776248] leading-none mt-1 select-none'
              style={{
                textShadow:
                  "1px 1px 0px #ffffff, 2px 2px 0px #ffffff, 0px 4px 8px rgba(90, 77, 65, 0.25)",
              }}
            >
              Sohila
            </h1>
          </div>

          {/* Bottom Date text */}
          <div className='mb-8'>
            <span className='font-cinzel text-[10px] uppercase tracking-[0.25em] text-[#5a483a] font-semibold'>
              Tuesday, 4 August 2026 · 7:00 PM
            </span>
          </div>
        </section>

        {/* Decorative Ornament Separator */}
        <div className='flex justify-center items-center py-8 px-6'>
          <img
            src={ornamentSeparator}
            alt='Ornament Separator'
            className='w-48 h-auto object-contain opacity-80'
          />
        </div>

        {/* SECTION 2: SAVE THE DATE */}
        <section
          ref={detailsRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start text-center'
        >
          {/* Card Border frame */}
          <div
            className='w-full max-w-[350px] mx-auto rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 shadow-md relative overflow-hidden text-center'
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Corner leaf elements inside card */}
            <GoldCornerOrnament className='absolute top-2 left-2 rotate-0 opacity-40 scale-75' />
            <GoldCornerOrnament className='absolute top-2 right-2 rotate-90 opacity-40 scale-75' />

            <h3 className='font-cinzel text-[11px] font-bold tracking-[0.3em] text-[#7d6447] uppercase mb-5 select-none'>
              Save The Date
            </h3>

            {/* Gregorian Date display */}
            <p className='text-[#7d6447] font-cinzel text-[16px] font-bold tracking-wide uppercase select-none'>
              Tuesday, 4 August 2026
            </p>

            {/* Hijri Date display */}
            <p className='text-[10px] font-inter text-[#7d6447]/85 font-bold tracking-widest mt-1.5 uppercase mb-6 select-none'>
              21 Safar 1448 AH
            </p>

            {/* Custom elegant gold separator */}
            <div className='w-full flex items-center justify-center gap-3 my-6 select-none'>
              <div className='flex-1 h-[0.5px] bg-[#c5a880]/30' />
              <i className='fa-solid fa-heart text-[#7d6447]/65 text-[11px] animate-pulse'></i>
              <div className='flex-1 h-[0.5px] bg-[#c5a880]/30' />
            </div>

            {/* Time / Location details */}
            <div className='space-y-4 mb-8'>
              <div>
                <span className='text-[9px] font-cinzel text-[#7d6447]/90 tracking-widest uppercase block mb-1.5 font-bold'>
                  Time
                </span>
                <span className='text-sm font-cinzel text-[#5a483a] font-semibold'>
                  Starts at 7:00 PM
                </span>
              </div>
              <div>
                <span className='text-[9px] font-cinzel text-[#7d6447]/90 tracking-widest uppercase block mb-1.5 font-bold'>
                  Venue
                </span>
                <span className='text-sm font-cinzel text-[#5a483a] font-semibold block'>
                  {venueName}
                </span>
                <span className='text-[11px] font-inter text-[#5a483a]/80 block max-w-[220px] mx-auto mt-1 leading-normal font-medium'>
                  {venueAddress}
                </span>
              </div>
            </div>

            {/* ICS Downloader Button */}
            <button
              onClick={downloadIcsFile}
              className='px-8 py-3 bg-[#7d6447] hover:bg-[#665139] text-white font-cinzel text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_8px_20px_rgba(125,100,71,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto cursor-pointer'
            >
              <i className='fa-regular fa-calendar-plus'></i>
              Add to Calendar
            </button>
          </div>
        </section>

        {/* SECTION: OUR LOVE STORY */}
        <section className='relative px-6 py-12 flex flex-col items-center justify-start text-center'>
          <div className='w-full flex items-center justify-center gap-3 mb-8'>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
            <span className='font-script text-2xl text-[#c5a880] font-sans font-light lowercase'>
              &amp;
            </span>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
          </div>
          <h3 className='font-cinzel text-lg font-bold text-[#7d6447] mb-1 tracking-wide'>
            Our Love Story
          </h3>
          <p className='text-[16px] font-cairo font-bold text-[#7d6447]/80 mb-10 uppercase tracking-normal'>
            قصة حبنا
          </p>

          <div className='relative w-full max-w-[340px] mx-auto flex flex-col items-center'>
            {/* Central Vertical Line */}
            <div className='absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#c5a880]/30 z-0' />

            {/* Event 1: How We Met */}
            <div className='w-full mb-10 relative z-10'>
              {/* Circle Icon Indicator */}
              <div className='w-12 h-12 rounded-full border border-[#c5a880]/30 bg-[#fdfbf7] flex items-center justify-center mx-auto shadow-md transition-all duration-300 hover:scale-110 hover:border-[#c5a880] mb-4'>
                <i className='fa-solid fa-handshake text-[#c5a880] text-lg'></i>
              </div>

              {/* Card */}
              <div
                className='w-full rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 bg-white/40 shadow-md relative transition-all duration-500 hover:shadow-lg hover:scale-[1.01]'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0.15))",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Card Corners */}
                <GoldCornerOrnament className='absolute top-2 left-2 rotate-0 opacity-40 scale-75' />
                <GoldCornerOrnament className='absolute top-2 right-2 rotate-90 opacity-40 scale-75' />

                {/* Small Header Icons */}
                <div className='flex justify-center gap-3 text-[#c5a880] text-[11px] mb-2'>
                  <i className='fa-regular fa-user'></i>
                  <i className='fa-solid fa-heart-pulse'></i>
                  <i className='fa-solid fa-location-dot'></i>
                </div>

                <h4 className='font-cinzel text-sm font-bold tracking-[0.2em] text-[#7d6447] uppercase mb-1 select-none'>
                  How We Met
                </h4>
                <p className='text-[16px] font-cairo text-[#7d6447]/80 font-bold tracking-normal uppercase mb-4 select-none'>
                  كيف التقينا
                </p>

                <p className='text-xs font-inter text-[#5a483a] leading-relaxed max-w-[260px] mx-auto'>
                  "Every love story is beautiful, but ours is my favorite. It
                  all started when our paths crossed, and from that moment, we
                  knew our lives would be changed forever."
                </p>
                <p
                  className='text-[11px] font-inter text-[#5a483a] leading-relaxed max-w-[260px] mx-auto mt-2 font-medium'
                  dir='rtl'
                >
                  "كل قصة حب جميلة، لكن قصتنا هي المفضلة لدي. بدأ كل شيء عندما
                  تقاطعت طرقنا، ومنذ تلك اللحظة، علمنا أن حياتنا قد تغيرت إلى
                  الأبد."
                </p>

                {/* Illustration */}
                <div className='w-full flex justify-center mt-5'>
                  <img
                    src={howWeMetImg}
                    alt='How We Met Illustration'
                    className='w-full h-auto max-h-[180px] object-contain rounded-xl select-none'
                  />
                </div>
              </div>
            </div>

            {/* Event 2: The Proposal */}
            <div className='w-full relative z-10'>
              {/* Circle Icon Indicator */}
              <div className='w-12 h-12 rounded-full border border-[#c5a880]/30 bg-[#fdfbf7] flex items-center justify-center mx-auto shadow-md transition-all duration-300 hover:scale-110 hover:border-[#c5a880] mb-4'>
                <i className='fa-solid fa-ring text-[#c5a880] text-lg'></i>
              </div>

              {/* Card */}
              <div
                className='w-full rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 bg-white/40 shadow-md relative transition-all duration-500 hover:shadow-lg hover:scale-[1.01]'
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0.15))",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Card Corners */}
                <GoldCornerOrnament className='absolute bottom-2 left-2 rotate-270 opacity-40 scale-75' />
                <GoldCornerOrnament className='absolute bottom-2 right-2 rotate-180 opacity-40 scale-75' />

                {/* Illustration */}
                <div className='w-full flex justify-center mb-5 '>
                  <img
                    src={proposalImg}
                    alt='Proposal Illustration'
                    className='w-40 h-40 object-cover rounded-lg border border-[#c5a880]/25 shadow-md select-none'
                  />
                </div>

                {/* Small Header Icons */}
                <div className='flex justify-center gap-3 text-[#c5a880] text-[11px] mb-2'>
                  <i className='fa-regular fa-heart'></i>
                  <i className='fa-solid fa-ring'></i>
                </div>

                <h4 className='font-cinzel text-sm font-bold tracking-[0.2em] text-[#7d6447] uppercase mb-1 select-none'>
                  Our Engagement
                </h4>
                <p className='text-[16px] font-cairo text-[#7d6447]/80 font-bold tracking-normal uppercase mb-4 select-none'>
                  الخطوبة
                </p>

                <p className='text-xs font-inter text-[#5a483a] leading-relaxed max-w-[260px] mx-auto'>
                  "Our engagement was a chapter filled with love and anticipation, and today marks the beginning of the most beautiful chapter of our story."
                </p>
                <p
                  className='text-[11px] font-inter text-[#5a483a] leading-relaxed max-w-[260px] mx-auto mt-2 font-medium'
                  dir='rtl'
                >
                  "كانت الخطوبة فصلًا امتلأ بالمودة والانتظار، وهذا اليوم هو بداية الفصل الأجمل من حكايتنا."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LIVE COUNTDOWN */}
        <section className='relative px-6 py-10 flex flex-col items-center justify-start text-center'>
          <div className='w-full flex items-center justify-center gap-3 mb-8'>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
            <span className='font-script text-2xl text-[#c5a880] font-sans font-light lowercase'>
              &amp;
            </span>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
          </div>

          {/* Countdown Card Container */}
          <div
            className='w-full max-w-[350px] mx-auto rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 shadow-md relative overflow-hidden text-center animate-fade-in'
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Title inside card */}
            <h3 className='font-cinzel text-[11px] font-bold tracking-[0.3em] text-[#7d6447] uppercase mb-6 select-none'>
              Countdown
            </h3>

            {/* Time Countdown Blocks */}
            <div className='grid grid-cols-4 gap-2.5 w-full'>
              {[
                { value: countdown.days, label: "DAYS" },
                { value: countdown.hours, label: "HRS" },
                { value: countdown.minutes, label: "MIN" },
                { value: countdown.seconds, label: "SEC" },
              ].map((unit, idx) => (
                <div
                  key={idx}
                  className='flex flex-col items-center justify-center py-4 px-1 rounded-2xl border  border-[#c5a880]/20 shadow-md bg-white/20 transition-all duration-300 hover:scale-105'
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  <span className='text-2xl font-normal font-cinzel text-[#7d6447] leading-none mb-1.5 select-none'>
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className='text-[8px] font-cinzel text-[#7d6447]/90 uppercase tracking-widest font-semibold select-none'>
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: EVENT PROGRAM (Interactive timeline) */}
        <section
          ref={programRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start'
        >
          {/* Timeline Card Container */}
          <div
            className='w-full max-w-[350px] mx-auto rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 shadow-md relative overflow-hidden text-center'
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Title inside card */}
            <h3 className='font-cinzel text-[11px] font-bold tracking-[0.3em] text-[#7d6447] uppercase mb-1 select-none'>
              Event Program
            </h3>
            <p className='text-[16px] font-cairo font-bold text-[#7d6447]/80 uppercase tracking-normal mb-8 select-none'>
              برنامج المناسبة
            </p>

            {/* TIMELINE VIEW CONTAINER */}
            <div ref={timelineRef} className='relative w-full py-4 select-none'>
              {/* Scroll progress line (grows as user scrolls down) */}
              <div className='absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#c5a880]/25 z-0' />
              <div
                className='absolute left-1/2 -translate-x-1/2 top-4 w-[2px] bg-[#7d6447] transition-all duration-300 z-0'
                style={{
                  height: `${timelineProgress}%`,
                  maxHeight: "calc(100% - 32px)",
                }}
              />

              {/* Timeline nodes */}
              <div className='space-y-10 relative z-10'>
                {[
                  {
                    time: "7:00 PM",
                    title: "Guest Arrival",
                    desc: "وصول الضيوف",
                  },
                  {
                    time: "7:30 PM",
                    title: "Bridal Entrance",
                    desc: "زفة العروسين",
                  },
                  { time: "9:30 PM", title: "Dinner", desc: "عشاء الحفل" },
                  {
                    time: "11:00 PM",
                    title: "End of the Ceremony",
                    desc: "انتهاء الحفل",
                  },
                ].map((item, idx) => {
                  const isActive = activeTimeline.includes(idx);
                  return (
                    <div
                      key={idx}
                      className='relative flex items-center justify-between w-full'
                    >
                      {/* Left Side: Time */}
                      <div
                        className={`w-[42%] text-right pr-3 font-cinzel text-xs font-bold transition-colors duration-500 ${isActive ? "text-[#7d6447]" : "text-[#7d6447]/50"}`}
                      >
                        {item.time}
                      </div>

                      {/* Center: Dot Indicator */}
                      <div className='w-[16%] flex justify-center items-center'>
                        <div
                          className={`timeline-node w-[12px] h-[12px] rounded-full border-2 transition-all duration-500 ${isActive
                            ? "border-[#7d6447] bg-[#7d6447] scale-125 shadow-[0_0_8px_rgba(125,100,71,0.5)]"
                            : "border-[#7d6447]/30 bg-[#fdfbf7] scale-100"
                            }`}
                        />
                      </div>

                      {/* Right Side: Description */}
                      <div className='w-[42%] text-left pl-3 flex flex-col justify-center'>
                        <span
                          className={`text-[10.5px] font-cinzel font-bold leading-tight transition-colors duration-500 ${isActive ? "text-[#7d6447]" : "text-[#7d6447]/50"}`}
                        >
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] font-inter mt-0.5 transition-colors duration-500 ${isActive ? "text-[#5a483a]" : "text-[#5a483a]/50"}`}
                        >
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EVENT DETAILS (Rules) */}
        <section
          ref={rulesRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start bg-gradient-to-b from-transparent via-[#c5a880]/5 to-transparent'
        >
          <h3 className='font-cinzel text-lg font-bold text-[#7d6447] mb-2 tracking-wide text-center'>
            Event Details
          </h3>
          <p className='text-[16px] font-cairo font-bold text-[#7d6447]/80 mb-10 uppercase tracking-normal text-center'>
            تفاصيل الحفل
          </p>

          {/* Rules Icons Checklist */}
          <div className='w-full max-w-[340px] space-y-4'>
            {[
              {
                iconClass: "fa-location-dot",
                title: "Yasmin Hall / قاعة الياسمين",
                desc: "بنادي المقاولون العرب - صلاح سالم - القاهرة",
              },
              {
                iconClass: "fa-clock",
                title: "Please Arrive On Time",
                desc: "يرجى الحضور في الموعد",
              },
              {
                iconClass: "fa-baby-carriage",
                title: "Kids Area Available",
                desc: "تتوفر منطقة ألعاب للأطفال",
              },
              {
                iconClass: "fa-square-parking",
                title: "PARKING AVAILABLE",
                desc: "متوفر مكان للسيارات",
              },
            ].map((rule, idx) => {
              const isActive = activeRules.includes(idx);
              return (
                <div
                  key={idx}
                  className='rule-card flex items-center gap-4 text-left transition-all duration-700 p-3.5 px-5 rounded-2xl w-full border border-[#c5a880]/20 shadow-sm'
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "translateX(0)" : "translateX(16px)",
                    background:
                      "linear-gradient(to right, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  {/* Circular glowing icon holder */}
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-500 bg-[#fdfbf7] shadow-sm'
                    style={{
                      borderColor: isActive ? "#c5a880" : "#c5a88050",
                      boxShadow: isActive
                        ? "0 0 10px rgba(197, 168, 128, 0.2)"
                        : "none",
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    <i
                      className={`fa-solid ${rule.iconClass} text-[#7d6447] text-sm`}
                    ></i>
                  </div>

                  <div className='flex flex-col text-left'>
                    <span className='text-[11px] font-cinzel font-bold block text-[#7d6447] uppercase tracking-wider leading-tight'>
                      {rule.title}
                    </span>
                    <span className='text-[9.5px] font-inter text-[#5a483a]/80 block font-medium mt-0.5'>
                      {rule.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: BRIDE & GROOM MESSAGE */}
        <section
          ref={contactRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start text-center'
        >
          {/* <FiligreeOrnament className="opacity-60 mb-4" /> */}
          <div className='w-full flex items-center justify-center gap-3 mb-8'>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
            <span className='font-script text-2xl text-[#c5a880] font-sans font-light lowercase'>
              &amp;
            </span>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
          </div>
          <h3 className='font-cinzel text-lg font-bold text-[#7d6447] mb-1 tracking-wide uppercase'>
            Bride &amp; Groom Message
          </h3>
          <p className='text-[16px] font-cairo font-bold text-[#7d6447]/80 mb-10 uppercase tracking-normal'>
            رسالة العروسين
          </p>

          <div
            className='w-full max-w-[350px] mx-auto rounded-[32px] p-6 pt-7 pb-8 border border-[#c5a880]/20 shadow-md relative overflow-hidden text-center'
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <GoldCornerOrnament className='absolute bottom-2 left-2 rotate-270 opacity-40 scale-75' />
            <GoldCornerOrnament className='absolute bottom-2 right-2 rotate-180 opacity-40 scale-75' />

            <p className='text-xs font-inter text-[#5a483a] italic leading-relaxed max-w-[260px] mx-auto'>
              "Dear friends and family,
              <br />
              <br />
              Together with joyful hearts, we invite you to share in the
              celebration of our wedding. Your presence will make our special
              day even more meaningful."
            </p>
            <p
              className='text-[11px] font-inter text-[#5a483a] leading-relaxed max-w-[260px] mx-auto mt-4 font-medium mb-6'
              dir='rtl'
            >
              "أعزائنا وعائلتنا،
              <br />
              <br />
              بقلوب تملؤها الفرحة، ندعوكم لمشاركتنا الاحتفال بزفافنا. حضوركم
              سيجعل يومنا الخاص أكثر تميزًا وبهجة."
            </p>

            <p className='font-script text-2xl text-[#7d6447] font-sans font-light'>
              With Love, Mohamed &amp; Sohila
            </p>
          </div>
        </section>

        {/* SECTION 8: LOCATION MAP */}
        <section
          ref={mapRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start text-center'
        >
          <div className='w-full flex items-center justify-center gap-3 mb-8'>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
            <span className='font-script text-2xl text-[#c5a880] font-sans font-light lowercase'>
              &amp;
            </span>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
          </div>
          <h3 className='font-cinzel text-lg font-bold text-[#7d6447] mb-2 tracking-wide'>
            Location Map
          </h3>
          <p className='text-[14px] font-cairo font-bold text-[#7d6447]/80 mb-6 uppercase tracking-normal'>
            خريطة الموقع
          </p>

          {/* Embedded Google map iframe */}
          <div className='w-full h-44 rounded-2xl overflow-hidden border-2 border-[#7d6447]/35 shadow-md relative z-20 mb-6 bg-white'>
            <iframe
              src='https://maps.google.com/maps?q=%D9%86%D8%A7%D8%AF%D9%8A%20%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D9%88%D9%86%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%20%D9%82%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86&t=&z=15&ie=UTF8&iwloc=&output=embed'
              width='100%'
              height='100%'
              style={{
                border: 0,
              }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='قاعة الياسمين بنادي المقاولون العرب'
            />
          </div>

          <a
            href={mapLocationUrl}
            target='_blank'
            rel='noreferrer'
            className='px-8 py-3 bg-[#7d6447] hover:bg-[#665139] text-white font-cinzel text-[10px] font-bold tracking-[0.2em] uppercase rounded-full shadow-[0_8px_20px_rgba(125,100,71,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2'
          >
            <i className='fa-solid fa-map-location-dot'></i>
            Open Google Maps
          </a>
        </section>

        {/* SECTION 9: GUESTBOOK & RSVP */}
        <section
          ref={guestbookRef}
          className='relative px-6 py-12 flex flex-col items-center justify-start text-center'
        >
          <div className='w-full flex items-center justify-center gap-3 mb-8'>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
            <span className='font-script text-2xl text-[#c5a880] font-sans font-light lowercase'>
              &amp;
            </span>
            <div className='flex-1 h-px bg-[#c5a880]/30' />
          </div>
          {/* Confirmed attendees live count */}
          <div
            className='w-full max-w-[280px] mx-auto p-5 rounded-2xl border border-[#c5a880]/20 shadow-sm relative overflow-hidden text-center mb-8 transition-all duration-300 hover:scale-[1.02]'
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <div className='flex flex-col items-center justify-center'>
              <i className='fa-solid fa-users text-[#7d6447] text-base mb-1.5 animate-pulse'></i>
              <span className='text-[9px] font-cinzel text-[#7d6447]/90 tracking-widest uppercase font-bold mb-2 select-none'>
                Total Attendees / عدد الحضور
              </span>
              <span className='text-3xl font-normal text-[#7d6447] font-cinzel tracking-wider block select-none'>
                {attendeesCount}
              </span>
            </div>
          </div>

          {/* RSVP Button triggers Modal Form */}
          <div className='relative mb-2 group'>
            {/* Pulsing ring to attract focus */}
            <div className='absolute -inset-1 rounded-full border border-[#c5a880]/50 animate-pulse-ring pointer-events-none' />
            <button
              onClick={() => setRsvpModalOpen(true)}
              className='relative px-8 py-3.5 bg-[#7d6447] hover:bg-[#665139] text-white text-[12px] font-semibold rounded-full uppercase tracking-[0.15em] shadow-[0_8px_20px_rgba(125,100,71,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer'
            >
              <i className='fa-regular fa-bell text-xl'></i>
              RSVP &amp; Send Wishes <br /> <span className='font-cairo tracking-normal block mt-0.5'>تأكيد الحضور والتهنئة</span>
            </button>
          </div>

          <p className='text-[14px] font-cairo text-[#5a483a]/75 max-w-xs leading-relaxed mb-10 select-none tracking-normal'>
            يسعدنا تسجيل حضوركم ومشاركتنا تهانيكم الصادقة للعروسين عبر هذا النموذج
          </p>

          {/* Wishes List (Guestbook) */}
          <div className='w-full flex items-center justify-center gap-2 mb-4'>
            <i className='fa-regular fa-message text-[#7d6447] text-xs'></i>
            <span className='text-[16px] font-cinzel text-[#7d6447] tracking-widest uppercase font-bold select-none'>
              Wishes / <span className='font-cairo tracking-normal'>التهاني</span>
            </span>
          </div>

          {/* Wishes List (Guestbook) Wrapper with Elegant Frame */}
          <div
            className='relative w-full max-w-sm mx-auto p-6 rounded-[28px] border-2 border-[#c5a880]/30 shadow-lg overflow-hidden bg-white/20 mt-2'
            style={{
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.15))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            {/* Elegant corner ornaments inside the frame - top-left and bottom-right diagonals */}
            <GoldCornerOrnament className='absolute top-2 left-2 rotate-0 opacity-40 scale-[0.6] z-20 pointer-events-none' />
            <GoldCornerOrnament className='absolute bottom-2 right-2 rotate-180 opacity-40 scale-[0.6] z-20 pointer-events-none' />

            {/* Wishes Scroll control buttons */}
            <button
              onClick={() => handleWishesScroll(-1)}
              className='text-[#7d6447] hover:text-[#5a483a] opacity-75 hover:opacity-100 transition-opacity mb-2 animate-float-y cursor-pointer block mx-auto'
            >
              <i className='fa-solid fa-chevron-up text-lg'></i>
            </button>

            {/* Scrollable Guest wishes list wrapper */}
            <div
              ref={wishesScrollRef}
              className='wishes-scroll w-full max-h-[300px] overflow-y-auto space-y-3 px-2 select-none relative z-10'
              style={{
                scrollbarWidth: "none",
              }}
            >
              <style>{`.wishes-scroll::-webkit-scrollbar { display: none; }`}</style>
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className='p-4 mb-2 border border-[#c5a880]/20 rounded-2xl text-center bg-white/20 hover:scale-[1.01] transition-transform duration-300 shadow-sm relative overflow-hidden group'
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.15))",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  {/* Decorative quote marks watermarks */}
                  <i className="fa-solid fa-quote-left absolute top-3 left-4 text-[#c5a880]/10 text-xl pointer-events-none group-hover:scale-110 transition-transform"></i>
                  <i className="fa-solid fa-quote-right absolute bottom-3 right-4 text-[#c5a880]/10 text-xl pointer-events-none group-hover:scale-110 transition-transform"></i>

                  <p className='text-xs font-inter text-[#5a483a] italic leading-relaxed relative z-10 px-4'>
                    "{w.message}"
                  </p>
                  <span className='text-[10px] font-cinzel text-[#7d6447] tracking-wider block font-bold mt-2 relative z-10'>
                    — {w.guest_name}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleWishesScroll(1)}
              className='text-[#7d6447] hover:text-[#5a483a] opacity-75 hover:opacity-100 transition-opacity mt-2 cursor-pointer block mx-auto'
            >
              <i className='fa-solid fa-chevron-down text-lg'></i>
            </button>
          </div>
        </section>

        {/* SECTION 10: FOOTER */}
        <footer className='relative w-full pt-12 pb-28 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-t from-[#c5a880]/5 to-transparent'>
          <style>{`
            @keyframes heart-ping {
              0% { transform: scale(1); opacity: 0.8; }
              100% { transform: scale(2.2); opacity: 0; }
            }
            .animate-heart-ping {
              animation: heart-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
          `}</style>

          {/* Golden Heart Divider */}
          <div className='w-full flex items-center justify-center gap-4 mb-6 select-none'>
            <div className='w-16 h-px bg-gradient-to-r from-transparent to-[#c5a880]/40' />
            <div className='relative flex items-center justify-center'>
              {/* Static background heart */}
              <i className='fa-solid fa-heart text-[#7d6447] text-xl relative z-10'></i>
              {/* Pulsing/Pinging overlay heart */}
              <i className='fa-solid fa-heart text-[#7d6447]/65 text-xl absolute z-0 animate-heart-ping'></i>
            </div>
            <div className='w-16 h-px bg-gradient-to-l from-transparent to-[#c5a880]/40' />
          </div>

          {/* Couple Names */}
          <h4 className='font-cinzel text-[15px] font-bold tracking-[0.25em] text-[#7d6447] uppercase mb-3 select-none'>
            Mohamed &amp; Sohila
          </h4>

          {/* Closing Message */}
          <p className='text-[9.5px] font-cinzel text-[#7d6447] tracking-[0.2em] uppercase font-bold mb-1.5 select-none'>
            Thank you for sharing our joy
          </p>
          <p className='text-[14px] font-cairo text-[#5a483a]/80 font-medium select-none tracking-normal'>
            شكرًا لمشاركتكم فرحتنا
          </p>

          {/* Wed Date */}
          <span className='text-[14px] font-bold font-cinzel text-[#c5a880] tracking-[0.3em] block mt-8 select-none'>
            04.08.2026
          </span>
        </footer>

        {/* FLOATING BOTTOM NAV BAR */}
        <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] w-[340px] px-4'>
          <div className='w-full py-3 px-6 rounded-full dark-glass-card flex items-center justify-between pointer-events-auto'>
            {/* Message quickscroll button */}
            <button
              onClick={() => handleScrollTo(contactRef)}
              className='text-[#fbfbf6]/80 hover:text-white transition-colors flex flex-col items-center justify-center gap-0.5'
            >
              <i className='fa-regular fa-envelope text-base'></i>
              <span className='text-[8px] uppercase tracking-wider'>
                Message
              </span>
            </button>

            {/* Music controller button */}
            <button
              onClick={() => setMusicPlaying(!musicPlaying)}
              className='text-[#fbfbf6]/80 hover:text-white transition-colors flex flex-col items-center justify-center gap-0.5'
            >
              <i
                className={`fa-solid ${musicPlaying ? "fa-volume-high animate-pulse" : "fa-volume-xmark"} text-base`}
              ></i>
              <span className='text-[8px] uppercase tracking-wider'>
                {musicPlaying ? "Mute" : "Music"}
              </span>
            </button>

            {/* Location quickscroll button */}
            <button
              onClick={() => handleScrollTo(mapRef)}
              className='text-[#fbfbf6]/80 hover:text-white transition-colors flex flex-col items-center justify-center gap-0.5'
            >
              <i className='fa-solid fa-map-location-dot text-base'></i>
              <span className='text-[8px] uppercase tracking-wider'>Map</span>
            </button>

            {/* RSVP modal trigger button */}
            <button
              onClick={() => setRsvpModalOpen(true)}
              className='text-[#fbfbf6]/80 hover:text-white transition-colors flex flex-col items-center justify-center gap-0.5 animate-pulse'
            >
              <i className='fa-regular fa-bell text-base text-[#c5a880]'></i>
              <span className='text-[8px] uppercase tracking-wider text-[#c5a880] font-bold'>
                RSVP
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL OVERLAYS */}
      <RSVPModal
        isOpen={rsvpModalOpen}
        onClose={() => setRsvpModalOpen(false)}
        onSubmit={handleRsvpSubmit}
        isPending={rsvpPending}
      />

      <RSVPSuccessOverlay
        isOpen={rsvpSuccessOpen}
        onClose={() => setRsvpSuccessOpen(false)}
      />
    </div>
  );
}

// Variables declarations
const venueName = "قاعة الياسمين";
const venueAddress = "بنادي المقاولون العرب - صلاح سالم - القاهرة";
const mapLocationUrl =
  "https://maps.app.goo.gl/igSrmD5fEZSH7VVRA";

export default App;
