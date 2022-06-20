// import React, { useState } from 'react';
// import Head from 'next/head';
// import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";
// import MasterPage from './component/masterpage/MasterPage';
// import styles from '../styles/Home.module.css';
// import { Menu, Button, Row, Col } from 'antd';
// import 'antd/dist/antd.css';

// import {
//     AppstoreOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//     PieChartOutlined,
//     DesktopOutlined,
//     ContainerOutlined,
//     MailOutlined,
// } from '@ant-design/icons';


// function getItem(label, key, icon, children, type) {
//     return {
//         key,
//         icon,
//         children,
//         label,
//         type,
//     };
// }

// const items = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('Option 3', '3', <ContainerOutlined />),
//     getItem('Navigation One', 'sub1', <MailOutlined />, [
//         getItem('Option 5', '5'),
//         getItem('Option 6', '6'),
//         getItem('Option 7', '7'),
//         getItem('Option 8', '8'),
//     ]),
//     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//         getItem('Option 9', '9'),
//         getItem('Option 10', '10'),
//         getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//     ]),
// ];
// const data = [{ title: 'អត្ថបទ', news: 'Article' }, { title: 'ព័ត៌មាន', news: 'News' }, { title: 'បង្ហាញ', news: 'ShowList' }];

// function product_list(props) {
//     const [collapsed, setCollapsed] = useState(false);

//     const toggleCollapsed = () => {
//         setCollapsed(!collapsed);
//     };
//     const [state, setState] = useState({
//         iconOpen: true,
//         news: false,
//         ListData:[],
//         DataNews: [
//             {   
//                 name:'Article',
//                 List: 'Angkor Wat in Siem Reap, Cambodia is the largest religious monument in the world. Angkor Wat, translated from Khmer (the official language of Cambodia) literally means “City Temple.” As far as names go this is as generic as it gets. Angkor Wat was not the original name given to the temple when it was built in the 12th century. We have little knowledge of how this temple was referred to during the time of its use, as there are no extant texts or inscriptions that mention the temple by name—this is quite incredible if we consider the fact that Angkor Wat is the greatest religious construction project in Southeast Asia.'
//             },
//             {   
//                 name:'News',
//                 List: 'A possible reason why the temple’s original name may have never been documented is that it was such an important and famous monument that there was no need to refer to it by its name. We have several references to the king who built the temple, King Suryavarman II (1113-1145/50 C.E.), and events that took place at the temple, but no mention of its name.'
//             },
//             {
//                 name:'ShowList',
//                 List: 'Angkor Wat is dedicated to the Hindu god Vishnu who is one of the three principal gods in the Hindu pantheon (Shiva and Brahma are the others). Among them he is known as the “Protector.” The major patron of Angkor Wat was King Suryavarman II, whose name translates as the “protector of the sun.” Many scholars believe that Angkor Wat was not only a temple dedicated to Vishnu but that it was also intended to serve as the king’s mausoleum in death.'
//             }
//         ]
//     })
//     const { iconOpen, news,ListData,DataNews} = state;
//     const handleOpen = () => {
//         setState({
//             ...state,
//             iconOpen: !iconOpen
//         })
//     }   
//     const handelNews = (e) => {
//          var data = DataNews,Array=[];
//          data.map((item,_)=>{
//             if(item.name == e){
//                 Array.push(item.List)
//             }
//         })
//         setState({
//             ...state,
//             news: true,
//             ListData: Array
//         })
       
//     }
   
//     return (
//         <div>
//             <Head>
//                 <title>NIT</title>
//                 <meta property="og:title" content="My page" key="title" />
//             </Head>
//             <MasterPage>
//                 <div className={styles.contener}>
//                     <div style={{ width: '25%' }}>
//                         <div>
//                             <a style={{ fontSize: 19, fontWeight: 'bold' }} onClick={toggleCollapsed}>ព័ត៌មានថ្មី</a>
//                         </div>
//                         <div
//                             style={{
//                                 width: 256,
//                             }}
//                         >
//                             <Menu
//                                 defaultSelectedKeys={['1']}
//                                 defaultOpenKeys={['sub1']}
//                                 mode="inline"
//                                 theme="dark"
//                                 onClick={toggleCollapsed}
//                                 inlineCollapsed={collapsed}
//                                 items={items}
//                             />
//                         </div>
//                     </div>
//                     <div style={{ width: '100%' }}>
//                         <div>
//                             <div className={styles.ConternHead}>
//                                 <Row>
//                                     {data.map((item, i) => {
//                                         return (
//                                             <Col key={i}>
//                                                 <div className={styles.headerButton} onClick={()=>handelNews(item.news)}>
//                                                     <Button>{item.title}</Button>
//                                                 </div>
//                                             </Col>
//                                         )
//                                     })}
//                                 </Row>
//                             </div>
//                             {news &&
//                                 <div className={styles.Contenr_News}>
//                                     {ListData && ListData.map((item,i)=>{
//                                         return(
//                                             <div key={i}>
//                                                 <span>{item}</span>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </MasterPage>
//         </div>
//     );
// }

// export default product_list;