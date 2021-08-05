var categoryChance = {
  star2: 7900,
  star3: 1600,
  star4: 500
}

var categoryChanceSupport = {
  gem_L: 550,
  gem_M: 1000,
  gem_S: 2000,
  star1: 4407,
  star2: 1542,
  star3: 98,
  personals: 288,
  star4: 115
}

var pool = {
  "megucas": {"star2": [], "star3": [], "star4": []},
  "memorias": {"star2": [], "star3": [], "star4": []}
};

var supportPool = {
  "memorias": {"star2": [], "star3": [], "personals": [], "star4": []},
  "gems": {"gem_L": [], "gem_M": [], "gem_S": []}
};

var rares = {
  "magical girls": {},
  "memorias": {}
};

let megucaDates = Object.keys(timelineMeguca);
let memoDates = Object.keys(timelineMemo);
let prevBanner = "";
let selectedBanner = "";
let prevSelectedBanner = "";
let pity = 0;
let rollsSpent = 0;
let rollsLeftSpacer = 85;
let oldDigitCount = 1;

// holds rates for current banner for guaranteed 3*
let threeStarRates = {star3: {}, star4:{}};

// holds rates for current banner for guaranteed magical girl
let megucaRates = {star2: {}, star3: {}, star4:{}};

// holds rates for guaranteed 4* magical girl
let pityRates = {star4: {}};

megucaDates.sort( function(a, b) {return new Date(a) > new Date(b)});
memoDates.sort( function(a, b) {return new Date(a) > new Date(b)});

document.addEventListener("DOMContentLoaded", function(e) {
  // bannerChange("premium");

  // $('.dropdown-menu a').click(function () {           
  //   $('#dropdownMenuButton').text($(this).text());
  //   bannerChange($(this).attr('name'));
  // });

  $('.nav-tabs a[href="#eighteen"]').tab('show');

  selectedBanner = localStorage.getItem("banner");
  if (selectedBanner)
  {
    prevSelectedBanner = selectedBanner;
    bannerChange(selectedBanner);
    $('#dropdownMenuButton').html(allRates[selectedBanner]["name"]);
    $('img[name="'+selectedBanner+'"]').addClass('opClass');
  }

  $('#roll10').click(function() {
    selectedBanner ? roll10() : alert("Select a banner!");
  });

  $('#roll1').click(function() {
    selectedBanner ? roll1() : alert("Select a banner!");
  });

  $('.banner').click(function () {
    $('.banner').removeClass('opClass');
    if (selectedBanner != $(this).attr('name'))
    {
      $(this).addClass('opClass');
      selectedBanner = $(this).attr('name');
    }
    else
    {
      selectedBanner = "";
    }
  });

  $('#save').click(function() {
    if (selectedBanner)
    {
      bannerChange(selectedBanner);
      $('#dropdownMenuButton').html(allRates[selectedBanner]["name"]);

      if (selectedBanner == "support")
      {
        document.getElementById("rolls").innerHTML = 0;
        rollsSpent = 0;
        document.getElementById("pity").innerHTML = "0/100";
        pity = 0;
        rollsLeftSpacer = 85;
        oldDigitCount = 1;
        document.getElementById("rolls").style.left = rollsLeftSpacer + "%";
        document.getElementById("pity").style.left = "73%";
      }
      else if (prevSelectedBanner == "support")
      {
        document.getElementById("rolls").innerHTML = 0;
        rollsSpent = 0;
        rollsLeftSpacer = 85;
        oldDigitCount = 1;
        document.getElementById("rolls").style.left = rollsLeftSpacer + "%";
        document.getElementById("pity").style.left = "73%";
      }
    }
    else
    {
      $('#dropdownMenuButton').html("Select Fate Weave");
    }
    $('#modal').modal('hide');
    prevSelectedBanner = selectedBanner;
    localStorage.setItem("banner", selectedBanner);
  });

  $('#close').click(function() {
  
    if (prevSelectedBanner != selectedBanner)
    {
      $('img[name="'+prevSelectedBanner+'"]').addClass('opClass');
      $('img[name="'+selectedBanner+'"]').removeClass('opClass');
      selectedBanner = prevSelectedBanner;
    }
    
  });

});

function populateSupport()
{
  let supportPool = {
    "memorias": {"star1": [], "star2": [], "star3": [], "personals": [], "star4": []},
    "gems": {"gem_L": [], "gem_M": [], "gem_S": []}
  };

  rates = allRates["support"];
  for (let i = 0; i < memoDates.length; i++)
  {
    let key = memoDates[i];
    for (let rarity in timelineMemo[key])
    {
      if (rarity in timelineMemo[key])
      {
        for (let i = 0; i < timelineMemo[key][rarity].length; i++)
        {
          supportPool["memorias"][rarity].push(timelineMemo[key][rarity][i]);
          rates[rarity][timelineMemo[key][rarity][i]] = 0;
        }
      }
    }
  }

  let needToFillGems = ["gem_L", "gem_M", "gem_S"];
  let needToFillMemos = ["personals", "star1"];

  for (category of needToFillGems)
  {
    for (item in rates[category])
    {
      supportPool["gems"][category].push(item);
    }
  }

  for (category of needToFillMemos)
  {
    for (item in rates[category])
    {
      supportPool["memorias"][category].push(item);
    }
  }

  for (category in supportPool)
  {
    for (rarity in supportPool[category])
    {
      for (let i = 0; i < supportPool[category][rarity].length; i++)
      {
        let item = supportPool[category][rarity][i]
        rates[rarity][item] = categoryChanceSupport[rarity] / supportPool[category][rarity].length;
      }
    }
  }

}

function bannerChange(current)
{
  if (prevBanner != current)
  {
    prevBanner = current;
    // var banner = document.getElementById("banner");
    // banner.src = "./assets/Banners/" + current + ".png";

    if (current == "support")
    {
      populateSupport();
    }
    else
    {
      pity = 0;
      document.getElementById("pity").innerHTML = "0/100";

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
                      "star3": {"Magical Girls": {"Total": 400, "Rarity": 0.6}, "Memoria": {"Total": 1200, "Rarity": 0.25}},
                      "star4": {"Magical Girls": {"Total": 100, "Rarity": 0.6}, "Memoria": {"Total": 400, "Rarity": 0.5}}}
                      
      // calculate odds for rates, skip this step if already filled
      if (!allRates[current]["star2"]["Memoria"])
      {
        for (rarity in allRates[current])
        {
          let numMemoria = 0;
          let numMegucas = 0;
          if (rarity != 'JP' && rarity != 'name')
          {
            for (item in allRates[current][rarity])
            {
              isMemoria(item) ? numMemoria++ : numMegucas++;
            }

            let one4StarMemo = false;

            for (item in allRates[current][rarity])
            {
              if (isMemoria(item))
              {
                if (rarity == "star4" && numMemoria == 1)
                {
                  allRates[current][rarity][item] = 150;
                  one4StarMemo = true;
                }
                else
                {
                  allRates[current][rarity][item] = generalRates[rarity]["Memoria"]["Total"] * generalRates[rarity]["Memoria"]["Rarity"] / numMemoria;
                }
              }
              else
              {
                allRates[current][rarity][item] = generalRates[rarity]["Magical Girls"]["Total"] * generalRates[rarity]["Magical Girls"]["Rarity"] / numMegucas;
              }
            }

            let isThereRateUpMemo = numMemoria == 0 ? 0 : 1;
            let isThereRateUpMeguca = numMegucas == 0 ? 0 : 1;
            allRates[current][rarity]["Memoria"] = one4StarMemo ? 250 : generalRates[rarity]["Memoria"]["Total"] -  isThereRateUpMemo * generalRates[rarity]["Memoria"]["Total"] * generalRates[rarity]["Memoria"]["Rarity"];
            allRates[current][rarity]["Magical Girls"] =  generalRates[rarity]["Magical Girls"]["Total"] -  isThereRateUpMeguca * generalRates[rarity]["Magical Girls"]["Total"] * generalRates[rarity]["Magical Girls"]["Rarity"];
          }
        }
      }

      populatePool(allRates[current]);

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
            {
              threeStarRates[rarity][item] = markupThreeStar[rarity]["Memoria"] * allRates[current][rarity][item];
            }
          }
        }
      }
    }
  }
}

function roll10()
{
  if (prevBanner == "support")
  {
    roll10Support();
  }
  else
  {
    let rates = allRates[prevBanner];
    rollsSpent += 10;
    // calculate where pity is
    // if you get a 4* before then, remove it
    let fourStar = -1;
    if (pity >= 90)
    {
      fourStar = 100 - pity - 1;
    }

    // calculate where the guaranteed 3* is
    let threeStar = getRandom(0, 9);
    // do {
    //   threeStar = getRandom(0, 9);
    // } while (pity == threeStar);

    // // calculate where the guaranteed magical girl is
    let meguca = getRandom(0, 9);
    do {
      meguca = getRandom(0, 9);
    } while (meguca == threeStar);

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
            item = roll(rates, key);
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
      updateValues();

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
}

function roll10Support()
{
  let rates = allRates["support"];
  rollsSpent += 10;
    
  for (let i = 0; i < 10; i++)
  {
    let pullChance = (Math.random() * 10000);
    let currChance = 0;
    let rarity = 0;
    let item;

    for (let key in categoryChanceSupport)
    {
      rarity = key;
      currChance += categoryChanceSupport[key];
      if (pullChance < currChance)
      {
        item = roll(rates, key);
        break;
      }
    }

    item = decideSpecific(item, rarity);

    setImage(item, rarity, i);
    updateValues();

    for (key in rares["memorias"])
    {
      document.getElementById("memoria").innerHTML += key + " x" + rares["memorias"][key] + "<br>";
    }
  }
}

function roll1()
{
  if (prevBanner == "support")
  {
    roll1Support();
  }
  else
  {
    for (let i = 0; i < 10; i++)
    {
      document.getElementById(i+1).innerHTML = "";
    }
    //test

    let rates = allRates[prevBanner];
    rollsSpent += 1;

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
      updateValues();

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
}

function roll1Support()
{
  for (let i = 0; i < 10; i++)
  {
    document.getElementById(i+1).innerHTML = "";
  }

  let rates = allRates["support"];
  rollsSpent += 1;

  let pullChance = (Math.random() * 10000);
  let currChance = 0;
  let rarity = 0;
  let item;

  for (let key in categoryChanceSupport)
  {
    rarity = key;
    currChance += categoryChanceSupport[key];
    if (pullChance < currChance)
    {
      item = roll(rates, key)
      break;
    }
  }

  //item = decideSpecific(item, rarity);

  setImage(item, rarity, 0);
  updateValues();

  for (key in rares["memorias"])
  {
    document.getElementById("memoria").innerHTML += key + " x" + rares["memorias"][key] + "<br>";
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
  item = trimGem(item);
  document.getElementById(i+1).innerHTML = image + "<div " + color + ">" + item + "<br>";
}

function trimGem(item)
{
  if (item.lastIndexOf("*") != -1) // gem
  {
    return item.split("*")[0];
  }

  return item;
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
  else if (item.lastIndexOf("*") != -1) // enhancement gem
  {
    return '<img class="pull" src="./assets/Gems/' + trimGem(item) + '.png"/>';
  }
  else
  {
    return '<img class="pull" src="./assets/Megucas/' + item + '.png"/>';
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
    let num = getRandom(0, pool["memorias"][rarity].length - 1);
    item = pool["memorias"][rarity][num];
    return item;
  }
  else if (item == "Magical Girls")
  {
    item =  pool["megucas"][rarity][getRandom(0, pool["megucas"][rarity].length - 1)];
    return item;
  }

  return item;
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

// inclusive
function getRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateValues()
{
  document.getElementById("rolls").innerHTML = rollsSpent;
  document.getElementById("pity").innerHTML = pity + "/100";
  document.getElementById("meguca").innerHTML = "";
  document.getElementById("memoria").innerHTML = "";
  if (digitCount(rollsSpent) > oldDigitCount)
  {
    oldDigitCount++;
    rollsLeftSpacer -= 3;
  }
  document.getElementById("rolls").style.left = rollsLeftSpacer + "%";

  if (digitCount(pity) == 2)
  {
    document.getElementById("pity").style.left = "70%";
  }
  else // equal to 1
  {
    document.getElementById("pity").style.left = "73%";
  }
}

function digitCount(num)
{
  if(num === 0 ) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}