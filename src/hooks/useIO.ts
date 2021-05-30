import { useEffect, useRef, useState } from 'react'

interface IUseIO {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

const useIO = <T extends Element>(options: IUseIO) => {
  const [elements, setElements] = useState<T>(null)
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

  const observer = useRef<IntersectionObserver>(null)

  const { root, rootMargin, threshold } = options || {}

  useEffect(() => {
    if (elements) {
      observer.current = new IntersectionObserver(
        (ioEntries) => {
          setEntries(ioEntries)
        },
        {
          root,
          rootMargin,
          threshold
        }
      )

      if (Array.isArray(elements)) {
        elements.forEach((element) => {
          observer.current.observe(element)
        })
      } else {
        observer.current.observe(elements)
      }
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [elements, root, rootMargin, threshold])

  return { observer, setElements, entries }
}

export default useIO
