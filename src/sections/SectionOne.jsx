import { AutoComplete } from 'primereact/autocomplete';
import { useState } from 'react';
import { placeOne } from './data';

export default function SectionOne() {
    const [selectedItem, setSelectedItem] = useState("")
    const [suggestions, setSuggestions] = useState([])

    function searchItems(e) {
        setSelectedItem(placeOne.map(item => item.title).filter(text => text.includes(e.query)))
    }

    return (
        <>
            <section className="min-h-[100vh]">
                <div className="flex" id="main">
                    <div
                        className="h-[450px] w-[500px] bg-zinc-800 absolute bg-opacity-50 z-10 mt-44 mx-12"
                    >
                        <div className="flex flex-col gap-7 items-center">
                            <h1
                                className="text-white text-4xl mt-7 flex justify-center items-center"
                            >
                                Найди свой тур
                            </h1>
                            <div className="mx-12 mt-4">
                                <p className="text-white text-2xl">Место назначение</p>
                                <AutoComplete

                                    pt={{ root: { className: "input rounded-sm px-28 py-3" } }}
                                    value={selectedItem}
                                    suggestions={suggestions}
                                    completeMethod={searchItems}
                                    field="name"
                                    onChange={(e) => setSelectedItem(e.value)}
                                    dropdown
                                />
                            </div>
                            <div className="mx-12">
                                <p className="text-white text-2xl">Желаемая дата</p>
                                <input type="text" className="input rounded-sm px-28 py-3" />
                            </div>
                            <button
                                className="border-2 border-orange-600 text-white p-8 pt-3 pb-3 text-2xl rounded-full transition-colors duration-300 hover:bg-orange-600 w-96"
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
                        src="video/KG.mp4"
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