"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"

interface DateDisplayProps {
  date: string
  className?: string
}

export function DateDisplay({ date, className = "" }: DateDisplayProps) {
  const dateObj = new Date(date)
  const dayName = format(dateObj, "EEEE", { locale: es })
  const dayNumber = format(dateObj, "d")
  const monthYear = format(dateObj, "MMM yyyy", { locale: es })

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800 min-w-[80px]">
        <div className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">{dayName}</div>
        <div className="text-2xl font-bold text-blue-900 dark:text-blue-100 leading-none">{dayNumber}</div>
        <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">{monthYear}</div>
      </div>
    </div>
  )
}
