export const fileUpload = async( file ) =>{
    const cloudUrl = 'https://api.cloudinary.com/v1_1/rest-coffe-app/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl,{
            method: 'POST',
            body: formData
        } );
        // const cloudResp =  await resp.json();
        // console.log( cloudResp)

        if(resp.ok){
            const cloudResp =  await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.josn();
        }
    } catch (error) {
        throw error;
    }
    
    // return urlImagen
}