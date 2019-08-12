$(document).ready(function(){var e;e=[],$("section#weeklies > div.loader, section#weeklies > div.loader-text").show(),$("#weeklies-item-container").empty(),$("#weeklies-item-container").append('<div class="grid-sizer"></div><div class="gutter-sizer"></div>'),$("#weeklies-item-container").hide(),$(".tooltip").remove(),$.get("/api/milestones",function(n){var i=n.vendor_sales,o={"Suraya Hawthorne":"3347378076","Ada-1":"2917531897","Banshee-44":"672118013",Spider:"863940356","Lord Shaxx":"3603221665","The Drifter":"248695599","Lord Saladin":"895295461","Commander Zavala":"69482069",Xur:"2190858386","Tess Everis":"3361454721","Benedict 99-40":"1265988377","Eva Levante":"919809084"},s=["Gambit Bounty","Weekly Drifter Bounty"],a=["Emote","Ghost Shell","Ship","Transmat Effect","Vehicle","Weapon Ornament","Armor Ornament","Multiplayer Emote"],r=["WANTED: Combustor Valus","WANTED: Arcadian Chord","WANTED: The Eye in the Dark","WANTED: Gravetide Summoner","WANTED: Silent Fang","WANTED: Blood Cleaver"];if(i.length>0){raid_bounties=i.filter(function(e){return e.vendor_hash==o["Suraya Hawthorne"]&&"Weekly Bounty"==e.itemTypeDisplayName}),benedict_bounties=i.filter(function(e){return e.vendor_hash==o["Benedict 99-40"]&&"Weekly Bounty"==e.itemTypeDisplayName}),eva_bounties=i.filter(function(e){return e.vendor_hash==o["Eva Levante"]&&null!=e.cost}),gambit_bounties=i.filter(function(e){return e.vendor_hash==o["The Drifter"]&&s.includes(e.itemTypeDisplayName)}),power_surge_bounties=i.filter(function(e){return e.vendor_hash==o["The Drifter"]&&"Power Surge Bounty"==e.itemTypeDisplayName}),spider_wares=i.filter(function(e){return e.vendor_hash==o.Spider&&e.name.includes("Purchase")&&""==e.itemTypeDisplayName}),spider_powerful_bounty=i.filter(function(e){return e.vendor_hash==o.Spider&&"Weekly Bounty"==e.itemTypeDisplayName&&r.includes(e.name)}),banshee_wares=i.filter(function(e){return e.vendor_hash==o["Banshee-44"]&&""!=e.icon}),xur_wares=i.filter(function(e){return e.vendor_hash==o.Xur&&"Challenge Card"!=e.itemTypeDisplayName&&"Invitation of the Nine"!=e.itemTypeDisplayName}),tess_wares=i.filter(function(e){return e.vendor_hash==o["Tess Everis"]&&"Silver"!=e.cost_name&&a.includes(e.itemTypeDisplayName)}),saladin_bounties=i.filter(function(e){return e.vendor_hash==o["Lord Saladin"]&&"Iron Banner Bounty"==e.itemTypeDisplayName}),ada_frames=i.filter(function(e){return e.vendor_hash==o["Ada-1"]&&"Ballistics Log"==e.cost_name}),xur_wares.length>1&&e.push(function(e,n,t="vertical",i){str='\n    <div class="grid-item col-md-4">\n      <div class="mb-3 border-warning border">\n        <div class="border-warning border-bottom p-2 text-left">'+n+'</div>\n        <div class="pl-2 pr-2 pt-2 pb-1 '+("vertical"==t?"":"d-md-flex flex-md-wrap justify-content-md-around")+'">\n    ';for(var o=0;o<e.length;o++){var s="",a="",r="",c=i.filter(function(n){return n.vendor_sales_id==e[o].id});if(e[o].description){if(e[o].cost&&(a="<div class='mt-2'>Price: "+e[o].cost+" "+e[o].cost_name+"</div>"),c.length>0){r="<div class='mt-2'>",prev_perk_group="",roll=1;for(var d=0;d<c.length;d++)0==d?r+="<div class='mb-1'>Perk "+roll+"</div><div class='mb-2 border border-secondary rounded'>":prev_perk_group!=c[d].perk_group&&(roll++,r+="</div><div class='mt-1 mb-1'>Perk "+roll+"</div><div class='mb-2 border border-secondary rounded'>"),r+="<div class='d-flex align-items-center pt-1 pb-2 pl-2 pr-2 "+(prev_perk_group==c[d].perk_group&&0!=d?"border-top border-secondary":"")+"'>\n                        <div>\n                          <img src='https://bungie.net"+c[d].icon+"' class='mt-1 mb-1 mr-2 tooltip-icon' style='width: 30px; height: 30px;'/>\n                        </div>\n                        <div>\n                          <div class='font-weight-bold'>"+c[d].name.replace(/"/g,"'")+"</div>\n                          <div class='perk-description mt-1'>"+c[d].description.replace(/"/g,"'").replace(/•/g,"<br>• ")+"</div>\n                        </div>\n                      </div>",d+1==c.length&&(r+="</div>"),prev_perk_group=c[d].perk_group;r+="</div>"}s="\n        <div>\n          <h6 class='font-weight-bold mb-1'>"+e[o].name+"</h6>\n          <div class='d-flex align-items-start'>\n            <div>\n              <img src='https://bungie.net"+e[o].icon+"' class='mt-1 mb-1 mr-2 tooltip-icon' style='width: 50px; height: 50px;'/>\n            </div>\n            <div>"+e[o].description.replace(/"/g,"'")+"</div>\n          </div>\n          "+a+"\n          "+r+"\n        </div>\n        "}str+='\n      <div class="d-flex mb-1 align-items-center vendor-item" data-toggle="tooltip" title="'+s+'">\n        <img class="img-fluid" src="https://bungie.net'+e[o].icon+'" style="width: 20px; height: 20px; margin-right: 5px;"/>'+e[o].name+"\n      </div>\n      "}return str+="\n        </div>\n      </div>\n    </div>\n    ",str}(xur_wares,'Xur\'s Shinies <small style="font-size: 70%;font-style: italic;"><a href="https://wherethefuckisxur.com/" target="_blank" id="xur-link">Where is Xur? <i class="fas fa-external-link-alt"></i></a></small>',"vertical",n.xur_sales_item_perks)),n.nightfalls.length>0&&e.push(t(n.nightfalls,"Nightfalls"));var c=n.milestones.filter(function(e){return"levi_order"==e.type});if(c.length>0){var d=String(c[0].description).replace(/>/g,'<i class="fas fa-chevron-right fa-xs mx-1"></i>'),l=[{icon:c[0].icon,name:d}],m=n.milestones.filter(function(e){return"levi_challenge"==e.type});m.length>0&&l.unshift(m[0]),e.push(t(l,"Leviathan"))}var h=n.milestones.filter(function(e){return"y1_prestige_raid"==e.type});h.length>0&&e.push(t(h,'Y1 Prestige Raid Modifiers <small class="text-yellow" style="font-size: 70%;font-style: italic;">EOW / SOS</small>'));var p=n.milestones.filter(function(e){return"strike"==e.type});p.length>0&&e.push(t(p,'Daily Modifiers <small class="text-yellow" style="font-size: 70%;font-style: italic;">Strike / Menagerie / Heroic Story</small>'));var g=n.milestones.filter(function(e){return"menagerie"==e.type});if(g.length>0){var f=function(e){for(var n=[{hash:"2509539867",name:"Hasapiko",description:"The Boss for this week is Hasapiko, a Vex Minotaur. The related flawless triumph is, <u>Break a Leg</u>."},{hash:"2509539865",name:"Arunak",description:"The Boss for this week is Arunak, a Hive Ogre. The related flawless triumph is, <u>Uncontrolled Rage</u>."},{hash:"2509539864",name:"Pagouri",description:"The Boss for this week is Pagouri, a Vex Hydra. The related flawless triumph is, <u>Lambs to the Slaughter</u>."}],t=moment("2019-08-07 01:00:00","YYYY-MM-DD H:mm:ss"),i=moment(),o=0,s=!1;0==s;)o==Object.keys(n).length&&(o=0),nextWeek=moment(t.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),i.isBetween(t,nextWeek)?s=!0:(t=nextWeek,o++);return[{name:"Boss: "+n[o].name,icon:"/common/destiny2_content/icons/52c7544a41c3c7b2d0514991fe77d8b7.png",description:n[o].description}].concat(e)}(g);f.length>0&&e.push(t(f,"The Menagerie (Heroic)"))}var u=n.milestones.filter(function(e){return"flashpoint"==e.type});if(u.length>0&&e.push(t(u,"Flashpoint")),eva_bounties.length>0&&e.push(t(eva_bounties,"Eva Levante's Bounties")),raid_bounties.length>0&&e.push(t(raid_bounties,"Hawthorne's Raid "+(raid_bounties.length>1?"Bounties":"Bounty"))),benedict_bounties.length,spider_powerful_bounty.length>0&&e.push(t(spider_powerful_bounty,"Spider's Powerful Bounty")),banshee_wares.length>0&&(banshee_wares=_.orderBy(banshee_wares,["cost_name"],["desc"]),e.push(t(banshee_wares,"Banshee-44"))),spider_wares.length>0&&e.push(t(spider_wares,"Spider's Wares")),ascendant_challenge=function(){for(var e={"Gardens of Esila":"At the overlook's edge, the garden grows onward.","Spine of Keres":"Climb the bones and you'll find your ruin.","Harbinger’s Seclude":"Crush the first queen's crown beneath your bootheel.","Bay of Drowned Wishes":"Drown in your wishes, dear squanderer.","Chamber of Starlight":"Starlight, star bright, first untruth she'll craft tonight...","Aphelion’s Rest":"They call it a 'rest,' but it is more truly a haunt."},n=moment("2019-01-16 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);return[{name:"Ascendant: "+Object.keys(e)[i],icon:"/common/destiny2_content/icons/2f9e7dd03c415eb158c16bb59cc24c84.jpg",description:e[Object.keys(e)[i]]}]}(),weekly_dc_mission=function(){for(var e={"Broken Courier":"Respond to a distress call in the Strand.","Oracle Engine":"The Taken threaten to take control of an irreplaceable Awoken communications device.","Dark Monastery ":"Provide recon for Petra's forces by investigating strange enemy activity in Rheasilvia."},n=moment("2019-01-16 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);return[{name:"Mission: "+Object.keys(e)[i],icon:"/common/destiny2_content/icons/a6ce21a766375f5bcfb6cc01b093a383.png",description:e[Object.keys(e)[i]]}]}(),curse_level=function(){for(var e=["Low","Medium","High"],n=moment("2019-01-16 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);var s="The curse level is <u>"+e[i].toLowerCase()+"</u> in the Dreaming City.";return 2==i&&(s+=" Shattered Throne is up."),[{name:"Curse Level: "+e[i],icon:"/common/destiny2_content/icons/8f755eb3a9109ed7adfc4a8b27871e7a.png",description:s}]}(),ascendant_challenge.length>0&&weekly_dc_mission.length>0&&curse_level.length>0){var d='Dreaming City <small style="font-size: 70%;font-style: italic;"><a href="https://i.imgur.com/LA9TMcS.jpg" data-title="https://i.imgur.com/LA9TMcS.jpg" data-lightbox="Ascendant Challenge Map" target="_blank">Ascendant Challenge Map <i class="fas fa-external-link-alt"></i></a></small>';e.push(t(ascendant_challenge.concat(weekly_dc_mission).concat(curse_level),d))}if(reckoning=function(){for(var e=["Sword Knights","Likeness of Oryx"],n=moment("2019-05-29 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);if(0==i)var s="The bosses for this week's reckoning activity are the <u>"+e[i]+"</u>.";else var s="The boss for this week's reckoning activity is the <u>"+e[i]+"</u>.";var a=[{name:"Tier 2/3 Boss: "+e[i],icon:"/common/destiny2_content/icons/fc31e8ede7cc15908d6e2dfac25d78ff.png",description:s}];if(0==i)var r=[{name:"Lonesome",description:"Kinetic Sidearm<br/><br/>Am I the only one who sees?",icon:"/common/destiny2_content/icons/abd91ac904ddb37308898c9a5fd38b02.jpg"},{name:"Night Watch",description:"Kinetic Scout Rifle<br/><br/>Sleep with both eyes open.",icon:"/common/destiny2_content/icons/f32f6b8896ca5b2684c6e02d447f5182.jpg"},{name:"Sole Survivor",description:"<span class='color-arc'>Arc</span> Sniper Rifle<br/><br/>Names mean nothing to the dead.",icon:"/common/destiny2_content/icons/0ae824a841009f28327d905c0610b03c.jpg"},{name:"Last Man Standing",description:"<span class='color-solar'>Solar</span> Shotgun<br/><br/>Call me Ozymandias.",icon:"/common/destiny2_content/icons/d39006fe5498ec8720622da5a31dd066.jpg"},{name:"Just in Case (Tier 3 Only)",description:"<span class='color-solar'>Solar</span> Sword<br/><br/>Even contingencies need contingencies.",icon:"/common/destiny2_content/icons/c32e9275a505a1e39bfc146dca3702b6.jpg"}];else var r=[{name:"Spare Rations",description:"Kinetic Hand Cannon<br/><br/>Whether times are lean or fat.",icon:"/common/destiny2_content/icons/7106d949c81a1b2b281964ae2184d6b2.jpg"},{name:"Bug-Out Bag",description:"<span class='color-solar'>Solar</span> SMG<br/><br/>Grab and go.",icon:"/common/destiny2_content/icons/870aa58f8314ca60ec3075f937735885.jpg"},{name:"Outlast",description:"<span class='color-solar'>Solar</span> Pulse Rifle<br/><br/>No such word as extinction.",icon:"/common/destiny2_content/icons/7967ce5273a19ca50fe3ec1fd1b1b375.jpg"},{name:"Gnawing Hunger",description:"<span class='color-void'>Void</span> Auto Rifle<br/><br/>Don't let pride keep you from a good meal.",icon:"/common/destiny2_content/icons/48037e6416c3c9da07030a72931e0ca9.jpg"},{name:"Doomsday (Tier 3 Only)",description:"<span class='color-arc'>Arc</span> Grenade Launcher<br/><br/>The age-old chant: The end of days draws nigh.",icon:"/common/destiny2_content/icons/f689eb2328e786599701352b9c01b64d.jpg"}];return a=a.concat(r)}(),reckoning.length>0){var v=n.milestones.filter(function(e){return"reckoning"==e.type});v.length>0&&(reckoning=Array(reckoning.shift()).concat(v).concat(reckoning)),e.push(t(reckoning,"The Reckoning"))}if(saladin_bounties.length,tess_wares.length>0&&e.push(t(tess_wares,"Tess's Dust Stash")),outbreak_config=function(){for(var e=["Void","Arc","Solar"],n=moment("2019-05-08 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);var s='The configuration type is <u class="color-'+e[i].toLowerCase()+'">'+e[i].toUpperCase()+"</u> for Zero Hour (Heroic).";return[{name:e[i]+" Configuration",icon:"/common/destiny2_content/icons/c013e41cdb32779bc2322337614ea06b.jpg",description:s}]}(),outbreak_config.length>0){var d='Outbreak Perfected (Heroic) <small style="font-size: 70%;font-style: italic;"><a href="/outbreak">Solution Generator <i class="fas fa-external-link-alt"></i></a></small>';e.push(t(outbreak_config,d))}if(whisper_singe=function(){for(var e=[{name:"Void",icon:"/common/destiny2_content/icons/150c14552f0138feadcc157571e0b0e6.png",description:"Void damage increases slightly from all sources."},{name:"Arc",icon:"/common/destiny2_content/icons/ee1536e4ab72c6286ab68980d1ce6ecb.png",description:"Arc damage increases slightly from all sources."},{name:"Solar",icon:"/common/destiny2_content/icons/608fb3a03d42f16f85788abe799b0af0.png",description:"Solar damage increases slightly from all sources."}],n=moment("2019-07-31 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);return[{name:e[i].name+" Singe",icon:"/common/destiny2_content/icons/b760b737519af909e26f21009d6a1487.jpg",description:e[i].description}]}(),whisper_singe.length>0){var d="Whisper of the Worm (Heroic)";e.push(t(whisper_singe,d))}escalation_protocol=function(){for(var e={"Kathok, Roar of Xol":{name:"IKELOS_SMG_v1.0.1",icon:"/common/destiny2_content/icons/85ad82abdfc13537325b45a85d6f4462.jpg"},"Damkath, The Mask":{name:"IKELOS_SR_v1.0.1",icon:"/common/destiny2_content/icons/52630df015ef0e839555982c478d78f3.jpg"},"Naksud, the Famine":{name:"All 3 Weapons",icon:"/common/destiny2_content/icons/d316fa414f16795f5f0674a35d2bdae7.jpg"},"Bok Litur, Hunger of Xol":{name:"All 3 Weapons",icon:"/common/destiny2_content/icons/d316fa414f16795f5f0674a35d2bdae7.jpg"},"Nur Abath, Crest of Xol":{name:"IKELOS_SG_v1.0.1",icon:"/common/destiny2_content/icons/edfdd807c9d604e80b48ad8fe39c8f36.jpg"}},n=moment("2019-01-16 01:00:00","YYYY-MM-DD H:mm:ss"),t=moment(),i=0,o=!1;0==o;)i==Object.keys(e).length&&(i=0),nextWeek=moment(n.format("YYYY-MM-DD H:mm:ss"),"YYYY-MM-DD H:mm:ss").add(7,"days"),t.isBetween(n,nextWeek)?o=!0:(n=nextWeek,i++);return[{name:e[Object.keys(e)[i]].name,icon:e[Object.keys(e)[i]].icon,description:"Boss: "+Object.keys(e)[i]}]}(),escalation_protocol.length>0&&e.push(t(escalation_protocol,"Escalation Protocol"));for(var b=0;b<e.length;b++)$(".grid").append(e[b]);$('[data-toggle="tooltip"]').tooltip({html:!0}),$("section#weeklies > div.loader, section#weeklies > div.loader-text").hide(),$("#weeklies-item-container").fadeIn(),$("#weeklies-note").fadeIn(),$(".grid").masonry({itemSelector:".grid-item",gutter:0,columnWidth:".grid-sizer",gutter:".gutter-sizer",percentPosition:!0}),$.get("/api/xur",function(e){e.location&&($("a#xur-link").html(e.location+' <i class="fas fa-external-link-alt"></i>'),$(".grid").masonry("layout"))})}});var n={"Nightfall: Tree of Probabilities":{name:"D.F.A.",icon:"/common/destiny2_content/icons/6e692a14162839d0489e11cf9d84746e.jpg",description:'"Osiris said that he started to pity the Red Legion, getting trapped in here for infinite eternities. I think they\'re getting exactly what they deserve." —Sagira',type:"Legendary Hand Cannon"},"Nightfall: Strange Terrain":{name:"BrayTech Osprey",icon:"/common/destiny2_content/icons/659ebe95206951d7c97022b47a93c459.jpg",description:"Expected Use Timeframe: UNKNOWN.",type:"Legendary Rocket Launcher"},"Nightfall: Savathûn's Song":{name:"Duty Bound",icon:"/common/destiny2_content/icons/0497af906c184a43fa7e2accae899c35.jpg",description:'"Due respect, Commander? I was there when the Hive found us on Earth. I was there when we stopped them on Titan. And I\'ll be there when we wipe them out." —Sloane',type:"Legendary Auto Rifle"},"Nightfall: The Pyramidion":{name:"Silicon Neuroma",icon:"/common/destiny2_content/icons/77364d95fdc16bb1d23f6f00817dc6ab.jpg",description:'"My future is concurrently irreversible and unknowable. Before it overtakes me, I desire a more abrupt end to those responsible." —Asher Mir',type:"Legendary Sniper Rifle"},"Nightfall: The Arms Dealer":{name:"Tilt Fuse",icon:"/common/destiny2_content/icons/a2dd642b18b15f764db069f845f5173c.jpg",description:'"[whistle] With a few more revs, Zahn woulda turned this thing into the fastest bomb you never saw. Good thing for all of us he never got the chance." —Amanda Holliday',type:"Exotic Sparrow"},"Nightfall: Exodus Crash":{name:"Impact Velocity",icon:"/common/destiny2_content/icons/4d0ecd27dd8a6d02a8a0f3b2618a097e.jpg",description:'"Captain, this conveyance\'s top speed is a fraction of the Exodus Black\'s when it crashed into Nessus!" "Try not to find out for yourself." —Failsafe',type:"Exotic Sparrow"},"Nightfall: The Inverted Spire":{name:"Trichromatica",icon:"/common/destiny2_content/icons/bb72e6b7b2a7ac6165431d4a47171b2f.jpg",description:"\"Void, Solar, then Arc. Hmm. We're not naive enough to think the order is a coincidence. But we've got bigger things to worry about.\" —Zavala",type:"Exotic Ghost Shell"},"Nightfall: A Garden World":{name:"Universal Wavefunction",icon:"/common/destiny2_content/icons/d6c77755df5761e5626b052d440cf5c7.jpg",description:'"I believed your presence at the genesis of the Infinite Forest would lead to a comprehensive understanding of the Vex. When will I learn that things are never so simple?" —Ikora',type:"Exotic Ship"},"Nightfall: Lake of Shadows":{name:"The Militia's Birthright",icon:"/common/destiny2_content/icons/39b67dae56153d70e935bfad21faecc7.jpg",description:'"Earth is our home. Not Mars, not Venus, not even the Reef. We must ensure it is a place we can continue to live for many generations to come." —Devrim Kay',type:"Legendary Grenade Launcher"},"Nightfall: Will of the Thousands":{name:"Worm God Incarnation",icon:"/common/destiny2_content/icons/2d6ff9e9e65253a82ec0856f310e2b94.jpg",description:"Modifications for your ship's transmat systems, so you'll always arrive in style.",type:"Legendary Transmat Effect"},"Nightfall: The Insight Terminus":{name:"The Long Goodbye",icon:"/common/destiny2_content/icons/fe07633a2ee87f0c00d5b0c0f3838a7d.jpg",description:'Yeah… I lost a lot of these out on Nessus. Long story. Lots of dead Vex." —The Drifter',type:"Legendary Sniper Rifle"},"Nightfall: The Hollowed Lair":{name:"Mindbender's Ambition",icon:"/common/destiny2_content/icons/0d39a47ea705e188a3674fa5f41b99a5.jpg",description:'"Hiraks always did like to leave an impression." —The Spider',type:"Legendary Shotgun"},"Nightfall: Warden of Nothing":{name:"Warden's Law",icon:"/common/destiny2_content/icons/89a68f864854dd80155eb194ee8f5cb7.jpg",description:"Fight. Win. Li- Li- Li- Li- Li- FATAL EXCEPTION HAS OCCURRED AT 0028:C001E36",type:"Legendary Hand Cannon"},"Nightfall: The Corrupted":{name:"Horror's Least",icon:"/common/destiny2_content/icons/c5454c80b15ecb3b3abf2d69d4bfe5ff.jpg",description:'"Some things should not be saved." —Techeun Sedia',type:"Legendary Pulse Rifle"}};function t(e,t,i="vertical"){str='\n    <div class="grid-item col-md-4">\n      <div class="mb-3 border-warning border">\n        <div class="border-warning border-bottom p-2 text-left">'+t+'</div>\n        <div class="pl-2 pr-2 pt-2 pb-1 '+("vertical"==i?"":"d-md-flex flex-md-wrap justify-content-md-around")+'">\n    ';for(var o=0;o<e.length;o++){var s="",a="";e[o].description&&(e[o].cost&&(a="<div class='mt-2'>Price: "+e[o].cost+" "+e[o].cost_name+"</div>"),s="Nightfalls"==t&&Object.keys(n).includes(e[o].name)?"\n          <div>\n            <h6 class='font-weight-bold mb-1'>"+e[o].name+"</h6>\n            <div class='mb-1'>\n              "+e[o].description.replace(/"/g,"'")+"\n            </div>\n            <div class='d-flex align-items-start mt-2'>\n              <div>\n                <img src='https://bungie.net"+n[e[o].name].icon+"' class='mt-1 mb-1 mr-2 tooltip-icon' style='width: 50px; height: 50px;'/>\n              </div>\n              <div>\n                <div class='text-weight-bold'><h6 class='mb-1'>"+n[e[o].name].name+"</h6></div>\n                <div>"+n[e[o].name].type.replace(/"/g,"'")+"</div>\n              </div>\n            </div>\n          </div>\n          ":"\n          <div>\n            <h6 class='font-weight-bold mb-1'>"+e[o].name+"</h6>\n            <div class='d-flex align-items-start'>\n              <div>\n                <img src='https://bungie.net"+e[o].icon+"' class='mt-1 mb-1 mr-2 tooltip-icon' style='width: 50px; height: 50px;'/>\n              </div>\n              <div>"+e[o].description.replace(/"/g,"'")+"</div>\n            </div>\n            "+a+"\n          </div>\n          "),str+='\n      <div class="d-flex mb-1 align-items-center vendor-item" data-toggle="tooltip" title="'+s+'">\n        <img class="img-fluid" src="https://bungie.net'+e[o].icon+'" style="width: 20px; height: 20px; margin-right: 5px;"/>'+e[o].name+"\n      </div>\n      "}return str+="\n        </div>\n      </div>\n    </div>\n    ",str}}),$(document).ready(function(){$("#news-item-container").hide(),$.get("/api/news/get",function(e){if(e.length){for(var n=[],t=[],i=[],o=0;o<e.length;o++)switch(e[o].category){case"destiny":n.push(e[o]);break;case"division":t.push(e[o]);break;case"magic":i.push(e[o])}if(n.length>0){$("#news-item-container").append('<div class="col-md-4"><div id="destiny-news-container" class="mb-3 text-left border-warning border"><h2 class="text-center p-2 border-warning border-bottom">Destiny 2</h2><div class="news-listing-container pl-3 pr-3 pt-1 pb-1"></div></div></div>');for(o=0;o<n.length;o++)$("#destiny-news-container .news-listing-container").append("<div class='mb-2'>"+(o+1)+". <a href='"+n[o].url+"' target='_blank'>"+n[o].title+"</a> | "+n[o].source+"</div>")}if(i.length>0){$("#news-item-container").append('<div class="col-md-4"><div id="magic-news-container" class="mb-3 text-left border-warning border"><h2 class="text-center p-2 border-warning border-bottom">Magic: The Gathering Arena</h2><div class="news-listing-container pl-3 pr-3 pt-1 pb-1"></div></div></div>');for(o=0;o<i.length;o++)$("#magic-news-container .news-listing-container").append("<div class='mb-2'>"+(o+1)+". <a href='"+i[o].url+"' target='_blank'>"+i[o].title+"</a> | "+i[o].source+"</div>")}if(t.length>0){$("#news-item-container").append('<div class="col-md-4"><div id="division-news-container" class="mb-3 text-left border-warning border"><h2 class="text-center p-2 border-warning border-bottom">Tom Clancy\'s The Division 2</h2><div class="news-listing-container pl-3 pr-3 pt-1 pb-1"></div></div></div>');for(o=0;o<t.length;o++)$("#division-news-container .news-listing-container").append("<div class='mb-2'>"+(o+1)+". <a href='"+t[o].url+"' target='_blank'>"+t[o].title+"</a> | "+t[o].source+"</div>")}$("section#news > div.loader, section#news > div.loader-text").hide(),$("#news-item-container").fadeIn()}else $("section#news > div.loader, section#news > div.loader-text").hide(),$("#news-item-container").append('<div class="col-md-12 text-center p-2">Unable to retrieve news :(</div>'),$("#news-item-container").fadeIn()}).fail(function(){$("section#news > div.loader, section#news > div.loader-text").hide(),$("#news-item-container").append('<div class="col-md-12 text-center p-4 mb-2">Unable to retrieve news :(</div>'),$("#news-item-container").fadeIn()})}),$(document).ready(function(){$("#guides-item-container").hide(),$.get("/guides/get/latest",function(e){if(e.length){for(var n=0;n<e.length;n++){var t='<a href="'+e[n].url+'" title="'+e[n].title+'"><div class="guides-posts-item mb-3"><div class="text-center post-category" style="background: '+e[n].color_code+';">'+e[n].category+'</div><div class="guides-posts-tn d-flex flex-column justify-content-center lazy" style="background: url('+(e[n].thumbnail?e[n].thumbnail:"https://ccboys.xyz/images/og-banner-ccb.jpg")+') no-repeat center 20%/cover;" data-bg="url('+(e[n].thumbnail_large?e[n].thumbnail_large:"https://ccboys.xyz/images/og-banner-ccb.jpg")+')"></div><div class="guides-posts-title bg-white text-dark" style="border-top: 5px solid '+e[n].color_code+'!important;"><div class="p-3"><small>'+e[n].title+"</small></div></div></div></a>";$("#guides-item-container").append('<div class="col-md-4">'+t+"</div>")}lazyLoadInstance&&lazyLoadInstance.update(),$("section#guides > div.loader, section#guides > div.loader-text").hide(),$("#guides-item-container").fadeIn()}else $("section#guides > div.loader, section#guides > div.loader-text").hide(),$("#guides-item-container").append('<div class="col-md-12 text-center p-2">Unable to retrieve guides :(</div>'),$("#guides-item-container").fadeIn()}).fail(function(){$("section#guides > div.loader, section#guides > div.loader-text").hide(),$("#guides-item-container").append('<div class="col-md-12 text-center p-2">Unable to retrieve guides :(</div>'),$("#guides-item-container").fadeIn()})});
