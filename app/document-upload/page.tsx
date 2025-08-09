"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useApplicationStore } from '@/lib/store'
import { ChevronRight, Upload, InfoIcon } from 'lucide-react'

interface UploadCategory {
  id: string
  label: string
  required: boolean
  expanded: boolean
}

export default function DocumentUploadPage() {
  const { data, updateData, setSuccessMessage } = useApplicationStore()
  const [uploadCategories, setUploadCategories] = useState<UploadCategory[]>([
    { id: 'photo', label: 'Passport Size Photo', required: true, expanded: true },
    { id: 'passport', label: 'Passport', required: true, expanded: true },
    { id: 'resume', label: 'CV/Resume', required: true, expanded: true },
    { id: 'qualifications', label: 'Qualification Docs (Certificate and Transcripts / Marksheets)', required: true, expanded: true },
  ])

  const toggleCategory = (id: string) => {
    setUploadCategories(prev =>
      prev.map(cat =>
        cat.id === id ? { ...cat, expanded: !cat.expanded } : cat
      )
    )
  }

  const handleFileUpload = (categoryId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must not exceed 5 MB')
        return
      }
      
      const uploadedDocs = { ...data.uploadedDocuments }
      switch (categoryId) {
        case 'photo':
          uploadedDocs.photo = true
          break
        case 'passport':
          uploadedDocs.passport = true
          break
        case 'resume':
          uploadedDocs.resume = true
          break
        case 'qualifications':
          uploadedDocs.qualifications = true
          break
      }
      
      updateData('uploadedDocuments', uploadedDocs)
      setSuccessMessage(`${file.name} uploaded successfully`)
      setTimeout(() => setSuccessMessage(null), 3000)
    }
  }

  const handleSave = () => {
    setSuccessMessage("Application saved successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  const handleSubmit = () => {
    alert('Application submitted successfully! You will receive a confirmation email shortly.')
  }

  return (
    <>
      <Header />
      <FormContainer title="Instructions for upload">
        <Alert className="bg-gray-100 border-gray-300 mb-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription className="text-gray-700">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Maximum file size: 5 MB</li>
              <li>All uploaded documents must be high quality color scans of original documents</li>
              <li>Upload relevant documents under correct category</li>
              <li>Click on document category to upload relevant document(s)</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          {uploadCategories.map((category) => (
            <div key={category.id} className="border rounded-lg">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={category.expanded}
                    onChange={() => {}}
                    className="cursor-pointer"
                  />
                  <Label className="cursor-pointer">
                    {category.label}
                    {category.required && <span className="text-red-500 ml-1">*</span>}
                  </Label>
                </div>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${
                    category.expanded ? 'rotate-90' : ''
                  }`}
                />
              </div>
              
              {category.expanded && (
                <div className="px-4 pb-4 border-t">
                  <div className="mt-4">
                    <Label htmlFor={`upload-${category.id}`} className="cursor-pointer">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, JPG, PNG (max 5MB)
                        </p>
                      </div>
                    </Label>
                    <Input
                      id={`upload-${category.id}`}
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(category.id, e)}
                    />
                    {data.uploadedDocuments[category.id as keyof typeof data.uploadedDocuments] && (
                      <p className="text-sm text-green-600 mt-2">✓ Document uploaded</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Navigation
          onSave={handleSave}
          prevPath="/applicant-declaration"
          hideNext={true}
        />
        
        <div className="mt-4 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#2d5f3f] hover:bg-[#3a7a4f] text-white px-8 py-3 rounded-md font-semibold"
          >
            Submit Application
          </button>
        </div>
      </FormContainer>
    </>
  )
}