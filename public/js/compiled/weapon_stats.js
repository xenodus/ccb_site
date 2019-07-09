var queueStatus=0;$(document).ready(function(){function e(){$(".loader").show(),$(".loader-text").show(),0==queueStatus&&$(".loader-text").text("Refreshing data (~1 min). Go grab a drink..."),$(".stats-container").empty(),$.get("/bungie/pve/update",function(t){2==t.status?($(".loader-text").text("Resync already in progress. Queueing..."),queueStatus=1,setTimeout(e,5e3)):(queueStatus=0,refreshBtn=$("button.refresh-btn"),refreshBtn.prop("disabled",!1),a())})}function a(){$.get("/bungie/members/get",function(e){e.length>0?($(".loader-text").text("Fetching Weapon Stats..."),$.get("/bungie/weapon/get",function(a){for(var t=[],n=0;n<e.length;n++)$(".loader-text").text("Processing "+(n+1)+" of "+e.length+"..."),weaponData=a.filter(function(a){return a.user_id==e[n].destinyUserInfo.membershipId})[0],t.push({name:e[n].destinyUserInfo.displayName,weaponKillsAutoRifle:weaponData.weaponKillsAutoRifle,weaponKillsBow:weaponData.weaponKillsBow,weaponKillsFusionRifle:weaponData.weaponKillsFusionRifle,weaponKillsHandCannon:weaponData.weaponKillsHandCannon,weaponKillsTraceRifle:weaponData.weaponKillsTraceRifle,weaponKillsPulseRifle:weaponData.weaponKillsPulseRifle,weaponKillsRocketLauncher:weaponData.weaponKillsRocketLauncher,weaponKillsScoutRifle:weaponData.weaponKillsScoutRifle,weaponKillsShotgun:weaponData.weaponKillsShotgun,weaponKillsSniper:weaponData.weaponKillsSniper,weaponKillsSubmachinegun:weaponData.weaponKillsSubmachinegun,weaponKillsSideArm:weaponData.weaponKillsSideArm,weaponKillsSword:weaponData.weaponKillsSword,weaponKillsGrenadeLauncher:weaponData.weaponKillsGrenadeLauncher});$(".loader-text").text("Generating Table..."),$(".stats-container").append('<div id="weapon-stats-table"></div>'),$(".loader").hide(),$(".loader-text").hide();var o={precision:0};new Tabulator("#weapon-stats-table",{data:t,layout:"fitColumns",columns:[{title:"Name",field:"name",frozen:!0},{title:"Auto Rifle",field:"weaponKillsAutoRifle",formatter:"money",formatterParams:o},{title:"Bow",field:"weaponKillsBow",formatter:"money",formatterParams:o},{title:"Fusion Rifle",field:"weaponKillsFusionRifle",formatter:"money",formatterParams:o},{title:"Hand Cannon",field:"weaponKillsHandCannon",formatter:"money",formatterParams:o},{title:"Trace Rifle",field:"weaponKillsTraceRifle",formatter:"money",formatterParams:o},{title:"Pulse Rifle",field:"weaponKillsPulseRifle",formatter:"money",formatterParams:o},{title:"Rocket Launcher",field:"weaponKillsRocketLauncher",formatter:"money",formatterParams:o},{title:"Scout Rifle",field:"weaponKillsScoutRifle",formatter:"money",formatterParams:o},{title:"Shotgun",field:"weaponKillsShotgun",formatter:"money",formatterParams:o},{title:"Sniper",field:"weaponKillsSniper",formatter:"money",formatterParams:o},{title:"SMG",field:"weaponKillsSubmachinegun",formatter:"money",formatterParams:o},{title:"Sidearm",field:"weaponKillsSideArm",formatter:"money",formatterParams:o},{title:"Sword",field:"weaponKillsSword",formatter:"money",formatterParams:o},{title:"Grenade Launcher",field:"weaponKillsGrenadeLauncher",formatter:"money",formatterParams:o}],layout:"fitDataFill",resizableColumns:!1});$(".stats-container").append('<div id="weapon-stats-info" class="text-center"><small>Last checked: '+weaponData.last_updated+'</small> <br/><button type="button" class="btn btn-primary btn-sm badge badge-info refresh-btn"><i class="fas fa-sync-alt"></i> Resync data</button></div>')})):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})}$(document).on("click","button.refresh-btn",function(){refreshBtn=$(this),refreshBtn.prop("disabled",!0),e()}),a()});
