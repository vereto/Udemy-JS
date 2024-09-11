function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
Color.prototype.rgb = function () {
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`
}
Color.prototype.hex = function () {
    const {r,g,b} = this;
    return '#' + ((r << 24) + (g << 16) + (b << 8).toString(16).slice(1))
}
Color.prototype.rgba = function (a = 1.0) {
    const {r, g, b} = this; ю

    return `rgba (${r}), (${g}), (${b}), (${a})`
}

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);

// class  Colors {
//     constructor(r, g, b) {
//         console.log('INSIDE CONSTRUCTOR');
//         console.log(r,g,b);
        
//     }
// }