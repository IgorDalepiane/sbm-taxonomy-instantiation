import { useCallback, useEffect, useRef, useState } from 'react'

type HelpTooltipProps = {
  term: string
  explanation: string
}

export function HelpTooltip({ term, explanation }: HelpTooltipProps) {
  const [visible, setVisible] = useState(false)
  const [supportsHover, setSupportsHover] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )
  const [coords, setCoords] = useState<{
    top: number
    left: number
    width: number
  } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const onChange = () => setSupportsHover(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const cancelHide = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
      hideTimerRef.current = null
    }
  }, [])

  const updatePosition = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const width = Math.min(288, window.innerWidth - 16)
    let left = rect.left + rect.width / 2 - width / 2
    left = Math.max(8, Math.min(left, window.innerWidth - width - 8))

    setCoords({
      top: rect.bottom + 8,
      left,
      width,
    })
  }, [])

  const show = useCallback(() => {
    cancelHide()
    updatePosition()
    setVisible(true)
  }, [cancelHide, updatePosition])

  const hide = useCallback(() => {
    cancelHide()
    setVisible(false)
  }, [cancelHide])

  const scheduleHide = useCallback(() => {
    cancelHide()
    hideTimerRef.current = setTimeout(() => setVisible(false), 120)
  }, [cancelHide])

  const toggle = useCallback(() => {
    if (visible) hide()
    else show()
  }, [visible, show, hide])

  useEffect(() => {
    if (!visible) return

    const handleReposition = () => updatePosition()
    window.addEventListener('resize', handleReposition)
    window.addEventListener('scroll', handleReposition, true)

    return () => {
      window.removeEventListener('resize', handleReposition)
      window.removeEventListener('scroll', handleReposition, true)
    }
  }, [visible, updatePosition])

  useEffect(() => {
    if (!visible) return

    const close = (event: PointerEvent) => {
      const target = event.target as Node
      if (
        buttonRef.current?.contains(target) ||
        tooltipRef.current?.contains(target)
      ) {
        return
      }
      hide()
    }

    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [visible, hide])

  useEffect(() => () => cancelHide(), [cancelHide])

  return (
    <>
      <span className="relative inline-flex shrink-0">
        <button
          ref={buttonRef}
          type="button"
          aria-label={`Explain ${term}`}
          aria-expanded={visible}
          onClick={supportsHover ? undefined : toggle}
          onMouseEnter={supportsHover ? show : undefined}
          onMouseLeave={supportsHover ? scheduleHide : undefined}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              toggle()
            }
          }}
          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          ?
        </button>
      </span>
      {visible && coords && (
        <span
          ref={tooltipRef}
          role="tooltip"
          style={{
            position: 'fixed',
            top: coords.top,
            left: coords.left,
            width: coords.width,
            zIndex: 50,
          }}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-xs font-normal leading-relaxed text-slate-700 shadow-lg"
          onMouseEnter={supportsHover ? show : undefined}
          onMouseLeave={supportsHover ? scheduleHide : undefined}
        >
          <strong className="font-semibold text-slate-900">{term}:</strong>{' '}
          {explanation}
        </span>
      )}
    </>
  )
}
