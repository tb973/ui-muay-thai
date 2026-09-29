import { BookOpen, Headphones, Home, MessageCircle, PlayCircle, type LucideIcon } from 'lucide-react'

export type NavItem = { href: string; label: string; icon: LucideIcon }

export const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/pad-holder', label: 'Pads', icon: Headphones },
  { href: '/video', label: 'Video', icon: PlayCircle },
  { href: '/coach', label: 'Coach', icon: MessageCircle },
]

export function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}
