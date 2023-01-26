const C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow")
const sendWindowClick = (windowId, slot, clickType, actionNumber=0) => Client.sendPacket(new C0EPacketClickWindow(windowId ?? Player.getContainer().getWindowId(), slot, clickType ?? 0, 0, null, actionNumber))
import request from "../requestV2"
let minProfit = "2000000"
let minProfitPercent = "8"
let pricemap;
function pricemapping() {
    /*
  var _0x393eee = {}
  _0x393eee['User-Agent'] = 'Mozilla/5.0 (ChatTriggers)'
  var _0x1fd50a = {
      url: 'https://github.com/Zioxz/whitelist/blob/d44139a7cd1ecb3be0b66e0651d70e0372a1317e/api/whitelist.json',
      headers: _0x393eee,
      json: true,
  }
  request(_0x1fd50a)
      .then((_0xdc8c88) => {
        pricemap = JSON.stringify(_0xdc8c88)
        ChatLib.chat('[ef]&r Pricemap loaded!')
        console.log(pricemap)
      })
      .catch((_0x1e77e7) => {
          ChatLib.chat(
              '&b[ef]&r Could not access pricemap! Using saved pricemap (proceed with caution, prices may be inaccurate)  ' +_0x1e77e7)
      })
      */
     pricemap = {"Hyperion+ (WI)": 1600000000, "Astrea+ (WI)": 1600000000, "Scylla+ (WI)": 1600000000, "Valkyrie+ (WI)": 1600000000, "Spirit Sceptre+": 24000000, "Spirit Sceptre ✪✪✪✪✪+": 26000000, "Spirit Sceptre ✪✪✪✪✪+UW5": 28300000, "Spirit Sceptre ✪✪✪✪✪+UW5S7": 32200000,  "Livid Dagger+": 12000000, "Livid Dagger+Fuming": 12000000, "Livid Dagger ✪✪✪✪✪+": 14300000, "Livid Dagger ✪✪✪✪✪+OFA": 16300000, "Livid Dagger ✪✪✪✪✪+Fuming": 15000000, "Livid Dagger ✪✪✪✪✪+FumingOFA": 16700000, "Livid Dagger ✪✪✪✪✪+SE5": 29300000, "Livid Dagger ✪✪✪✪✪+FumingSE5": 33300000, "Livid Dagger ✪✪✪✪✪+SW5": 21000000, "Livid Dagger ✪✪✪✪✪+FumingSW5": 21000000, "Midas Staff+": 115000000, "Midas Staff+100M": 205000000, "Flower of Truth+": 7000000, "Flower of Truth ✪✪✪✪✪+": 7800000, "Flower of Truth ✪✪✪✪✪+OFA": 9000000, "Flower of Truth ✪✪✪✪✪+SE5": 20000000, "Flower of Truth ✪✪✪✪✪+SW5": 11000000, "Flower of Truth ✪✪✪✪✪+UW5": 8500000, "Terminator+": 655000000, "Terminator ✪✪✪✪✪+": 660000000, "Terminator ✪✪✪✪✪+SE5": 670000000,  "Atomsplit Katana+": 44000000, "Atomsplit Katana+OFA": 47000000, "Atomsplit Katana+SW5": 47000000, "Daedalus Axe+": 83000000, "Daedalus Axe+Fuming": 83000000, "Daedalus Axe+OFA": 84000000, "Daedalus Axe+FumingOFA": 88000000, "Daedalus Axe+SW5": 88000000, "Daedalus Axe+FumingSW5": 95000000, "Daedalus Axe+SE5": 104000000, "Daedalus Axe+FumingSE5": 110000000, "Shadow Fury+": 52000000, "Shadow Fury ✪✪✪✪✪+Fuming": 57000000, "Shadow Fury ✪✪✪✪✪+OFA": 57000000, "Shadow Fury ✪✪✪✪✪+FumingOFA": 60000000, "Shadow Fury ✪✪✪✪✪+OFA": 57500000, "Shadow Fury ✪✪✪✪✪+SE5": 70000000, "Shadow Fury ✪✪✪✪✪+SE5": 75000000, "Shadow Fury ✪✪✪✪✪+SW5": 68000000, "Shadow Fury ✪✪✪✪✪+FumingSW5": 72000000, "Axe of the Shredded+": 67000000, "Axe of the Shredded ✪✪✪✪✪+": 67000000, "Axe of the Shredded ✪✪✪✪✪+OFA": 70000000, "Axe of the Shredded ✪✪✪✪✪+UW5": 7100000, "Soul Whip+": 18000000, "Soul Whip ✪✪✪✪✪+": 18700000, "Soul Whip ✪✪✪✪✪+SW5": 25000000, "Soul Whip ✪✪✪✪✪+OFA": 21500000, "Giant's Sword+": 195000000, "Giant's Sword+OFA": 199000000, "Giant's Sword ✪✪✪✪✪+OFA": 207000000, "Giant's Sword ✪✪✪✪✪+SE5": 223000000 
}

}
pricemapping()
register("Step", () => {
  pricemapping()
}).setDelay(3600)
let testingtoggle = false;
register('command', () => {
    testingtoggle = !testingtoggle
    ChatLib.chat(`§3Testing ${testingtoggle ? "§aEnabled" : "§cDisabled"}§b.`);
}).setName("pageflip");
register('command', (...args) => {
  if(arg[0] === "minProfit"){
    minProfit = arg[1].replace("k", "000").replace("m", "000000")
    ChatLib.chat("[Elytra's Flipper] Minimum Profit set to "+arg[1])
  }
  if(arg[0] === "minProfitPercent"){
    minProfitPercent = arg[1]+2
    minProfitPercent = minProfitPercent/100
    chatLib.chat("[Elytra's Flipper] Minimum Profit Percent set to"+arg[1])
  }
}).setName("page");
register('command', () => {
  pricemapping()
}).setName("pricemap");
register("Step", () => {
    if (!testingtoggle) return;
    if (Player.getContainer().getName() === 'Auctions Browser' || Player.getContainer().getName().includes("Auctions: ")){
    for (let i = 11; i <= 43; i++) {
        let player = "";
        if (null) return;
        var price;
        var actualItem = Player.getContainer().getItems()[i];
        if (actualItem == undefined || actualItem == null)
            continue;
        let itemName = actualItem?.getName().removeFormatting()+"+";
        actualItem?.getLore()?.forEach(line => {
            if (ChatLib.removeFormatting(line)?.startsWith("Buy it now:")) {
                price = ChatLib.removeFormatting(line).replace("Buy it now: ", "").replaceAll(",", "").replace(" coins", "");
                price = parseInt(price);
                //    console.log(itemName + " has price : " + price)
            }
            if(ChatLib.removeFormatting(line)?.startsWith("Seller:")){
                player = ChatLib.removeFormatting(line).replace("Seller: ", "").replace("[VIP] ", "").replace("[VIP+] ", "").replace("[MVP] ", "").replace("[MVP+] ", "").replace("[MVP++] ", "").replace("[YOUTUBE] ", "")
            }
            if (ChatLib.removeFormatting(line)?.startsWith("Ability: Wither Impact")) {
                witherImpact = true;
                itemName = itemName + " (WI)"
            }
            if (ChatLib.removeFormatting(line)?.startsWith("Price paid: ")) {
                paid = ChatLib.removeFormatting(line).replace("Price paid: ", "");
                pricepaid = paid.replaceAll(",", "");
                pricepaid = parseInt(pricepaid);
            }
        })
        if (actualItem.getNBT().toObject()["tag"]["ExtraAttributes"] != undefined) {
            var nbt = actualItem.getNBT().toObject();
            let slots = false;
            let items = nbt.tag?.ExtraAttributes?.gems?.unlocked_slots;
            let enchant = "";
            for (let k = 0; k < reforges.length; k++) {
                if (itemName.includes(reforges[k])) {
                    itemName = itemName.replace(reforges[k], "")
                }
            }
            for (let d = 0; d < masterStars.length; d++) {
                if (itemName.includes(masterStars[d])) {
                    itemName = itemName.replace(masterStars[d], "")
                }
            }
            if (itemName.includes("✿")) {
                itemName = itemName.replace("✿ ", "")
            }
            if (itemName.includes("⚚")){
                itemName = itemName.replace("⚚ ", "")
            }
            if (JSON.stringify(Player.getContainer().getItems()[i].getNBT().toObject().tag?.ExtraAttributes?.hot_potato_count) == 15) {
                itemName = itemName + "Fuming"
            }
            let gettingNbt = Player.getContainer().getItems()[i].getNBT().toObject().tag?.ExtraAttributes?.enchantments
            if (JSON.stringify(gettingNbt?.ultimate_soul_eater) == 5) {
                enchant = "SE5"
                if(soulEater.includes(itemName)){
                    itemName = itemName + enchant
                }
            }
            /*
            if (JSON.stringify(gettingNbt?.ultimate_wisdom) == 5) {
                enchant = "W5"
            }
            if (JSON.stringify(gettingNbt?.ultimate_legion) == 5) {
                enchant = "L5"
            }
            */
            if (JSON.stringify(gettingNbt?.ultimate_wise) == 5) {
                enchant = "UWV"
                if(ultimateWise.includes(itemName)){
                    itemName = itemName + enchant
                }
            }
            if (JSON.stringify(gettingNbt?.ultimate_swarm) == 5) {
                enchant = "SW5"
                if(swarm.includes(itemName)){
                    itemName = itemName + enchant
                }
            }
            if (JSON.stringify(gettingNbt?.ultimate_one_for_all) == 1) {
                enchant = "OFA"
                if(oneForAll.includes(itemName)){
                    itemName = itemName + enchant
                }
            }
            if (JSON.stringify(gettingNbt?.smite) == 7) {
                enchant = "S7"
                if(itemName.includes("Spirit Sceptre ✪✪✪✪✪+UW5")){
                    itemName = itemName + enchant
                }
            }
            }
            if (pricemap.hasOwnProperty(itemName)) {
                let cost = (pricemap[itemName]);
                if ((cost-price >= minProfit && (cost/price)>=minProfitPercent)){
                    ChatLib.command("pc "+player+" listed "+itemName+" for "+price+" is worth "+cost, false);
                    console.log(player+" listed "+itemName+" for "+price+" is worth "+cost);
                    // Player.getContainer().click(i, false, "MIDDLE");
                    //let wi = Player.getContainer().getWindowId();
                    //sendWindowClick(wi, i, 0);
                }
        }
        
    }
}
    page();
}).setFps(8)

function page() {
    inv = Player.getContainer()
    invName = inv.getName()
    if (invName === 'Auctions Browser' || invName.includes("Auctions: ")){
        if (inv.getItems()[53]?.getID() === 262){
            sendWindowClick(inv.getWindowId(), 53, 0)
            }
        if (inv.getItems()[53]?.getID() === 160){
             sendWindowClick(inv.getWindowId(), 46, 1)
            }
            }

}
register("Step", () => {
    if (testingtoggle === true) {
        if (Player.getContainer().getName() === ("Auction House") || Player.getContainer().getName() === ("Co-op Auction House")) {
            Player.getContainer().click(11, false, "MIDDLE");
        }
    if (!Player.getContainer() === null) return;
        if (Player.getContainer().getName().includes("container")){
            ChatLib.say("/ah");
        }}
}).setDelay(5)
const masterStars = new Array('➊', '➋', '➌', '➍', '➎')


const reforges = new Array(
    'Gentle ',
    'Odd ',
    'Fast ',
    'Fair ',
    'Epic ',
    'Sharp ',
    'Heroic ',
    'Spicy ',
    'Legendary ',
    'Dirty ',
    'Suspicious ',
    'Bulky ',
    'Deadly ',
    'Fine ',
    'Grand ',
    'Hasty ',
    'Neat ',
    'Rapid ',
    'Unreal ',
    'Awkward ',
    'Rich ',
    'Headstrong ',
    'Precise ',
    'Clean ',
    'Fierce ',
    'Heavy ',
    'Light ',
    'Mythic ',
    'Pure ',
    'Smart ',
    'Titanic ',
    'Wise ',
    'Perfect ',
    'Necrotic ',
    'Spiked ',
    'Cubic ',
    'Hyper ',
    'Reinforced ',
    'Ridiculous ',
    'Empowered ',
    'Very ',
    'Highly ',
    'Extremely ',
    'Not So ',
    'Thicc ',
    'Absolutely ',
    'Even More ',
    'Strong ',
    'Shiny ',
    'Stiff ',
    'Lucky ',
    "Jerry's ",
    'Stellar ',
    'Heated ',
    'Ambered ',
    'Fruitful ',
    'Magnetic ',
    'Fleet ',
    'Mithraic ',
    'Auspicious ',
    'Refined ',
    'Moil ',
    'Blessed ',
    'Toil ',
    'Bountiful ',
    'Sweet ',
    'Silky ',
    'Bloody ',
    'Shaded ',
    'Bizarre ',
    'Itchy ',
    'Ominous ',
    'Pleasant ',
    'Pretty ',
    'Simple ',
    'Strange ',
    'Vivid ',
    'Godly ',
    'Demonic ',
    'Forceful ',
    'Hurtful ',
    'Keen ',
    'Unpleasant ',
    'Zealous ',
    'Double-Bit ',
    "Lumberjack's ",
    'Great ',
    'Rugged ',
    'Lush ',
    'Green Thumb ',
    "Peasant's ",
    'Robust ',
    'Zooming ',
    'Unyielding ',
    "Prospector's ",
    'Excellent ',
    'Sturdy ',
    'Fortunate ',
    'Strengthened ',
    'Fortified ',
    'Waxed ',
    'Glistening ',
    'Treacherous ',
    'Salty ',
    'Candied ',
    'Reforged ',
    'Withered ',
    'Fabled ',
    'Gilded ',
    'Warped ',
    'Jaded ',
    'Loving ',
    'Renowned ',
    'Giant ',
    'Ancient ',
    'Spiritual ',
    'Submerged ',
    "Pitchin' "
)

fumingItems = new Array(
    'Livid Dagger+',
    'Livid Dagger ✪✪✪✪✪+',
    'Daedalus Axe+',
    'Daedalus Axe+OFA',
    'Daedalus Axe+SW5',
    "Daedalus Axe+SE5",
    "Shadow Fury ✪✪✪✪✪+",
)
oneForAll = new Array(
    'Atomsplit Katana+',
    'Atomsplit Katana+Fuming',
    'Livid Dagger ✪✪✪✪✪+',
    'Livid Dagger ✪✪✪✪✪+Fuming',
    'Flower of Truth ✪✪✪✪✪+',
    'Daedalus Axe+',
    'Daedalus Axe+Fuming',
    'Shadow Fury ✪✪✪✪✪+',
    'Shadow Fury ✪✪✪✪✪+Fuming',
    'Axe of the Shredded ✪✪✪✪✪+',
    "Giant's Sword+",
    'Soul Whip ✪✪✪✪✪+'
)
soulEater = new Array(
    'Livid Dagger ✪✪✪✪✪+',
    'Livid Dagger ✪✪✪✪✪+Fuming',
    'Flower of Truth ✪✪✪✪✪+',
    'Daedalus Axe+',
    'Daedalus Axe+Fuming',
    'Shadow Fury ✪✪✪✪✪+',
    'Shadow Fury ✪✪✪✪✪+Fuming',
    "Giant's Sword+",
)
swarm = new Array(
    'Atomsplit Katana+',
    'Atomsplit Katana+Fuming',
    'Livid Dagger ✪✪✪✪✪+',
    'Livid Dagger ✪✪✪✪✪+Fuming',
    'Flower of Truth ✪✪✪✪✪+',
    'Daedalus Axe+',
    'Daedalus Axe+Fuming',
    'Shadow Fury ✪✪✪✪✪+',
    'Shadow Fury ✪✪✪✪✪+Fuming',
    'Soul Whip ✪✪✪✪✪+'
)
ultimateWise = new Array(
    'Spirit Sceptre ✪✪✪✪✪+',
    'Flower of Truth ✪✪✪✪✪+',
    'Axe of the Shredded ✪✪✪✪✪+',
)
