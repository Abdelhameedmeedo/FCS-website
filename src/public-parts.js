import React from 'react';
import './public-parts.css';    //css file
const Public_parts = ()=>{
    return(
        <div className="public">
            <div className="container">
                <h2>الاقسام العامة</h2>
                <div className="row">
                    {/*Start computer science */}
                    <div className="col-lg-6">
                        <div className="cont">
                            <h4>: علوم حاسب</h4>
                            <p>..هو قسم مهتم بتصميم التتطبيقات،انظمة التشغيل،والتعامل مع البيانات وهلم جرا</p>
                            <p>..لكل من يريد هذا المجال عليه بالتعلم الذاتي لانه لو لم يتعلم ذاتيا لن يستطع السير فى هذا المجال</p>
                            <p></p>
                        </div>
                    </div>
                    {/*End computer science */}
                    {/*Start IT  */}
                    <div className="col-lg-6">
                        <div className="cont">
                            <h4>: تكنولوجيا المعلومات</h4>
                            <p>....هو قسم مهتم بالتعامل مع السيستم واصلاح الاخطاء</p>
                            <p>..وايضا التعامل مع البيانات،تخزينها،تنظيمها،تحديثها والاستعلام عنها</p>
                        </div>
                    </div>
                    {/*End IT  */}
                    {/*Start IS  */}
                    <div className="col-lg-6">
                        <div className="cont">
                            <h4>: نظم المعلومات</h4>
                            <p>..هو قسم مهتم بتنظيم البيانات، تحليلها،استخلاص ما يريده العميل وتخطيطه والتعامل مع البيانات وهلم جرا </p>
                            <p>........تنظيم الوقت،وادارة الاقسام وتحسين بعض الامور الاخرى</p>
                        </div>
                    </div>
                    {/*End IS  */}
                    {/*Srart networks */}
                    <div className="col-lg-6">
                        <div className="cont">
                            <h4>: شبكات</h4>
                            <p>....هو قسم مهتم بالشبكات وتوصيلها واصلاح الخطوط الارضية والانترنت</p>
                            <p>........كيف ربط الاجهزة ببعضها ومشاركة البيانات وغيرها</p>
                        </div>
                    </div>
                     {/*End networks */}
                     <div className="col-lg-12">
                         <div className="cont">
                             <h4 className="note"> : ملاحظة</h4>
                             <p className="notice">.لغة التدريس بالانجليزية وتبدأ من الترم الثانى للسنة الاولى -</p>
                             <p className="notice">.لابد من التعلم الذاتى لمواكبة سوق العمل والابداع -</p>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Public_parts