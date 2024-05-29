import { guides } from './data'
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


export default function Guide(props) {
    const guideData = guides[0];
    return (
        <>
            <section className="mt-20">
                <div className="flex justify-center">
                    <h2 className="text-4xl flex">Наши гиды</h2>
                </div>

                <div className="flex justify-center items-center mt-12">
                    <div
                        className="w-full ml-1 mr-1 flex flex-col justify-center items-center border-gray-700 text-center"
                    >
                        <Swiper

                            navigation={true} modules={[Navigation]}
                            loop
                            direction='horizontal'
                            spaceBetween={10}
                            slidesPerView="3"
                            wrapperClass='px-12 w-[90%]'
                            style={{ width: "100%" }}
                        >

                            {guides.map((guide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col justify-center items-center text-center bg-orange-300 w-96 h-96 rounded-3xl">
                                        <img src={guide.img} className=" h-40 w-auto object-contain" />
                                        <h2 className="font-semibold text-xl mt-7">{guide.title}</h2>
                                        <p className="mt-3 text-lg">{guide.descriptionsOne}</p>
                                        <p className=" text-lg">{guide.descriptionsTwo}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section >
        </>
    )
}

