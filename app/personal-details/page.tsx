"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useApplicationStore } from '@/lib/store'

export default function PersonalDetailsPage() {
  const { data, updateData } = useApplicationStore()
  const [formData, setFormData] = useState(data.personalDetails)

  const handleSave = () => {
    updateData('personalDetails', formData)
  }

  return (
    <>
      <Header />
      <FormContainer title="Personal Details">
        <form className="space-y-6">
          <div>
            <Label htmlFor="title">
              Preferred Title <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.preferredTitle}
              onValueChange={(value) => setFormData({ ...formData, preferredTitle: value })}
            >
              <SelectTrigger id="title">
                <SelectValue placeholder="Select title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr</SelectItem>
                <SelectItem value="mrs">Mrs</SelectItem>
                <SelectItem value="ms">Ms</SelectItem>
                <SelectItem value="dr">Dr</SelectItem>
                <SelectItem value="prof">Prof</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="surname">
              Surname / Family Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="surname"
              value={formData.surname || ''}
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              placeholder="Enter surname"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="singleName"
              checked={formData.singleName || false}
              onCheckedChange={(checked) => setFormData({ ...formData, singleName: checked as boolean })}
            />
            <Label htmlFor="singleName">
              I only have a single Name? <span className="text-red-500">*</span>
            </Label>
          </div>

          <div>
            <Label htmlFor="firstName">
              First or Given Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName || ''}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="Enter first name"
            />
          </div>

          <div>
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="middleName"
              value={formData.middleName || ''}
              onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
              placeholder="Enter middle name (optional)"
            />
          </div>

          <div>
            <Label>
              Are you known by any other Name? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.otherName ? 'yes' : 'no'}
              onValueChange={(value) => setFormData({ ...formData, otherName: value === 'yes' })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="otherName-yes" />
                <Label htmlFor="otherName-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="otherName-no" />
                <Label htmlFor="otherName-no">No</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>
              Gender <span className="text-red-500">*</span>
            </Label>
            <RadioGroup
              value={formData.gender || ''}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="gender-male" />
                <Label htmlFor="gender-male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="gender-female" />
                <Label htmlFor="gender-female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="gender-other" />
                <Label htmlFor="gender-other">Other</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label htmlFor="dob">
              Date of Birth <span className="text-red-500">*</span>
            </Label>
            <Input
              id="dob"
              type="date"
              value={formData.dateOfBirth ? new Date(formData.dateOfBirth).toISOString().split('T')[0] : ''}
              onChange={(e) => setFormData({ ...formData, dateOfBirth: new Date(e.target.value) })}
            />
          </div>
        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/residential-address"
          hidePrev={true}
        />
      </FormContainer>
    </>
  )
}