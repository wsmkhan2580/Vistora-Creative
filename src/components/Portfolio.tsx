import { useEffect, useRef, useState } from 'react'
import { Play, X } from 'lucide-react'
import type { Category, Video } from '../types'
import { msg } from '../lib/whatsapp'
import { AI_NOTE } from '../data/site'
import { WaLink } from './ui'

const tone: Record<Category, string> = {
  Travel: 'from-sky-600 via-blue-600 to-teal-700',
  Skincare: 'from-rose-300 via-rose-400 to-purple-600',
  'Kirana Shop': 'from-amber-400 via-orange-500 to-teal-800',
  'Real Estate': 'from-slate-500 via-blue-700 to-slate-900',
}

export function VideoCard({ video, onOpen }: { video: Video; onOpen: (v: Video) => void }) {
  return (
    <article>
      <button
        type="button"
        onClick={() => onOpen(video)}
        aria-label={`Play ${video.title}`}
        className={`group relative flex aspect-[9/16] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${tone[video.category]} text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-brand`}
      >
        {video.src ? (
          <video
            src={video.src}
            poster={video.poster}
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 size-full object-cover"
          />
        ) : video.poster ? (
          <img
            src={video.poster}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        ) : null}
        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/35 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
          {video.category}
        </span>
        <span className="relative z-10 flex size-16 items-center justify-center rounded-full border border-white/70 bg-white/95 text-navy shadow-lg transition-transform group-hover:scale-110">
          <Play aria-hidden="true" />
        </span>
        <span className="absolute inset-x-4 bottom-14 z-10 text-center text-xl font-extrabold tracking-tight drop-shadow-lg">
          {video.category} Video Ad
        </span>
        {!video.src && (
          <span className="absolute bottom-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs">
            Video coming soon
          </span>
        )}
      </button>
      <h3 className="mt-3 text-base font-bold">{video.title}</h3>
      <p className="text-sm text-muted">{video.description}</p>
    </article>
  )
}

export function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const playerRef = useRef<HTMLVideoElement>(null)
  const [playbackError, setPlaybackError] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (video) {
      setPlaybackError('')
      if (!dialog.open) dialog.showModal()
    } else {
      playerRef.current?.pause()
      if (dialog.open) dialog.close()
    }
  }, [video])

  useEffect(() => {
    return () => {
      playerRef.current?.pause()
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
      aria-label={video?.title ?? 'Video preview'}
      className="m-auto max-h-[92vh] w-[min(92vw,24rem)] overflow-auto rounded-2xl bg-white p-0 backdrop:bg-black/70"
    >
      {video && (
        <div className="p-4">
          <div className="mb-3 flex items-start justify-between gap-3">
            <h2 className="text-lg">{video.title}</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-line"
            >
              <X aria-hidden="true" />
            </button>
          </div>

          {video.src ? (
            <>
              <video
                key={video.id}
                ref={playerRef}
                src={video.src}
                poster={video.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full rounded-xl bg-black object-contain"
                onError={(e) => {
                  const error = e.currentTarget.error
                  console.error('Video loading error:', error, video.src)
                  setPlaybackError(
                    'Video could not be loaded. Check the file path and MP4 encoding (H.264/AAC).',
                  )
                }}
                onLoadedData={() => setPlaybackError('')}
              >
                Your browser does not support video playback.
              </video>
              {playbackError && (
                <p role="alert" className="mt-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                  {playbackError}
                </p>
              )}
            </>
          ) : (
            <div
              className={`flex aspect-[9/16] w-full items-center justify-center rounded-xl bg-gradient-to-br ${tone[video.category]} p-6 text-center text-white`}
            >
              <p>Video placeholder — add your approved sample file to display it here.</p>
            </div>
          )}

          <p className="mt-3 text-xs text-muted">{AI_NOTE}</p>
          <WaLink message={msg.portfolio(video.category)} className="mt-3 w-full">
            Enquire about {video.category} videos
          </WaLink>
        </div>
      )}
    </dialog>
  )
}
