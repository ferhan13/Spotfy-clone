import { API } from "./styles/js/api.js"








//* Sayfa yüklendiği anda çalışacak
document.addEventListener("DOMContentLoaded", () => console.log(".çalıştı"))

const api = new API()
api.getPopular();