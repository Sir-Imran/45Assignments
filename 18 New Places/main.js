var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["Pakistan", "China", "India", "Iran", "Afganistan"];
console.log("orignal order:", countriestovisit);
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort);
console.log("Still in orignal order:", countriestovisit);
console.log("reverse order:", __spreadArray([], countriestovisit, true).reverse());
console.log("Still in orignal order:", countriestovisit);
console.log("orignal array reversed:", countriestovisit.reverse());
console.log("Back to orignal order:", countriestovisit.reverse());
console.log("sorted in Alphabetical order:", countriestovisit.sort());
console.log("orignal array reversed:", countriestovisit.reverse());
