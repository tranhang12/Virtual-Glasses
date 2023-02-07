/**
 * B1: Hiển thị Danh sách kính
 * _Glasses
 * _GlassesList
 * B2: Xây dựng chức năng thử kính
 * B3: Xây dựng chức năng so sánh
 */

import { Glasses } from "./glasses.js";
import { GlassesList } from "./glassesList.js";

let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
let glassList = new GlassesList();
// hien thi danh sach kinh
const showGlassesList = () => {
    let divGlassesList = document.getElementById("vglassesList");

    //tao doi tuong kinh va them vao danh sach
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description);
        glassList.addGlasses(gl);
    });
    // console.log(glassList.glist);
    divGlassesList.innerHTML = glassList.renderGlasses();
}
showGlassesList();

const tryOnGlasses = (e) => {
    // console.log(e);
    let idGlass = e.target.getAttribute("data-id");
    let objectGlass = {};
    for (let obj of glassList.glist) {
        if (obj.id == idGlass) {
            objectGlass = obj;
            break;
        }
    }
    console.log(objectGlass);
    showInfo(objectGlass);
}
window.tryOnGlasses = tryOnGlasses;

const showInfo = (objectGlass) => {
    let divAva = document.getElementById("avatar");
    let divInfo = document.getElementById("glassesInfo");

    divAva.innerHTML = `
        <img id="glass" src="${objectGlass.virtualImg}">
    `;

    let stat = "";
    if (objectGlass.status) {
        stat = "Stocking";
    } else {
        stat = "Sold out";
    }
    divInfo.innerHTML = `
        <h5>${objectGlass.name} - ${objectGlass.brand} (${objectGlass.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${objectGlass.price}</span>
            <span class="text-success">${stat}</span>
        </p>
        <p class="card-text">${objectGlass.desc}</p>
    `;

    divInfo.style.display = "block";
}

//tháo kính và đeo kính
let removeGlasses = (isDisplay) => {
    let gl = document.getElementById("glass");
    if (gl == null) {
        return;
    }
    if (isDisplay) {
        gl.style.opacity = 0.8;
    } else {
        gl.style.opacity = 0;
    }
}
window.removeGlasses = removeGlasses;
