"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useApplicationStore } from '@/lib/store'
import { InfoIcon } from 'lucide-react'

export default function IdentificationDetailsPage() {
  const { data, updateData } = useApplicationStore()
  const [formData, setFormData] = useState(data.identificationDetails)

  const handleSave = () => {
    updateData('identificationDetails', formData)
  }

  return (
    <>
      <Header />
      <FormContainer title="Identification Details">
        <form className="space-y-6">
          <div>
            <Label htmlFor="countryOfBirth">
              Country of Birth <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.countryOfBirth || ''}
              onValueChange={(value) => setFormData({ ...formData, countryOfBirth: value })}
            >
              <SelectTrigger id="countryOfBirth">
                <SelectValue placeholder="Select country of birth" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="philippines">Philippines</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="vietnam">Vietnam</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="passportCountry">
              Passport Country <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.passportCountry || ''}
              onValueChange={(value) => setFormData({ ...formData, passportCountry: value })}
            >
              <SelectTrigger id="passportCountry">
                <SelectValue placeholder="Select passport country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="philippines">Philippines</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="pakistan">Pakistan</SelectItem>
                <SelectItem value="vietnam">Vietnam</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="placeOfIssue">
              Place of Issue / Issuing Authority <span className="text-red-500">*</span>
            </Label>
            <Input
              id="placeOfIssue"
              value={formData.placeOfIssue || ''}
              onChange={(e) => setFormData({ ...formData, placeOfIssue: e.target.value })}
              placeholder="Enter place of issue or issuing authority"
            />
          </div>

          <div>
            <Label htmlFor="passportNumber">
              Passport Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="passportNumber"
              value={formData.passportNumber || ''}
              onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
              placeholder="Enter passport number"
            />
          </div>

          <div>
            <Label htmlFor="passportExpiryDate">
              Passport Expiry Date <span className="text-red-500">*</span>
            </Label>
            <Input
              id="passportExpiryDate"
              type="date"
              value={formData.passportExpiryDate ? new Date(formData.passportExpiryDate).toISOString().split('T')[0] : ''}
              onChange={(e) => setFormData({ ...formData, passportExpiryDate: new Date(e.target.value) })}
              placeholder="dd-mm-yyyy"
            />
          </div>

          <Alert className="bg-green-50 border-green-200">
            <InfoIcon className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Note: The passport must be valid for a minimum of 6 weeks at the time of submitting the Stage 1 application.
            </AlertDescription>
          </Alert>
        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/avetmiss-details"
          prevPath="/residential-address"
        />
      </FormContainer>
    </>
  )
}