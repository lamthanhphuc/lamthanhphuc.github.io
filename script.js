function upDate(previewPic) {
    console.log("Mouseover event triggered");
    console.log(previewPic.alt); // Log alt text
    console.log(previewPic.src); // Log src
    
    // Update the text of the element with the id of "image"
    document.getElementById("image").innerHTML = previewPic.alt;
    
    // Update the background image of the element with the id of "image"
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Revert the text and background image of the element with the id of "image"
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}
