import { AppRoute } from "./menu.values.interface"

export interface AppMenu {
  label : string
  icon : string
  link : string
}

export const mainRoutes : AppMenu[] = [
  {label: 'Home', link: AppRoute.HOME, icon: 'home.png'},
  {label: 'Mis cursos', link: AppRoute.MY_COURSES, icon: 'courses.png'},
  {label: 'Anuncios', link: AppRoute.NOTIFICATIONS, icon: 'notification.png'},
  {label: 'Certificados', link: AppRoute.CERTIFICATIONS, icon: 'certifications.png'},
  {label: 'Perfil', link: AppRoute.PROFILE, icon: 'settings.png'},
  /* {label: 'Salir', link: 'logout', icon: 'logout.png'}, */
]

export const courseRoutes : AppMenu[] = [
  {label: 'MATERIAL DE CLASE', link: AppRoute.CLASS_MATERIAL, icon: 'dashboard.png'},
  {label: 'VIDEOS DE CLASE', link: AppRoute.CLASS_VIDEOS, icon: 'video.png'},
  {label: 'TAREAS Y EXAMENES', link: AppRoute.CLASS_WORKS, icon: 'check.png'},
  {label: 'HERRAMIENTAS', link: AppRoute.CLASS_TOOLS, icon: 'tools.png'},
]
