import { useCallback, useEffect, useRef, useState } from 'react'
import { parseLinkHeader } from './parseLinkHeader'

/*
 we are loading the fetchphotos function first time to load the images using useEffect
 then ImageRef which is call back function attached to the last image of the fetch request which is on dom
 when intersection observer run that will fetch the fetchPhotos(nextLinkRef.current) means we are fetching the
 next batch of photoes to load on page. here the nextLinkRef.current is coming from the previous fetch request headers 
 if you check the headers for request you will see the Links that have first, next, last links. that we converted using the
 function parseLinkHeader "these links into object".
 that next link is used by observer for fetching the next batch of images
*/

export default function App() {
  const [photos, setPhotos] = useState([])
  const nextLinkRef = useRef()
  async function fetchPhotos(URL, { overWrite = false } = {}) {
    const res = await fetch(URL)
    nextLinkRef.current = parseLinkHeader(res.headers.get('Link')).next

    const images = await res.json()
    if (overWrite) {
      setPhotos(images)
    } else {
      setPhotos(prevPhotoes => {
        return [...prevPhotoes, ...images]
      })
    }
  }

  const ImageRef = useCallback(image => {
    if (image == null) return

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        //Todo Load next elements
        fetchPhotos(nextLinkRef.current)
        observer.unobserve(image)
      }
    })
    observer.observe(image)
  }, [])

  useEffect(() => {
    fetchPhotos('http://127.0.0.1:3000/photos?_page=1&_limit=10', {
      overWrite: true
    })
  }, [])

  return (
    <div className="grid">
      {photos.map((photo, index) => {
        return (
          <img
            src={photo.url}
            key={photo.id}
            ref={index === photos.length - 1 ? ImageRef : undefined}
          />
        )
      })}
    </div>
  )
}
