export type InquiryStatus = 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'ARCHIVED'

export interface ContactInquiryInput {
  name: string
  email: string
  phone?: string
  organization?: string
  reason: string
  message: string
}

export interface ContactInquiryItem extends ContactInquiryInput {
  id: string
  status: InquiryStatus
  notes?: string | null
  ipAddress?: string | null
  createdAt: string
  updatedAt: string
}

export interface ContactInquiryResponse {
  id: string
  name: string
  email: string
  createdAt: string
}
