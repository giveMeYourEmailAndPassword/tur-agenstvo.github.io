import React from 'react';
import Header from "../sections/Header";
import Footer from '../sections/Footer';
import kyrgyzstan from '/home/unisex/travel-agency/img/kyrgyzstan-2287572.jpg';
import vilage from '/home/unisex/travel-agency/img/kyrgyzstan-622995_1920.jpg'
import vilage2 from '/home/unisex/travel-agency/img/kyrgyzstan-63432424.jpg'

// import Footer from "../sections/Footer";
// import Header from "../sections/Header";

export default function SectionOne() {
    return (
        <>
            <Header />
            <section>
                <div className="absolute z-10 mt-[34rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-7xl mt-7">О компании KETTIK</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <img src={kyrgyzstan} alt="Kyrgyzstan" className='w-full h-screen relative' />
                </div>
            </section>
            {/*  */}
            <section>
                <div className="h-82 bg-orange-100">
                    <div className="flex flex-col items-center pt-12 pb-12 gap-7">
                        <div className="flex flex-col items-center">
                            <p className="text-xl text-center">
                                KETTIK - это компания по организа ции приключенческих путешествий. Мы специализируемся на стильных <br />
                                и оригинальных турах для небольших групп и индивидуальном отдыхе по Кыргызстану.
                                <br />

                                <br />
                                Мы твердо убеждены в том, что главное в путешествии - это впечатления, и именно детали - места, где вы
                                <br />
                                останавливаетесь, транспорт и маршрут, по которому вы добираетесь, и люди, которых вы встречаете по пути, <br />
                                делают поездку незабываемо! Поэтому мы специализируемся на использовании наших собственных <br />
                                обширных знаний и контактов, чтобы предоставить нашим клиентам самый лучший опыт, какой только возможен.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <section>
                <div>
                    <h1 className='text-center text-4xl mt-20'>Наша цель</h1>
                </div>
                <main className="grid gap-x-4 gap-y-8 place-content-center mt-12 grid-cols-custom">
                    <div>
                        <img className='h-[30rem] w-[40rem]' src={vilage} alt="" />
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>В компании KETTIK мы верим, что экологичные путешествия <br />
                            с погружением могут стать мощной силой добра, разрушая барьеры, <br />
                            развеивая мифы
                            и объединяя людей из разных культур и сообществ.</p>
                        <br />
                        <p>
                            Благодаря опыту и непосредственному знакомству с нашими <br />
                            направлениями, мы стремимся <br />
                            создавать продуманные и тщательно разработанные маршруты, <br />
                            которые будут оказывать длительное <br />
                            положительное влияние как на наших клиентов, <br />
                            так и на людей и места, которые нам посчастливилось посетить.
                        </p>
                    </div>
                    <div className='text-xl flex flex-col justify-center'>
                        <p>Мы активно помогаем вернуть устойчивый туризм в <br />
                            некоторые из самых красивых, увлекательных, а иногда и <br />
                            проблемных или непонятных регионов мира, превращая <br />
                            многие сторонние предположения
                            в удивительную реальность. <br />
                            <br />
                            Мы часто слышим: "Я был удивлен" - будь то удивительные пейзажи <br /> и архитектура,
                            качество отелей и кухни, или, прежде всего, <br /> гостеприимство
                            людей и то, что многое из того,
                            что <br /> они видят или слышат в новостях, просто не происходит на улицах.</p>
                    </div>
                    <div>
                        <img className='h-[30rem] w-[40rem]' src={vilage2} alt="" />
                    </div>

                </main>
            </section>

            {/*  */}
            <Footer />
        </>
    );
}