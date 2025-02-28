export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string
          client_id: string
          employee_id: string | null
          service_id: string
          vehicle_details: string
          scheduled_time: string
          status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          employee_id?: string | null
          service_id: string
          vehicle_details: string
          scheduled_time: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          employee_id?: string | null
          service_id?: string
          vehicle_details?: string
          scheduled_time?: string
          status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
          notes?: string | null
          created_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          duration: string
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          duration: string
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          duration?: string
          price?: number
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: 'admin' | 'client' | 'employee'
          specialty?: string | null
          status: 'active' | 'inactive'
          contact_person?: string | null
          phone?: string | null
          address?: string | null
          work_location?: string | null
          permissions_level?: 'super_admin' | 'admin' | null
          created_at: string
          updated_at?: string | null
        }
        Insert: {
          id?: string
          email: string
          name: string
          role?: 'admin' | 'client' | 'employee'
          specialty?: string | null
          status?: 'active' | 'inactive'
          contact_person?: string | null
          phone?: string | null
          address?: string | null
          work_location?: string | null
          permissions_level?: 'super_admin' | 'admin' | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: 'admin' | 'client' | 'employee'
          specialty?: string | null
          status?: 'active' | 'inactive'
          contact_person?: string | null
          phone?: string | null
          address?: string | null
          work_location?: string | null
          permissions_level?: 'super_admin' | 'admin' | null
          created_at?: string
          updated_at?: string | null
        }
      }
      work_sessions: {
        Row: {
          id: string
          employee_id: string
          clock_in_time: string
          clock_out_time: string | null
          clock_in_location: Json | null
          clock_out_location: Json | null
          total_hours: number | null
          status: 'active' | 'completed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          clock_in_time: string
          clock_out_time?: string | null
          clock_in_location?: Json | null
          clock_out_location?: Json | null
          total_hours?: number | null
          status?: 'active' | 'completed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          clock_in_time?: string
          clock_out_time?: string | null
          clock_in_location?: Json | null
          clock_out_location?: Json | null
          total_hours?: number | null
          status?: 'active' | 'completed'
          created_at?: string
          updated_at?: string
        }
      }
      service_records: {
        Row: {
          id: string
          employee_id: string
          client_id: string | null
          service_id: string | null
          work_session_id: string | null
          before_photo_url: string | null
          after_photo_url: string | null
          notes: string | null
          status: 'in_progress' | 'completed'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          employee_id: string
          client_id?: string | null
          service_id?: string | null
          work_session_id?: string | null
          before_photo_url?: string | null
          after_photo_url?: string | null
          notes?: string | null
          status?: 'in_progress' | 'completed'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employee_id?: string
          client_id?: string | null
          service_id?: string | null
          work_session_id?: string | null
          before_photo_url?: string | null
          after_photo_url?: string | null
          notes?: string | null
          status?: 'in_progress' | 'completed'
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'admin' | 'client' | 'employee'
      appointment_status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
      user_status: 'active' | 'inactive'
      admin_level: 'super_admin' | 'admin'
      work_session_status: 'active' | 'completed'
      service_record_status: 'in_progress' | 'completed'
    }
  }
}