var categoryChance = {
  star2: 7900,
  star3: 1600,
  star4: 500
}

var pool = {
  "megucas": {"star2": [], "star3": [], "star4": []},
  "memorias": {"star2": [], "star3": [], "star4": []}
};

var rares = {
  "magical girls": {},
  "memorias": {}
};

let megucaDates = Object.keys(timelineMeguca);
let memoDates = Object.keys(timelineMemo);
let prevBanner = "";
let pity = 0;
let gemsSpent = 0;
var numIMFs = 0;

// holds rates for current banner for guaranteed 3*
let threeStarRates = {star3: {}, star4:{}};

// holds rates for current banner for guaranteed magical girl
let megucaRates = {star2: {}, star3: {}, star4:{}};

// holds rates for guaranteed 4* magical girl
let pityRates = {star4: {}};

megucaDates.sort( function(a, b) {return new Date(a) > new Date(b)});
memoDates.sort( function(a, b) {return new Date(a) > new Date(b)});

document.addEventListener("DOMContentLoaded", function(e) {
  bannerChange("premium");

  $('.dropdown-menu a').click(function () {           
    $('#dropdownMenuButton').text($(this).text());
    bannerChange($(this).attr('name'));
  });  

  var ten = document.getElementById("roll10");
  ten.addEventListener("click", function() {
      roll10();
  });

  var single = document.getElementById("roll1");
  single.addEventListener("click", function() {
      roll1();
  });

});

function bannerChange(current)
{
  if (prevBanner != current)
  {
    prevBanner = current;
    // var banner = document.getElementById("banner");
    // banner.src = "./assets/Banners/" + current + ".png";

    pity = 0;
    document.getElementById("pity").innerHTML = "Rolls Until Pity: 100";

    pool = {
      "megucas": {"star2": [], "star3": [], "star4": []},
      "memorias": {"star2": [], "star3": [], "star4": []}
    };
    
    let markupMeguca = {"star2": 85/25.5, "star3": 3.5, "star4": 1};
    let markupThreeStar = {"star3": {"Magical Girls": 5, "Memoria": 5},
                          "star4": {"Magical Girls": 2, "Memoria": 4.5}};

    threeStarRates = {"star3": {}, "star4":{}};
    megucaRates = {"star2": {}, "star3": {}, "star4":{}};

    let generalRates = {"star2": {"Magical Girls": {"Total": 2550, "Rarity": 0.6}, "Memoria": {"Total": 5350, "Rarity": 910/5350}},
                    "star3": {"Magical Girls": {"Total": 400, "Rarity": 0.6}, "Memoria": {"Total": 1220, "Rarity": 300/1220}},
                    "star4": {"Magical Girls": {"Total": 100, "Rarity": 0.6}, "Memoria": {"Total": 400, "Rarity": 0.5}}}
                    
    // calculate odds for rates
    for (rarity in allRates[current])
    {
      let numMemoria = 0;
      let numMegucas = 0;
      if (rarity != 'JP' && rarity != 'Name')
      {
        for (item in allRates[current][rarity])
        {
          isMemoria(item) ? numMemoria++ : numMegucas++;
        }

        for (item in allRates[current][rarity])
        {
          if (isMemoria(item))
          {
            allRates[current][rarity][item] = generalRates[rarity]["Memoria"]["Total"] * generalRates[rarity]["Memoria"]["Rarity"] / numMemoria;
          }
          else
          {
            allRates[current][rarity][item] = generalRates[rarity]["Magical Girls"]["Total"] * generalRates[rarity]["Magical Girls"]["Rarity"] / numMegucas;
          }
        }

        allRates[current][rarity]["Memoria"] =  generalRates[rarity]["Memoria"]["Total"] -  generalRates[rarity]["Memoria"]["Total"] * generalRates[rarity]["Memoria"]["Rarity"];
        allRates[current][rarity]["Magical Girls"] =  generalRates[rarity]["Magical Girls"]["Total"] -  generalRates[rarity]["Magical Girls"]["Total"] * generalRates[rarity]["Magical Girls"]["Rarity"];
      }
    }

    populatePool(allRates[current]);
    console.log(pool);

    for (rarity in categoryChance)
    {
      for (item in allRates[current][rarity])
      {
        if (item.lastIndexOf("_") == -1 && item != "Memoria") // magical girl
        {
          megucaRates[rarity][item] = markupMeguca[rarity] * allRates[current][rarity][item];
          if (rarity != "star2")
            threeStarRates[rarity][item] = markupThreeStar[rarity]["Magical Girls"] * allRates[current][rarity][item];
        }
        else // memoria
        {
          if (rarity != "star2")
            threeStarRates[rarity][item] = markupThreeStar[rarity]["Memoria"] * allRates[current][rarity][item];
        }
      }
    }
  }
}

function roll10()
{
  let rates = allRates[prevBanner];
  gemsSpent += 250;
  // calculate where pity is
  // if you get a 4* before then, remove it
  let fourStar = -1;
  if (pity >= 90)
  {
    fourStar = 100 - pity - 1;
  }

  // calculate where the guaranteed 3* is
  let threeStar = Math.floor(random(1, 10)) - 1;
  do {
    threeStar = Math.floor(random(1, 10)) - 1;
  } while (pity == threeStar);

  // // calculate where the guaranteed magical girl is
  let meguca = Math.floor(random(1, 10)) - 1;
  do {
    meguca = Math.floor(random(1, 10)) - 1;
  } while (meguca == threeStar || meguca == pity);

  for (let i = 0; i < 10; i++)
  {
    let pullChance = (Math.random() * 10000);
    let currChance = 0;
    let rarity = 0;
    let item;

    if (i == fourStar)
    {
      rarity = "star4";
      item = roll(megucaRates, "star4");
    }
    else if (i == threeStar)
    {
      let threeStarCategories =  {star3: 8000, star4: 2000};
      for (let key in threeStarCategories)
      {
        rarity = key;
        currChance += threeStarCategories[key];
        if (pullChance < currChance)
        {
          item = roll(threeStarRates, key)
          break;
        }
      }
    }
    else if (i == meguca)
    {
      let megucaCategories =  {star2: 8500, star3: 1400, star4: 100};
      for (let key in megucaCategories)
      {
        rarity = key;
        currChance += megucaCategories[key];
        if (pullChance < currChance)
        {
          item = roll(megucaRates, key)
          break;
        }
      }
    }
    else
    {
      for (let key in categoryChance)
      {
        rarity = key;
        currChance += categoryChance[key];
        if (pullChance < currChance)
        {
          item = roll(rates, key)
          break;
        }
      }
    }

    item = decideSpecific(item, rarity);
    pity++;

    if (rarity == "star4" && item.lastIndexOf("_") == -1 && item.trim() != "Memoria") // 4* girl
    {
      pity = 0;
      fourStar = -1;
    }

    setImage(item, rarity, i);
    let untilPity = 100 - pity;
    document.getElementById("gems").innerHTML = "Gems Spent: " + gemsSpent;
    document.getElementById("pity").innerHTML = "Rolls Until Pity: " + untilPity;
    document.getElementById("meguca").innerHTML = "";
    document.getElementById("memoria").innerHTML = "";

    for (key in rares["magical girls"])
    {
      document.getElementById("meguca").innerHTML += key + " x" + rares["magical girls"][key] + "<br>";
    }

    for (key in rares["memorias"])
    {
      document.getElementById("memoria").innerHTML += key + " x" + rares["memorias"][key] + "<br>";
    }
  }

}

function roll1()
{
  for (let i = 0; i < 10; i++)
  {
    document.getElementById(i+1).innerHTML = "";
  }
  //test

  let rates = allRates[prevBanner];
  gemsSpent += 25;

  // calculate where pity is
  // if you get a 4* before then, remove it
  let fourStar = -1;
  if (pity == 99)
  {
    fourStar = 0;
  }

  for (let i = 0; i < 1; i++)
  {
    let pullChance = (Math.random() * 10000);
    let currChance = 0;
    let rarity = 0;
    let item;

    if (i == fourStar)
    {
      rarity = "star4";
      item = roll(megucaRates, "star4");
    }
    else
    {
      for (let key in categoryChance)
      {
        rarity = key;
        currChance += categoryChance[key];
        if (pullChance < currChance)
        {
          item = roll(rates, key)
          break;
        }
      }
    }

    item = decideSpecific(item, rarity);
    pity++;

    if (rarity == "star4" && item.lastIndexOf("_") == -1 && item.trim() != "Memoria") // 4* girl
    {
      pity = 0;
      fourStar = -1;
    }

    setImage(item, rarity, i);
    let untilPity = 100 - pity;
    document.getElementById("gems").innerHTML = "Gems Spent: " + gemsSpent;
    document.getElementById("pity").innerHTML = "Rolls Until Pity: " + untilPity;
    document.getElementById("meguca").innerHTML = "";
    document.getElementById("memoria").innerHTML = "";

    for (key in rares["magical girls"])
    {
      document.getElementById("meguca").innerHTML += key + " x" + rares["magical girls"][key] + "<br>";
    }

    for (key in rares["memorias"])
    {
      document.getElementById("memoria").innerHTML += key + " x" + rares["memorias"][key] + "<br>";
    }
  }
}

function setImage(item, key, i)
{
  let color = "";
  if (key == "star4")
  {
    if (item.lastIndexOf("_") != -1) // memoria
    {
      color = 'style="background-color:skyblue"';
      if (trimMemoria(item) in rares["memorias"])
      {
        rares["memorias"][trimMemoria(item)] += 1;
      }
      else
      {
        rares["memorias"][trimMemoria(item)] = 1;
      }
    }
    else // magical girl
    {
      pity = 0;
      color = 'style="background-color:goldenrod"';

      if (item in rares["magical girls"])
      {
        rares["magical girls"][item] += 1;
      }
      else
      {
        rares["magical girls"][item] = 1;
      }
    }
  }

  let image = getImage(item);
  item = trimMemoria(item);
  document.getElementById(i+1).innerHTML = image + "<div " + color + ">" + item + "<br>";
}

function trimMemoria(item)
{
  if (item.lastIndexOf("_") != -1) // memoria
  {
    return item.split("_")[0];
  }

  return item;
}

function isMemoria(item)
{
  return (item.lastIndexOf("_") != -1)
}

function getImage(item)
{
  if (item.lastIndexOf("_") != -1) // memoria
  {
    let id = item.split("_")[1];
    return '<img class="pull" src="./assets/Memorias/Memoria_' + id + '_s.png"/>';
  }
  else
  {
    let firstName = item.split(" ")[0];
    let lastName = item.split(" ")[1];
    return '<img class="pull" src="./assets/Megucas/' + lastName + '_' + firstName + '.png"/>';
  }
}

function populatePool(rates)
{
  let release = new Date(rates["JP"]);
  if (release == null) {release = "01/01/3000"};
  for (let i = 0; i < memoDates.length; i++)
  {
    let key = memoDates[i];
    if (new Date(key) > release)
    {
      break;
    }
    for (let rarity in timelineMemo[key])
    {
      addToPool(key, "memorias", rarity, timelineMemo);
    }
  }

  for (let i = 0; i < megucaDates.length; i++)
  {
    let key = megucaDates[i];
    if (new Date(key) > release)
    {
      break;
    }
    for (let rarity in timelineMeguca[key])
    {
      addToPool(key, "megucas", rarity, timelineMeguca);
    }
  }
}

function addToPool(key, type, rarity, timeline)
{
  if (rarity in timeline[key])
  {
    for (let i = 0; i < timeline[key][rarity].length; i++)
    {
      if (!(timeline[key][rarity][i] in allRates[prevBanner][rarity]))
      {
        pool[type][rarity].push(timeline[key][rarity][i]);
      }
    }
  }
}

function decideSpecific(item, rarity)
{
  if (item == "Memoria")
  {
    return pool["memorias"][rarity][Math.floor(random(1, pool["memorias"][rarity].length)) - 1];
  }
  else if (item == "Magical Girls")
  {
    return pool["megucas"][rarity][Math.floor(random(1, pool["megucas"][rarity].length)) - 1];
  }

  return item;
}

function random(mn, mx) {  
  return Math.random() * (mx - mn) + mn;  
}  

function roll(rates, rarity)
{
  let ratesArray =  Object.assign({}, rates[rarity]);
  //let hash = getHash(ratesArray);
  let totalChance = sumSubArrays(ratesArray);
  let pullChance = (Math.random() * totalChance);
  let currChance = 0;
  for (key in ratesArray)
  {
    currChance += ratesArray[key];
    if (pullChance < currChance)
    {
      return key;
    }
  }

  // calculate percentage
  // for (key in hash)
  // {
  //   hash[key] = Math.round(hash[key]/summons * 100, 2) + "%";
  // }

  //document.getElementById("text").innerHTML = JSON.stringify(hash);
}

function getHash(array){
  let hash = {};
  for(key in array){
    hash[key] = 0;
  }
  return hash;
}

function sumSubArrays(array){
  var toReturn = 0;
  for(key in array){
    toReturn += array[key];
  }
  return toReturn;
}