import AppData from "./AppData.js"
import generateMessage from "./GenerateMessage.js"
import { openModal, closeModal } from "./ModalController.js"
import { $ } from "./shortHand.js"

const App = () => {
    generateMessage()

    const respawnToggler = $("#__respawn")
    const brandElement = $(".__brand")
    const creditElement = $(".__credits #--name")
    const magicElement = $("#__magic")
    const closeModalElement = $("#__close-modal")
    const shareTextElement = $("#__share-text")

    respawnToggler.onclick = e => {
        const context = e.currentTarget

        context.classList.add("loading")

        setTimeout(() => {
            context.classList.remove("loading")
            generateMessage()
        }, 1000)
    }

    brandElement.innerText = AppData.name
    brandElement.onclick = () => location.assign(AppData.githubRepositoryUrl)
    
    creditElement.onclick = () => location.assign(AppData.authorUrl)

    const tempMagicElementOnclick = magicElement.onclick

    magicElement.onclick = () => {
        openModal()
    }
    
    closeModalElement.onclick = closeModal
    shareTextElement.value = AppData.shareText
}

document.body.onload = () => {
    App()

    $("body").classList.add("loaded")
    new ClipboardJS('#__magic');
}