import React from 'react';
import styles from './Headr.module.css';
import { data } from '../components/data_tmp/list_playlist';
import Link from 'next/link';


function header(props) {
    return (
        <nav className={styles.headr}>
            <div className={styles.HeadeView}>
                {data.items.map((item, index) => {
                    var { resourceId, title } = item.snippet
                    return (
                        <div className={styles.header} style={{paddingLeft: index == 0 ? 0:30}}
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
                })}
            </div>
        </nav>
    );
}

export default header;