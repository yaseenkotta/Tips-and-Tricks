// script.js

const video = document.getElementById('scroll-video');
const overlayText = document.querySelector('.overlay-text');

// Pause the video initially
video.pause();

// Update video time and text animation based on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Current scroll position
    const scrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollFraction = scrollTop / scrollHeight; // Fraction of scroll progress

    const videoDuration = video.duration; // Total duration of the video
    if (!isNaN(videoDuration)) {
        video.currentTime = scrollFraction * videoDuration; // Synchronize video playback
    }

    // Move the overlay text upwards as the user scrolls
    const textOffset = Math.min(scrollTop / 2, 100); // Cap the translation value
    overlayText.style.transform = `translate(-50%, calc(-50% - ${textOffset}px))`;
    overlayText.style.opacity = 1 - scrollFraction * 2; // Fade out text after halfway
});
