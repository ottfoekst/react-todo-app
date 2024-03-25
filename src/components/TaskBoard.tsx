import { TaskList } from "./TaskList"

export const TaskBoard = () => {
    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <TaskList title="重要度高 / 優先度高" />
                <TaskList title="重要度高 / 優先度低" />
                <TaskList title="重要度低 / 優先度高" />
                <TaskList title="重要度低 / 優先度低" />
            </div>
        </>
    )
}