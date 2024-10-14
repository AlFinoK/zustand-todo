import { create } from 'zustand'

export enum ToastVariant {
	'error' = 'error',
	'success' = 'success',
}

type Toast = {
	text: string
	variant: ToastVariant
}

type State = {
	toasts: Toast[]
}

type Actions = {
	showToast: (text: string, variant: ToastVariant) => void
	hideToast: (index: number) => void
	clearToasts: () => void
}

export const useToastStore = create<State & Actions>((set, get) => ({
	toasts: [],

	showToast: (text, variant) => set({ toasts: [...get().toasts, { text, variant }] }),

	hideToast: (index) => set({ toasts: get().toasts.filter((_, i) => i !== index) }),

	clearToasts: () => set({ toasts: [] }),
}))
