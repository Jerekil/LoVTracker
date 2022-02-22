const fetch = require('isomorphic-fetch');


dict_id = {
    "Janine" : "0x281405f6b8a1f55a5ca1b21f32f5e902f2b4a1b1",
    "Jer" : "0xe86ce1b0970ba56089ec207371ae9baa8cc1fe3e",
    "BA"  : "0x77fe1dda1fdd034ac69d277b0272b76b7c48c1e6",
    "Koala": "0x9d9f80843bb1b91cbb471ac313b52a8df63e5aae"
}


obj = {};
let getTotal = async (id) => {
    const response_total = await fetch('https://api.legendsofvenari.com/venari?skip=0&user='.concat(id).concat('&limit=200'));
    const json_total = await response_total.json();
    const response_lvl = await fetch('https://api.legendsofvenari.com/profile/'.concat(id));
    const json_lvl = await response_lvl.json();
    d = new Date();
    d.setDate(d.getDate() -1);
    const caughtIn24Hrs = json_total.data.filter((f) => new Date(f.caughtAt) >= d).length;
    
    return {'total': json_total["total"], 'level': json_lvl.experience.account.level, 'caughtIn24Hrs': caughtIn24Hrs};
}

// let getLevel = async (id) => {
//     const response = await fetch('https://api.legendsofvenari.com/profile/'.concat(id));
//     const json = await response.json();
//     return json.experience.account.level;
//     }

const loop = async () => {
    for ([name, id] of Object.entries(dict_id)){
        obj[name] = await getTotal(id);
    }
}

(async () => {
    await loop();
    console.log(obj);
})()