$(document).ready(function(){$.get("/bungie/members/get",function(e){e.length>0?($(".loader-text").text("Fetching Triumphs..."),$.get("/clan/seals/get",function(t){for(var a=[],i=[{title:"Name",field:"name",formatter:"html",frozen:!0}],n=0;n<t.length;n++){var s=e.filter(function(e){return e.destinyUserInfo.membershipId==t[n].id}).map(function(e){return e.destinyUserInfo.displayName})[0],l={name:'<a href="/clan/seals/member/'+t[n].id+'">'+s+"</a>"},r=JSON.parse(t[n].data),o=0;for(const e in r)l[e]=r[e]>0?'<i class="fas fa-check text-success"></i>':'<i class="fas fa-times text-danger"></i>',o=r[e]>0?o+1:o,0==n&&i.push({title:e,field:e,formatter:"html",cssClass:"text-center"});l.total=o,a.push(l)}i.push({title:"Total",field:"total",visible:!0}),$(".stats-container").append('<div id="stats-table"></div>'),$(".loader").hide(),$(".loader-text").hide();new Tabulator("#stats-table",{data:a,columns:i,initialSort:[{column:"name",dir:"asc"},{column:"total",dir:"desc"}],layout:"fitDataFill",resizableColumns:!1})})):$(".loader-text").html("Unable to retrieve members 😟 <br/>Bungie API might be under maintenance")})});
