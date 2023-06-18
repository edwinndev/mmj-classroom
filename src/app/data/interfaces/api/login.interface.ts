export interface LoginRequest {
  username : string
  password : string
}


export interface LoginResponse {
  id:         number
  createdAt:  string
  updatedAt:  string
  deletedAt:  string
  names:      string
  surnames:   string
  username:   string
  phone:      string
  avatar:     string
  address:    string
  city:       string
  country:    string
  permission: number
  token:      string
}