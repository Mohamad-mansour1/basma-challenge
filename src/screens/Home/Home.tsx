import React from 'react'
import { useHome, HomeProps } from './useHome'
import { Swiper, SwiperSlide } from 'swiper/react'
import Category from 'components/Home/Category/Category'
import Collapsible from 'components/Home/Collapsible/Collapsible'
import styles from './Home.module.scss'
import 'swiper/css'
import slide1Img from 'img/slider/slide-1.jpeg'
import slide2Img from 'img/slider/slide-2.jpeg'
import slide3Img from 'img/slider/slide-3.jpeg'
import newsImg from 'img/cateogries/news.jpeg'
import sportImg from 'img/cateogries/sport.jpeg'
import economicsImg from 'img/cateogries/economics.jpeg'
import mediaImg from 'img/cateogries/media.jpeg'
import cultureImg from 'img/cateogries/culture.jpeg'
import adImg from 'img/ad.jpeg'

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {} = useHome(props)

  return (
    <main className={styles.main}>
      <div className='container'>
        {/* Carousel */}
        <div className={styles.carousel}>
          <Swiper>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src={slide1Img} className={styles.slider_img} />
                <div className={styles.slider_content}>
                  <h2 className={styles.title}>العنوان</h2>
                  <p>لوريم إبسوم دولور</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src={slide2Img} className={styles.slider_img} />
                <div className={styles.slider_content}>
                  <h2 className={styles.title}>العنوان</h2>
                  <p>لوريم إبسوم دولور</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slider_item}>
                <img src={slide3Img} className={styles.slider_img} />
                <div className={styles.slider_content}>
                  <h2 className={styles.title}>العنوان</h2>
                  <p>لوريم إبسوم دولور</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Categories Section */}
        <div className='row mb-4'>
          <div className='col-12 col-lg-4 mb-3'>
            <Category
              title='أخبار'
              img={newsImg}
              imgLayout='Vertical'
              tag='المزيد'
              url='News'
            />
          </div>
          <div className='col-12 col-lg-8'>
            <div className='row'>
              <div className='col-12 col-lg-6 mb-3'>
                <Category
                  title='رياضة'
                  img={sportImg}
                  imgLayout='Square'
                  tag='المزيد'
                  url='Sport'
                />
              </div>
              <div className='col-12 col-lg-6 mb-3'>
                <Category
                  title='اقتصاد'
                  img={economicsImg}
                  imgLayout='Square'
                  tag='المزيد'
                  url='Economics'
                />
              </div>
              <div className='col-12 col-lg-6 mb-3'>
                <Category
                  title='ثقافة'
                  img={cultureImg}
                  imgLayout='Square'
                  tag='المزيد'
                  url='Culture'
                />
              </div>
              <div className='col-12 col-lg-6 mb-3'>
                <Category
                  title='فيديو وصور'
                  img={mediaImg}
                  imgLayout='Square'
                  tag='المزيد'
                  url='Media'
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className='row mb-4'>
          <div className='col-lg-6'>
            <img src={adImg} className={styles.ad_img} />
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-12 mb-3'>
                <Collapsible
                  title='لوريم ابسوم دولور'
                  description='هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم'
                />
              </div>
              <div className='col-12 mb-3'>
                <Collapsible
                  title='لوريم ابسوم دولور'
                  description='هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم'
                />
              </div>
              <div className='col-12 mb-3'>
                <Collapsible
                  title='لوريم ابسوم دولور'
                  description='هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم'
                />
              </div>
              <div className='col-12 mb-3'>
                <Collapsible
                  title='لوريم ابسوم دولور'
                  description='هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
