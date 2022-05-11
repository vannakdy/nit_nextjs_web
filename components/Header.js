import React from 'react';
import styles from './Headr.module.css';

function header(props) {
    return (
       <nav className={styles.headr}>
           <div style={{justifyContent:'space-between',flexDirection:"row",display:'flex'}}>
               <div>
                   <p>Icon</p>
               </div>
               <div>
                   <h3>title</h3>
               </div>
               <div>
                   <h4>logo</h4>
               </div>
           </div>
       </nav>
    );
}

export default header;