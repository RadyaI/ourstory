"use client"

import PhotoCard from "@/components/rootPage/PhotoCard";
import { db } from "@/config/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function FotoData() {

    const [memoriesData, setMemoriesData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loadingText, setLoadingText] = useState<string>("Sabar yaaa datanya lagi diambil...")

    function getMemories() {
        try {
            setIsLoading(true)
            const q = query(
                collection(db, "memories"),
                orderBy("date", "desc")
            );

            onSnapshot(q, (snapshot) => {   
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMemoriesData(data); 
            });

            setIsLoading(false)
        } catch (error) {
            console.error("🔥 Gagal dapetin data memories:", error);
        }
    }


    useEffect(() => {
        getMemories()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
            {isLoading && (<p className="text-center">{loadingText}</p>)}
            {memoriesData.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
            ))}
        </div>
        // <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
        //     {dummyPhotos.slice().reverse().map((photo) => (
        //         <PhotoCard key={photo.id} photo={photo} />
        //     ))}
        // </div>
    )
}


// <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
//     {dummyPhotos.slice().reverse().map((photo, i) => {
//         const rotate = Math.random() > 0.5 ? 'rotate-5' : '-rotate-2';
//         const heights = ['h-88', 'h-90', 'h-92'];
//         const widths = ['w-72', 'w-76', 'w-80'];
//         const margins = ['mt-4', 'mt-6', 'mt-8', 'mt-10'];

//         const h = heights[Math.floor(Math.random() * heights.length)];
//         const w = widths[Math.floor(Math.random() * widths.length)];
//         const mt = margins[Math.floor(Math.random() * margins.length)];

//         return (
//             <div
//                 key={photo.id}
//                 className={`${rotate} ${h} ${w} ${mt} ml-10`}
//             >
//                 <PhotoCard photo={photo} />
//             </div>
//         );
//     })}
// </div>