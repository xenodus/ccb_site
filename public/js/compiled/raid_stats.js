var queueStatus=0;$(document).ready(function(){$.ajax({url:ccbNS.bungie_api_url+"/GroupV2/"+ccbNS.clan_id+"/Members/",headers:{"X-API-Key":ccbNS.bungie_api}}).done(function(e){e.Response.results&&e.Response.results.length>0?(memberData=e.Response.results,$(".loader-text").text("Fetching Raid Stats..."),$.get("/bungie/raid/get",function(e){for(var t=[],a=0;a<memberData.length;a++)$(".loader-text").text("Processing "+(a+1)+" of "+memberData.length+"..."),raidData=e.filter(function(e){return e.user_id==memberData[a].destinyUserInfo.membershipId})[0],raidData?t.push({membershipId:memberData[a].destinyUserInfo.membershipId,name:memberData[a].destinyUserInfo.displayName+'<a href="https://raid.report/pc/'+memberData[a].destinyUserInfo.membershipId+'" target="_blank" class="text-dark"><i class="fas fa-external-link-alt ml-1 fa-xs" style="position: relative; bottom: 1px;"></i></a>',levi:raidData.levi,levip:raidData.levip,eow:raidData.eow,eowp:raidData.eowp,sos:raidData.sos,sosp:raidData.sosp,lw:raidData.lw,petra:raidData.petra>0?'<div class="text-center"><i class="fas fa-check text-success"></i></div>':'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',sotp:raidData.sotp,diamond:raidData.diamond>0?'<div class="text-center"><i class="fas fa-check text-success"></i></div>':'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',cos:raidData.cos,crown:raidData.crown>0?'<div class="text-center"><i class="fas fa-check text-success"></i></div>':'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',total:raidData.levi+raidData.levip+raidData.eow+raidData.eowp+raidData.sos+raidData.sosp+raidData.lw+raidData.sotp+raidData.cos}):(t.push({membershipId:memberData[a].destinyUserInfo.membershipId,name:memberData[a].destinyUserInfo.displayName+'<a href="https://raid.report/pc/'+memberData[a].destinyUserInfo.membershipId+'" target="_blank" class="text-dark"><i class="fas fa-external-link-alt ml-1 fa-xs" style="position: relative; bottom: 1px;"></i></a>',levi:0,levip:0,eow:0,eowp:0,sos:0,sosp:0,lw:0,petra:'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',sotp:0,diamond:'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',cos:0,crown:'<div class="text-center"><i class="fas fa-times text-danger"></i></div>',total:0}),console.log("No data: "+memberData[a].destinyUserInfo.displayName));$(".loader-text").text("Generating Table..."),$(".stats-container").append('<div id="raid-stats-table"></div>'),$(".loader").hide(),$(".loader-text").hide(),$(".filter-container").show();var s={precision:0},i=new Tabulator("#raid-stats-table",{data:t,layout:"fitColumns",columns:[{title:"Name",field:"name",formatter:"html",formatterParams:s,frozen:!0},{title:"Member ID",field:"membershipId",visible:!1,cssClass:"memberID"},{title:"Levi",field:"levi",formatter:"money",formatterParams:s},{title:"P Levi",field:"levip",formatter:"money",formatterParams:s},{title:"EOW",field:"eow",formatter:"money",formatterParams:s},{title:"P EOW",field:"eowp",formatter:"money",formatterParams:s},{title:"SOS",field:"sos",formatter:"money",formatterParams:s},{title:"P SOS",field:"sosp",formatter:"money",formatterParams:s},{title:"LW",field:"lw",formatter:"money",formatterParams:s},{title:"Flawless LW",field:"petra",formatter:"html"},{title:"SoTP",field:"sotp",formatter:"money",formatterParams:s},{title:"Flawless SoTP",field:"diamond",formatter:"html"},{title:"CoS",field:"cos",formatter:"money",formatterParams:s},{title:"Flawless CoS",field:"crown",formatter:"html"},{title:"Total",field:"total",formatter:"money",formatterParams:s}],initialSort:[{column:"total",dir:"desc"}],layout:"fitDataFill",height:"500px",resizableColumns:!1});$("#nameFilter").on("input",function(){i.setFilter("name","like",$(this).val())}),$(".stats-container").append('<div id="raid-stats-info" class="text-center"><small>Last checked: '+raidData.last_updated+"</small></div>")})):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})});
