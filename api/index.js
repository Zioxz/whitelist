const C0EPacketClickWindow = Java.type("net.minecraft.network.play.client.C0EPacketClickWindow")
const sendWindowClick = (windowId, slot, clickType, actionNumber=0) => Client.sendPacket(new C0EPacketClickWindow(windowId ?? Player.getContainer().getWindowId(), slot, clickType ?? 0, 0, null, actionNumber))
import request from "../requestV2"
let minProfit = "3000000"
let minProfitPercent = "10"
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
    minProfitPercent = arg[1]
    chatLib.chat("[Elytra's Flipper] Minimum Profit Percent set to"+arg[1])
  }
}).setName("ef");
register('command', () => {
  pricemapping()
}).setName("pricemap");
let qualify = true;
register("Step", () => {
    if (!testingtoggle) return;
    for (let i = 11; i <= 43; i++) {
        let player = "";
        if (null) return;
        var price = 0;
        var actualItem = Player.getContainer().getItems()[i];
        if (actualItem == undefined || actualItem == null)
            continue;
        let itemName = actualItem?.getName().removeFormatting();
        actualItem?.getLore()?.forEach(line => {
            if (ChatLib.removeFormatting(line)?.startsWith("Buy it now:")) {
                hype = ChatLib.removeFormatting(line).replace("Buy it now: ", "");
                price = hype.replaceAll(",", "");
                price = price.replace(" coins", "");
                price = parseInt(price);
                //    console.log(itemName + " has price : " + price)
            }
            if(ChatLib.removeFormatting(line)?.startsWith("Seller:")){
                player = ChatLib.removeFormatting(line).replace("Seller: ", "").replace("[VIP] ", "").replace("[VIP+] ", "").replace("[MVP] ", "").replace("[MVP+] ", "").replace("[MVP++] ", "").replace("[YOUTUBE] ", "")
            }
            if (ChatLib.removeFormatting(line)?.startsWith("Ability: Wither Impact")) {
                witherImpact = true;
                itemName = itemName + "(WI)"
            }
            if (ChatLib.removeFormatting(line)?.startsWith("Price paid: ")) {
                paid = ChatLib.removeFormatting(line).replace("Price paid: ", "");
                pricepaid = paid.replaceAll(",", "");
                pricepaid = parseInt(pricepaid);
                if (pricepaid > 100000000){
                    itemName = itemName + "100M"
                }
            }
        })
        if (price == 0)
            continue;
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
            if (actualItem.getNBT().toObject()["tag"]["ExtraAttributes"]["rarity_upgrades"] == 1) {
                itemName = itemName + "+"
            }
            if (JSON.stringify(Player.getContainer().getItems()[i].getNBT().toObject().tag?.ExtraAttributes?.hot_potato_count) == 15) {
                itemName = itemName + "Fuming"
            }
            let gettingNbt = Player.getContainer().getItems()[i].getNBT().toObject().tag?.ExtraAttributes?.enchantments
            if (JSON.stringify(gettingNbt?.ultimate_soul_eater) == 5) {
                enchant = "SE5"
            }
            if (JSON.stringify(gettingNbt?.ultimate_wisdom) == 5) {
                enchant = "W5"
            }
            if (JSON.stringify(gettingNbt?.ultimate_legion) == 5) {
                enchant = "L5"
            }
            if (JSON.stringify(gettingNbt?.ultimate_wise) == 5) {
                enchant = "UWV"
            }
            if (JSON.stringify(gettingNbt?.ultimate_swarm) == 5) {
                enchant = "SW5"
            }
            if (JSON.stringify(gettingNbt?.ultimate_one_for_all) == 1) {
                enchant = "OFA"
            }
            if (JSON.stringify(gettingNbt?.smite) == 7) {
                enchant = "S7"
            }
            }
            if (pricemap.hasOwnProperty(itemName)) {
                for (let h=0; h<blacklist.length; h++){
                    if(itemName === blacklist[h]){
                        qualify = false;
                    }
                    else{
                        qualify = true;
                    }
                }
                if (qualify === true){
                let tlaprice = (pricemap[itemName]);
                var goodPrice = tlaprice * .90
                if ((price < goodPrice && (tlaprice-price) >= 3000000) || (itemName.includes("+") && price <= 4000000))   {
                    ChatLib.command("pc "+player, false);
                    ChatLib.say("#"+player, true);
                    console.log(itemName + "  has nice price :" + goodPrice + " tla price is " + tlaprice + " asking : " + price)
                    // Player.getContainer().click(i, false, "MIDDLE");
                    let wi = Player.getContainer().getWindowId();
                    sendWindowClick(wi, i, 0);
                }
            }
        }
        
    }
}).setFps(2)

const BobStates = {
    /*     Reset: 0, */
    Bob: 1,
    Builder: 2,
}

const AnaStates = {
    Ana: 0,
    Nano: 1,
}

let state1 = AnaStates.Ana
let state = BobStates.Bob
let bobcounter = 0
let Anacounter = 0

register("step", () => {
    if (testingtoggle === true) {
        if (Player.getContainer().getName() === 'BIN Auction View' || Player.getContainer().getName() === 'Auction House' || Player.getContainer().getName() === ("Co-op Auction House") === true || Player.getContainer().getName() === 'Auctions Browser' || Player.getContainer().getName() === 'Auction House' || Player.getContainer().getName() === 'Auctions: "Hyperion"' || Player.getContainer().getName() === 'Confirm Purchase') {
            if (Player.getContainer().getName() === ("Auction House") === true || Player.getContainer().getName() === ("Co-op Auction House") === true) {
                Player.getContainer().click(11, false, "MIDDLE");
            }
            if (Player.getContainer().getName() !== ("BIN Auction View")) {
                if (Player.getContainer().getItems()[31]?.getID() === 355 || Player.getContainer().getItems()[31]?.getID() === 371 || Player.getContainer().getItems()[31]?.getID() === 159) { }
                else {
                    if (state == BobStates.Bob) {
                        bobcounter++;
                        let wi = Player.getContainer().getWindowId();
                        sendWindowClick(wi, 53, 0)
                        //Player.getContainer().click(53, false, "LEFT");
                        if (bobcounter >=695 && bobcounter <=705) {
                            state = BobStates.Builder;
                            bobcounter = 0;
                        }
                    } else if (state == BobStates.Builder) {
                        Player.getContainer().click(46, false, "RIGHT");
                        state = BobStates.Bob;
                    }
                }
            }
        }
        else {
            if (state1 == AnaStates.Ana) {
                ChatLib.chat("§2Waiting to open ah");
                Anacounter++;
                if (Anacounter % 500 == 0) {
                    state1 = AnaStates.Nano;
                    Anacounter = 0;
                }
            } else if (state1 == AnaStates.Nano) {
                ChatLib.chat("§3Opening ah");
                ChatLib.command("ah", false);
                state1 = AnaStates.Ana
            }
        }
    }
}).setFps(50)

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

slotItems2 = new Array(
    'Shadow Fury',
    'Fervor',
    'Aurora',
    'Terror',
    'Crimson',
    "Goldor's",
    "Maxor's",
    "Necron's",
    "Storm's"
)
slotItems3 = new Array(
    'Atomsplit Katana',
    'Sorrow',
)
slotItems5 = new Array(
    "Divan's",
)

