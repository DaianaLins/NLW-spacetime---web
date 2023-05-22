import NewMemoryForm from '@/components/NewMemoryForm'
import { Link, ChevronLeft } from 'lucide-react'
import React from 'react'

const newMemory: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}

export default newMemory
