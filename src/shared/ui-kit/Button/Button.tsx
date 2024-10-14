import { ButtonHTMLAttributes, FC } from 'react'
import clsx from 'clsx'

export enum ButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

type ButtonProps = {
	variant?: ButtonVariant
	children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ variant = ButtonVariant.Primary, children, ...props }) => {
	const baseClasses = 'px-4 py-2 rounded-md uppercase text-gray-300 transition-colors'

	const variantClasses = {
		[ButtonVariant.Primary]: 'bg-green-600 hover:bg-green-700',
		[ButtonVariant.Secondary]: 'bg-red-700 hover:bg-red-800',
	}

	return (
		<button
			className={clsx(baseClasses, variantClasses[variant])}
			{...props}>
			{children}
		</button>
	)
}
