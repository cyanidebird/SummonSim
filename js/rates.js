/*
  for a 4* mem/unit, rates should be:
  - rate-up memoria: 30 percent (0.015/0.05)
  - non-rate up 4* memoria: 50 percent (0.025/0.05)
  - 4* rate up magical girl: 12 percent (0.06/0.05)
  - non 4* rate up magical girl: 8 percent (0.04/0.05)
*/

var allRates =  {};

allRates["premium"] = {
    name: "Premium Fate Weave",
    star2: {
    },
    star3: {
    },
    star4:{
    }
};

allRates["support"] = {
    name: "Support Point Fate Weave",
    star4: {
    },
    star3: {
    },
    personals:{
        "Carefully Written Cooking Recipe_1073": 0,
        "The Many Rumors in Kamihama_1074": 0,
        "How's the Taste?_1075": 0,
        "An Antithetical Existence_1076": 0,
        "I'm A Girl, Too_1077": 0,
        "Animal Paradise_1078": 0,
        "Inherited Determination_1079": 0,
        "Madoka's Notebook_1080": 0,
        "I Want to Be Able to Protect Her1081_": 0,
        "A Moment of Rest_1082": 0,
        "Pushing Onwards_1083": 0,
        "Our Hearts As One!_1084": 0,
        "LOVE Chemistry_1085": 0,
        "Following in Father's Footsteps_1086": 0,
        "Bearer of the Family Name_1087": 0,
        "Any Problem, Solved at Once!_1088": 0,
        "The Other Side of the Light_1089": 0,
        "A Gentle Warrior_1090": 0,
        "Limited Quantity! Manaka's Special Bento Box_1091": 0,
        "Living with Literature_1093": 0,
        "Well-Worn Wooden Dummy_1094": 0,
        "Smile and the World Smiles Too_1095": 0,
        "Deathly Dull_1097": 0,
        "Do You Know the Flower Language?_1098": 0,
        "Fashion at Full Speed!_1099": 0,
        "Crime and Punishment_1100": 0,
        "Bundle of Love_1101": 0,
        "Encounter with a Hero_1102": 0,
        "Memories from the Farm_1104": 0,
        "The Day I Saw Light_1108": 0,
        "Mundane Things_1111": 0,
        "Raised in an Ever Blooming House_1114": 0,
        "Always-Busy Hazuki_1116": 0,
        "Ayame's Collection!_1118": 0,
        "50th Love Letter (Incomplete)_1123": 0,
        "Back Alley Pal_1125": 0,
        "Phantom Thief Karin's Scheme_1129": 0,
        "The View in My Memory_1135": 0,
        "Grandma's Strawberry Risotto_1139": 0,
        "Seven Stars in the Moonlit Sky_1141": 0,
        "Wounds of the Body, Wounds of the Heart_1143": 0,
        "Tsukuyo's Treasure_1149": 0,
        "Tsukasa's Treasure_1150": 0,
        "Magical Girl VS Series?_1153": 0,
        "Hanetsuki Game_1159": 0,
        "Sentimental Melody_1165": 0,
        "Épée de Clovis_1170": 0,
        "Two Oaths_1172": 0,
        "Final Piece: Alina's Nine Phases_1178": 0,
        "Leila's Key_1183": 0,
        "An Obsessive Secret Collection_1184": 0,
        "Sketches of a Fantasy World_1185": 0,
        "A Dream to be an Art Conservator_1191": 0,
        "Happy Sounds_1194": 0,
        "Proof of Darkness_1198": 0,
        "Broken, Yet Beautiful_1201": 0,
        "Lucky Charm_1204": 0,
        "Seeking Unbeatable Strength_1205": 0,
        "The Witch, the Wolf, and the Villager_1206": 0,
        "Divination Ban_1212": 0,
        "A Thing That Talks in Place of Me_1213": 0,
        "A Symbol of Relaxation_1217": 0,
        "Exchange of Final Wishes_1220": 0,
        "An Important Uniform_1228": 0,
        "The Rains Lift_1233": 0,
        "A Pleasant Time_1238": 0,
        "A Bit of True Hope_1245": 0,
        "Lethal Weapons Known as Stationery_1257": 0,
        "Hobby, Cap Collection_1258": 0,
        "Getting Help to Be My Best_1263": 0,
        "A Hospital Room Shrouded in Darkness_1269": 0,
        "Two People, Two Dreams_1275": 0,
        "The Midori Report_1276": 0,
        "A Snail At Home_1281": 0,
        "A Class Representative Chosen By God_1282": 0,
        "Magical Girl VS Series? Round 2_1287": 0,
        "Mitama's Dream Osechi_1292": 0,
        "In a Broken World_1299": 0
    },
    star2: {        
    },
    star1: {
        "Minion of the Sheep Witch_1015": 0,
        "Minion of the Symbol Witch_1014": 0,
        "Minion of the Sandbox Witch_1013": 0,
        "Minion of the Rooftop Witch_1011": 0,
        "Minion of the Artist Witch_1010": 0,
        "Minions of the Dog Witch_1009": 0,
        "Minions of the Shadow Witch_1008": 0,
        "Minion of the Silver Witch_1007": 0,
        "Minion of the Scribbling Witch_1006": 0,
        "Minions of the Box Witch_1005": 0,
        "Minion of the Sweets Witch_1004": 0,
        "Minion of the Darkness Witch_1003": 0,
        "Minion of the Rose Garden Witch (Albert)_1002": 0,
        "Minion of the Rose Garden Witch (Anthony)_1001": 0
    },
    gem_L: {
        "Aqua Gem ++*": 0,
        "Flame Gem ++*": 0,
        "Forest Gem ++*": 0,
        "Dark Gem ++*": 0,
        "Light Gem ++*": 0,
        "Master Gem ++*": 0
    },
    gem_M: {
        "Aqua Gem +*": 0,
        "Flame Gem +*": 0,
        "Forest Gem +*": 0,
        "Dark Gem +*": 0,
        "Light Gem +*": 0,
        "Master Gem +*": 0
    },
    gem_S: {
        "Aqua Gem*": 0,
        "Flame Gem*": 0,
        "Forest Gem*": 0,
        "Dark Gem*": 0,
        "Light Gem*": 0,
        "Master Gem*": 0
    }
};

allRates["madoka"] = {
    name: "Release Madoka Kaname Fate Weave",
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
    name: "Mami Tomoe Fate Weave",
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
    name: "Ren Isuzu Fate Weave",
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
    name: "Kyoko Sakura Fate Weave",
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
    name: "And So, The Azaleas Bloom Fate Weave",
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
    name: "Rena Minami Fate Weave",
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
    name: "Karin Misono Fate Weave",
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
    name: "Kokoro & Masara Fate Weave",
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
    name: "Another Daze Fate Weave",
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
    name: "Tsukuyo Amane Fate Weave",
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
    name: "Kirika Kure Fate Weave",
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
    name: "Holy Mami Fate Weave",
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
    name: "The Haregi Magical Girl Fate Weave",
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
    name: "Sayaka Miki Fate Weave",
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
    name: "A La Carte Valentine's Fate Weave Part 1",
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
    name: "A La Carte Valentine's Fate Weave Part 2",
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
    name: "The Maiden of Hope Fate Weave Part 1",
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
    name: "The Maiden of Hope Fate Weave Part 2",
    JP: "02/21/2018",
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

allRates["kyokoria"] = {
    name: "Kyoko Sakura and Ria Ami Fate Weave",
    JP: "02/22/2018",
    star2: {
    },
    star3: {
        "All Eyes On Me_1202": 0,
        "Ria Ami": 0
    },
    star4:{
        "Ryushin-Ryu Assistant Instructor_1203": 0,
        "Kyoko Sakura": 0
    }
};

allRates["alina"] = {
    name: "Alina Gray Fate Weave",
    JP: "03/02/2018",
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
    name: "Bye Bye, See You Tomorrow Fate Weave",
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

allRates["mayu"] = {
    name: "Mayu Kozue Fate Weave",
    JP: "03/23/2018",
    star2: {
    },
    star3: {
        "Part-timing at the Art Gallery_1193": 0
    },
    star4:{
        "I Can Be Serious When I Want_1192": 0,
        "Mayu Kozue": 0
    }
};

allRates["himika"] = {
    name: "Himika Mao Fate Weave",
    JP: "04/02/2018",
    star2: {
    },
    star3: {
        "The Mao Family Is Lively Today As Well_1195": 0
    },
    star4:{
        "Starlight Power!_1196": 0,
        "Himika Mao": 0
    }
};

allRates["mitama"] = {
    name: "Mitama Yakumo Fate Weave",
    JP: "04/13/2018",
    star2: {
    },
    star3: {
        "The Destination of Shizuku's Travel Is!?_1199": 0
    },
    star4:{
        "My True Nature_1200": 0,
        "Mitama Yakumo": 0
    }
};

allRates["suzune"] = {
    name: "Cross Connection Fate Weave",
    JP: "05/01/2018",
    star2: {
    },
    star3: {
        "The Hand Chisato Held_1208": 0,
        "Chisato Shion": 0
    },
    star4:{
        "A Sword Between Light and Dark_1209": 0,
        "Suzune Amano": 0
    }
};

allRates["voices"] = {
    name: "Kanae & Mel Fate Weave",
    JP: "05/21/2018",
    star2: {
    },
    star3: {
        "Now the Two of Us Watch Over_1216": 0,
        "Mel Anna": 0
    },
    star4:{
        "A Gentle Breeze_1215": 0,
        "Kanae Yukino": 0
    }
};

allRates["tsurumor"] = {
    name: "Rumor Tsuruno Fate Weave",
    JP: "06/01/2018",
    star2: {
    },
    star3: {
        "Our Misunderstanding_1219": 0,
        "Rumor Tsuruno": 0
    },
    star4:{
        "Fuuuusion!!_1218": 0
    }
};

allRates["mifuyu"] = {
    name: "Mifuyu Azusa Fate Weave",
    JP: "06/08/2018",
    star2: {
        "Tension Between the East and West_1223": 0
    },
    star3: {
        "Reason For Involvement_1222": 0
    },
    star4:{
        "Cloaked in Guilt_1221": 0,
        "Mifuyu Azusa": 0
    }
};

allRates["kanagi"] = {
    name: "Kanagi Izumi Fate Weave",
    JP: "06/25/2018",
    star2: {
    },
    star3: {
        "Leave it to Nagi-tan_1231": 0
    },
    star4:{
        "An Uncrossable Gap_1229": 0,
        "Kanagi Izumi": 0
    }
};

allRates["swimmura"] = {
    name: "The Ribbon at the Beach Fate Weave",
    JP: "07/20/2018",
    star2: {
    },
    star3: {
        "Changing into Swimsuits_1235": 0,
        "A Sea and Sky for Just the Two of Us_1236": 0
    },
    star4:{
        "From Top to Bottom_1234": 0,
        "Homura Akemi (Swimsuit ver.)": 0
    }
};

allRates["searoha"] = {
    name: "Summer With Mikazuki Villa Fate Weave",
    JP: "08/08/2018",
    star2: {
    },
    star3: {
        "Learning by Imitation...?_1240": 0
    },
    star4:{
        "Iroha of the Midsummer Beach_1239": 0,
        "Iroha Tamaki (Swimsuit ver.)": 0
    }
};

allRates["madokami"] = {
    name: "Ultimate Madoka Fate Weave",
    JP: "08/21/2018",
    star2: {
    },
    star3: {
        "To Hope_1248": 0
    },
    star4:{
        "The Light of Hope Without Despair_1247": 0,
        "Born Admist Light_1246": 0,
        "Ultimate Madoka": 0
    }
};

allRates["ren2"] = {
    name: "Ren Isuzu Fate Weave",
    JP: "09/10/2018",
    star2: {
    },
    star3: {
    },
    star4:{
        "To Continue Living in This World_1254": 0,
        "Here With You_1107": 0,
        "Ren Isuzu": 0
    }
};

allRates["masakoko2"] = {
    name: "Kokoro & Masara Fate Weave",
    JP: "09/18/2018",
    star2: {
        "An Ordinary Day_1136": 0,
        "A World Once Empty_1041": 0
    },
    star3: {
        "Masara Kagami": 0
    },
    star4:{
        "The Power to Protect Who You Love_1255": 0,
        "Kokoro Awane": 0
    }
};

allRates["nadeko"] = {
    name: "Nadeko Sengoku Fate Weave",
    JP: "09/25/2018",
    star2: {
    },
    star3: {
        "Big-League Middle Schooler_1262": 0
    },
    star4:{
        "A Universe-Colliding Dream Collaboration_1261": 0,
        "I Won't Forgive You If You Open It_1260": 0,
        "Nadeko Sengoku": 0
    }
};

allRates["riko"] = {
    name: "Riko Chiaki Fate Weave",
    JP: "10/09/2018",
    star2: {
        "Inherited Bonds_1266": 0
    },
    star3: {
        "Popular in the Artisan Ward_1265": 0
    },
    star4:{
        "Garnish Everything Cutely!_1264": 0,
        "Riko Chiaki": 0
    }
};

allRates["nagisa"] = {
    name: "Nagisa Momoe Fate Weave",
    JP: "10/29/2018",
    star2: {
    },
    star3: {
        "The Girl Who Came Back_1271": 0,
        "Bonds of Destiny_1272": 0
    },
    star4:{
        "Nagisa Will Resolve Things!_1270": 0,
        "Nagisa Momoe": 0
    }
};

allRates["ikumi"] = {
    name: "Ikumi & Ryo Fate Weave",
    JP: "11/11/2018",
    star2: {
    },
    star3: {
        "Never Missing a Scoop_1278": 0,
        "Ryo Midori": 0
    },
    star4:{
        "Love Kyun-ly Maid-san_1277": 0,
        "Ikumi Makino": 0
    }
};

allRates["mayoi"] = {
    name: "Mayoi Hachikuji Fate Weave",
    JP: "11/26/2018",
    star2: {
    },
    star3: {
    },
    star4:{
        "Getting Lost Is a Daily Insurance_1285": 0,
        "Mayoi Hachikuji": 0
    }
};

allRates["tsubasa"] = {
    name: "Tsubasa Hanekawa Fate Weave",
    JP: "12/03/2018",
    star2: {
    },
    star3: {
    },
    star4:{
        "Overly Fair Taste_1286": 0,
        "Tsubasa Hanekawa": 0
    }
};

allRates["holina"] = {
    name: "Holy Alina Fate Weave",
    JP: "12/11/2018",
    star2: {
    },
    star3: {
        "Memories of Young Miss Santa_1289": 0
    },
    star4:{
        "Christmas Night Magic_1288": 0,
        "Holy Alina": 0
    }
};

allRates["haregitama"] = {
    name: "The Haregi Chouseiya-san Fate Weave",
    JP: "01/01/2019",
    star2: {
    },
    star3: {
        "New Years Party Waitress_1294": 0
    },
    star4:{
        "Food Stall Paradise_1293": 0,
        "Mitama Yakumo (Haregi ver.)": 0
    }
};

allRates["coolmura"] = {
    name: "Homura Akemi Fate Weave",
    JP: "01/21/2019",
    star2: {
    },
    star3: {
        "Hearts, Shared_1301": 0
    },
    star4:{
        "The Price of a Wish_1300": 0,
        "Homura Akemi": 0
    }
};

allRates["valen2_1"] = {
    name: "A La Carte Valentine 2 Fate Weave Part 1",
    JP: "02/04/2019",
    star2: {
    },
    star3: {
        "Mel Anna": 0,
        "Rika Ayano": 0,
        "Wonderful Time_1304": 0,
        "To the Two Who Have Yet to Experience First Love_1305": 0
    },
    star4:{
        "Sweet Apportionment_1303": 0,
        "Riko Chiaki": 0,
        "Kyoko Sakura": 0
    }
};

allRates["valen2_2"] = {
    name: "A La Carte Valentine 2 Fate Weave Part 2",
    JP: "02/08/2019",
    star2: {
    },
    star3: {
        "Kaede Akino": 0,
        "Wonderful Time_1304": 0,
        "To the Two Who Have Yet to Experience First Love_1305": 0
    },
    star4:{
        "Sweet Apportionment_1303": 0,
        "Kanagi Izumi": 0,
        "Mami Tomoe": 0
    }
};