var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "";
    tableHTML = "<tr><td>time</td><td>Grass_count</td><td>Eatgrass_count</td><td>Bear_count</td><td>Stone_count</td><td>Eatstone_count</td>Omnipotent_count<td>frameCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.clicks+"</td>";
        tableHTML+="<td>"+st.dbclicks+"</td>";
        tableHTML+="<td>"+st.keypresses+"</td>";
        tableHTML+="<td>"+st.framecount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

