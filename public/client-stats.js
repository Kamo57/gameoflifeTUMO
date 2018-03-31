var socket = io.connect('http://localhost:3000');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(statistics){
    console.log(statistics);
    //Պատրսատում ենք աղյուսակը
    console.log(typeof(statistics));
    statistics = JSON.parse(statistics);
    console.log(typeof(statistics));
    table.innerHTML = "";
    tableHTML = "<tr><td>time</td><td>Grass_count</td><td>Eatgrass_count</td><td>Bear_count</td><td>Stone_count</td><td>Eatstone_count</td><td>Omnipotent_count</td><td>frameCount</td></tr>";
    for(var st of statistics){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.Grass_count+"</td>";
        tableHTML+="<td>"+st.Eatgrass_count+"</td>";
        tableHTML+="<td>"+st.Bear_count+"</td>";
        tableHTML+="<td>"+st.Stone_count+"</td>";
        tableHTML+="<td>"+st.Eatstone_count+"</td>";
        tableHTML+="<td>"+st.Omnipotent_count+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})

