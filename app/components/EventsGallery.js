"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const events = [
  { name: "TRC 3.0",               date: "2026",      photo: "/events/trc3.jpg"      },
  { name: "TRC 2.0",               date: "2025",  photo: "/events/trc2.webp"     },
  { name: "TRC 1.0",               date: "2024",  photo: "/events/trc.JPG"       },
  { name: "IdeaGate",              date: "2025",  photo: "/events/ideagate.webp" },
  { name: "IEEE DAY",              date: "2025",  photo: "/events/ieeeday.webp"  },
  { name: "Sports Play on",date: "2026",     photo: "/events/touta.webp"    },
  { name: "IEEE ISIMS SB ANNIVERSARY", date: "2026", photo: "/events/anniv6.webp"  },
];

export default function EventsGallery() {
  const [active, setActive] = useState(0);
  const stripRef  = useRef(null);
  const intervalRef = useRef(null);

  // drag state
  const isDragging   = useRef(false);
  const dragStartX   = useRef(0);
  const scrollStartX = useRef(0);
  const hasDragged   = useRef(false);

  /* ── auto-advance ── */
  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % events.length);
  }, []);

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(advance, 3000);
  }, [advance]);

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3000);
    return () => clearInterval(intervalRef.current);
  }, [advance]);

  /* ── scroll active thumb into view ── */
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const thumb = strip.children[active];
    if (thumb) {
      const scrollPos = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
      strip.scrollTo({ left: scrollPos, behavior: "smooth" });
    }
  }, [active]);

  /* ── mouse drag handlers ── */
  const onMouseDown = (e) => {
    isDragging.current   = true;
    hasDragged.current   = false;
    dragStartX.current   = e.pageX;
    scrollStartX.current = stripRef.current.scrollLeft;
    stripRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.pageX - dragStartX.current;
    if (Math.abs(delta) > 3) hasDragged.current = true;
    stripRef.current.scrollLeft = scrollStartX.current - delta;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (stripRef.current) stripRef.current.style.cursor = "grab";
  };

  const handleThumbClick = (i) => {
    if (hasDragged.current) return; // don't fire click after drag
    setActive(i);
    resetInterval();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main Photo with fade */}
      <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={events[active].photo}
              alt={events[active].name}
              fill
              className="object-cover object-center"
              quality={100}
              sizes="80vw"
            />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-medium text-[15px] sm:text-[17px]">{events[active].name}</p>
              <p className="text-white/70 text-[13px] font-light">{events[active].date}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip — drag with mouse, swipe with finger */}
      <div
        ref={stripRef}
        className="flex relative gap-3 overflow-x-auto pb-2 scrollbar-hide select-none"
        style={{ cursor: "grab", WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {events.map((ev, i) => (
          <button
            key={i}
            onClick={() => handleThumbClick(i)}
            draggable={false}
            className={`flex-shrink-0 flex flex-col gap-2 text-left group transition-all duration-300 ${
              i === active ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            <div
              className={`relative w-28 sm:w-36 aspect-video bg-gray-100 overflow-hidden transition-all duration-300 ${
                i === active 
                  ? "border-2 border-[#1C1C1F] shadow-sm scale-100 filter-none" 
                  : "border border-gray-200 scale-95 grayscale-[50%] hover:grayscale-0"
              }`}
            >
              <Image
                src={ev.photo}
                alt={ev.name}
                fill
                className={`object-cover object-center pointer-events-none transition-transform duration-700 ${
                  i === active ? "scale-105" : "scale-100"
                }`}
                quality={80}
                sizes="150px"
              />
              
              {/* Animated Progress Bar for Active Thumbnail */}
              {i === active && (
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[3px] bg-[#1C1C1F] z-10"
                />
              )}
            </div>
            <span className={`text-[12px] max-w-[112px] sm:max-w-[144px] leading-tight line-clamp-2 transition-colors ${
              i === active ? "text-[#1C1C1F] font-medium" : "text-[#646468] font-light"
            }`}>
              {ev.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
