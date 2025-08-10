"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useApplicationStore } from '@/lib/store'

export default function OccupationDetailsPage() {
  const { data, updateData } = useApplicationStore()
  const [formData, setFormData] = useState(data.occupationDetails)

  const handleSave = () => {
    updateData('occupationDetails', formData)
  }

  return (
    <>
      <Header />
      <FormContainer title="Occupation Details">
        <form className="space-y-6">
          <div>
            <Label htmlFor="occupation">
              Choose Occupation <span className="text-red-500">*</span>
            </Label>
            <Input
              id="occupation"
              value={formData.occupation || ''}
              onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
              placeholder="Enter your occupation (e.g., Chef, Motor Mechanic, Electrician)"
            />
          </div>

          <div>
            <Label>
              Skills Assessment Program <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.assessmentProgram || ''}
              onValueChange={(value) => setFormData({ ...formData, assessmentProgram: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tss" id="tss" />
                <Label htmlFor="tss">TSS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="osap" id="osap" />
                <Label htmlFor="osap">OSAP</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>
              Pathway <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.pathway || ''}
              onValueChange={(value) => setFormData({ ...formData, pathway: value })}
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="pathway1" id="pathway1" className="mt-1" />
                  <Label htmlFor="pathway1" className="cursor-pointer">
                    <span className="font-semibold">Pathway 1:</span> DO NOT hold an Australian AQF III Qualification or (AQF IV for Chef) in the occupation area
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="pathway2" id="pathway2" className="mt-1" />
                  <Label htmlFor="pathway2" className="cursor-pointer">
                    <span className="font-semibold">Pathway 2:</span> Currently hold an Australian AQF III Qualification or (AQF IV for Chef), in the occupation area
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>
              Are you currently in Australia? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.inAustralia ? 'yes' : 'no'}
              onValueChange={(value) => setFormData({ ...formData, inAustralia: value === 'yes' })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="australia-yes" />
                <Label htmlFor="australia-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="australia-no" />
                <Label htmlFor="australia-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="intendedVisa">
              Which visa do you intend to apply for in conjunction with this skills assessment? <span className="text-red-500">*</span>
            </Label>
            <Input
              id="intendedVisa"
              value={formData.intendedVisa || ''}
              onChange={(e) => setFormData({ ...formData, intendedVisa: e.target.value })}
              placeholder="Enter visa type (e.g., 482 TSS, 186 ENS, 189 Skilled Independent)"
            />
          </div>
        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/applicant-declaration"
          prevPath="/education-employment"
        />
      </FormContainer>
    </>
  )
}