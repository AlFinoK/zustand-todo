'use client'

import { Todo } from './Todo'
import { useTodoStore } from '../core'

export const TodoList = () => {
	const { todos } = useTodoStore()

	return (
		<ul>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					id={todo.id}
					text={todo.title}
				/>
			))}
		</ul>
	)
}
