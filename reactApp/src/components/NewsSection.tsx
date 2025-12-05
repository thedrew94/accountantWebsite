import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function NewsSection() {
  return (
    <div className="news">
      <div className="news_our_picks">
        <h2 className="news_our_picks_h2">Consigliati da noi</h2>
        <h3 className="news_our_picks_h3">
          Una selezione di articoli scelti con cura per voi. Le migliori informazioni per il vostro successo
          finanziario.
        </h3>
        <ul className="news_our_picks_ul">
          <li>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M20,10.5v8.5c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13.5c.404,0,.769,.244,.924,.617,.155,.374,.069,.804-.217,1.09l-7.319,7.319c-1.102,1.102-1.136,2.861-.078,4.005,.539,.582,1.272,.911,2.065,.926,.777,.023,1.538-.285,2.099-.846l7.319-7.319c.286-.287,.715-.372,1.09-.217,.374,.155,.617,.52,.617,.924ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"
                fill="#c6a163"
              />
            </svg>
            <div>
              <span className="news_slide_date">22/12/2025</span>
              <h2>Come compilare il 730</h2>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M20,10.5v8.5c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13.5c.404,0,.769,.244,.924,.617,.155,.374,.069,.804-.217,1.09l-7.319,7.319c-1.102,1.102-1.136,2.861-.078,4.005,.539,.582,1.272,.911,2.065,.926,.777,.023,1.538-.285,2.099-.846l7.319-7.319c.286-.287,.715-.372,1.09-.217,.374,.155,.617,.52,.617,.924ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"
                fill="#c6a163"
              />
            </svg>
            <div>
              <span className="news_slide_date">22/12/2025</span>
              <h2>Come compilare il 730</h2>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M20,10.5v8.5c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13.5c.404,0,.769,.244,.924,.617,.155,.374,.069,.804-.217,1.09l-7.319,7.319c-1.102,1.102-1.136,2.861-.078,4.005,.539,.582,1.272,.911,2.065,.926,.777,.023,1.538-.285,2.099-.846l7.319-7.319c.286-.287,.715-.372,1.09-.217,.374,.155,.617,.52,.617,.924ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"
                fill="#c6a163"
              />
            </svg>
            <div>
              <span className="news_slide_date">22/12/2025</span>
              <h2>Come compilare il 730</h2>
            </div>
          </li>
        </ul>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        effect="fade"
        className="h-[500px] rounded-xl"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swiper_slide_inner">
            <div className="news_swiper_main_img">
              <img src="./assets/bg3.webp" alt="" />
            </div>
            <div className="news_slide_info">
              <div>
                <span className="news_slide_date">22/12/2025</span>
                <h2>Come compilare il 730</h2>
              </div>
              <div className="news_slide_author">
                <img src="./assets/bg.webp" alt="" width="28px" height="28px" />
                <div>
                  <h6>Commercialista</h6>
                  <h5>Pasquale de Martino</h5>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="swiper news_swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="swiper_slide_inner">
              <div className="news_swiper_main_img">
                <img src="./assets/bg3.webp" alt="" />
              </div>
              <div className="news_slide_info">
                <div>
                  <span className="news_slide_date">22/12/2025</span>
                  <h2>Come compilare il 730</h2>
                </div>
                <div className="news_slide_author">
                  <img src="./assets/bg.webp" alt="" width="28px" height="28px" />
                  <div>
                    <h6>Commercialista</h6>
                    <h5>Pasquale de Martino</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="swiper_slide_inner">
              <div className="news_swiper_main_img">
                <img src="./assets/bg3.webp" alt="" />
              </div>
              <div className="news_slide_info">
                <div>
                  <span className="news_slide_date">22/12/2025</span>
                  <h2>Come compilare il 730</h2>
                </div>
                <div className="news_slide_author">
                  <img src="./assets/bg.webp" alt="" width="28px" height="28px" />
                  <div>
                    <h6>Commercialista</h6>
                    <h5>Pasquale de Martino</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="swiper_slide_inner">
              <div className="news_swiper_main_img">
                <img src="./assets/bg3.webp" alt="" />
              </div>
              <div className="news_slide_info">
                <div>
                  <span className="news_slide_date">22/12/2025</span>
                  <h2>Come compilare il 730</h2>
                </div>
                <div className="news_slide_author">
                  <img src="./assets/bg.webp" alt="" width="28px" height="28px" />
                  <div>
                    <h6>Commercialista</h6>
                    <h5>Pasquale de Martino</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper_commands">
          <div className="swiper_progressbar_outter">
            <div className="swiper_progressbar_inner"></div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div> */}
    </div>
  );
}
