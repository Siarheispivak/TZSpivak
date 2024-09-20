import s from './menuHeader.module.scss'
import {Button} from "@/shared/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const MenuHeader = () => {
    return (
        <>
            <div className={s.wrapper}>
                <div>
                    <Button style={{borderRadius: '3px', padding: '4px'}} variant={'quaternary'}>ФИН</Button>
                    <span>Контроль</span>
                </div>
                <Button variant={'quinary'}>Меню<FontAwesomeIcon icon={faTimes}/></Button>
            </div>
        </>
    )
}