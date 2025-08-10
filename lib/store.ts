import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ApplicationData {
  portalReference: string
  personalDetails: {
    preferredTitle?: string
    surname?: string
    singleName?: boolean
    firstName?: string
    middleName?: string
    otherName?: boolean
    gender?: string
    dateOfBirth?: string
  }
  residentialAddress: {
    country?: string
    unitNumber?: string
    streetNumber?: string
    streetName?: string
    suburb?: string
    state?: string
    postcode?: string
    email?: string
    alternateEmail?: string
    mobileCountryCode?: string
    mobileNumber?: string
    alternateMobileCountryCode?: string
    alternateMobileNumber?: string
  }
  identificationDetails: {
    countryOfBirth?: string
    passportCountry?: string
    placeOfIssue?: string
    passportNumber?: string
    passportExpiryDate?: string
  }
  avetmissDetails: {
    isOffshore?: boolean
    speakOtherLanguage?: boolean
    language?: string
    englishProficiency?: string
    isAboriginalOrTorresStrait?: boolean
    hasDisability?: boolean
    requiresSupport?: boolean
  }
  educationEmployment: {
    highestSchoolLevel?: string
    stillEnrolled?: boolean
    hasQualifications?: boolean
    currentEmploymentStatus?: string
    mainReason?: string
  }
  occupationDetails: {
    occupation?: string
    assessmentProgram?: string
    pathway?: string
    inAustralia?: boolean
    intendedVisa?: string
  }
  declarationCompleted: boolean
  uploadedDocuments: {
    photo?: boolean
    passport?: boolean
    resume?: boolean
    qualifications?: boolean
  }
}

interface ApplicationStore {
  data: ApplicationData
  updateData: (section: keyof ApplicationData, value: Partial<ApplicationData[keyof ApplicationData]>) => void
  resetData: () => void
  currentStep: number
  setCurrentStep: (step: number) => void
  successMessage: string | null
  setSuccessMessage: (message: string | null) => void
}

const initialData: ApplicationData = {
  portalReference: `SKA${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
  personalDetails: {},
  residentialAddress: {},
  identificationDetails: {},
  avetmissDetails: {},
  educationEmployment: {},
  occupationDetails: {},
  declarationCompleted: false,
  uploadedDocuments: {}
}

export const useApplicationStore = create<ApplicationStore>()(
  persist(
    (set) => ({
      data: initialData,
      updateData: (section, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [section]: value
          }
        })),
      resetData: () => set({ data: initialData }),
      currentStep: 1,
      setCurrentStep: (step) => set({ currentStep: step }),
      successMessage: null,
      setSuccessMessage: (message) => set({ successMessage: message })
    }),
    {
      name: 'skills-assessment-storage'
    }
  )
)