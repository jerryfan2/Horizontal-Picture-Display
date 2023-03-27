import { useState, useEffect } from 'react';
import './App.css';
import ButtonContainer from './ButtonContainer';

import ScrollingContainer from './ScrollingContainer';

const API_URL = "http://jsonplaceholder.typicode.com";

function App() {
  const [photos, setPhotos] = useState([]);

  function handleRandomizePhotos() {
    setPhotos(randomizePhotos(photos));
  }

  function randomizePhotos(photos) {
    if (photos.length <= 1) return photos;

    // randomize photos by selecting random index, putting it at front then recursively randomizing rest of array
    const randomIndex = Math.floor(Math.random() * photos.length);
    const reshuffledElement = photos[randomIndex];
    photos[randomIndex] = photos[0];
    photos[0] = reshuffledElement
    return [photos[0], ...randomizePhotos(photos.slice(1))];
  }

  // fetch photos from API and save photo data into local storage
  async function fetchPhotos() {
    try {
      const photoResponse = await fetch(`${API_URL}/photos`);
      const photoData = await photoResponse.json();

      localStorage.setItem('photoData', JSON.stringify(photoData));
      setPhotos(photoData);
    } catch (e) {
      console.log(e);
    }
    
  }

  // load photo data from local storage if exists; else fetch from API
  useEffect(() => {
    const cachedPhotoData = localStorage.getItem('photoData');
    cachedPhotoData === null ? fetchPhotos() : setPhotos(JSON.parse(cachedPhotoData));
  }, [])

  return (
    <div className="App">
      <ScrollingContainer photos={photos}/>
      <ButtonContainer onClick={handleRandomizePhotos}/>
    </div>
  );
}

export default App;
