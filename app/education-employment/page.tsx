"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
              <Select
                value={formData.highestSchoolLevel || ''}
                onValueChange={(value) => setFormData({ ...formData, highestSchoolLevel: value })}
              >
                <SelectTrigger id="highestSchoolLevel">
                  <SelectValue placeholder="Select highest school level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year-12">Year 12 or equivalent</SelectItem>
                  <SelectItem value="year-11">Year 11 or equivalent</SelectItem>
                  <SelectItem value="year-10">Year 10 or equivalent</SelectItem>
                  <SelectItem value="year-9">Year 9 or equivalent</SelectItem>
                  <SelectItem value="year-8-below">Year 8 or below</SelectItem>
                  <SelectItem value="never-attended">Never attended school</SelectItem>
                </SelectContent>
              </Select>
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
              <Select
                value={formData.currentEmploymentStatus || ''}
                onValueChange={(value) => setFormData({ ...formData, currentEmploymentStatus: value })}
              >
                <SelectTrigger id="employmentStatus">
                  <SelectValue placeholder="Select employment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time employee</SelectItem>
                  <SelectItem value="part-time">Part-time employee</SelectItem>
                  <SelectItem value="casual">Casual employee</SelectItem>
                  <SelectItem value="self-employed">Self-employed</SelectItem>
                  <SelectItem value="employer">Employer</SelectItem>
                  <SelectItem value="unemployed-seeking">Unemployed - seeking employment</SelectItem>
                  <SelectItem value="unemployed-not-seeking">Unemployed - not seeking employment</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="mainReason">
                What BEST describes your main reason for undertaking this skills assessment? <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.mainReason || ''}
                onValueChange={(value) => setFormData({ ...formData, mainReason: value })}
              >
                <SelectTrigger id="mainReason">
                  <SelectValue placeholder="Select main reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="migration">Migration purposes</SelectItem>
                  <SelectItem value="employment">To get a job</SelectItem>
                  <SelectItem value="career-change">Career change</SelectItem>
                  <SelectItem value="skill-recognition">Skill recognition</SelectItem>
                  <SelectItem value="professional-development">Professional development</SelectItem>
                  <SelectItem value="education">Further education</SelectItem>
                  <SelectItem value="requirement">Employer/industry requirement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
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