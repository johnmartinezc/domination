function strightline (){
    let newLine = document.querySelector('li')
    newLine.style.textDecoration = 'line-through'   
}
strightline()

function setImage(id, url){
let image = document.querySelector('#' + id)
image.src = url
image.style.height = '200px'
}
setImage('image-1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/HERE_logo.svg/1200px-HERE_logo.svg.png')
setImage('image-2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/WE_Charity_logo.svg/1200px-WE_Charity_logo.svg.png')
setImage('image-3', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png')


function removal(){
    let remove = document.querySelector('li')
    remove.remove()
}
removal()
removal()

function setFontSize(id, newSize){
    let target = document.querySelector("#" + id)
    target.style.fontSize = (newSize + "px")
}
setFontSize('thing-1', 200)


function addElementToList(element){
    let arguments = document.querySelector('#arguments')
    arguments.appendChild(element)
}
let newImage = document.createElement('img')
newImage.src = 'https://images.idgesg.net/images/article/2018/07/go_green-light_traffic-signal_by-pawel-czerwinski-unsplash-100765091-large.jpg?auto=webp&quality=85,70'



function modImg(img){
    img.style.height = '30px'
}
modImg(newImage)


let newText = document.createElement('li')
newText.innerText = 'Hey!'

addElementToList(newImage)
addElementToList(newText)



function ShowHide(inv) {
inv.className = "invisible"

}
  ShowHide(newImage)
  
  function funk(str){
    let listItem = document.createElement('li')
    listItem.innerText = str
    return listItem
  }
  let newList = funk('new text')
  addElementToList(newList)

  function newHeader(size, text){
    let hSize = document.createElement('h' + size)
    hSize.innerText = text
return hSize
}

addElementToList(newHeader('2','this is the new header'))