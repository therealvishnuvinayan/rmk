import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const categoryListThree = [
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/1.png",
        "title": "Food Safety"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/2.png",
        "title": "Health & Safety"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/3.png",
        "title": "Pest Control"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/4.png",
        "title": "HACCP & ISO Standards"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/5.png",
        "title": "First Aid"
    },
    {
        "icon": "https://thetork.com/demos/vue/educax/images/category/home3/6.png",
        "title": "Consultancy & Audits"
    }
]
const Categories = () => {
    return (
        <div>
            <section className='categories categories--style3 padding-top padding-bottom'>
                <div className="container aos-init" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="categories__wrapper">
                        <div className="row g-4">
                            <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12">
                                <div className="categories__header" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                                    <div className="subtitle subtitle--style3">
                                        <img src="/images/icon/home3/1.png" alt="star icon" />
                                        <p className="mb-0">Courses Details</p>
                                    </div>
                                    <h2>Explore Our Categories</h2>
                                    <p className="style3">Discover a wide range of professional training courses designed to meet your needs. From food safety to health and safety, find the perfect program to elevate your skills and career.</p>

                                    <Link href="/courses" className="trk-btn trk-btn--secondary3"> All
                                        Categories <span> <FontAwesomeIcon icon={faArrowRight} /></span> </Link>
                                </div>

                            </div>
                            {categoryListThree.map((item, index) => {
                                return (
                                    <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-6">
                                        <div className="categories__item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                            <div className="categories__item-inner">
                                                <div className="categories__item-thumb">
                                                    <img src={item.icon} alt="course icon" />
                                                </div>
                                                <div className="categories__item-content">
                                                    <Link href="/course-category" className="stretched-link active">{item.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Categories