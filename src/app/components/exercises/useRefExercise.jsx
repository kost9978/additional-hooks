import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const divRef = useRef({
        height: 40,
        width: 60,
        color: "white",
        name: "Блок"
    });
    const [otherState, setOtherState] = useState(false);
    const handleClick = () => {
        divRef.current.height = 150;
        divRef.current.width = 80;
        divRef.current.name = "text";
        // console.log(divRef);
        setOtherState(!otherState);
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: divRef.current.height,
                    width: divRef.current.width,
                    color: divRef.current.color
                }}
            >
                <small>{divRef.current.name}</small>

            </div>

            <button className="secondary mt-2" onClick={handleClick}>
        Edit
      </button>

        </CollapseWrapper>
    );
};

export default UseRefExercise;
