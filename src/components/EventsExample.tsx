import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const onDragWidthPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }

    const onLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    }

    return (
        <div>
            <input value={value} onChange={onChangeHandler} type='text' placeholder="controlled" />
            <input ref={inputRef} type='text' placeholder="unruled" />
            <button onClick={onClickHandler}>click</button>
            <div onDrag={onDragHandler} draggable style={{ width: 200, height: 200, background: 'pink' }}></div>
            <div
                onDrop={onDropHandler}
                onDragLeave={onLeaveHandler}
                onDragOver={onDragWidthPreventHandler}
                style={{ width: 200, height: 200, background: isDrag ? 'purple' : 'pink', marginTop: 15 }}></div>
        </div>
    )
}

export default EventsExample; 