import { $ } from "./shortHand.js"

export const openModal = () => {
    const modalElement = $(".__modal")

    modalElement.classList.add("active")
}

export const closeModal = () => {
    const modalElement = $(".__modal")

    modalElement.classList.remove("active")
}

