"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useApplicationStore } from '@/lib/store'

export default function EducationEmploymentPage() {
  const { data, updateData, setSuccessMessage } = useApplicationStore()
  const [formData, setFormData] = useState(data.educationEmployment)

  const handleSave = () => {
    updateData('educationEmployment', formData)
    setSuccessMessage("USI & Avetmiss Details saved successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  return (
    <>
      <Header />
      <FormContainer title="Education & Employment Details">
        <form className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Education Details</h3>
            
            <div>
              <Label htmlFor="highestSchoolLevel">
                What is your highest COMPLETED school level? <span className="text-red-500">*</span>
              </Label>
              <Input
                id="highestSchoolLevel"
                value={formData.highestSchoolLevel || ''}
                onChange={(e) => setFormData({ ...formData, highestSchoolLevel: e.target.value })}
                placeholder="Enter highest school level (e.g., Year 12 or equivalent)"
              />
            </div>

            <div>
              <Label>
                Are you still enrolled in secondary or senior secondary education? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.stillEnrolled ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, stillEnrolled: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="enrolled-yes" />
                  <Label htmlFor="enrolled-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="enrolled-no" />
                  <Label htmlFor="enrolled-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>
                Have you SUCCESSFULLY completed any qualifications? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.hasQualifications ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, hasQualifications: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="qualifications-yes" />
                  <Label htmlFor="qualifications-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="qualifications-no" />
                  <Label htmlFor="qualifications-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Employment Details</h3>
            
            <div>
              <Label htmlFor="employmentStatus">
                What is your current employment status? <span className="text-red-500">*</span>
              </Label>
              <Input
                id="employmentStatus"
                value={formData.currentEmploymentStatus || ''}
                onChange={(e) => setFormData({ ...formData, currentEmploymentStatus: e.target.value })}
                placeholder="Enter employment status (e.g., Full-time employee, Student)"
              />
            </div>

            <div>
              <Label htmlFor="mainReason">
                What BEST describes your main reason for undertaking this skills assessment? <span className="text-red-500">*</span>
              </Label>
              <Input
                id="mainReason"
                value={formData.mainReason || ''}
                onChange={(e) => setFormData({ ...formData, mainReason: e.target.value })}
                placeholder="Enter main reason (e.g., Migration purposes, Career change)"
              />
            </div>
          </div>
        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/occupation-details"
          prevPath="/avetmiss-details"
        />
      </FormContainer>
    </>
  )
}