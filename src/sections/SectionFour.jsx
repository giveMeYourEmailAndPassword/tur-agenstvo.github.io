export default function SectionFour() {
    return (
        <>
            <section className="mt-20">
                <div className="flex justify-center">
                    <h2 className="text-4xl flex" id="oNas">
                        Почему стоит путешествовать именно с нами
                        <p>?</p>
                    </h2>
                </div>

                <div className="flex mt-12">
                    <div className="w-[50%]">
                        <img src="img/kyrgyzstan-4661907.jpg" alt="kyrgyzstan" />
                    </div>
                    <div
                        className="w-[50%] bg-zinc-900 p-12 flex flex-col gap-5 justify-center"
                    >
                        <h3 className="text-3xl text-orange-100">Кто мы</h3>
                        <p className="text-orange-100 text-xl">
                            Мы специализируемся на увлекательных и ответственных
                            <br />
                            турах для небольших групп и индивидуальном отдыхе по всему
                            <br />
                            миру. Опираясь на наши обширные знания и местный опыт, мы
                            <br />
                            создаем необыкновенные путешествия по самым
                            <br />
                            захватывающим местам мира.
                        </p>
                        <p className="text-orange-100 text-xl">
                            Мы заботимся об окружающей среде и сообществах, которые
                            <br />
                            нам выпала честь посетить. Эта этика была подкреплена
                            <br />
                            созданием собственного благотворительного фонда,
                            <br />
                            позволяющего нам направлять средства на устойчивые
                            <br />
                            общественные инициативы.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}