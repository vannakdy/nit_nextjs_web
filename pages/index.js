import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageCart from './component/cart/ImageCart';
import MasterPage from './component/masterpage/MasterPage';
import {data} from "../components/data_tmp/list_playlist"
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'
import { Row,Col} from 'antd';
import Slider from './component/Slider/Slider';
import MenuHeader from '../components/Menu/MenuHeader';
import Header from '../components/Header';
import ContenHeader from '../components/ContenHead/ContenHeader'

export default function Home() {
  const router = useRouter()
  const handleClick=(e, path)=>{
    router.push(path)
  }
  return (
    <div className={styles.container}>
      <MasterPage>
        {/* {data.items.map((item,index)=>{
          var {resourceId,title} = item.snippet
          return (
            <div className={styles.header}
              key={index}
            >
              <Link href={''}>
                <a onClick={(e) => handleClick(e, "/product_list")}>
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
        })} */}
        <Row>
          <Col span={19} className={styles.grid_left}>
            <div>
              <Slider />
              <div style={{paddingTop:30}}>
                <Header />
                <ContenHeader />
              </div>
            </div>
          </Col>
          <Col span={5} className={styles.grid_right}>
           <div >
            <MenuHeader/>
           </div>
          </Col>
        </Row>
        <Footer />
      </MasterPage>
    </div>
  )
}
