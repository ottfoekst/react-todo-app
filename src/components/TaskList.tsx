import { ChangeEvent, useCallback, useState } from "react"
import { TaskCard } from "./TaskCard"

type Props = {
    title: string
}

export const TaskList = (props: Props) => {
    const {title} = props

    const [text, setText] = useState<string>("")
    const [tasks, setTasks] = useState<string[]>([])

    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickDelete = useCallback((index: number) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }, [tasks])

    const onClickAdd = () => {
        if (text) {
            const newTasks = [...tasks]
            newTasks.push(text)
            setTasks(newTasks)
            setText("")
        }
    }

    const style = {
        width: '45%',
        margin: '1%',
        padding: '1%',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '1px'
    }

    return (
        <>
            <div style={style}>
                <div>{title}</div>
                <input type="text" value={text} onChange={onChangeText}></input>
                <button onClick={onClickAdd}>タスク作成</button>
                {tasks.map((task, index) => <TaskCard task={task} onClickDelete={() => onClickDelete(index)} />)}
            </div>
        </>
    )
}