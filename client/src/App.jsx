import { useCallback, useEffect, useRef, useState } from 'react'
import { parseLinkHeader } from './parseLinkHeader'

/*
 Added Loading skelton when fetch request goes, we added 2 sec delay for each fetch request that goes
 we created the isLoading variable , that will load skeleton,, for creating skelton we use array.from to create
 sequence of numbers from array using length property, and the limit is equal to api that we are using in api request..
 last thing to note, like in our request we have total 100 images, so after that if fetch request goes the nextLinkRef will comes 
 null. so in that case we also added condition in useCallback to check if that next link is null then we will return


*/
const LIMIT = 50
export default function App() {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const nextLinkRef = useRef()
  async function fetchPhotos(URL, { overWrite = false } = {}) {
    setIsLoading(true)
    try {
      await new Promise(res => setTimeout(res, 2000))
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
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const ImageRef = useCallback(image => {
    if (image == null || nextLinkRef.current == null) return

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
    fetchPhotos(
      `http://127.0.0.1:3000/photos-short-list?_page=1&_limit=${LIMIT}`,
      {
        overWrite: true
      }
    )
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
      {isLoading &&
        Array.from({ length: LIMIT }, (_, index) => index).map(n => {
          return (
            <div className="skeleton" key={n}>
              Loading...
            </div>
          )
        })}
    </div>
  )
}
