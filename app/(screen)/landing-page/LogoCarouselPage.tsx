import LogoCarousel from "./LogoCarousel"


export function LogoCarouselPage() {
  return (
    <>
      <main className="relative h-[150px] flex flex-col justify-center bg-slate-900 overflow-hidden mb-10">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">

            <LogoCarousel />

          </div>
        </div>
      </main>

     
    </>
  )
}