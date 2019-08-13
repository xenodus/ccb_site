function makeTable(e,t,a){var s=["warlock","hunter","titan"];for(var r in e){for(var i=[],l=!1,n=0;n<t.length;n++){username=a.filter(function(e){return e.destinyUserInfo.membershipId==t[n].id}).map(function(e){return e.destinyUserInfo.displayName})[0],userData=JSON.parse(t[n].data);for(var o=0;o<s.length;o++)r+"p"in userData[s[o]]&&1==userData[s[o]][r+"p"]&&(userData[s[o]][r]=1);i.push({name:username+'<a href="https://raid.report/pc/'+t[n].id+'" target="_blank" class="text-dark"><i class="fas fa-external-link-alt ml-1 fa-xs" style="position: relative; bottom: 1px;"></i></a>',warlock:1==userData.warlock[r]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',hunter:1==userData.hunter[r]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',titan:1==userData.titan[r]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',total:userData.warlock[r]+userData.titan[r]+userData.hunter[r]}),(userData.warlock[r]||userData.hunter[r]||userData.titan[r])&&(l=!0)}$(".stats-container").append('<div id="'+r+'" class="col-md-12 mb-4 pt-md-5"><h2 class="text-yellow text-left mb-3 stats-container-header"><a href="#'+r+'">'+e[r]+"</a></h2></div>"),$("#"+r).append('<div id="'+r+'-stats-table"></div>'),$("#sub-menu > ul").append('<li class="nav-item"><a class="nav-link" href="#'+r+'">'+e[r]+(l?'<i class="fas fa-check text-success ml-2"></i>':"")+"</a></li>"),$(".loader").hide(),$(".loader-text").hide(),$("#sub-menu").show();new Tabulator("#"+r+"-stats-table",{data:i,columns:[{title:"Name",field:"name",formatter:"html",frozen:!0},{title:"Warlock",field:"warlock",formatter:"html",cssClass:"text-center"},{title:"Hunter",field:"hunter",formatter:"html",cssClass:"text-center"},{title:"Titan",field:"titan",formatter:"html",cssClass:"text-center"},{title:"Total",field:"total",cssClass:"text-center",visible:!1}],initialSort:[{column:"name",dir:"asc"},{column:"total",dir:"desc"}],layout:"fitColumns",height:"350px",resizableColumns:!1,responsiveLayout:!0})}}$(document).ready(function(){var e={cos:"Crown of Sorrows",sotp:"Scourge of the Past",lw:"Last Wish"},t={sosp:"Prestige Spire of Stars",sos:"Spire of Stars",eowp:"Prestige Eaters of World",eow:"Eaters of World",levip:"Prestige Leviathan",levi:"Leviathan"};$.ajax({url:"https://www.bungie.net/Platform/GroupV2/3717919/Members/",headers:{"X-API-Key":"856136fabe704c149dd4bd41344b54c8"}}).done(function(a){a.Response.results&&a.Response.results.length>0?(memberData=a.Response.results,$(".loader-text").text("Fetching Raid Lockouts..."),$.get("/clan/lockouts/get",function(a){$("#weekly-lockout-dates").html(a.start_of_week+" to "+a.end_of_week),$("#sub-menu > ul").append('<li class="nav-item pt-0 pt-md-4"><a class="nav-link disabled" href="#" aria-disabled="true">Year 2 Raids</a></li>'),makeTable(e,a.raid_lockouts,memberData),$("#sub-menu > ul").append('<li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true">Year 1 Raids</a></li>'),makeTable(t,a.raid_lockouts,memberData),$(".stats-container").prepend('<div class="col-md-12 mb-3 mb-md-0 text-left"><small>Note: If your guardian is missing, make sure "Show my Destiny game Activity Feed on Bungie.net" is checked under your Bungie.net privacy settings.</small></div>')})):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})});
