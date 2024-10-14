import clsx from 'clsx'
import { InputHTMLAttributes, LegacyRef } from 'react'

export enum InputSize {
	Small = 1,
	Medium = 2,
	Large = 3,
}

export enum InputVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

type InputProps = {
	placeholder?: string
	hint?: string
	value?: string
	onChange?: (value: string) => void
	inputProps?: InputHTMLAttributes<HTMLInputElement>
	disabled?: boolean
	size?: InputSize
	variant?: InputVariant
	ref?: LegacyRef<HTMLInputElement>
}

export const Input = (props: InputProps) => {
	const {
		size = InputSize.Medium,
		placeholder,
		value = '',
		onChange,
		inputProps,
		disabled,
		variant = InputVariant.Primary,
		ref,
	} = props

	const baseClasses = 'px-4 py-2 outline-none rounded-md transition-colors'
	const sizeClasses = {
		[InputSize.Small]: 'text-sm',
		[InputSize.Medium]: 'text-base',
		[InputSize.Large]: 'text-lg',
	}

	const variantClasses = {
		[InputVariant.Primary]: 'bg-gray-100 text-black focus:bg-gray-200 focus:placeholder:text-black',
		[InputVariant.Secondary]: 'bg-gray-200 text-gray-700 focus:bg-gray-300 focus:placeholder:text-gray-900',
	}

	return (
		<input
			className={clsx(baseClasses, sizeClasses[size], variantClasses[variant])}
			disabled={disabled}
			value={value}
			onChange={(e) => onChange?.(e.target.value)}
			placeholder={placeholder}
			ref={ref}
			{...inputProps}
		/>
	)
}
