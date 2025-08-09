"use client"

import { useState } from 'react'
import { FormContainer } from '@/components/layout/FormContainer'
import { Navigation } from '@/components/layout/Navigation'
import { Header } from '@/components/layout/Header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
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
            <Select
              value={formData.country || 'australia'}
              onValueChange={(value) => setFormData({ ...formData, country: value })}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="australia">Australia</SelectItem>
                <SelectItem value="new-zealand">New Zealand</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="philippines">Philippines</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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

          <div className="space-y-4">
            <div>
              <Label>
                Mobile <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Select
                  value={formData.mobileCountryCode || '+61'}
                  onValueChange={(value) => setFormData({ ...formData, mobileCountryCode: value })}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+61">+61 (AU)</SelectItem>
                    <SelectItem value="+64">+64 (NZ)</SelectItem>
                    <SelectItem value="+91">+91 (IN)</SelectItem>
                    <SelectItem value="+86">+86 (CN)</SelectItem>
                    <SelectItem value="+63">+63 (PH)</SelectItem>
                    <SelectItem value="+44">+44 (UK)</SelectItem>
                    <SelectItem value="+1">+1 (US)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  value={formData.mobileNumber || ''}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder="Mobile number"
                  className="flex-1"
                />
              </div>
            </div>

            <div>
              <Label>Alternate Mobile</Label>
              <div className="flex gap-2">
                <Select
                  value={formData.alternateMobileCountryCode || '+61'}
                  onValueChange={(value) => setFormData({ ...formData, alternateMobileCountryCode: value })}
                >
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+61">+61 (AU)</SelectItem>
                    <SelectItem value="+64">+64 (NZ)</SelectItem>
                    <SelectItem value="+91">+91 (IN)</SelectItem>
                    <SelectItem value="+86">+86 (CN)</SelectItem>
                    <SelectItem value="+63">+63 (PH)</SelectItem>
                    <SelectItem value="+44">+44 (UK)</SelectItem>
                    <SelectItem value="+1">+1 (US)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  value={formData.alternateMobileNumber || ''}
                  onChange={(e) => setFormData({ ...formData, alternateMobileNumber: e.target.value })}
                  placeholder="Alternate mobile number"
                  className="flex-1"
                />
              </div>
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