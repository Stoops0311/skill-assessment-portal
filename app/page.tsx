"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, FileText, Users, Award } from 'lucide-react'
import { useApplicationStore } from '@/lib/store'

export default function HomePage() {
  const router = useRouter()
  const { data } = useApplicationStore()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-[#2d5f3f] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Australian Skills Assessment Portal</h1>
          <p className="text-lg mt-2 opacity-90">Professional Skills Recognition Service</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to the Skills Assessment Application
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Begin your journey towards professional recognition in Australia. Our streamlined 
            assessment process helps validate your skills and qualifications for migration and 
            employment purposes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <FileText className="h-12 w-12 mx-auto mb-3 text-[#2d5f3f]" />
            <h3 className="font-semibold mb-2">Easy Application</h3>
            <p className="text-sm text-gray-600">Simple 8-step process</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Users className="h-12 w-12 mx-auto mb-3 text-[#2d5f3f]" />
            <h3 className="font-semibold mb-2">Expert Assessment</h3>
            <p className="text-sm text-gray-600">Industry professionals</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <CheckCircle className="h-12 w-12 mx-auto mb-3 text-[#2d5f3f]" />
            <h3 className="font-semibold mb-2">Fast Processing</h3>
            <p className="text-sm text-gray-600">Quick turnaround time</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Award className="h-12 w-12 mx-auto mb-3 text-[#2d5f3f]" />
            <h3 className="font-semibold mb-2">Recognized</h3>
            <p className="text-sm text-gray-600">Government approved</p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4">Application Process</h3>
          <ol className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">1.</span>
              <span>Personal Details - Provide your basic information</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">2.</span>
              <span>Residential Address - Enter your contact information</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">3.</span>
              <span>Identification Details - Submit passport information</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">4.</span>
              <span>Avetmiss Details - Complete demographic information</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">5.</span>
              <span>Education & Employment - Provide background details</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">6.</span>
              <span>Occupation Details - Select your assessment pathway</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">7.</span>
              <span>Applicant Declaration - Download and sign forms</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-[#2d5f3f] mr-3">8.</span>
              <span>Document Upload - Submit supporting documents</span>
            </li>
          </ol>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-600">
              <strong>Your Portal Reference:</strong> {data.portalReference}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Keep this reference number for your records
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => router.push('/personal-details')}
              className="bg-[#2d5f3f] hover:bg-[#3a7a4f] px-8 py-6 text-lg"
            >
              Start New Application
            </Button>
            <Button
              onClick={() => router.push('/personal-details')}
              variant="outline"
              className="border-[#f4d03f] text-black hover:bg-[#f4d03f] px-8 py-6 text-lg"
            >
              Continue Application
            </Button>
          </div>
        </Card>
      </main>

      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>© 2024 Australian Skills Assessment Portal. All rights reserved.</p>
          <p className="mt-2">Authorised by the Department of Home Affairs</p>
        </div>
      </footer>
    </div>
  )
}
