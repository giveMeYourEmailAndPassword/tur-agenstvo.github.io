import React from 'react';
import Header from "../sections/Header";
import Footer from '../sections/Footer';
import { useState } from 'react';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

function SectionOne() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('')

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const dateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    // 
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Отправка...");
        const formData = new FormData(event.target);

        formData.append("access_key", "c057e2a6-f2df-45d5-adab-bfa323cfe940");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Ваше сообщение отправленно!");
            event.target.reset();
        } else {
            console.log("Ошибка 404...", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <Header />
            </ClerkProvider>


            <section className="mt-40 text-center">
                <h1 className="text-4xl">
                    Связаться с нами!
                </h1>
                <h2 className="text-3xl">
                    Начните свое приключение с разговора с одним из наших экспертов.
                </h2>

                <div className="flex gap-6 items-center justify-center mt-12">
                    <div className="bg-orange-100 w-[54rem] h-[52rem] pt-12 rounded-md">
                        <div>
                            <div>
                                <form onSubmit={onSubmit} className='flex flex-col gap-7 items-center pb-4'>

                                    <div>
                                        <h2>Введите ваше имя</h2>
                                        <input type="text" name="name" className='input w-[24rem] max-w-xs' />
                                    </div>

                                    <div>
                                        <p>Ваш email адресс</p>
                                        <input type="email" name="email" required className='input w-[24rem] max-w-xs' />
                                    </div>

                                    <div>
                                        <p>Ваше сообщение</p>
                                        <textarea name="message" required className='input w-[60rem] max-w-[46rem] h-96'></textarea>
                                    </div>

                                    <button type="submit" className='flex justify-center self-center text-black bg-orange-200 p-8 pt-4 pb-4 text-3xl rounded-full transition-colors duration-300 hover:bg-amber-600 hover:text-white w-[32rem]'>Отправить сообщение</button>
                                </form>
                                <span>{result}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </>
    )
}

export default SectionOne