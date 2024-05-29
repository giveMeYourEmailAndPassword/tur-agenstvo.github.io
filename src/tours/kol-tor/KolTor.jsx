import React from 'react';
import { useEffect, useRef } from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import koltor1 from "/home/unisex/travel-agency/img/skazkaImg/koltor1.jpg";
import koltor2 from "/home/unisex/travel-agency/img/skazkaImg/koltor2.jpg";

function KolTor() {
    const sectionPinRef = useRef(null);
    const pinWrapStickyRef = useRef(null);
    const pinWrapRef = useRef(null);

    useEffect(() => {
        const $sectionPin = sectionPinRef.current;
        const $pinWrapSticky = pinWrapStickyRef.current;
        const $pinWrap = pinWrapRef.current;

        if ($sectionPin && $pinWrapSticky && $pinWrap) {
            // Stretch it out, so that we create room for the horizontal scroll animation
            $sectionPin.style.height = '500vh';
            $sectionPin.style.overflow = 'visible'; // To make position sticky work …

            // Stick to Top
            $pinWrapSticky.style.height = '100vh';
            $pinWrapSticky.style.width = '100vw';
            $pinWrapSticky.style.position = 'sticky';
            $pinWrapSticky.style.top = '0';
            $pinWrapSticky.style.overflowX = 'hidden';

            // Stretch out pinwrap
            $pinWrap.style.height = '100vh';
            $pinWrap.style.width = '250vmax';

            // Scroll-Linked Animation
            $pinWrap.animate(
                {
                    transform: [``, `translateX(calc(-100% + 100vw))`],
                },
                {
                    timeline: new ViewTimeline({
                        subject: $sectionPin,
                        axis: 'block',
                    }),
                    fill: 'forwards',
                    rangeStart: `contain 0%`,
                    rangeEnd: `contain 100%`,
                }
            );
        }
    }, []);

    return (
        <>
            <Header />
            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Кол-Тор</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="video/kol-tor.mp4"
                        autoPlay
                        muted
                        loop
                        controls
                        disablePictureInPicture
                        disableRemotePlayback
                        className="w-full h-auto relative"
                        id="sticky-parallax-header"
                    ></video>

                </div>
            </section>

            <section>
                <div className="h-82 bg-orange-100">
                    <div className="flex flex-col items-center pt-12 pb-12 gap-7">
                        <h2 className="text-4xl">Кол-Тор: Прекрасное Высокогорное Озеро Кыргызстана</h2>
                    </div>
                </div>
            </section>

            <section>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-20 grid-cols-custom">
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={koltor1} alt="" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>
                            Кол-Тор — это одно из скрытых сокровищ Кыргызстана, <br /> удивительное
                            высокогорное озеро, расположенное среди <br /> живописных горных пейзажей.
                            Это место, которое поражает своей <br /> дикой природной красотой и уединенностью.</p>
                        <br />
                        <p>
                            Кол-Тор поражает своей кристально чистой водой <br />
                            и великолепными видами. Озеро имеет удивительно насыщенный <br />
                            голубой цвет, который особенно ярко проявляется в солнечные дни. <br />
                            Вода в озере питается талым снегом и ледниками, <br />
                            что делает её очень чистой и холодной.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>
                            Окруженное высокими горами и густыми еловыми лесами, <br />
                            озеро создаёт впечатление настоящего горного рая. <br />
                            Пейзажи вокруг Кол-Тора захватывают дух: <br />
                            крутые склоны гор, альпийские луга, поросшие цветами, <br />
                            и могучие ели создают неповторимую атмосферу <br />
                            умиротворения и покоя.</p>

                        <br />

                        <p>
                            Кол-Тор — это не только красивое место, но и важный <br />
                            элемент экосистемы региона. Вода озера используется <br />
                            местными жителями и дикой природой, поэтому важно бережно <br />
                            относиться к этому уникальному природному объекту. <br />
                            Посетители должны следить за чистотой и избегать <br />
                            загрязнения окружающей среды.
                        </p>
                    </div>
                    <div>
                        <img className='h-[28rem] w-[40rem]' src={koltor2} alt="" />
                    </div>
                </main>
            </section>

            <section id="sectionPin" className='mt-20'>
                <div className="pin-wrap-sticky h-[100vh] w-[100wh] sticky overflow-x-hidden top-0">
                    <div className="pin-wrap h-[100vh] w-[250vmax]">
                        <h2>sadasdddddddddddddddddddddddddddddddd</h2>
                        <img src={koltor1} alt="koltor" />
                        <img src={koltor1} alt="koltor" />
                        <img src={koltor1} alt="koltor" />
                        <img src={koltor1} alt="koltor" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default KolTor;