const shareButtons = document.querySelectorAll('.title-share-button')

const sharebtn = document.querySelectorAll('.share-button')


function getCurrentURL () {
    return window.location.href
  }

  const url = getCurrentURL()

sharebtn[0].addEventListener('click',sharee)


function sharee(e){
    if(navigator.share){
        navigator.share({
            text:'Sharing Links',
            url:url
        }).then(()=>{
            alert("thanks for sharing");
        })
        .catch(console.error)
    }
    else{
        alert("Not Supported")
    }


}

console.log(url)








async function copyText(e){
    e.preventDefault()
    const link=this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        alert("Link Copied")
    }
    catch(err){
        console.error(err)
    }


}

shareButtons.forEach(shareButtons =>  shareButtons.addEventListener('click',copyText))