import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ToastVariant, useToastStore } from './core/toast-store'

type ToastProps = {
	text: string
	variant: ToastVariant
}

export const Toast = ({ text, variant }: ToastProps) => {
	const { toasts, hideToast } = useToastStore()

	const variantToggle = variant === ToastVariant.success ? 'bg-green-600' : 'bg-red-600'

	useEffect(() => {
		if (toasts.length > 0) {
			const timer = setTimeout(() => {
				hideToast(0)
			}, 1337)
			return () => clearTimeout(timer)
		}
	}, [toasts, hideToast])

	return (
		<AnimatePresence>
			<motion.div
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: -300, opacity: 0 }}
				className={`h-max px-4 py-2 rounded-md text-center text-white w-[250px] mb-2 ${variantToggle}`}>
				{text}
			</motion.div>
		</AnimatePresence>
	)
}
