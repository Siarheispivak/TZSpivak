import * as React from 'react';
import * as Label from '@radix-ui/react-label';
import {useState} from "react";
import s from './editableSpan.module.scss'

type EditableSpanPropsType = {
    value: string;
    onChange: (newValue: string) => void;
};
export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    };
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    };
    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    return editMode ? (
        <>
            <Label.Root htmlFor="title"></Label.Root>
            <input
                className={s.label}
                id="title"
                value={title}
                onChange={changeTitle}
                autoFocus
                onBlur={activateViewMode}
            />
        </>
    ) : (
        <span onDoubleClick={activateEditMode}>{props.value}</span>
    );
});
