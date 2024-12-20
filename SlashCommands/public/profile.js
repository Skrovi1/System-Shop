const { MessageEmbed , Discord , MessageAttachment } = require('discord.js');
const Canvas = require('canvas')
const db = require('pro.db')
module.exports = {
  name:"profile",
  description:"ultrabot profile",
  options : [{
    name : "user",
    description : "user atc",
    type: 6,
    required : false,
  }],

  run: async(client, interaction) => {
    try {
//             let user = interaction.options.getUser('user') || interaction.user;

//       let ultracash = db.get(`cash_credits_${user.id}`)
//       if (ultracash == null) db.set(`cash_credits_${user.id}`, {
//           credits: 0,
//           userId: user.id
//         });
//             let credittt = db.get(`cash_credits_${user.id}`)
//      let credit = credittt.credits;
      
// //
//             let reppp = db.get(`rep_${user.id}`)
//     if(reppp == null) {
//       db.set(`rep_${user.id}` , {
//         count : 0,
//         xid : user.id
//       })
//     }
//       let repp = db.get(`rep_${user.id}`)
//       let rep = repp.count;

//       //
//       let levelll = db.get(`level_${user.id}`)
//     if(levelll == null) {
//       db.set(`level_${user.id}` , {
//         xp : 0,
//         nid : user.id
//       })
//     }
//       let levell = db.get(`level_${user.id}`)
//       let level = levell.xp;
//     if(level < 50) level = 0
//     if(level > 50 && level <= 100) level = 1
//     if(level > 100 && level <= 250) level = 2
//     if(level > 250 && level <= 500) level = 3
//     if(level > 500 && level <= 800) level = 4
//     if(level > 800 && level <= 1100) level = 5
//     if(level > 1100 && level <= 1500) level = 6
//     if(level > 1500 && level <= 2000) level = 7
//     if(level > 2100 && level <= 2700) level = 8
//     if(level > 2700 && level <= 3300) level = 9
//     if(level > 3300 && level <= 3950) level = 10
//     if(level > 3950 && level <= 4400) level = 11
//     if(level > 4400 && level <= 4900) level = 12
//     if(level > 4900 && level <= 5500) level = 13
//     if(level > 5500 && level <= 6200) level = 14
//     if(level > 6200 && level <= 7000) level = 15
//     if(level > 7000 && level <= 7800) level = 16
//     if(level > 7800 && level <= 8200) level = 17
//     if(level > 8200 && level <= 8700) level = 18
//     if(level > 8700 && level <= 9200) level = 19
//     if(level > 9200 && level <= 9700) level = 20
//     if(level > 9700 && level <= 10200) level = 21
//     if(level > 10200 && level <= 10800) level = 22
//     if(level > 10800 && level <= 11200) level = 23
//     if(level > 11200 && level <= 12000) level = 24
//     if(level > 12000 && level <= 12800) level = 25
//     if(level > 12800 && level <= 13500) level = 26
//     if(level > 13500 && level <= 14000) level = 27
//     if(level > 14000 && level <= 14200) level = 28
//     if(level > 14200 && level <= 15000) level = 29
//     if(level > 15000 && level <= 17000) level = 30
//     if(level > 17000 && level <= 19000) level = 31
//     if(level > 19000 && level <= 21000) level = 32
//     if(level > 21000 && level <= 23000) level = 33
//     if(level > 23000 && level <= 25000) level = 34
//     if(level > 25000 && level <= 31000) level = 35
//     if(level > 31000 && level <= 33000) level = 36
//     if(level > 33000 && level <= 35000) level = 37
//     if(level > 35000 && level <= 37000) level = 38
//     if(level > 37000 && level <= 40000) level = 39
//     if(level > 40000 && level <= 45000) level = 40
//     if(level > 45000 && level <= 50000) level = 41
//     if(level > 50000 && level <= 55000) level = 42
//     if(level > 55000 && level <= 60000) level = 43
//     if(level > 60000 && level <= 65000) level = 44
//     if(level > 65000 && level <= 70000) level = 45
//     if(level > 70000 && level <= 75000) level = 46
//     if(level > 75000 && level <= 80000) level = 47
//     if(level > 80000 && level <= 85000) level = 48
//     if(level > 85000 && level <= 90000) level = 49
//     if(level > 90000 && level <= 98000) level = 50
//     if(level > 98000 && level <= 104000) level = 51
//     if(level > 104000 && level <= 110000) level = 52
//     if(level > 110000 && level <= 118000) level = 53
//     if(level > 118000 && level <= 124000) level = 54
//     if(level > 124000 && level <= 130000) level = 55
//     if(level > 130000 && level <= 138000) level = 56
//     if(level > 144000 && level <= 150000) level = 57
//     if(level > 150000 && level <= 158000) level = 58
//     if(level > 158000 && level <= 164000) level = 59
//     if(level > 170000 && level <= 180000) level = 60
//     if(level > 180000 && level <= 200000) level = 61
//     if(level > 200000 && level <= 220000) level = 62
//     if(level > 220000 && level <= 240000) level = 63
//     if(level > 240000 && level <= 260000) level = 64
//     if(level > 260000 && level <= 280000) level = 65
//     if(level > 280000 && level <= 300000) level = 66
//     if(level > 300000 && level <= 320000) level = 67
//     if(level > 320000 && level <= 340000) level = 68
//     if(level > 340000 && level <= 360000) level = 69
//     if(level > 360000 && level <= 400000) level = 70
//     if(level > 400000 && level <= 450000) level = 71
//     if(level > 450000 && level <= 500000) level = 72
//     if(level > 500000 && level <= 550000) level = 73
//     if(level > 550000 && level <= 600000) level = 74
//     if(level > 600000 && level <= 650000) level = 75
//     if(level > 650000 && level <= 700000) level = 76
//     if(level > 700000 && level <= 750000) level = 77
//     if(level > 750000 && level <= 800000) level = 78
//     if(level > 800000 && level <= 850000) level = 79
//     if(level > 850000 && level <= 900000) level = 80
//     if(level > 900000 && level <= 1000000) level = 81
//     if(level > 1000000 && level <= 1100000) level = 82
//     if(level > 1100000 && level <= 1200000) level = 83
//     if(level > 1200000 && level <= 1300000) level = 84
//     if(level > 1300000 && level <= 1400000) level = 85
//     if(level > 1400000 && level <= 1500000) level = 86
//     if(level > 1500000 && level <= 1600000) level = 87
//     if(level > 1600000 && level <= 1700000) level = 88
//     if(level > 1700000 && level <= 1800000) level = 89
//     if(level > 1800000 && level <= 2000000) level = 90
//     if(level > 2000000 && level <= 2500000) level = 91
//     if(level > 2500000 && level <= 3000000) level = 92
//     if(level > 3000000 && level <= 3500000) level = 93
//     if(level > 3500000 && level <= 4000000) level = 94
//     if(level > 4000000 && level <= 4500000) level = 95
//     if(level > 4500000 && level <= 5000000) level = 96
//     if(level > 5000000 && level <= 5500000) level = 97
//     if(level > 5500000 && level <= 6000000) level = 98
//     if(level > 6000000 && level <= 7000000) level = 99
//     if(level >= 7500000) level = 100
            
//              const canvasp = Canvas.createCanvas(512, 512); // هنا مقاسات الصوره 
      
//     const ctx = canvasp.getContext('2d') // هنا الصوره 2d او 3d الخ
    
//     const background = await Canvas.loadImage('https://media.discordapp.net/attachments/1045095176407875656/1045339029052330004/Picsart_22-11-24_16-04-00-317.png?width=451&height=451'); // هنا الخلفيه تحط فيها المسار بتاع الصوره 
//     ctx.drawImage(background, 0, 0, canvasp.width, canvasp.height); // هنا ةمقاسات الخلفيه سيبها زي مهي
//     const cutie = await Canvas.loadImage('https://media.discordapp.net/attachments/1045095176407875656/1045339029052330004/Picsart_22-11-24_16-04-00-317.png?width=451&height=451'); // هنا مسار الصوره
//     ctx.drawImage(cutie, 25, 25, 0, 0);       
//       ctx.font = "19px Arial";
//       ctx.fillStyle = "white";
//       ctx.fillText(credit, 33, 425);
      
//       ctx.fillStyle = "white";
//       ctx.fillText("+"+rep, 33, 285);
      
//       ctx.fillStyle = "white";
//       ctx.fillText(level, 33, 350);
      
//       ctx.font = "25px Arial";
//       ctx.fillStyle = "white";
//       ctx.fillText(user.username , 220 , 100);
                 
        
        

//               ctx.beginPath();
//         ctx.arc(100, 100, 100, 0, 4 * Math.PI);
//         ctx.closePath();
//         ctx.clip();
//         let lllcc = await Canvas.loadImage(user.displayAvatarURL().replace("webp" , "png"));
//         ctx.drawImage(lllcc , 26.6 , 25 , 155 , 155)
      
//     const attachment = new MessageAttachment(canvasp.toBuffer(), 'image.jpeg'); 
    
        
//     interaction.reply({ files: [attachment]}); 
      
} catch (err) {
      console.log(err)
  }
 }
}