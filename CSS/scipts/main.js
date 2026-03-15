const myImage = document.querySelector("img")
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src")
  if (mySrc === "./2025_12_30_0001.png") {
    myImage.setAttribute("src", "./2025_12_31_0001.png")
  } else {
    myImage.setAttribute("src", "./2025_12_30_0001.png")
  }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
  const myName = prompt("请输入您的昵称")
  if (!myName) {
    alert("输入错误，请重新输入")
    setUserName();
  } else {
    localStorage.setItem("name", myName)
    myHeading.textContent = `Mozilla is cool,${myName}`
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name")
  myHeading.textContent = `Mozilla is cool,${storedName}`
}

myButton.onclick = function () {
  setUserName()
}

