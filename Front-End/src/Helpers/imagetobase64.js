export  const Imagetobase64= async (image)=>{
    const reader=new FileReader()
    reader.readAsDataURL(image)

    const data= await new Promise((resolve,reject)=>{
        reader.onload=()=>{
            resolve(reader.result)
        }
        reader.onerror=()=>{
            reject(reader.error)
        }

    })
    return data

}
