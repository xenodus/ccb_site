function makeTable(e,t,a){var s=["warlock","hunter","titan"];for(var i in e){for(var r=[],l=!1,n=0;n<t.length;n++){username=a.filter(function(e){return e.destinyUserInfo.membershipId==t[n].id}).map(function(e){return e.destinyUserInfo.displayName})[0],userData=JSON.parse(t[n].data);for(var o=0;o<s.length;o++)i+"p"in userData[s[o]]&&1==userData[s[o]][i+"p"]&&(userData[s[o]][i]=1);r.push({name:'<a href="https://raid.report/pc/'+t[n].id+'" target="_blank" class="text-dark">'+username+"</a>",warlock:1==userData.warlock[i]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',hunter:1==userData.hunter[i]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',titan:1==userData.titan[i]?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',total:userData.warlock[i]+userData.titan[i]+userData.hunter[i]}),(userData.warlock[i]||userData.hunter[i]||userData.titan[i])&&(l=!0)}$(".stats-container").append('<div id="'+i+'" class="col-md-12 mb-4 pt-md-5"><h2 class="text-yellow text-left mb-3 stats-container-header"><a href="#'+i+'">'+e[i]+"</a></h2></div>"),$("#"+i).append('<div id="'+i+'-stats-table"></div>'),$("#sub-menu > ul").append('<li class="nav-item"><a class="nav-link" href="#'+i+'">'+e[i]+(l?'<i class="fas fa-check text-success ml-2"></i>':"")+"</a></li>"),$(".loader").hide(),$(".loader-text").hide(),$("#sub-menu").show();new Tabulator("#"+i+"-stats-table",{data:r,columns:[{title:"Name",field:"name",formatter:"html",frozen:!0},{title:"Warlock",field:"warlock",formatter:"html",cssClass:"text-center"},{title:"Hunter",field:"hunter",formatter:"html",cssClass:"text-center"},{title:"Titan",field:"titan",formatter:"html",cssClass:"text-center"},{title:"Total",field:"total",cssClass:"text-center",visible:!1}],initialSort:[{column:"name",dir:"asc"},{column:"total",dir:"desc"}],layout:"fitColumns",height:"350px",resizableColumns:!1,responsiveLayout:!0})}}$(document).ready(function(){var e={cos:"Crown of Sorrows",sotp:"Scourge of the Past",lw:"Last Wish"},t={sosp:"Prestige Spire of Stars",sos:"Spire of Stars",eowp:"Prestige Eaters of World",eow:"Eaters of World",levip:"Prestige Leviathan",levi:"Leviathan"};$.get("/bungie/members/get",function(a){a.length>0?($(".loader-text").text("Fetching Raid Lockouts..."),$.get("/clan/lockouts/get",function(s){$("#weekly-lockout-dates").html(s.start_of_week+" to "+s.end_of_week),$("#sub-menu > ul").append('<li class="nav-item pt-4"><a class="nav-link disabled" href="#" aria-disabled="true">Year 2 Raids</a></li>'),makeTable(e,s.raid_lockouts,a),$("#sub-menu > ul").append('<li class="nav-item"><a class="nav-link disabled" href="#" aria-disabled="true">Year 1 Raids</a></li>'),makeTable(t,s.raid_lockouts,a),$(".stats-container").prepend('<div class="col-md-12 text-left"><small>Note: If your guardian is missing, make sure "Show my Destiny game Activity Feed on Bungie.net" is checked under your Bungie.net privacy settings.</small></div>')})):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})});
