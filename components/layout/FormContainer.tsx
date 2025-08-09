import { ReactNode } from 'react'

interface FormContainerProps {
  children: ReactNode
  title?: string
}

export function FormContainer({ children, title }: FormContainerProps) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        {title && (
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h2>
        )}
        {children}
      </div>
    </div>
  )
}