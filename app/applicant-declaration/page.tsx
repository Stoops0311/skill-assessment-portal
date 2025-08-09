"use client"

import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useApplicationStore } from '@/lib/store'
import { Download, FileText } from 'lucide-react'

export default function ApplicantDeclarationPage() {
  const { updateData, setSuccessMessage } = useApplicationStore()

  const handleSave = () => {
    updateData('declarationCompleted', true)
    setSuccessMessage("Applicant Declaration done successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  const downloadForm = (formName: string) => {
    // In a real application, this would download actual PDF files
    const link = document.createElement('a')
    link.href = '#'
    link.download = `${formName.replace(/ /g, '_')}.pdf`
    link.click()
    alert(`Downloading ${formName}...`)
  }

  return (
    <>
      <Header />
      <FormContainer title="Applicant Declaration">
        <Alert className="bg-yellow-50 border-yellow-300 mb-6">
          <AlertDescription className="text-gray-800 font-semibold">
            PLEASE DOWNLOAD ALL THE BELOW FORMS FOR SIGNATURES BEFORE YOU PROCEED TO THE NEXT STEP.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">SAQ File</h3>
                <p className="text-sm text-gray-600">Skills Assessment Questionnaire</p>
              </div>
            </div>
            <Button
              onClick={() => downloadForm('SAQ File')}
              className="bg-[#2d5f3f] hover:bg-[#3a7a4f]"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">Information Release Form</h3>
                <p className="text-sm text-gray-600">Authorization for information verification</p>
              </div>
            </div>
            <Button
              onClick={() => downloadForm('Information Release Form')}
              className="bg-[#2d5f3f] hover:bg-[#3a7a4f]"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="font-semibold">Applicant Declaration</h3>
                <p className="text-sm text-gray-600">Declaration of authenticity and accuracy</p>
              </div>
            </div>
            <Button
              onClick={() => downloadForm('Applicant Declaration')}
              className="bg-[#2d5f3f] hover:bg-[#3a7a4f]"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <Navigation
          onSave={handleSave}
          nextPath="/document-upload"
          prevPath="/occupation-details"
        />
      </FormContainer>
    </>
  )
}