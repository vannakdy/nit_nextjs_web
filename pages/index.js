import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageCart from './component/cart/ImageCart';
import MasterPage from './component/masterpage/MasterPage';
import {data} from "../components/data_tmp/list_playlist"
export default function Home() {
  return (
    <div className={styles.container}>
      <MasterPage>
        {data.items.map((item,index)=>{
          var {resourceId,title} = item.snippet
          return (
            <div>
              <h1>{title}</h1>
              <iframe
                key={index}
                width="500"
                height="280"
                src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          )
        })}
       


      </MasterPage>
    </div>
  )
}
