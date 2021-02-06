import React from 'react';
import './teachers.css';
const Teachers = ()=>{
    return(
        <div className="teach">
            <div className="container">
                <h3>المحاضرين</h3>
                <div className="row">
                        {/*the left part for second year */}
                    <div className="col-lg-6 col-12">
                        <div className="row">
                            <h4>الفرقة التانية</h4>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>: د.احمد يونس</h5>
                                    <span>DataBase</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>: د.احمد ابو المجد</h5>
                                    <span>Math3</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>: د.سامى</h5>
                                    <span>Data Structure</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>: د.محمود ابوالمجد</h5>
                                    <span>Strucutre analysis</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>: د.حنان</h5>
                                    <span>File Organisation</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont">
                                    <h5>....</h5>
                                    <span>Computer Architicture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/*the right part for first year */}
                    <div className="col-lg-6 col-12">
                    <div className="row">
                            <h4 className="fir">الفرقة الاولى</h4>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.نجوى احمد</h5>
                                    <span>English course</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.حمدى حسن</h5>
                                    <span>ethics of the career</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.الوجيه احمد</h5>
                                    <span>Math1,2</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.سهام عليوي</h5>
                                    <span>Information System</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.سارة ابوالحسن</h5>
                                    <span>electronics</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: عميد كلية الهندسة</h5>
                                    <span>logical desgin</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.النميرى علام</h5>
                                    <span>IoP</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.علاء ادم</h5>
                                    <span>physics</span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-6">
                                <div className="cont down">
                                    <h5>: د.محمود ابو القاسم</h5>
                                    <span>electronics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Teachers