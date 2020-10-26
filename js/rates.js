/*
  for a 4* mem/unit, rates should be:
  - rate-up memoria: 30 percent (0.015/0.05)
  - non-rate up 4* memoria: 50 percent (0.025/0.05)
  - 4* rate up magical girl: 12 percent (0.06/0.05)
  - non 4* rate up magical girl: 8 percent (0.04/0.05)
*/

var allRates =  {};

allRates["premium"] = {
    star2: {
    },
    star3: {
    },
    star4:{
    }
};

allRates["madoka"] = {
    JP: "08/22/2017",
    star2: {
        "That Which Divides_1016": 0,
        "Gentle Sunlight_1017": 0
    },
    star3: {
        "Keep It Secret!_1062": 0
    },
    star4:{
        "Unwavering Light_1070": 0,
        "Madoka Kaname": 0
    }
};

allRates["mami"] = {
    JP: "09/04/2017",
    star2: {
        "Reliable Mami-senpai!_1021": 0,
        "Different Story: Mami and Kyoko_1026": 0
    },
    star3: {
        "Fates Entwined with Madoka_1064": 0
    },
    star4:{
        "Victory Tea_1072": 0,
        "Mami Tomoe": 0
    }
};

allRates["diary"] = {
    JP: "09/19/2017",
    star2: {
    },
    star3: {
    },
    star4:{
        "Here With You_1107": 0,
        "Ren Isuzu": 0
    }
};

allRates["kyoko"] = {
    JP: "09/29/2017",
    star2: {
        "My School Life_1112": 0,
        "Different Story: Mami and Kyoko_1026": 0
    },
    star3: {
        "Fates Entwined with Madoka_1064": 0
    },
    star4:{
        "Unwavering Belief_1113": 0,
        "Kyoko Sakura": 0
    }
};

allRates["azaleas"] = {
    JP: "10/17/2017",
    // Name: "Azalea",
    star2: {
        "I'm Upside Down!_1119": 0,
        "Tea for Three_1115": 0,
        "What's Right Before My Eyes..._1117": 0
    },
    star3: {
        "Hazuki Yusa": 0
    },
    star4:{
        "Dependable Negotiator_1121": 0, 
        "I Made Friends!_1122": 0,
        "Konoha Shizumi": 0,
    }
};