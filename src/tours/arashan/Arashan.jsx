import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import arashan1 from "/home/unisex/travel-agency/img/skazkaImg/arashan1.jpg";
import arashan2 from "/home/unisex/travel-agency/img/skazkaImg/arashan2.jpg";

function Arashan() {
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Алтын-Арашан</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/arashan!.mp4"
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
                        <h2 className="text-4xl">Алтын-Арашан: Горное Убежище в Кыргызстане</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={arashan1} alt="иссык-куль" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Алтын-Арашан — это одно из самых живописных и <br />
                            популярнейших мест для туризма в Кыргызстане. <br />
                            Этот высокогорный курорт известен своими горячими <br />
                            источниками, красивыми пейзажами и возможностями <br />
                            для активного отдыха.
                        </p>
                        <br />
                        <p>
                            Алтын-Арашан славится своей неповторимой природной <br />
                            красотой и горячими источниками. Название <br />
                            «Алтын-Арашан» переводится как «Золотые Источники», <br />
                            что связано с наличием многочисленных термальных <br />
                            источников, известных своими лечебными свойствами.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Алтын-Арашан является важным природным объектом, <br />
                            который охраняется государством. Посетители должны <br />
                            соблюдать правила парка, не оставлять мусор и не <br />
                            наносить вред окружающей среде. Важно уважительно <br />
                            относиться к местной флоре и фауне, чтобы сохранить <br />
                            это уникальное место для будущих поколений.</p>

                        <br />

                        <p>Алтын-Арашан — это место, где каждый найдет что-то <br />
                            по душе: будь то активный отдых, расслабление в горячих <br />
                            источниках или просто наслаждение великолепными видами <br />
                            гор и природы. Это природное убежище оставляет незабываемые <br />
                            впечатления и дарит множество ярких эмоций каждому, <br />
                            кто решит исследовать его красоты.</p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={arashan2} alt="иссык-куль" />
                    </div>

                </main>
            </section>

            <Footer />
        </>
    )
}

export default Arashan;