import {Container} from "@/shared/ui/container";
import {Card} from "@/shared/ui/card";
import {MenuHeader} from "@/shared/ui/menuHeader";
import {Menu} from "@/shared/ui/navigationMenu/navigationMenu";
import {Info} from "@/shared/ui/info/info";
import {Button} from "@/shared/ui/button";
import {Table} from "@/shared/ui/table";
import s from './deck.module.scss'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faFolder, faTimes} from "@fortawesome/free-solid-svg-icons";
import {LabeledInput} from "@/shared/ui/labledInput";
import {Avatar} from "@/shared/ui/avatar";

export const DeckPage = () => {
    const [loadData, setLoadData] = useState(false);
    const [dataExport, setDataExport] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value); // установка выбранной даты
    };
    const infoRenderHandler = (value: boolean) => {
        setLoadData(value)
    }
    const dataExportHandler = (value: boolean) => {
        setDataExport(value)
    }

    return (
        <>

            <Container className={s.container}>

                <div className={s.sideBar}>
                    <Card>
                        <MenuHeader/>
                        <Menu/>
                    </Card>
                    <Card>
                        <Info/>
                    </Card>
                    <Button style={{borderRadius: '14px', width: '100%', padding: '20px'}} className={s.button}
                            variant={'quaternary'}>Связвться
                        с нами</Button>
                </div>

                <div className={s.decksWrapper}>
                    <div className={s.header}>
                        <div style={{display: "flex", alignItems: "center",gap:'10px'}}>
                            <Avatar/> <p>ФИО</p>

                        <LabeledInput
                            label="Тариф до"
                            value={selectedDate}
                            placeholder="Выберите дату"
                            onChange={dateChangeHandler}
                            type="date"
                            labelClassName={s.blueLabel}
                        />
                        </div>
                        <div className={s.buttons}>
                            <Button variant={'primary'}>Выйти </Button>
                            <Button variant={'secondary'}>О нас<FontAwesomeIcon icon={faArrowRight}/></Button>
                        </div>
                    </div>
                    <div>Остатки сформированы на 01.04.2023</div>
                    <div className={s.sortDeck}>

                        <div className={s.together}>
                            <button className={s.button} onClick={() => {
                                infoRenderHandler(true)
                            }}>
                                <FontAwesomeIcon icon={faFolder}/>Загрузить данные из csv
                            </button>
                            <button className={s.button} onClick={() => {
                                dataExportHandler(true)
                            }}>
                                <FontAwesomeIcon icon={faFolder}/> Экспорт
                            </button>
                        </div>
                        <button className={s.button} onClick={() => {
                        }}>
                            Очистить <FontAwesomeIcon icon={faTimes}/>
                        </button>

                    </div>
                    <div className={s.deck}>
                        {loadData && <Table dataExport={dataExport} setDataExport={setDataExport}/>}
                    </div>
                </div>
            </Container>
        </>
    )
}