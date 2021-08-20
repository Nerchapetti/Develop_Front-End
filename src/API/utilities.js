const toBase64 = (arr) => {
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    )
}

const createImgURL = (data) => {
    return `data:image/${data.image.contentType};base64,${toBase64(data.image.data.data)}`
}


module.exports = {
    toBase64, 
    createImgURL
}