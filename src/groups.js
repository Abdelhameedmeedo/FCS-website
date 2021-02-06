import React, { Component } from 'react';
import './groups.css';
import firYearA from './fir-year-A.jpg';
import firYearB from './fir-year-B.jpg';
import secYearA from './sec-year-A.jpg';
import secYearB from './sec-year-B.jpg';
const ShowGroups = (props)=>{
        return(
            <div className="group">
                <div className="container">
                    <h3>المجموعات</h3>
                    <div className="row">
                        <h4>الفرقة الاولى</h4>
                        <div className="col-lg-12">
                            <div className="cont">
                                <button className="bttn " onClick={()=>props.toggleFun()}>المجموعة أ</button>
                                <div className="content">
                                    <img src={firYearA} className="img1"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="cont">
                                    <button className="bttn " onClick={()=>props.toggleFun()} >المجموعة ب</button>
                                    <div className="content">
                                        <img src={firYearB} className="img2"/>
                                    </div>
                            </div>
                        </div>
                        <h4 className="h2">الفرقة التانية</h4>
                        <div className="col-lg-12">
                            <div className="cont">
                                    <button className="bttn " onClick={()=>props.toggleFun()}>المجموعة أ</button>
                                    <div className="content">
                                        <img src={secYearA} className="img3"/>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="cont">
                                    <button className="bttn " onClick={()=>props.toggleFun()}>المجموعة ب</button>
                                    <div className="content">
                                        <img src={secYearB} className="img4"/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default ShowGroups