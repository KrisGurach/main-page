"use client";
import styles from "./SliderParthners.module.css";
import { useEffect, useRef, useState } from "react";

export default function SliderParthners({ images: propImages }) {
  const defaultImages = [
    "./images/1.webp",
    "./images/2.webp",
    "./images/3.webp",
    "./images/4.webp",
    "./images/5.webp",
    "./images/6.webp",
  ];

const images = propImages && propImages.length ? propImages : defaultImages;

  const slidesToShow = 5;
  const slides = [
    ...images.slice(-slidesToShow),
    ...images,
    ...images.slice(0, slidesToShow),
  ];

  const initialIndex = slidesToShow; 
  const [index, setIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const indexRef = useRef(initialIndex);

  const slideWidth = 100 / slidesToShow;

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      track.style.transform = `translateX(-${initialIndex * slideWidth}%)`;
    }
    indexRef.current = initialIndex;
  }, []);

  function moveTo(targetIndex, animate = true) {
    const track = trackRef.current;
    if (!track) return;
    setIsAnimating(true);
    if (animate) track.style.transition = "transform 0.45s ease";
    else track.style.transition = "none";
    track.style.transform = `translateX(-${targetIndex * slideWidth}%)`;
    setIndex(targetIndex);
    indexRef.current = targetIndex;
  }

  function next() {
    if (isAnimating) return;
    moveTo(indexRef.current + 1, true);
  }

  function prev() {
    if (isAnimating) return;
    moveTo(indexRef.current - 1, true);
  }

  function handleTransitionEnd() {
    const track = trackRef.current;
    setIsAnimating(false);

    if (indexRef.current >= slides.length - slidesToShow) {
      const newIndex = slidesToShow;
      if (track) {
        track.style.transition = "none";
        track.style.transform = `translateX(-${newIndex * slideWidth}%)`;
      }
      setIndex(newIndex);
      indexRef.current = newIndex;
    }

    if (indexRef.current < slidesToShow) {
      const newIndex = slides.length - slidesToShow - 1;
      if (track) {
        track.style.transition = "none";
        track.style.transform = `translateX(-${newIndex * slideWidth}%)`;
      }
      setIndex(newIndex);
      indexRef.current = newIndex;
    }
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isAnimating]);

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prev}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          // inline transform kept for initial render safety
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {slides.map((src, i) => (
            <div className={styles.slide} key={i}>
              <div className={styles.slideBox}>
                <img src={src} alt={`logo ${i}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={next}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
