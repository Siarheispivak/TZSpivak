import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import s from './navigationMenu.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook, faCog, faList, faPen} from '@fortawesome/free-solid-svg-icons';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

export const Menu = () => {
    return (
        <>
            <NavigationMenu.Root orientation="vertical">
                <NavigationMenu.List className={s.list}>

                    <NavigationMenu.Item className={s.item}>
                        <NavigationMenu.Trigger className={s.trigger}>
                            <span className={s.spanWithGap}><FontAwesomeIcon icon={faCog}/>Настройки</span>
                            <span className={s.indicator}><FontAwesomeIcon icon={faCaretDown}/></span>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={s.content}>Настройка 1</NavigationMenu.Content>
                        <NavigationMenu.Content className={s.content}>Настройка 2</NavigationMenu.Content>

                    </NavigationMenu.Item>

                    <NavigationMenu.Item className={s.item}>
                        <NavigationMenu.Trigger className={s.trigger}>
                            <span className={s.spanWithGap}> <FontAwesomeIcon icon={faPen}/> Внесение данных</span>
                            <span className={s.indicator}><FontAwesomeIcon icon={faCaretDown}/></span>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={s.content}>Внести</NavigationMenu.Content>
                        <NavigationMenu.Content className={s.content}>Перенаправить</NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className={s.item}>
                        <NavigationMenu.Trigger className={s.trigger}>
                            <span className={s.spanWithGap}><FontAwesomeIcon icon={faList}/>Отчёты</span>
                            <span className={s.indicator}><FontAwesomeIcon icon={faCaretDown}/></span>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={s.content}>За неделю</NavigationMenu.Content>
                        <NavigationMenu.Content className={s.content}>За месяц</NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className={s.item}>
                        <NavigationMenu.Trigger className={s.trigger}>
                            <span className={s.spanWithGap}><FontAwesomeIcon icon={faBook}/>База знаний</span>
                            <span className={s.indicator}><FontAwesomeIcon icon={faCaretDown}/></span>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={s.content}>БД-1</NavigationMenu.Content>
                        <NavigationMenu.Content className={s.content}>БД-2</NavigationMenu.Content>

                    </NavigationMenu.Item>

                </NavigationMenu.List>
            </NavigationMenu.Root>
        </>
    )
}