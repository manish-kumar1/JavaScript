
// object destructuring

const band = {
    bandName : "led zepplin",
    famousSong : "stairway to heaven",
    year : 1993,
    anotherSong : "kashmir",
};
const {bandName, famousSong, ...restProps} = band;
console.log(bandName);
console.log(famousSong);
console.log(restProps);