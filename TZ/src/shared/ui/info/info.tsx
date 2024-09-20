import s from './info.module.scss'

export const Info = () => {
    return (
        <>
            <div className={s.wrapper}>

                <div className={s.techInfo}>
                    <h2>Техническая поддержка</h2>
                    <div className={s.contacts}>
                        <div>
                            <span>Номер поддержки:</span>
                            <h3>12324566789</h3>
                        </div>
                        <div>
                            <span>Почта поддержки:</span>
                            <h3>www.example.com</h3>
                        </div>
                    </div>

                    <div className={s.workhours}>
                        <span>Часы работы:</span>
                        <h3>Пн-Пт с 9:00 - 19:00 по мск</h3>
                    </div>
                </div>
                <div className={s.docs}>
                    <span>Пользовательское соглашение</span>
                    <span>Политика конфеденциальности</span>
                    <span>Юридическая информация</span>
                    <span>Публичная оферта</span>
                </div>

            </div>

        </>
    )
}