console.log("mounted")

async function uploadAudio() {
    const file = document.getElementById('file-input').files[0]
    if (file) {
        try {
            const response = await fetch("http://localhost:3000/admin/upload-url", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    fileName : file.name
                })
            })
            const data =  await response.json();
            fetch(data.url, {
                method: "PUT",
                body: file
            }).then(response=>{
                if(response.ok){
                    alert("successfully uploaded")
                }else{
                    alert("something went wrong")
                }
            }).catch(e => console.log("error::" , e))
        } catch (error) {
            console.log(error.message)
        }
    } else {
        console.log(file);
        alert("NO FILE SELECTED")
    }
}