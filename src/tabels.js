import React from 'react';
import './tabels-css.css';
import FirstYearA from './fir-year-A.jpg';
import FirstYearB from './fir-year-B.jpg';
import SecondYearA from './sec-year-A.jpg';
import SecondYearB from './sec-year-B.jpg';
const Tables = (props)=>{
        return(
            <div className="tabels">
                <div className="container">
                    <div className="row">
                        <h2>الفرقة الاولى</h2>
                        <div className="col-lg-5 col-5">
                            <div className="cont A">
                                <img src={FirstYearA}   alt="first year A abb"/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-5">
                            <div className="cont B">
                                <img src={FirstYearB}   className="fir-B abb" alt="first year B"/>
                            </div>
                        </div>
                        <div className="clear-fix"></div>
                        <h2 className="htwo">الفرقة الثانية</h2>
                        <div className="col-lg-5 col-5">
                            <div className="cont C">
                                <img src={SecondYearA}  alt="second year A abb"/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-5">
                            <div className="cont D">
                                <img src={SecondYearB}  className="fir-A abb" alt="second year B"/>
                            </div>
                        </div>
                        <div className="clear-fix"></div>
                    </div>
                </div>
            </div>
        )
}
export default Tables