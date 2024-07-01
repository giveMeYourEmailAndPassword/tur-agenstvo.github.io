import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { placeOne } from './data';

export default function SectionOne() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('')


    const navigate = useNavigate();

    const handleClick = () => {
        if (!selectedValue || !selectedDate) {
            alert("Пожалуйста, выберите Место назначения и Желаемую дату!");
            return;
        }
        let result = `${selectedValue}/${selectedDate}`;
        navigate(result);
        console.log(result);

    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const dateChange = (event) => {
        setSelectedDate(event.target.value);
    }





    return (
        <>
            <section className="min-h-[100vh]">
                <div className="flex" id="main">
                    <div
                        className="h-[450px] w-[500px] bg-zinc-800 absolute bg-opacity-50 z-10 mt-44 mx-12"
                    >
                        <div className="flex flex-col gap-7 justify-center">
                            <h1
                                className="text-white text-4xl mt-7 flex justify-center items-center"
                            >
                                Найди свой тур
                            </h1>
                            <div className='flex flex-col gap-8'>
                                <div className="mx-12 mt-4">
                                    <p className="text-white text-2xl">Место назначение</p>
                                    <select
                                        className="select w-full max-w-xl text-left text-lg"
                                        value={selectedValue}
                                        onChange={handleChange}
                                    >
                                        <option disabled value="">Нажмите для выбора</option>
                                        <option value="Issyk-Kul">Иссык-Куль</option>
                                        <option value="Ala-Archa">Ала-Арча</option>
                                        <option value="Skazka">Ущелье Сказка</option>
                                        <option value="Kol-Tor">Кол-Тор</option>
                                        <option value="Chun-Kurchak">Чункурчак</option>
                                        <option value="Arashan">Алтын-Арашан</option>
                                    </select>
                                </div>
                                <div className="mx-12">
                                    <p className="text-white text-2xl">Желаемый месяц</p>
                                    <select className="select w-full max-w-xl text-left text-lg"
                                        value={selectedDate}
                                        onChange={dateChange}>
                                        <option disabled value="" selected className=''>Нажмите для выбора</option>
                                        <option value="January">Январь</option>
                                        <option value="February">Февраль</option>
                                        <option value="March">Март</option>
                                        <option value="April">Апрель</option>
                                        <option value="May">Май</option>
                                        <option value="June">Июнь</option>
                                        <option value="July">Июль</option>
                                        <option value="August">Август</option>
                                        <option value="September">Сентябрь</option>
                                        <option value="October">Октябрь</option>
                                        <option value="November">Ноябрь</option>
                                        <option value="December">Декабрь</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                className="flex justify-center self-center mt-7  
                                 border-2 border-orange-600 text-white p-8 pt-3 pb-3 text-2xl rounded-full transition-colors duration-300 hover:bg-orange-600 w-96"
                                onClick={() => handleClick()}
                                href="asdasd"

                            >
                                Найти
                            </button>
                        </div>
                    </div>

                    {/* <div>
                    <div
                        className="absolute bg-opacity-50 z-10 mt-40 mx-96"
                    >
                        <h1 className="text-white text-4xl mt-7 flex justify-center items-center">
                            Крупнейшее Тур-Агенство в Кыргызстане</h1>

                    </div>
                </div> */}
                </div>

                <div className="max-h-screen overflow-hidden">
                    <video
                        src="/video/KG.mp4"
                        autoPlay
                        muted
                        loop
                        controls
                        disablePictureInPicture
                        disableRemotePlayback
                        className="w-full h-auto relative"
                    ></video>

                </div>
            </section >
        </>
    )
}