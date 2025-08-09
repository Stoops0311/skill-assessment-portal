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
            <Select
              value={formData.occupation || ''}
              onValueChange={(value) => setFormData({ ...formData, occupation: value })}
            >
              <SelectTrigger id="occupation">
                <SelectValue placeholder="Select occupation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chef">Chef</SelectItem>
                <SelectItem value="cook">Cook</SelectItem>
                <SelectItem value="automotive-electrician">Automotive Electrician</SelectItem>
                <SelectItem value="motor-mechanic">Motor Mechanic</SelectItem>
                <SelectItem value="diesel-mechanic">Diesel Motor Mechanic</SelectItem>
                <SelectItem value="motorcycle-mechanic">Motorcycle Mechanic</SelectItem>
                <SelectItem value="small-engine-mechanic">Small Engine Mechanic</SelectItem>
                <SelectItem value="sheetmetal-worker">Sheetmetal Trades Worker</SelectItem>
                <SelectItem value="metal-fabricator">Metal Fabricator</SelectItem>
                <SelectItem value="pressure-welder">Pressure Welder</SelectItem>
                <SelectItem value="welder">Welder (First Class)</SelectItem>
                <SelectItem value="locksmith">Locksmith</SelectItem>
                <SelectItem value="panel-beater">Panel Beater</SelectItem>
                <SelectItem value="vehicle-painter">Vehicle Painter</SelectItem>
                <SelectItem value="bricklayer">Bricklayer</SelectItem>
                <SelectItem value="stonemason">Stonemason</SelectItem>
                <SelectItem value="carpenter-joiner">Carpenter and Joiner</SelectItem>
                <SelectItem value="carpenter">Carpenter</SelectItem>
                <SelectItem value="joiner">Joiner</SelectItem>
                <SelectItem value="floor-finisher">Floor Finisher</SelectItem>
                <SelectItem value="plumber">Plumber</SelectItem>
                <SelectItem value="gasfitter">Gasfitter</SelectItem>
                <SelectItem value="drainer">Drainer</SelectItem>
                <SelectItem value="roof-plumber">Roof Plumber</SelectItem>
                <SelectItem value="electrician">Electrician (General)</SelectItem>
                <SelectItem value="electrician-special">Electrician (Special Class)</SelectItem>
                <SelectItem value="lift-mechanic">Lift Mechanic</SelectItem>
                <SelectItem value="aircon-mechanic">Air-conditioning and Refrigeration Mechanic</SelectItem>
                <SelectItem value="electronics-trades">Electronic Trades Worker</SelectItem>
                <SelectItem value="fitter">Fitter (General)</SelectItem>
                <SelectItem value="fitter-welder">Fitter-Welder</SelectItem>
                <SelectItem value="metal-machinist">Metal Machinist (First Class)</SelectItem>
                <SelectItem value="textile-mechanic">Textile, Clothing and Footwear Mechanic</SelectItem>
                <SelectItem value="baker">Baker</SelectItem>
                <SelectItem value="pastrycook">Pastrycook</SelectItem>
                <SelectItem value="hairdresser">Hairdresser</SelectItem>
                <SelectItem value="cabinetmaker">Cabinetmaker</SelectItem>
                <SelectItem value="furniture-finisher">Furniture Finisher</SelectItem>
                <SelectItem value="upholsterer">Upholsterer</SelectItem>
                <SelectItem value="wall-floor-tiler">Wall and Floor Tiler</SelectItem>
                <SelectItem value="plasterer">Solid Plasterer</SelectItem>
                <SelectItem value="fibrous-plasterer">Fibrous Plasterer</SelectItem>
                <SelectItem value="glazier">Glazier</SelectItem>
                <SelectItem value="painter-decorator">Painter and Decorator</SelectItem>
                <SelectItem value="signwriter">Signwriter</SelectItem>
                <SelectItem value="boat-builder">Boat Builder and Repairer</SelectItem>
                <SelectItem value="shipwright">Shipwright</SelectItem>
                <SelectItem value="toolmaker">Toolmaker</SelectItem>
                <SelectItem value="arborist">Arborist</SelectItem>
                <SelectItem value="landscape-gardener">Landscape Gardener</SelectItem>
                <SelectItem value="greenkeeper">Greenkeeper</SelectItem>
                <SelectItem value="florist">Florist</SelectItem>
              </SelectContent>
            </Select>
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