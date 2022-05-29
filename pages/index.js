import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageCart from './component/cart/ImageCart';
import MasterPage from './component/masterpage/MasterPage';
import {data} from "../components/data_tmp/list_playlist"
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const handleClick=(e, path)=>{
    router.push(path)
  }
  return (
    <div className={styles.container}>
      <MasterPage>
        {data.items.map((item,index)=>{
          var {resourceId,title} = item.snippet
          return (
            <div className={styles.header}
              key={index}
            >
              <Link href={''}>
                <a onClick={(e) => handleClick(e, "/about")}>
                  <h1 className={styles.LikePage}>{title}</h1>
                </a>
              </Link>
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
        <Footer />
      </MasterPage>
    </div>
  )
}
