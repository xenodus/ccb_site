$(document).ready((function(){$.ajax({url:ccbNS.bungie_api_url+"/GroupV2/"+ccbNS.clan_id+"/Members/",headers:{"X-API-Key":ccbNS.bungie_api}}).fail((function(){$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})).done((function(e){e.Response.results&&e.Response.results.length>0?(memberData=e.Response.results,$(".loader-text").text("Fetching Triumphs..."),$.get("/clan/seals/get",(function(e){for(var t=[],a=[{title:"Name",field:"name",formatter:"html",frozen:!0,minWidth:180}],s=0;s<e.length;s++){var i=memberData.filter((function(t){return t.destinyUserInfo.membershipId==e[s].id})).map((function(e){return e.destinyUserInfo.displayName}))[0];steamID=getSanitizedName(i);var n={name:'<a data-sort-name="'+steamID+'" href="/clan/seals/member/'+e[s].id+"/"+slugify(steamID)+'/" class="text-dark member-name">'+steamID+'<i class="fas fa-external-link-alt ml-1 fa-xs" style="position: relative; bottom: 1px;"></i></a>'},l=JSON.parse(e[s].data),r=0;for(const e in l)n[e]=l[e]>0?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',r=l[e]>0?r+1:r,0==s&&a.push({title:e,field:e,formatter:"html",cssClass:"text-center"});n.total=r,t.push(n)}a.splice(1,0,{title:"Total",field:"total",cssClass:"text-center",visible:!0}),$(".stats-container").append('<div id="stats-table"></div>'),$(".loader").hide(),$(".loader-text").hide(),$(".filter-container").show();var m=new Tabulator("#stats-table",{data:t,columns:a,initialSort:[{column:"name",dir:"asc"},{column:"total",dir:"desc"}],layout:"fitDataFill",height:"500px",resizableColumns:!0});$("#nameFilter").on("input",(function(){m.setFilter("name","like",$(this).val())}))}))):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")}))}));
