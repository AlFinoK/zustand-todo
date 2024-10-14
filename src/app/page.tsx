'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { TodoList } from '@/entities/todos'
import { useTodoStore } from '@/entities/todos/core'
import { Button, ButtonVariant } from '@/shared/ui-kit/Button'
import { Input, InputSize, InputVariant, Toast, ToastVariant, useToastStore } from '@/shared/ui-kit'

export default function Home() {
	const [title, setTitle] = useState('')
	const { toasts, showToast } = useToastStore()
	const { todos, createTodo, removeAllTodos } = useTodoStore()

	const handleCreateTodo = () => {
		if (title.trim() && title.length < 60 && title.length > 3) {
			createTodo(title)
			setTitle('')
			showToast('The todo has been created', ToastVariant.success)
		}
		if (title.length <= 3) {
			showToast('The minimum number of characters is 4', ToastVariant.error)
		}
		if (title.length >= 60) {
			showToast('The maximum number of characters is 60', ToastVariant.error)
		}
	}

	const handleRemoveAllTodos = () => {
		removeAllTodos()
		showToast('All todos have been removed', ToastVariant.success)
	}

	return (
		<div className="bg flex flex-col items-center justify-start h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<div className="flex flex-col items-center gap-5 mb-10">
				<h1 className="text-5xl uppercase">TODO List</h1>
				<div className="flex gap-3 items-center justify-center w-full">
					<Input
						value={title}
						onChange={(e) => setTitle(e)}
						placeholder="Enter a todo"
						variant={InputVariant.Primary}
						size={InputSize.Medium}
					/>
					<Button
						onClick={handleCreateTodo}
						variant={ButtonVariant.Primary}>
						Create a todo
					</Button>
				</div>
			</div>
			<div className={'text-center'}>
				<TodoList />
				{todos.length >= 2 && (
					<Button
						onClick={handleRemoveAllTodos}
						variant={ButtonVariant.Secondary}>
						Delete all todos
					</Button>
				)}
			</div>

			<AnimatePresence>
				<div className="fixed bottom-5 right-5 flex flex-col gap-2">
					{toasts.map((toast, index) => (
						<Toast
							key={index}
							text={toast.text}
							variant={toast.variant}
						/>
					))}
				</div>
			</AnimatePresence>
		</div>
	)
}
