import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
const axios = require('axios');
import { useState } from 'react';

const Home: NextPage = () => {
  const [images, setImages] = useState([]);

  const renderImages = (allImages: Array<any>) => {
    const imagesArray = new Array();
    allImages.forEach(element => {
      imagesArray.push(
        <div className={styles.imageWrapper}>
          <img src={element.path}></img>
          <div className={styles.titleWrapper}>
            <span className={styles.title}> {element.title}</span>
          </div>
        </div >
      )
    });
    return imagesArray;
  }

  const fetchImages = async () => {
    const response = await axios.get('http://127.0.0.1:9090/v1/images');
    setImages(response.data);
  }
  return (
    <div>
      <div className={styles.header}>
        <img className={styles.coingImage} src={'../static/coing-192.png'} />
        <button className={styles.loadImages} onClick={fetchImages}>Load images </button>
      </div>
      <div className={styles.gallery}>
        {
          images && images.length > 0 &&
          renderImages(images)
        }
      </div>
    </div>
  )
}

export default Home
