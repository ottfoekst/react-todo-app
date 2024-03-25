import { useState } from "react";

enum State {
    INACTIVE = '未着手',
    ACTIVE = '着手',
    COMPLETED = '完了'
}

type Props = {
    task: string
    onClickDelete: () => void
}

export const TaskCard = (props: Props) => {
    const {task, onClickDelete} = props;
    const [state, changeState] = useState<State>(State.INACTIVE)

    const style = {
        margin: '1%',
        backgroundColor: state === State.INACTIVE ? 'yellow' : state === State.ACTIVE ? 'green' : 'gray',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '1px'
    }

    return (
        <div style={style}>
            {task}
            <br />
            <button onClick={() => changeState(State.INACTIVE)} disabled={state === State.INACTIVE}>
                {State.INACTIVE.toString()}
            </button>
            <button onClick={() => changeState(State.ACTIVE)} disabled={state === State.ACTIVE}>
                {State.ACTIVE.toString()}
            </button>
            <button onClick={() => changeState(State.COMPLETED)} disabled={state === State.COMPLETED}>
                {State.COMPLETED.toString()}
            </button>
            <button onClick={onClickDelete}>
                削除
            </button>
        </div>
    )
}