const C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow")
const sendWindowClick = (windowId, slot, clickType, actionNumber=0) => Client.sendPacket(new C0EPacketClickWindow(windowId ?? Player.getContainer().getWindowId(), slot, clickType ?? 0, 0, null, actionNumber))
import request from "../requestV2"
let minProfit = "2000000"
let minProfitPercent = "8"
let jsonmap = FileLib.read(
  './config/ChatTriggers/modules/Pageflipper/pricemap.json'
)
let pricemap = (JSON.parse(jsonmap))
let blacklist = ["Sorrow Chestplate (L5, Slots)"]
function pricemapping() {
  var _0x393eee = {}
  _0x393eee['User-Agent'] = 'Mozilla/5.0 (ChatTriggers)'
  var _0x1fd50a = {
      url: 'https://auctionsniper.tlanotyt.repl.co/',
      headers: _0x393eee,
      json: true,
  }
  request(_0x1fd50a)
      .then((_0xdc8c88) => {
          FileLib.write(
              './config/ChatTriggers/modules/Pageflipper/pricemap.json',
              (JSON.stringify(_0xdc8c88)).replaceAll("âœªâœªâœªâœªâœª", "✪✪✪✪✪")
          )
          ChatLib.chat('&b[ef]&r Pricemap loaded!')
      })
      .catch((_0x1e77e7) => {
          ChatLib.chat(
              '&b[ef]&r Could not access pricemap! Using saved pricemap (proceed with caution, prices may be inaccurate)  ' +
              _0x1e77e7
          )
          jsonmap = FileLib.read(
              './config/ChatTriggers/modules/Pageflipper/pricemap.json'
          )
          pricemap = (JSON.parse(jsonmap))
      })
}
pricemapping()
register("Step", () => {
  pricemapping()
}).setDelay(3600)
let testingtoggle = false;
register('command', () => {
    testingtoggle = !testingtoggle
    ChatLib.chat(`§3Testing ${testingtoggle ? "§aEnabled" : "§cDisabled"}§b.`);
}).setName("testingtla");
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
}).setName("pf");
register('command', () => {
  pricemapping()
}).setName("pricemap");
register("Step", () => {
    if (!testingtoggle) return;
    for (let i = 11; i <= 43; i++) {
        let player = "";
        if (null) return;
        var price;
        var actualItem = Player.getContainer().getItems()[i];
        if (actualItem == undefined || actualItem == null)
            continue;
        let itemName = actualItem?.getName().removeFormatting();
        if (actualItem.getNBT().toObject()["tag"]["ExtraAttributes"]["rarity_upgrades"] == 1) {
            itemName = itemName + "+"
        }
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
    page();
}).setFps(8)

function page() {
    if (testingtoggle === true) {
        inv = Player.getContainer()
        invName = inv.getName()
            if (invName === ("Auction House") === true || invName === ("Co-op Auction House") === true) {
                Player.getContainer().click(11, false, "MIDDLE");
            }
            if (invName === 'Auctions Browser' || invName.includes("Auctions: ")){
                if (inv.getItems()[53].getID() === 262){
                    sendWindowClick(inv.getWindowId(), 53, 0)
                }
                else{
                    sendWindowClick(inv.getWindowId(), 46, 2)
                }
            }
}
}
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