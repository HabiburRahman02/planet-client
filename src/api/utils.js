import axios from "axios";

const uploadImage = async (imageData) => {
    const formData = new FormData();
    formData.append('image', imageData)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formData)
    const photoUrl = data.data.url
    return photoUrl
};

export default uploadImage;