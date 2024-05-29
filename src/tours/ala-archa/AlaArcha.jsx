import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import alaarcha1 from "/home/unisex/travel-agency/img/skazkaImg/alaarcha1.jpg";
import alaarcha2 from "/home/unisex/travel-agency/img/skazkaImg/alaarcha2.jpg";

function AlaArcha() {
    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Ала-Арча</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/ala-archa.mp4"
                        autoPlay
                        muted
                        loop
                        controls
                        disablePictureInPicture
                        disableRemotePlayback
                        className="w-full h-auto relative"
                    ></video>

                </div>
            </section>

            <section>
                <div className="h-82 bg-orange-100">
                    <div className="flex flex-col items-center pt-12 pb-12 gap-7">
                        <h2 className="text-4xl">Национальный парк Ала-Арча: Природная Жемчужина Кыргызстана</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={alaarcha1} alt="иссык-куль" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Национальный парк Ала-Арча — одно из самых <br />
                            живописных и популярных мест для туризма в Кыргызстане. <br />
                            Расположенный всего в 40 километрах к югу от Бишкека, <br />
                            парк привлекает туристов своей удивительной природой, <br />
                            возможностями для активного отдыха и близостью к столице.
                        </p>
                        <br />
                        <p>
                            Ала-Арча известен своими величественными горами, <br />
                            ледниками, бурными реками и густыми лесами. Парк <br />
                            назван в честь одноименной реки Ала-Арча, которая протекает <br />
                            через его территорию и образует многочисленные <br />
                            водопады и пороги.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Ала-Арча играет важную роль в сохранении экосистемы <br />
                            региона. Парк является заповедной зоной, <br />
                            где охраняются редкие виды растений и животных. <br />
                            Посетители должны соблюдать правила парка, <br />
                            не оставлять мусор и не беспокоить диких животных.</p>

                        <br />

                        <p>Национальный парк Ала-Арча — это уникальное место, <br />
                            где каждый может найти что-то по своему вкусу, <br />
                            будь то активный отдых, расслабляющий пикник или <br />
                            просто наслаждение великолепными видами природы. <br />
                            Это идеальное место для тех, кто хочет познакомиться <br />
                            с природными красотами и богатым <br />
                            биоразнообразием Кыргызстана.</p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={alaarcha2} alt="иссык-куль" />
                    </div>

                </main>
            </section>

            <Footer />
        </>
    )
}

export default AlaArcha;