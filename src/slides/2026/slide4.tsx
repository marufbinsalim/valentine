import Image from "next/image";

export function Slide4() {
    return (
        <div className="text-center">
            <div className="mb-4 relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-pink-300">
                <Image
                    src="/assets/slides/us-in-campus-2.webp"
                    alt="Us in campus 2"
                    fill
                    className="object-cover"
                />
            </div>
            <p className="text-2xl text-white">And now...</p>
            <p className="text-xl text-white/80 mt-2">I have a question for you</p>
        </div>
    );
}

export default Slide4;
