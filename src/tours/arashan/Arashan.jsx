import React from 'react';
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";
import { ScrollRestoration, useParams } from "react-router-dom"
import { useState, useEffect } from 'react';
import SelectableButton from '../../SelectableButton';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

function Arashan() {
    let { month } = useParams();

    const [selectedType, setSelectedType] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('')

    const selectMonth = (month) => {
        setSelectedMonth(month);
    };

    const selectType = (type) => {
        setSelectedType(type);
    };

    const selectDay = (day) => {
        setSelectedDay(day);
    };


    const requestProcessing = (month) => {
        if (month === 'January') {
            selectMonth('Январе месяце')
        }
        else if (month === 'February') {
            selectMonth('Феврале месяце')
        }
        else if (month === 'March') {
            selectMonth('Марте месяце')
        }
        else if (month === 'April') {
            selectMonth('Апреле месяце')
        }
        else if (month === 'May') {
            selectMonth('Мае месяце')
        }
        else if (month === 'June') {
            selectMonth('Июне месяце')
        }
        else if (month === 'July') {
            selectMonth('Июле месяце')
        }
        else if (month === 'August') {
            selectMonth('Августе месяце')
        }
        else if (month === 'September') {
            selectMonth('Сентябре месяце')
        }
        else if (month === 'October') {
            selectMonth('Октябре месяце')
        }
        else if (month === 'November') {
            selectMonth('Ноябре месяце');
        }
        else if (month === 'December') {
            selectMonth('Декабре месяце')
        }
    }

    useEffect(() => {
        requestProcessing(month);
    }, [month]);


    let text = `Здравствуйте хотел бы приобрести тур "Алтын-Арашан". ${selectedType} в ${selectedMonth} с продолжительностью в ${selectedDay} `
    encodeURIComponent(text)

    function tour() {
        if (!selectedType || !selectedMonth || !selectedDay) {
            alert("Пожалуйста, выберите тип тура, месяц и продолжительность.");
            return;
        }

        let url = `https://wa.me/+996500227647?text=${encodeURI(text)}`

        window.open(url, '_blank');
    }

    return (
        <>
            <ScrollRestoration />

            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <Header />
            </ClerkProvider>

            <section>

                <div className="absolute z-10 mt-[20rem] flex items-center justify-center w-full">
                    <h1 className="text-white text-8xl mt-7 opacity-80">Алтын-Арашан</h1>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <video
                        src="/video/arashan!.mp4"
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
                        <img className='h-[28rem] w-[40rem]' src="/img/skazkaImg/alaarcha1.jpg" alt="иссык-куль" />
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
                        <img className='h-[28rem] w-[40rem]' src="/img/skazkaImg/arashan2.jpg" alt="иссык-куль" />
                    </div>

                </main>
            </section>

            <section className='mt-20'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-4xl'>Найдите свой идеальный тур!</h2>
                </div>

                <div className='flex flex-col mx-16 gap-6 mt-12'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-2xl'>Тип тура</h3>
                        <div className='flex gap-2'>
                            <SelectableButton
                                label="Одиночный тур"
                                isSelected={selectedType === 'Одиночный тур'}
                                onClick={() => selectType('Одиночный тур')}
                            />
                            <SelectableButton
                                label="Групповой тур"
                                isSelected={selectedType === 'Групповой тур'}
                                onClick={() => selectType('Групповой тур')}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-2xl'>Желаемый месяц</h3>

                        <div className='pb-3'>
                            <div className='flex gap-2'>
                                <SelectableButton
                                    label="Январь"
                                    isSelected={selectedMonth === 'Январе месяце'}
                                    onClick={() => selectMonth('Январе месяце')}

                                />
                                <SelectableButton
                                    label="Февраль"
                                    isSelected={selectedMonth === 'Феврале месяце'}
                                    onClick={() => selectMonth('Феврале месяце')}
                                />
                                <SelectableButton
                                    label="Март"
                                    isSelected={selectedMonth === 'Марте месяце'}
                                    onClick={() => selectMonth('Марте месяце')}
                                />
                                <SelectableButton
                                    label="Апрель"
                                    isSelected={selectedMonth === 'Апреле месяце'}
                                    onClick={() => selectMonth('Апреле месяце')}
                                />
                                <SelectableButton
                                    label="Май"
                                    isSelected={selectedMonth === 'Мае месяце'}
                                    onClick={() => selectMonth('Мае месяце')}
                                />
                                <SelectableButton
                                    label="Июнь"
                                    isSelected={selectedMonth === 'Июне месяце'}
                                    onClick={() => selectMonth('Июне месяце')}
                                />
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <SelectableButton
                                label="Июль"
                                isSelected={selectedMonth === 'Июле месяце'}
                                onClick={() => selectMonth('Июле месяце')}
                            />
                            <SelectableButton
                                label="Август"
                                isSelected={selectedMonth === 'Август месяце'}
                                onClick={() => selectMonth('Август месяце')}
                            />
                            <SelectableButton
                                label="Сентябрь"
                                isSelected={selectedMonth === 'Сентябре месяце'}
                                onClick={() => selectMonth('Сентябре месяце')}
                            />
                            <SelectableButton
                                label="Октябрь"
                                isSelected={selectedMonth === 'Октябре месяце'}
                                onClick={() => selectMonth('Октябре месяце')}
                            />
                            <SelectableButton
                                label="Ноябрь"
                                isSelected={selectedMonth === 'Ноябре месяце'}
                                onClick={() => selectMonth('Ноябре месяце')}
                            />
                            <SelectableButton
                                label="Декабрь"
                                isSelected={selectedMonth === 'Декабре месяце'}
                                onClick={() => selectMonth('Декабре месяце')}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-2xl'>Продолжительность тура</h3>
                        <div className='flex gap-2'>
                            <SelectableButton
                                label="1 день"
                                isSelected={selectedDay === '1 день'}
                                onClick={() => selectDay('1 день')}
                            />
                            <SelectableButton
                                label="3 дня"
                                isSelected={selectedDay === '3 дня'}
                                onClick={() => selectDay('3 дня')}
                            />
                            <SelectableButton
                                label="5 дней"
                                isSelected={selectedDay === '5 дней'}
                                onClick={() => selectDay('5 дней')}
                            />

                        </div>
                    </div>

                    <div className='flex items-center justify-center mt-4'>
                        <button class="flex justify-center self-center mt-7 text-black bg-orange-200 p-8 pt-4 pb-4 text-3xl rounded-full transition-colors duration-300 hover:bg-amber-600 hover:text-white w-[32rem]"
                            onClick={() => tour()}>
                            Составить и оформить тур
                        </button>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Arashan;