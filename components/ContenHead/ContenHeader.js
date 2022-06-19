import { Col, Row } from 'antd';
import React from 'react';
import Styles from './ContenHeader.module.css'
import { AiFillClockCircle,AiFillPlayCircle } from "react-icons/ai";
import { BsBookFill,BsMegaphone} from "react-icons/bs";


const ContenHeader = (props) => {
    return (
        <div className={Styles.Conter}>
            <div className={Styles.Title}>
                <h1>អ្វីដែលអ្នករំពឹងទុកពីវគ្គសិក្សានៃសាលាម៉ាស្ទ័រអាយធី</h1>
            </div>
            <div style={{paddingTop:30}}>
                <Row >
                    <Col  xs={{ span: 5,  offset: 1,  }} lg={{ span: 6, offset: 2}}>
                       <div className={Styles.Icon}>
                          <AiFillClockCircle style={{fontSize:50,color:'#000'}}/>
                       </div>
                       <div className={Styles.ListHeadr}>
                            <h2>រៀនតាមពេលវេលារបស់អ្នក</h2>
                            <p>រីករាយជាមួយការសិក្សាម៉ោងណា កន្លែងណាក៏បាន ដោយមិនមានកាលវិភាគកំណត់ និងងាយស្រួលក្នុងការអនុវត្តន៍តាមមេរៀន។ លោកអ្នកក៏អាចកំណត់កាលវិភាគសិក្សាដោយខ្លួនឯងបានដែរ។</p>
                        </div>
                    </Col>
                    <Col xs={{ span: 11, offset: 1}} lg={{ span: 6, offset: 2 }}> 
                        <div className={Styles.Icon}>
                            <AiFillPlayCircle style={{fontSize:50,color:    '#000'}}/>
                        </div>
                        <div className={Styles.ListHeadr}>
                            <h2>រៀនតាមវីដេអូបង្រៀនស្តង់ដារ</h2>
                            <p>សិក្សាជាមួយវីដេអូមេរៀនដែលមានគុណភាព ផលិតតាមវិធីសាស្រ្តបង្រៀនស្តង់ដាររបស់សាលា មានទាំងទ្រឹស្តី លំហាត់អនុវត្ត និងប្រូជិកអភិវឌ្ឍន៍ជំនាញ ឆាប់ចេះ ងាយយល់ ចំគោលដៅ។</p>
                        </div>
                    </Col>
                    <Col xs={{ span: 5,offset: 1, }} lg={{ span: 6, offset: 2}}>
                        <div className={Styles.Icon}>
                            <BsBookFill style={{fontSize:50,color:'#000'}}/>
                        </div>
                        <div className={Styles.ListHeadr}>
                            <h2>រៀនជាមួយគ្រូជំនាញ</h2>
                            <p>រីគ្រូបណ្តុះបណ្តាល ទាំងអស់ មានជំនាញ និងបទពិសោធន៍លើមុខវិជ្ជាសិក្សានីមួយៗ ហើយត្រូវបានរៀបចំមេរៀន និងបង្រៀនតាមប្រព័ន្ធបណ្តុះបណ្តាលស្តង់ដារម៉ាស្ទ័រអាយធី។</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div >
                <div className={Styles.ConterView}>
                    <div>
                        <div className={Styles.ViewList}>

                        </div>
                    </div>
                    <div>
                        <div  className={Styles.ViewList}>
                            video
                        </div>
                    </div>
                </div>
            </div>
            <div  style={{paddingTop:30}}>
                <div style={{alignItems:'center',display:'flex',justifyContent:"center"}}>
                    <span><BsMegaphone style={{color:'red',fontSize:18}} /></span>
                    <span style={{fontSize:15,marginLeft:10}}>កុំអោយកន្លងផុតឱ្យសោះ!</span>
                </div>
                <div className={Styles.Title}>
                    <h1>ផ្តល់ជូនប្រូម៉ូសិនពិសេសសម្រាប់ថ្ងៃនេះ!</h1>
                </div>
                <div style={{paddingTop:10}}>
                    <Row>
                        <Col  xs={{ span: 5,  offset: 1,  }} lg={{ span: 6, offset: 2}}>
                            <div>
                                <span>Story</span>
                            </div>
                        </Col>
                        <Col xs={{ span: 11, offset: 1}} lg={{ span: 6, offset: 2 }}>
                            <div>
                                <span>Story</span>
                            </div>
                        </Col>
                        <Col xs={{ span: 5,offset: 1, }} lg={{ span: 6, offset: 2}}>
                            <div>
                                <span>Story</span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default ContenHeader;