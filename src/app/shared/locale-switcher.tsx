'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Locale } from '@/i18n-config'

export default function LocaleSwitcher({ lang }: { lang: Locale }) {
  const dictionnary = {
    "fr": "Passer en français",
    "en": "Switch to english"
  }
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const target = lang === 'fr' ? 'en' : 'fr';

  return (
    <div className="text-center">
      <Link href={redirectedPathName(target)}>{dictionnary[target]}</Link> 
    </div>
  )
}