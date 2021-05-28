async function getdata(){
   const api = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyA1cpy1EPoZk2HbP-2e-cP6GkX32syxlfI&type=video&q=javascript");
   const jsondata = await api.json();
   console.log(jsondata)

   const videolink = jsondata.items[0].id.videoId
   const Channellink = jsondata.items[0].snippet.channelId
   const ChannelTitle = jsondata.items[0].snippet.channelTitle
   const description = jsondata.items[0].snippet.description
   const publishedtime = jsondata.items[0].snippet.publishTime

document.write("Video Link: " + videolink)
document.write("<br><br>")
document.write("Channel Link : " + Channellink)
document.write("<br><br>")
document.write("Channel Title : " + ChannelTitle)
document.write("<br><br>")
document.write("Description: " + description)
document.write("<br><br>")
document.write("Published Time: " + publishedtime)

}


getdata();