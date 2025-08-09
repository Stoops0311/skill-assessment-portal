"use client"

import { useApplicationStore } from '@/lib/store'

export function Header() {
  const { data, successMessage } = useApplicationStore()

  return (
    <header className="bg-[#2d5f3f] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Australian Skills Assessment Portal</h1>
          <p className="text-sm mt-1 opacity-90">Professional Skills Recognition Service</p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-90">Portal Reference</p>
          <p className="text-lg font-semibold">{data.portalReference}</p>
        </div>
      </div>
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-in slide-in-from-right">
          {successMessage}
        </div>
      )}
    </header>
  )
}