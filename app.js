const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

//prevents button from going to link
async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
       await navigator.clipboard.writeText(link)
       alert("Copied to clipboard!")
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))