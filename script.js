let set1 = [1, 0, 3, 5]
let set2 = [0, 7, 0, 0]

function dot_product(set1, set2) {
    let ps = 0;
    for (let i = 0; i < set1.length; i++) {
        ps = ps + (set1[i] * set2[i]);
    }
    return ps
}

console.log(dot_product(set1, set2));

function ortogonal(set1, set2) {

    let trouv = false
    if (dot_product(set1, set2) == 0) {
        trouv = true
    } else {
        trouv = false
    }
    return trouv
}

console.log(ortogonal(set1, set2));