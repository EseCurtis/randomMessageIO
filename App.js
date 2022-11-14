import MessagesData from "./MessagesData.js"
import Randomizer from "./Randomizer.js"

const $ = _selector => document.querySelector(_selector)

const App = () => {
    const appFrame = $("#__app")
    const textFrame = $("#__text")

    const randomMessageData = Randomizer(MessagesData)

    textFrame.innerText = randomMessageData.message
    appFrame.dataset.theme = randomMessageData.theme

    
}

document.body.onload = () => {
    App()
    
    const respawnToggler = $("#__respawn")

    respawnToggler.onclick = e => {
        const context = e.currentTarget

        context.classList.add("loading")

        setTimeout(() => {
            context.classList.remove("loading")
            App()
        }, 1000)
    }
    
}