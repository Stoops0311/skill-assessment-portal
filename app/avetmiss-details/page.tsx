"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useApplicationStore } from '@/lib/store'

export default function AvetmissDetailsPage() {
  const { data, updateData, setSuccessMessage } = useApplicationStore()
  const [formData, setFormData] = useState(data.avetmissDetails)

  const handleSave = () => {
    updateData('avetmissDetails', formData)
    setSuccessMessage("USI & Avetmiss Details saved successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  return (
    <>
      <Header />
      <FormContainer title="Avetmiss Details">
        <form className="space-y-6">
          <div>
            <RadioGroup
              value={formData.isOffshore ? 'offshore' : 'onshore'}
              onValueChange={(value) => setFormData({ ...formData, isOffshore: value === 'offshore' })}
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg bg-gray-50">
                <RadioGroupItem value="offshore" id="offshore" />
                <Label htmlFor="offshore" className="cursor-pointer">
                  I am offshore (outside of Australia) - Do not need any USI? <span className="text-red-500">*</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-6 pt-4 border-t">
            <h3 className="text-lg font-semibold">Avetmiss Details</h3>

            <div>
              <Label>
                Do you speak a Language other than English at home? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.speakOtherLanguage ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, speakOtherLanguage: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="lang-yes" />
                  <Label htmlFor="lang-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="lang-no" />
                  <Label htmlFor="lang-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.speakOtherLanguage && (
              <div>
                <Label htmlFor="language">
                  Specify Language <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="language"
                  value={formData.language || ''}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  placeholder="Enter language spoken at home"
                />
              </div>
            )}

            <div>
              <Label htmlFor="englishProficiency">
                Proficiency in Spoken English <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.englishProficiency || ''}
                onValueChange={(value) => setFormData({ ...formData, englishProficiency: value })}
              >
                <SelectTrigger id="englishProficiency">
                  <SelectValue placeholder="Select proficiency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="very-well">Very Well</SelectItem>
                  <SelectItem value="well">Well</SelectItem>
                  <SelectItem value="not-well">Not Well</SelectItem>
                  <SelectItem value="not-at-all">Not at All</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>
                Are you of Aboriginal or Torres Strait Islander Origin? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.isAboriginalOrTorresStrait ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, isAboriginalOrTorresStrait: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="aboriginal-yes" />
                  <Label htmlFor="aboriginal-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="aboriginal-no" />
                  <Label htmlFor="aboriginal-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>
                Do you consider yourself to have a disability, impairment or long-term condition? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.hasDisability ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, hasDisability: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="disability-yes" />
                  <Label htmlFor="disability-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="disability-no" />
                  <Label htmlFor="disability-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>
                Will you require additional support to participate in this skills assessment? <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                value={formData.requiresSupport ? 'yes' : 'no'}
                onValueChange={(value) => setFormData({ ...formData, requiresSupport: value === 'yes' })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="support-yes" />
                  <Label htmlFor="support-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="support-no" />
                  <Label htmlFor="support-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/education-employment"
          prevPath="/identification-details"
        />
      </FormContainer>
    </>
  )
}