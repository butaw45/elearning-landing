import React from 'react'

const CourseCard = (props) => {
    const { imgurl, title, lesson, students, rating } = props.item

    return <div className="single__course__item">
        <div className="course__img">
            <img src={imgurl} alt="" className='w-100' />
        </div>

        <div className="course_details">
            <h6 className="course__title mb-4">
                {title}
            </h6>

            <div className="d-flex justify-content-between align-items-center">
                <p className="lesson d-flex align-items-center gap-1">
                    <i class="ri-book-3-fill"></i>
                    {lesson} Lesson
                </p>

                <p className="students d-flex align-items-center gap-1">
                    <i class="ri-user-line"></i>
                    {students}K
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <p className="rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i>
                    {rating}K
                </p>

                <p className="enroll d-flex align-items-center gap-1">
                    <a href="#BLANK">Enroll Now</a>
                </p>
            </div>
        </div>
    </div>
}

export default CourseCard
