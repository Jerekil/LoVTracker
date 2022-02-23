const fetch = require('isomorphic-fetch');


 dict_id = {
    "Farcival" : "0x0c6083f201baafda096784597a6352c6cbabf0a7",
    "BA" : "0x77fe1dda1fdd034ac69d277b0272b76b7c48c1e6",
    //"Sushi"  : "0x36e83b8a5ac890305db9b7acbd432cdb4b1798de",
    "Zenite": "0x4c299ce387be8aaef22dba548c574cdb9878de03",
    "ShiroiKitsune": "0x2ea9d971baf3882ed5b5913cab9e5fc03eff6751",
    "Jaaanjan" : "0x61c0446cde3e53adad71b6a1b0a263c62bbb5fd4",
    "julie_" : "0x8a399244e677a5046cf12a5409fbdc7f896ead55",
    "JansenPL"  : "0x4f9552807d38cac6c5b15b5dff1d30e830e8022c",
    //"PHIL.IPPINES": "",
    //"Zeeks#7625": "",
    "Khrizwhizz" : "0xf080cb81190863811541c9e15aa37107a530f28f",
    "Cartkid" : "0x2a6d25be9107320a122831e8805b3bac24b36f0e",
    "Jackashmir"  : "0xe44d0edbf57940ae63bace782a38a0a9787d7c1c",
    "boypuso": "0x22908ef18be4f57863da115b4f244384fd15c079",
    "PitzOfficial": "0xcfe9f174b154c6ca7353577d728d97953c78f220",
    //"Prinny": "0x649f757e567df18a8dd18cd3a99601541c2b6f78",
    "nodelay12" : "0xba4c3a81e5581485b09cb64d6802e42390e6fe72",
    "Tykes" : "0xfcd5c7cc484a2735cdb621a15dbf29f5e1e73dfe",
    "capzodia"  : "0x51eb673aa4fb50205361d662e64f91382ba79171",
    "JP Tulay/Bridges": "0x756f76441877604bc4185f1118818020f172d4eb",
    "spyair": "0xd703c8e41d863f9a7886cc343716a5d2c7e2daa1",
    "psychojuice": "0xabd62731e7904e5183e1f8264fc665a4e195a057",
    "IceAndDark" : "0x8e5dd554117dd930c8de99dda5f0b41d318cd312",
    "rhodster" : "0xcd4251ac1a4e018d33547d32adcc759a0323b64d",
    "imbakidz01"  : "0x4b6f45c1c7613489e956346e9f9177d4922aba5d",
    "senkapachi": "0xcf8013b2181090dfb2d6c5bd56139baa947ccbf1",
    "behatiii": "0x7ef8c23516c5a1d1d588256586e6b67483f1c268",
    "Senpai": "0x3145e98e5954ff090d0d2b3da45c4cb5ff81004d",
    "Gablemonade" : "0x7948fed93f000caaf132fea3f68d4ff98660e40a",
    "KingAdrian" : "0x37ed6d49e857fea55ac6a5d12bc8404299043513",
    "CubCed"  : "0x2afcee78741b72d7ffed5beaf8828a107e7792c9",
    "Ryanlsgg": "0xcd94be693f684bbdd61f12baa45eb3861656b74a",
    "BrokeOn": "0x3dc2cc50a8afe409d37802bd647a548a4bd3f6e8",
    "xChellai_": "0x91b08e90657fcd7374292a3e4cbad9681ce68faf",
    "mryrsdzn": "0x2915891c2fa168e17a80f27f52d073f856ec742d",
    "Jeffel": "0x17167a7915fc61040bbdfc78f621297d99aa0bc4",
    "reine" : "0x76f91ecbe3ada61f75921512a2dec33236d358df",
    "kattttt_#5777" : "0x123ef0229717217fbce74ee96fd7495756173ee6",
    "Immanuel#2226"  : "0xc990dd47aecf1066ad0e8fafb7cbe90f7d60d422",
    "heygela": "0xe5376379490e6920306c7defa7f9a02c70fb1bb0",
    "jay_oooh": "0x2b2dc702695651c40f6ee131ec87ffdbfa4e36ce",
    "xelaquimson": "0xd445a8944275c7aece311bde36e0e07dedfbac5c",
    "Madjan Bot" : "0xed223ddc8a38539cad7646c56b37b3507c319e6a",
    "sophi" : "0x5e635c907ccb66e6678f0b88fb1ef1a468640724",
    "Z | WeakHandZ"  : "0xd318c249de3e901b990e1fa38b6aeba08d61e273",
    "CorpuzAngelo": "0x3dd5427fdb5866a49e5da08bafb4a8a0dbec548d",
    "Mig33zy": "0x9d5cc7dbabb712a628490c4516029a00915835e4"
}
// dict_id = {
//     // "IceAndDark" : "0x8e5dd554117dd930c8de99dda5f0b41d318cd312",
//     // "Khrizwhizz" : "0xf080cb81190863811541c9e15aa37107a530f28f"
//     "Luna": "0xb5c34aa15b228e273da098e714fa2d78d5947d80"
// }


obj = {};
let getTotal = async (name, id) => {
    try{
    const response_total = await fetch('https://api.legendsofvenari.com/venari?skip=0&user='.concat(id).concat('&limit=15'));
    const json_total = await response_total.json();
    const response_lvl = await fetch('https://api.legendsofvenari.com/profile/'.concat(id));
    const json_lvl = await response_lvl.json();
    d = new Date();
    d.setDate(d.getDate() -1);
    const caughtIn24Hrs = json_total.data.filter((f) => new Date(f.caughtAt) >= d).length;
    
    return {'total': json_total["total"], 'level': json_lvl.experience.account.level, 'caughtIn24Hrs': caughtIn24Hrs};
    }
    catch{
        console.log(name, id)
    }
}

// let getLevel = async (id) => {
//     const response = await fetch('https://api.legendsofvenari.com/profile/'.concat(id));
//     const json = await response.json();
//     return json.experience.account.level;
//     }

const loop = async () => {
    for ([name, id] of Object.entries(dict_id)){
        obj[name] = await getTotal(name, id);
    }
}

(async () => {
    await loop();
    console.log(obj);
})()