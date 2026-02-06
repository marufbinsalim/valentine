import Image from "next/image";

export function Slide3() {
    return (
        <div className="text-center">
            <div className="mb-4 relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-pink-300">
                <Image
                    src="/assets/slides/us-in-auto.png"
                    alt="Us in auto"
                    fill
                    className="object-cover"
                />
            </div>
            <p className="text-2xl text-white">Every moment with you</p>
            <p className="text-xl text-white/80 mt-2">Is a beautiful adventure</p>
        </div>
    );
}

export default Slide3;
