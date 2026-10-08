import React, { useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Heart, MessageCircle, Upload, CheckCircle2, Film, Mic } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/chokoPatty-video.mp4');
  const [customVideoUploaded, setCustomVideoUploaded] = useState(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Ensure audio is unmuted when user deliberately clicks play
      videoRef.current.muted = isMuted;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setCustomVideoUploaded(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.muted = false;
          setIsMuted(false);
          videoRef.current.play();
          setIsPlaying(true);
        }
      }, 300);
    }
  };

  const playAuthenticVoiceAudio = () => {
    if (audioRef.current) {
      if (isPlayingVoice) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlayingVoice(false);
      } else {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setIsPlayingVoice(true);
        }).catch(() => {
          // Fallback to speech synthesis if audio play fails
          if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(CONTACT_INFO.videoTranscription);
            utterance.lang = 'es-ES';
            utterance.rate = 0.95;
            utterance.pitch = 1.2;
            utterance.onstart = () => setIsPlayingVoice(true);
            utterance.onend = () => setIsPlayingVoice(false);
            window.speechSynthesis.speak(utterance);
          }
        });
      }
    }
  };

  return (
    <section id="video-bienvenida" className="py-14 md:py-20 bg-gradient-to-b from-white via-pink-50/40 to-white relative overflow-hidden scroll-mt-20">
      {/* Decorative anime sparkles */}
      <div className="absolute top-10 right-10 text-3xl animate-float-soft opacity-60 pointer-events-none">
        ✨
      </div>
      <div className="absolute bottom-10 left-10 text-3xl animate-float-soft opacity-60 pointer-events-none [animation-delay:1.5s]">
        🧁
      </div>

      {/* Hidden Authentic Voice Audio Track */}
      <audio
        ref={audioRef}
        src="/chokoPatty-voice.mp3"
        onEnded={() => setIsPlayingVoice(false)}
        onPause={() => setIsPlayingVoice(false)}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-black uppercase tracking-wider shadow-xs">
            <Film className="w-4 h-4 text-pink-600" />
            <span>Video con Audio Auténtico Oficial</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            ¡Hola! Bienvenidos a <span className="text-pink-600">ChocoPatty</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            Escucha la voz auténtica de Patty dándote la bienvenida en su cocina pastelera. ¡Sin música de fondo, solo su voz dulce y real!
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <Mic className="w-3.5 h-3.5 text-amber-600" />
            <span>Audio Auténtico: Voz de bienvenida de Patty</span>
          </div>
        </div>

        {/* Video Player Box */}
        <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-pink-200/70 bg-slate-950 max-w-3xl mx-auto group">
          {/* Main Video Element */}
          <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              poster="/kitchen_patty.jpg"
              playsInline
              loop
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {/* Play Overlay Button if paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-pink-600/90 hover:bg-pink-500 text-white flex items-center justify-center shadow-2xl transform hover:scale-110 active:scale-95 transition-all backdrop-blur-xs cursor-pointer group-hover:ring-4 ring-pink-300 z-10"
                aria-label="Reproducir video con voz auténtica"
              >
                <Play className="w-9 h-9 fill-white ml-1" />
              </button>
            )}

            {/* Top Video Badge */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2 pointer-events-none z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>ChocoPatty • Audio Auténtico</span>
            </div>
          </div>

          {/* Quick Audio Controls & Custom File Selector */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-t border-slate-700">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white transition-colors flex items-center gap-1.5 text-xs font-bold shadow-sm cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    <span>Pausar Video</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Reproducir Video</span>
                  </>
                )}
              </button>

              <button
                onClick={handleRestart}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer"
                title="Reiniciar video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white transition-colors cursor-pointer"
                title={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <button
                onClick={playAuthenticVoiceAudio}
                className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer ${
                  isPlayingVoice
                    ? 'bg-amber-500 text-white animate-pulse'
                    : 'bg-slate-700 hover:bg-slate-600 text-amber-300'
                }`}
                title="Reproducir audio de voz directamente"
              >
                <Mic className="w-4 h-4" />
                <span>{isPlayingVoice ? 'Reproduciendo Voz...' : 'Voz Directa'}</span>
              </button>
            </div>

            {/* Custom Video File Upload Option */}
            <div className="flex items-center gap-2">
              <label
                htmlFor="video-file-input"
                className="cursor-pointer text-xs font-bold px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/30 hover:border-pink-400 transition-colors flex items-center gap-1.5"
                title="Cargar tu archivo de video original con audio directo"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{customVideoUploaded ? 'Video Cargado ✓' : 'Subir Video Original'}</span>
              </label>
              <input
                id="video-file-input"
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Video Dialogue & Mascot Box */}
        <div className="mt-8 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-7 border-2 border-pink-200 shadow-lg relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-pink-300 bg-pink-100 shrink-0 shadow-sm">
              <img
                src="/kitchen_patty.jpg"
                alt="Patty en la cocina pastelera de ChocoPatty"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-display font-black text-slate-900 text-base flex items-center gap-1.5">
                  Voz auténtica de Patty:
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" />
                </span>

                <button
                  onClick={playAuthenticVoiceAudio}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${
                    isPlayingVoice
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                  }`}
                  title="Reproducir audio de voz de Patty"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{isPlayingVoice ? 'Reproduciendo audio...' : '▶ Escuchar Audio Auténtico'}</span>
                </button>
              </div>

              <p className="text-slate-800 text-sm sm:text-base font-medium italic leading-relaxed bg-pink-50/70 p-4 rounded-2xl border border-pink-100 shadow-2xs">
                “{CONTACT_INFO.videoTranscription}”
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-semibold">
            <span className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 className="w-4 h-4" />
              Audio con voz auténtica sin música de fondo
            </span>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear directamente con Patty por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
