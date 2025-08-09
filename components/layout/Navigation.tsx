"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useApplicationStore } from '@/lib/store'

interface NavigationProps {
  onSave?: () => void
  nextPath?: string
  prevPath?: string
  hideNext?: boolean
  hidePrev?: boolean
  nextLabel?: string
}

export function Navigation({ 
  onSave, 
  nextPath, 
  prevPath, 
  hideNext = false, 
  hidePrev = false,
  nextLabel = "Next"
}: NavigationProps) {
  const router = useRouter()
  const { setSuccessMessage } = useApplicationStore()

  const handleSaveAndExit = () => {
    if (onSave) {
      onSave()
    }
    setSuccessMessage("Progress saved successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  const handleNext = () => {
    if (onSave) {
      onSave()
    }
    if (nextPath) {
      router.push(nextPath)
    }
  }

  const handleBack = () => {
    if (prevPath) {
      router.push(prevPath)
    }
  }

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t">
      <div>
        {!hidePrev && (
          <Button
            type="button"
            onClick={handleBack}
            className="bg-[#f4d03f] hover:bg-[#f7dd4f] text-black"
          >
            Back
          </Button>
        )}
      </div>
      <div className="flex gap-3">
        <Button
          type="button"
          onClick={handleSaveAndExit}
          className="bg-[#2d5f3f] hover:bg-[#3a7a4f]"
        >
          Save & Exit
        </Button>
        {!hideNext && (
          <Button
            type="button"
            onClick={handleNext}
            className="bg-[#f4d03f] hover:bg-[#f7dd4f] text-black"
          >
            {nextLabel}
          </Button>
        )}
      </div>
    </div>
  )
}