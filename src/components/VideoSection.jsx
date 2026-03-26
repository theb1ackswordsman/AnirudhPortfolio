import { motion } from 'framer-motion'

const VideoSection = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden flex items-center justify-center" style={{ height: '80vh' }}>
      {/* Proper aspect-ratio iframe wrapper — no zoom/scale tricks */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <iframe
          src="https://player.vimeo.com/video/1146223612?autoplay=1&loop=1&muted=1&background=1&autopause=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            /* Cover container while maintaining 16:9 */
            width: 'max(100%, calc(80vh * 16 / 9))',
            height: 'max(80vh, calc(100% * 9 / 16))',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          title="Showreel"
        ></iframe>
      </div>

      {/* Overlay text */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-10">
        <p className="text-xs uppercase tracking-[0.3em] font-medium text-white/50 drop-shadow-md">
          Showreel © 2026
        </p>
      </div>
    </section>
  )
}

export default VideoSection
