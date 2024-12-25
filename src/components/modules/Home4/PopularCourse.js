import Link from 'next/link'
import  { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import coursedata from '../../../api/index4/popular-courses.json'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
const PopularCourse = () => {
  const backgroundImage = {
    backgroundImage: "url(/images/bg/home4/1.png)",
  }
  const breakpoints = {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  };
  const autoplay = {
    delay: 2000,
    disableOnInteraction: false,
  };
  const speed = 3000;
  const bulletCount = 3
  return (
    <section className='course course--style4 bg--cover' style={backgroundImage}>
      <div className='container aos-init aos-animate' data-aos='fade-up' data-aos-duration="800" data-aos-delay="100">
        <div className="section-header text-center section-header--dark section-header--max20">
          <h2 className="style2-h2">Most Popular Programs instead of classes.</h2>
        </div>
        <div className='course__wrapper'>
          <Swiper className='course__slider course__slider--style4'
            modules={[Pagination, Autoplay]}
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={breakpoints}
            autoplay={autoplay}
            speed={speed}
            pagination={{
              el: ".slider__pagination-2",
              clickable: true,
              renderBullet: (index, className) => {
                if (index < bulletCount) {
                return `<span class=${className}></span>`;
                }
                return '';
              }
            }}
          >
            {
              coursedata.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='course__item'>
                    <div className='course__item-inner'>
                      <div className='course__thumb'>
                        <img src={item.thumbnail} alt="course Images" />
                      </div>
                    </div>
                    <div className="course__content">
                      <div className="course__content-top">
                        <div className="course__author">
                          <Link href="mentor-details"><img src={item.avatar} alt="avatar" /> {item.avatarName}</Link>
                        </div>
                        <div className="course__focus-inner">
                          <span>{item.rating}</span>
                          <img src="/images/course/star.png" alt="review-star" />
                          <span>{`(${item.ratingCount})`}</span>
                        </div>
                      </div>
                      <h5> <Link href="course-details">{item.title}</Link> </h5>
                      <p>{item.description}</p>
                      <div className="course__content-footer">
                        <span><img src="/images/course/home4/1.svg" alt="icon" />{item.age}</span>
                        <span><img src="/images/course/home4/2.svg" alt="icon" /> {`$${item.price}`}</span>
                        <span><img src="/images/course/home4/3.svg" alt="icon" /> <Link href="">{`${item.class} class`}</Link></span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
            <div className="slider__pagination-2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default PopularCourse
