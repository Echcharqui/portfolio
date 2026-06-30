export interface Engagement {
  name:   string
  period: string
}

export interface Entry {
  company:      string
  role:         string
  date?:        string
  meta:         string
  engagements?: Engagement[]
  tags:         string[]
  bullets:      string[]
}