import { db } from "@/config/firebase"
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"

async function checkStatus(id: string) {
    try {
        const docRef = doc(db, "quiz", id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            if (docSnap.data().badge === "new") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } catch (error: unknown) {
        console.log(error)
    }
}

async function updateStatus(id: string) {
    try {
        const docRef = doc(db, "quiz", id)
        await updateDoc(docRef, { badge: "done" })
    } catch (error: unknown) {
        console.log(error)
    }
}

export { checkStatus, updateStatus }