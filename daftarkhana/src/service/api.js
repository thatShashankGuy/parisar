/**
 * 
 * @param {*} fileData 
 * @param {string} url 
 */
async function genPresignedUrlAndUpload(fileData,url){
    try {
        if(!fileData){
            alert("No file found")
            throw new Error("NO FILE ATTACHED")
        }
        const fileName = fileData.files[0] ? fileData.files[0].name : '';
        const response = await fetch(url,{
            method : "POST",
            body : JSON.stringify({fileName})
        });
        const data = await response.json();
        let preSignedURL = data.url;
        
        // @ts-ignore
        const file = fileData
        if(!file){
            throw new Error("FILE UNDEFINED")
        }
        const formData = new FormData();
        formData.append('file', file);
        const r = await fetch(preSignedURL,{
            method : "PUT",
            body : formData
        })
        if (r.ok) {
        alert('File uploaded successfully');
        } else {
        alert('File upload failed');
        }
    } catch (error) {
            // @ts-ignore
        alert(error.message)
        throw new Error(error.message)
    }
}


/**
 * 
 * @param {*} metadata 
 * @param {string} url 
 * @returns 
 */
async function sumbitMetadata(metadata,url){
    try {
        const response = await fetch(url,{
            method:"POST",
            headers :{
                "Content-Type" : "application/json",
            },

            body: metadata
        })

        if(!response.ok){
             alert(response.status)
             throw new Error(JSON.stringify(response))
        }
        alert("DONE")
        return response

    } catch (error) {
        // @ts-ignore
        alert(error.message)
        throw new Error(error.message)
    }
}

export {
    genPresignedUrlAndUpload,
    sumbitMetadata
}