'use client'

import { Button, ButtonVariant } from '@/shared/ui-kit'
import { useTodoStore } from '../core'
import { ToastVariant, useToastStore } from '@/shared/ui-kit/Toast'

type TodoProps = {
	text: string
	id: string
}

export const Todo = ({ text, id }: TodoProps) => {
	const { removeTodo } = useTodoStore()
	const { showToast } = useToastStore()

	const handleRemoveTodo = (id: string) => {
		removeTodo(id)
		showToast('The todo have been removed', ToastVariant.success)
	}

	return (
		<li className="flex justify-between items-center min-w-[50vw] max-w-[70vw] gap-5 px-4 py-2 mb-4 rounded-sm ring-2 ring-[#556382] transition hover:bg-[#363b50]">
			<p>{text}</p>
			<Button
				variant={ButtonVariant.Secondary}
				onClick={() => handleRemoveTodo(id)}>
				Remove this todos
			</Button>
		</li>
	)
}
