export class GlassesList {
    constructor() {
        this.glist = [];
    }
    addGlasses(glasses) {
        this.glist.push(glasses);
    }
    renderGlasses() {
        let content = this.glist.reduce((glassesList, item)=> {
            return glassesList += `
                <div class="col-4">
                    <img class="vglasses__items img-fluid" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="${item.id}">
                </div>
            `;
        },"")
        return content;
    }
}