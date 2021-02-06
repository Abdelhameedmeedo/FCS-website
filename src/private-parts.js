import React from 'react';
import './private_parts.css';
import priv from './priv.jpg';      //tabels image
const Private_Part = ()=>{
    return(
        <div className="priv">
            <div className="container">
                <h2>الاقسام الخاصة</h2>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cont">
                            <span className="sp1">:قسم بايو</span><br/>
                            <p className="p1">يهتم قسم البايو بدمج الاحياء بالحاسب </p>
                            <span className="sp2">:قسم الذكاء الاصطناعى</span><br/>
                            <p className="p2">....هذا القسم مهتم بصناعة الروبوتات وكيفية التعامل معها وهلم جرا</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="cont">
                            <span className="sp3">الجدول المخصص</span><br/>
                            <img src={priv}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Private_Part