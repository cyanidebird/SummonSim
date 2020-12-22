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

allRates["rena"] = {
    JP: "10/25/2017",
    star2: {
    },
    star3: {
        "It's Not Like I Was Waiting_1052": 0,
        "Let's Eat Together_1057": 0,
        "Coordinated Combination_1059": 0,
        "The Hunt Begins_1061": 0
    },
    star4:{
        "Rena Minami": 0
    }
};

allRates["karin"] = {
    JP: "10/30/2017",
    star2: {
        "Welcoming With Treats_1132": 0
    },
    star3: {
        "The Practice Continues_1133": 0,
        "Wolf for a Single Night_1131": 0
    },
    star4:{
        "My Bible_1130": 0,
        "Karin Misono": 0
    }
};

allRates["kokoro"] = {
    JP: "11/10/2017",
    star2: {
        "An Ordinary Day_1136": 0,
        "A World Once Empty_1041": 0
    },
    star3: {
        "Masara Kagami": 0
    },
    star4:{
        "Kokoro Awane": 0
    }
};

allRates["anotherdaze"] = {
    JP: "11/20/2017",
    star2: {
        "The Transfer Student Is a Returnee!_1140": 0,
        "Refreshing Shopping_1142": 0
    },
    star3: {
        "Kaoru Maki": 0
    },
    star4:{
        "The Three of Us, Forward_1146": 0,
        "Kazumi": 0
    }
};

allRates["tsukuyo"] = {
    JP: "11/30/2017",
    star2: {
    },
    star3: {
    },
    star4:{
        "Non-Stop Training_1151": 0,
        "Tsukuyo Amane": 0
    }
};

allRates["kirika"] = {
    JP: "12/11/2017",
    star2: {
        "Unlimited Happiness to You_1045": 0,
        "Towards the End_1048": 0
    },
    star3: {
    },
    star4:{
        "Kirika Kure": 0
    }
};

allRates["holymami"] = {
    JP: "12/15/2017",
    star2: {
    },
    star3: {
        "Descent of a Saint_1155": 0
    },
    star4:{
        "Warm Christmas_1156": 0,
        "Holy Mami": 0
    }
};

allRates["haregidoka"] = {
    JP: "1/1/2018",
    star2: {
    },
    star3: {
        "Prided Haregi_1162": 0
    },
    star4:{
        "For This Fine Day_1160": 0,
        "Going Out in a Kimono_1161": 0,
        "Madoka Kaname (Haregi ver.)": 0
    }
};

allRates["sayaka"] = {
    JP: "1/22/2018",
    star2: {
        "Just a Small Bite!_1022": 0,
        "A Duo's Battlefront_1166": 0
    },
    star3: {
    },
    star4:{
        "For The Ones I Love_1167": 0,
        "Sayaka Miki": 0
    }
};

allRates["sayaka"] = {
    JP: "1/22/2018",
    star2: {
        "Just a Small Bite!_1022": 0,
        "A Duo's Battlefront_1166": 0
    },
    star3: {
    },
    star4:{
        "For The Ones I Love_1167": 0,
        "Sayaka Miki": 0
    }
};

allRates["valen1"] = {
    JP: "2/5/2018",
    star2: {
    },
    star3: {
        "My First Homemade Chocolate_1169": 0
    },
    star4:{
        "Let Your Feelings Fly!_1168": 0,
        "Madoka Kaname": 0,
        "Sayaka Miki": 0
    }
};

allRates["valen2"] = {
    JP: "2/5/2018",
    star2: {
        "Sana Futaba": 0
    },
    star3: {
        "My First Homemade Chocolate_1169": 0
    },
    star4:{
        "Let Your Feelings Fly!_1168": 0,
        "Momoko Togame": 0,
        "Ren Isuzu": 0
    }
};

allRates["tart"] = {
    JP: "02/15/2018",
    star2: {
        "The Maiden's Resolve_1171": 0
    },
    star3: {
    },
    star4:{
        "Reinforcements from Another Time_1177": 0,
        "Tart": 0
    }
};

allRates["liz"] = {
    JP: "02/15/2018",
    star2: {
        "The Light and Its Shadow_1173": 0
    },
    star3: {
    },
    star4:{
        "The Third Magical Girl_1176": 0,
        "Liz Hawkwood": 0
    }
};

allRates["alina"] = {
    JP: "02/15/2018",
    star2: {
    },
    star3: {
        "The Calm After the Storm_1179": 0
    },
    star4:{
        "My Bible_1130": 0,
        "Attitude Toward Art_1180": 0,
        "Alina Gray": 0
    }
};

allRates["apartment"] = {
    JP: "03/12/2018",
    star2: {
        "After the Rain - Seika_1187": 0
    },
    star3: {
        "After the Rain - Leila_1186": 0,
        "Leila Ibuki": 0
    },
    star4:{
        "After the Rain - Mito_1188": 0,
        "Sunlight Shining Down_1190": 0,
        "Mito Aino": 0
    }
};