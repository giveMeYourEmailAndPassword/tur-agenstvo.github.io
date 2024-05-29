import { placeOne } from './data';
import { placeTwo } from './data';

export default function SectionThree() {
    return (
        <section>
            <main className="grid gap-x-4 gap-y-2 place-content-center mt-12 grid-cols-custom">
                <div className="flex flex-col gap-4" id='#tours'>
                    {placeOne.map((placeOne, index) => (
                        <div key={index}
                            className={placeOne.imgClassName}
                        >
                            <div className="z-10 h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src={placeOne.img}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110"
                                    alt={placeOne.title}
                                />
                            </div>
                            <div
                                className="absolute bottom-0 z-20 m-0 pb-4 overflow-hidden bg-black w-full rounded-b-xl bg-opacity-50 ps-4 duration-300 h-14 ease-in-out group-hover:h-20 group-hover:bg-opacity-70"
                            >
                                <h1
                                    className="font-serif text-2xl font-bold text-white shadow-xl opacity-100 pt-2"
                                >
                                    {placeOne.title}
                                </h1>
                                <h1 className="text-sm font-bold text-white shadow-xl">
                                    <br />
                                    {placeOne.description}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-4'>
                    {placeTwo.map((placeTwo, index) => (
                        <div key={index}
                            className={placeTwo.imgClassName}
                        >
                            <div className="z-10 h-full w-full overflow-hidden rounded-xl">
                                <img
                                    src={placeTwo.img}
                                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-500 group-hover:scale-110"
                                    alt={placeTwo.title}
                                />
                            </div>
                            <div
                                className="absolute bottom-0 z-20 m-0 pb-4 overflow-hidden bg-black w-full rounded-b-xl bg-opacity-50 ps-4 duration-300 h-14 ease-in-out group-hover:h-20 group-hover:bg-opacity-70"
                            >
                                <h1
                                    className="font-serif text-2xl font-bold text-white shadow-xl opacity-100 pt-2"
                                >
                                    {placeTwo.title}
                                </h1>
                                <h1 className="text-sm font-bold text-white shadow-xl">
                                    <br />
                                    {placeTwo.description}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}



