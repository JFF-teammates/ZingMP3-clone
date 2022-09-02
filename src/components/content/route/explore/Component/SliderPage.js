import style from './style.module.scss'
import {cxo} from './index'
import { Navigation, Scrollbar ,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import styles bundle
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const cx=cxo.bind(style)
const data=[{image:'https://photo-zmp3.zmdcdn.me/banner/e/6/1/b/e61b75f3170b4a2fdcd9e2766ae1aec6.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'},
              {image:'https://photo-zmp3.zmdcdn.me/banner/9/a/2/4/9a246b125128f9bb059900cb937f96f6.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'},
              {image:'https://photo-zmp3.zmdcdn.me/banner/6/6/a/1/66a1dd17916e5d21dcb821dc25cc113a.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'},
              {image:'https://photo-zmp3.zmdcdn.me/banner/d/8/5/8/d8586a0ceb81c2ff473f92222e2e25d4.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'},
              {image:'https://photo-zmp3.zmdcdn.me/banner/c/e/0/2/ce0299925f91cc3cd20f8f8faac6edcc.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'},
              {image:'https://photo-zmp3.zmdcdn.me/banner/b/9/9/e/b99e4e8a24fdb77d08aea74283cc3490.jpg',
              url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fvn-live-05.slatic.net%2Fp%2F94047736774800fa931a8dac9971dfe1.jpg_525x525q80.jpg&imgrefurl=https%3A%2F%2Fxn--ptshop-bva.vn%2Fhuxian0-cute-puppy-pets-dress-cape-small-dog-dog-cosplay-costume-for-teddy-bear-small-dog-cos-costume-dog-cape-akatsuki-pet-clothes-cat-cloak-l1486879967.html&tbnid=NGC8SDESWrHiiM&vet=12ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg..i&docid=GTt-uOIhBzCDkM&w=525&h=525&q=image%20cute%20cos&ved=2ahUKEwjru9bI2O75AhVsKqYKHe1NCEQQMygdegUIARCEAg'}]
function SliderPage(){
 
    return (<Swiper
        modules={[ Scrollbar,Autoplay,Navigation]}
        loop={true}
        
        navigation={true}
      
        autoplay={{
    delay:2500,
    disableOnInteraction:false,
        }}
        breakpoints={
        {
          0:{
            slidesPerView: 2,
            spaceBetween :24,
          },
          1026:{
            slidesPerView: 3,
            spaceBetween :30,
          }
        }
        }
    className={cx('silderPage')}
        >
    
       {
        data.map((e,index)=>{
          return <SwiperSlide
          
          key={index}><div className={cx('pageBack')}>
          <a className={cx('page')}
          target='_blank' href={e.url}>
            <img src={e.image} />
            </a></div></SwiperSlide>
        })
       }

      
      </Swiper>
      )

}
export default SliderPage;