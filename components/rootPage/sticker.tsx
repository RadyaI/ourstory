import Image from "next/image"

export default function CircleOne() {
    return (
        <>
            <div className="
            hidden
            md:block
            absolute
            top-15
            z-0
            left-10
            w-20
            h-35
            rotate-14
            ">
                <Image src={"/assets/our1.jpg"} alt="meng" fill className="object-contain"></Image>
            </div>

            <div className="
            hidden
            md:block
            absolute
            top-95
            z-0
            left-10
            w-25
            h-25    
            rounded-full
            ">
                <Image src={"/assets/cat4.png"} alt="meng" fill className="object-cover rounded-full"></Image>
            </div>

            <div className="
            absolute
            z-0
            top-30
            right-20
            w-30
            h-30    
            rounded-full
            bg-pink-200
            blur-[100px]
            "></div>

            <div className="
            hidden
            md:block
            absolute
            z-0
            top-230
            right-10
            w-30
            h-30    
            rounded-full
            ">
                <Image src={"/assets/cat5.png"} alt="meng" fill className="object-cover rounded-full"></Image>
            </div>
            
            <div className="
            hidden
            md:block
            absolute
            z-0
            top-140
            right-10
            w-30
            h-30    
            rounded-full
            ">
                <Image src={"/assets/flower1.png"} alt="meng" fill className="object-cover rounded-full"></Image>
            </div>

            <div className="
            hidden
            md:block
            absolute
            z-0
            top-300
            left-15
            w-20
            h-20    
            // rounded-full
            ">
                <Image src={"/assets/cat2.webp"} alt="meng" fill className="object-cover"></Image>
            </div>

            <div className="
            hidden
            md:block
            absolute
            z-0
            top-440
            right-5
            w-35
            h-35    
            // rounded-full
            ">
                <Image src={"/assets/cat3.png"} alt="meng" fill className="object-cover"></Image>
            </div>

            <div className="
            hidden
            md:block
            absolute
            z-0
            top-510
            left-5
            w-35
            h-35    
            // rounded-full
            ">
                <Image src={"/assets/love1.png"} alt="meng" fill className="object-cover"></Image>
            </div>
        </>
    )
}