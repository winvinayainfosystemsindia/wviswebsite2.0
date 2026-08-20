import { useEffect, useState } from 'react'

/** True once the page has scrolled past `threshold` pixels. Used to raise a sticky navbar's elevation. */
export const useIsScrolled = (threshold = 8): boolean => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
