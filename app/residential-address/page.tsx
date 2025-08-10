"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useApplicationStore } from '@/lib/store'

export default function ResidentialAddressPage() {
  const { data, updateData, setSuccessMessage } = useApplicationStore()
  const [formData, setFormData] = useState(data.residentialAddress)

  const handleSave = () => {
    updateData('residentialAddress', formData)
    setSuccessMessage("Contact details saved successfully")
    setTimeout(() => setSuccessMessage(null), 3000)
  }

  return (
    <>
      <Header />
      <FormContainer title="Residential Address">
        <form className="space-y-6">
          <div>
            <Label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input
              id="country"
              value={formData.country || ''}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="Enter country (e.g., Australia, New Zealand, India)"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="unitNumber">Unit / Flat Number</Label>
              <Input
                id="unitNumber"
                value={formData.unitNumber || ''}
                onChange={(e) => setFormData({ ...formData, unitNumber: e.target.value })}
                placeholder="Unit number"
              />
            </div>
            <div>
              <Label htmlFor="streetNumber">
                Street / Lot number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="streetNumber"
                value={formData.streetNumber || ''}
                onChange={(e) => setFormData({ ...formData, streetNumber: e.target.value })}
                placeholder="Street number"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="streetName">
                Street Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="streetName"
                value={formData.streetName || ''}
                onChange={(e) => setFormData({ ...formData, streetName: e.target.value })}
                placeholder="Street name"
              />
            </div>
            <div>
              <Label htmlFor="suburb">
                Suburb / City <span className="text-red-500">*</span>
              </Label>
              <Input
                id="suburb"
                value={formData.suburb || ''}
                onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                placeholder="Suburb or city"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">
                State / Province <span className="text-red-500">*</span>
              </Label>
              <Input
                id="state"
                value={formData.state || ''}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                placeholder="State or province"
              />
            </div>
            <div>
              <Label htmlFor="postcode">
                Postcode <span className="text-red-500">*</span>
              </Label>
              <Input
                id="postcode"
                value={formData.postcode || ''}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                placeholder="Postcode"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="alternateEmail">Alternate Email</Label>
              <Input
                id="alternateEmail"
                type="email"
                value={formData.alternateEmail || ''}
                onChange={(e) => setFormData({ ...formData, alternateEmail: e.target.value })}
                placeholder="Alternate email address"
              />
            </div>
          </div>

        </form>

        <Navigation
          onSave={handleSave}
          nextPath="/identification-details"
          prevPath="/personal-details"
        />
      </FormContainer>
    </>
  )
}