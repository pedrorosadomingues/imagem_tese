import ImagemTese from '@/components/imagem_tese'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-[#FFFF] flex-col items-center justify-between p-24">
     <ImagemTese />
    </main>
  )
}
