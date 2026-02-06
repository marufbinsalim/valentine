import Image from "next/image";

export function Slide2() {

    // difference from today to 14th February 2022
    const difference = new Date(2022, 1, 14).getTime() - new Date().getTime();
    const days = Math.floor(-difference / (1000 * 60 * 60 * 24));

    return (
        <div className="text-center">
            <div className="mb-4 relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-pink-300">
                <Image
                    src="/assets/slides/us-in-campus.webp"
                    alt="Us in campus"
                    fill
                    className="object-cover"
                />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Those days ... </h1>
            <p className="text-xl text-white/80 mt-2">
            {`that led to ${days} more beautiful days together`}            
            </p>
        </div>
    );
}

export default Slide2;
