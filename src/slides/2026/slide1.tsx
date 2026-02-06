import Image from "next/image";

export function Slide1() {
    return (
        <div className="text-center">
            <div className="mb-4 relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-white">
                <Image
                    src="/assets/slides/our-february.webp"
                    alt="Our February"
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Those beautiful days</h1>
            <p className="text-xl text-white/80">Are coming soon...</p>
        </div>
    );
}

export default Slide1;
