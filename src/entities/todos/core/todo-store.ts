import { create } from 'zustand'

type Todo = {
	id: string
	title: string
}

type State = {
	todos: Todo[]
}

type Actions = {
	createTodo: (title: string) => void
	removeTodo: (id: string) => void
	removeAllTodos: () => void
}

export const useTodoStore = create<State & Actions>((set, get) => ({
	todos: [],

	createTodo: (title) =>
		set({
			todos: [...get().todos, { id: Math.round(Math.random() * 100).toString(), title }],
		}),

	removeTodo: (id: string) =>
		set(() => ({
			todos: get().todos.filter((todo) => todo.id !== id),
		})),

	removeAllTodos: () => set({ todos: [] }),
}))
