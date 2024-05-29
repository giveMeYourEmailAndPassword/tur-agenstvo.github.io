import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import skazka1 from "/home/unisex/travel-agency/img/skazkaImg/skazka1.webp";
import skazka2 from "/home/unisex/travel-agency/img/skazkaImg/skazka2.webp";

function Skazka() {
    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Каньон Сказка</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/boomskoe.mp4"
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
                        <h2 className="text-4xl">Каньон Сказка: Волшебный Пейзаж Кыргызстана</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={skazka1} alt="" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Каньон Сказка, также известный как «Сказочный каньон», — одно <br />
                            из самых удивительных и живописных мест Кыргызстана, <br />
                            расположенное на южном берегу озера Иссык-Куль. Это место, <br />
                            где природа создала невероятные скульптурные формы и красочные <br />
                            пейзажи, которые действительно напоминают декорации из сказок.</p>
                        <br />
                        <p>
                            Каньон Сказка знаменит своими фантастическими и причудливыми <br />
                            скальными образованиями, созданными ветром и водой <br />
                            на протяжении миллионов лет. Эти скалы из глины и песчаника <br />
                            имеют разнообразные формы и оттенки, от ярко-красных и оранжевых <br />
                            до желтых и розовых. Особенно впечатляющими являются скалы, <br />
                            напоминающие сказочные замки, крепости и фигурки животных.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Величественные пики и извилистые ущелья каньона
                            создают <br /> впечатление, что вы попали в другой мир.
                            Здесь можно найти <br /> скальные образования,
                            похожие на драконов, замки, башни и <br /> другие фантастические фигуры. <br />
                            Особенно красиво каньон выглядит на закате, когда <br /> скалы окрашиваются
                            в золотистые и розовые тона, <br /> создавая поистине волшебное зрелище.</p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={skazka2} alt="" />
                    </div>

                </main>
            </section>

            <Footer />
        </>
    )
}

export default Skazka;