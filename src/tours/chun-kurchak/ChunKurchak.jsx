import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import chunkurchak1 from "/home/unisex/travel-agency/img/skazkaImg/chunkurchak1.jpg";
import chunkurchak2 from "/home/unisex/travel-agency/img/skazkaImg/chunkurchak2.jpg";

function Chunkurchak() {
    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Чункурчак</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/chunkurchak.mp4"
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
                        <h2 className="text-4xl">Чункурчак: Горнолыжный Курорт и Природное Убежище в Кыргызстане</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={chunkurchak1} alt="иссык-куль" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>
                            Чункурчак — это место, где природа встречается с <br />
                            современными удобствами. Курорт окружен высокими <br />
                            горами, покрытыми густыми лесами и альпийскими лугами. <br />
                            В зимнее время года снегопады превращают эту местность <br />
                            в настоящий зимний рай, а летом здесь можно наслаждаться <br />
                            зелеными лугами и чистым горным воздухом.
                        </p>

                        <br />

                        <p>
                            Ущелье Чункурчак предлагает разнообразные ландшафты —  <br />
                            от крутых склонов и лесных троп до цветущих лугов и <br />
                            скалистых обрывов. Это место идеально подходит для тех, <br />
                            кто хочет отдохнуть на природе и насладиться захватывающими <br />
                            видами гор Тянь-Шаня.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Чункурчак располагает развитой туристической инфраструктурой, <br />
                            включающей комфортабельные гостиницы, горные хижины и <br />
                            рестораны, предлагающие блюда местной и международной кухни. <br />
                            Курорт оснащен современными подъемниками, что обеспечивает <br />
                            удобный доступ к горнолыжным трассам и смотровым площадкам.</p>

                        <br />

                        <p>
                            Чункурчак — это идеальное место для тех, кто ищет активный <br />
                            отдых и хочет насладиться красотой природы Кыргызстана. <br />
                            Независимо от времени года, этот курорт предлагает множество <br />
                            возможностей для приключений и релаксации на фоне <br />
                            захватывающих горных пейзажей.
                        </p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={chunkurchak2} alt="иссык-куль" />
                    </div>

                </main>
            </section>

            <Footer />
        </>
    )
}

export default Chunkurchak;