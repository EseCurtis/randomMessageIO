import MessagesData from "./MessagesData.js"
import Randomizer from "./Randomizer.js"
import { $ } from "./shortHand.js"

const generateMessage = () => {
    const appFrame = $("#__app")
    const textFrame = $("#__text")

    const randomMessageData = Randomizer(MessagesData)

    textFrame.innerText = randomMessageData.message
    appFrame.dataset.theme = randomMessageData.theme
}

export default generateMessage