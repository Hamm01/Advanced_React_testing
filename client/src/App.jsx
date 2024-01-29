import { useEffect, useState } from 'react'

/*
 Below is boilerplate code for the photos which we are loading from backend, these
 are image with url and id info that are saving in photos array. and we are using that grid to
 show and load that images on dom to show
*/
export default function App() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:3000/photos?_page=1&_limit=10')
      .then(res => res.json())
      .then(setPhotos)
  }, [])

  return (
    <div className="grid">
      {photos.map(photo => {
        return <img src={photo.url} key={photo.id} />
      })}
    </div>
  )
}
