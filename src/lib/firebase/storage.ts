import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebaseApp';

export const getImageUrl = async (imageName: string): Promise<string> => {
    const imageRef = ref(storage, imageName);
    try {
        const imageUrl = await getDownloadURL(imageRef);
        return imageUrl;
    } catch (e) {
        console.log("Error getting image URL: ", e);
        return "";
    }
};