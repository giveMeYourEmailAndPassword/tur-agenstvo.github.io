export default function Footer() {
    return (
        <>
            <footer className="bg-[#395556] mt-20">



                <div className="flex gap-12 justify-around pt-12 pb-12">
                    <div>
                        <img src="/img/logo-2.0.png" className="h-14" alt="kettik.kg" />
                        <div className="flex flex-col text-[#f4ebdc] text-sm">
                            <p>Добро пожаловать в KETTIK.KG! <br />
                                Ваш надежный партнера в мире приключений и путешествий! <br />
                                Мы — команда профессионалов, предлагающая <br />
                                уникальные и незабываемые туры по самым живописным уголкам Кыргызстана.
                                <br />
                                В KETTIK.KG мы стремимся создать для вас не просто путешествие, <br />
                                а настоящий опыт, наполненный впечатлениями, эмоциями и открытиями. <br />
                                Наша миссия — помочь вам погрузиться в культуру, историю и <br /> природу наших уникальных мест, <br />
                                от горных вершин и живописных озер до древних городов и кочевых пастбищ.</p>
                        </div>
                    </div>

                    <div className="flex flex-col text-[#f4ebdc] text-lg">
                        <h1 className="text-[#e5b567] text-2xl">
                            НАШИ КОНТАКТЫ
                        </h1>
                        <p>KETTIK.KG</p>
                        <a href="">0 (507) 77-88-44</a>
                        <a href="">Бишкек</a>
                        <a href="">ЦУМ проспект Чуй, 155</a>
                        <a href="">42.876207, 74.614535</a>
                    </div>

                    <div className="flex flex-col text-[#f4ebdc] text-lg">
                        <h1 className="text-[#e5b567] text-2xl">
                            О НАС
                        </h1>
                        <a href="">Знакомство с командой</a>
                        <a href="">Почему Wild Frontiers</a>
                        <a href="">Отзывы клиентов</a>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[#e5b567] text-xl">
                            НАШИ СОЦ СЕТИ
                        </h1>
                        <div className="flex flex-col gap-4 pt-4 items-center color-[#e5b567]">
                            <img className="h-10 w-10" src="/img/img-social/facebook.png" alt="facebook" />
                            <img className="h-10 w-10" src="/img/img-social/instagram.png" alt="instagram" />
                            <img className="h-10 w-10" src="/img/img-social/whatsapp.png" alt="whatsapp" />
                        </div>
                    </div>
                </div>

                <div className="bg-black pt-6 pb-6 flex items-center justify-center">
                    <h2 className="text-[#f4ebdc]">©Kettik.kg Travel Tour Company. All rights reserved. </h2>
                </div>
            </footer>
        </>
    )
}