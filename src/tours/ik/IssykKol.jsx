import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import issykkul1 from "/home/unisex/travel-agency/img/skazkaImg/issykkul1.jpg";
import issykkul2 from "/home/unisex/travel-agency/img/skazkaImg/issykkul2.jpg";

function IssykKul() {
    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Иссык-Куль</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/isuk-kyl.mp4"
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
                        <h2 className="text-4xl">Иссык-Куль: Жемчужина Центральной Азии</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={issykkul1} alt="иссык-куль" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Иссык-Куль славится своей кристально чистой водой и <br />
                            мягким климатом. Название озера переводится как «теплое озеро», <br />
                            что связано с тем,что оно не замерзает зимой благодаря своей <br />
                            солености и геотермальным источникам на дне. <br />
                            Вода в озере имеет удивительно голубой цвет <br />
                            и считается лечебной из-за высокого содержания минералов.</p>
                        <br />
                        <p>
                            Окруженное величественными хребтами Тянь-Шаня, <br />
                            озеро предлагает потрясающие виды на снежные вершины, <br />
                            зеленые леса  и цветущие луга. Этот регион также <br />
                            известен своими уникальными природными памятниками, <br />
                            такими как <a href="/Skazka" className="text-orange-600 hover:underline">Каньон Сказка</a>, водопад Барскаун и ущелье Джеты-Огуз.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Озеро Иссык-Куль, расположенное в восточной части <br />
                            Кыргызстана, является одним из самых известных и <br />
                            удивительных природных объектов страны. Это большое <br />
                            соленое озеро, окруженное живописными горами Тянь-Шаня, <br />
                            привлекает туристов своей уникальной красотой и множеством <br />
                            возможностей для отдыха и приключений.</p>

                        <br />

                        <p>Иссык-Куль — это уникальное место, которое сочетает <br />
                            в себе природную красоту, богатую культуру и множество <br />
                            возможностей для отдыха. Это жемчужина Центральной Азии, <br />
                            которая оставляет незабываемые впечатления у каждого, <br />
                            кто побывает на её берегах.</p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={issykkul2} alt="иссык-куль" />
                    </div>

                </main>
            </section>

            <Footer />
        </>
    )
}

export default IssykKul;