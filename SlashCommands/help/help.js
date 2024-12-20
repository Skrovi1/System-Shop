const { MessageEmbed , Discord , MessageActionRow, MessageButton, Util, MessageSelectMenu } = require('discord.js');
let db = require('pro.db')
let ms = require('ms')
module.exports = {
  name:"help",
  description:"to take help",
  options:[{
    name:"category",
    description:"command category",
    type:3,
    required:true,
    choices:[{
      name:"admin",
      description:"admin",
      value:"admin"
    },{
      name:"public",
      description:"public",
      value:"public"
    },{
      name:"azkar",
      description:"azkar",
      value:"azkar"
    },{
      name:"giveaway",
      description:"giveaway",
      value:"giveaway"
    },{
      name:"music",
      description:"music",
      value:"music"
    },{
      name:"reactionrole",
      description:"reactionrole",
      value:"reactionrole"
    },{
      name:"setting",
      description:"setting",
      value:"setting"
    },{
      name:"protection",
      description:"protection",
      value:"protection"
    }]
  }],

  run: async(client, interaction, args) => {
    let hi = interaction.options.getString("category")
    if(hi === "admin") {
          let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'ban',
							description: 'ban command',
							value: 'bn',
						},
						{
							label: 'kick',
							description: 'kick command',
							value: 'kk',
						},
            {
							label: 'hide',
							description: 'hide command',
							value: 'hd',
						},
            {
							label: 'hideall',
							description: 'hideall command',
							value: 'hda',
						},
            {
							label: 'lock',
							description: 'Lock Command',
							value: 'lck',
						},
            {
							label: 'lockall',
							description: 'lockall Command',
							value: 'lcka',
						},
            {
							label: 'role',
							description: 'role Command',
							value: 'rl',
						},
            {
							label: 'show',
							description: 'Show Command',
							value: 'shw',
						},
            {
							label: 'showall',
							description: 'showall Command',
							value: 'sha',
						},
            {
							label: 'temprole',
							description: 'temprole Command',
							value: 'tmpr',
						},
            {
							label: 'unban',
							description: 'unban Command',
							value: 'unbn',
						},
            {
							label: 'unbanall',
							description: 'unbanall Command',
							value: 'unba',
						},
            {
							label: 'unlock',
							description: 'unlock Command',
							value: 'unlc',
						},
            {
							label: 'unlockall',
							description: 'unlockall Command',
							value: 'unlcka',
						},
      )
        )
    ]})
    client.on('interactionCreate' , async(message) => {
      if(!message.isSelectMenu()) return;
            if(message.values == "bn") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Ban Command \`\`\` 

/ban
-ban
-بان

====

This Command Is For Banning Someone From The Server 
هذا الامر لحظر شخص ما من الخادم
      `)
        ]})
      }
            if(message.values == "kk") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Kick Command \`\`\` 

/kick
-kick
-اطرد

====

This Command Is For Kicking Someone From The Server
هذا الامر لطرد شخص من الخادم
      `)
        ]})
      }
            if(message.values == "hd") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Hide Command \`\`\` 

/hide
-hide
-اخفاء

====

This Command Is For Disableng View Channel Permession From EvevryoneRole In Some Channel
هذا الامر لالغاء اذن رؤيه الروم من رول الايفريون في روم محدده
      `)
        ]})
      }
            if(message.values == "hda") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In HideAll Command \`\`\` 

/hideall
-hideall
-اخفاء-الجميع

====

This Command Is For Hiding All Server Rooms
هذا الامر لاخفاء جميع رومات الخادم
      `)
        ]})
      }
            if(message.values == "lck") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Lock Command \`\`\` 

/lock
-lock
-اقفل

====

This Command Is For Locking The Room
هذا الامر يغلق الروم
      `)
        ]})
      }
            if(message.values == "lcka") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In LockAll Command \`\`\` 

/lockall
-lockall
-اقفل-الجميع

====

This Command Is For Locking All Server Rooms
هذا الامر لاغلاق جميع رومات الخادم
      `)
        ]})
      }
            if(message.values == "rl") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Role Command \`\`\` 

/role
-role
-رول

====

This Command Is For Giving SomeOne Role
هذا الامر يعطي شخص رتبه
      `)
        ]})
      }
            if(message.values == "shw") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Show Command \`\`\` 

/show
-show
-اظهار

====

This Command Is For Showing A Room
هذا الامر لاظهار روم
      `)
        ]})
      }
            if(message.values == "sha") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In ShowAll Command \`\`\` 

/showall
-showall
-اظهار-الجميع

====

This Command Is For Showing All Server Rooms
هذا الامر لاظهار جميع رومات الخادم
      `)
        ]})
      }
            if(message.values == "tmpr") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In TempRole Command \`\`\` 

/temprole
-temprole
-رول-مؤقت

====

This Command Is For Giving Someone Temp Role
هذا الامر لاعطاء شخص ما رول موقت
      `)
        ]})
      }
            if(message.values == "unbn") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Unban Command \`\`\` 

/unban
-unban
-فك-بان

====

This Command Is For Unbanning Member
هذا الامر لالغاء البان من شخص
      `)
        ]})
      }
            if(message.values == "unba") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In UnbanAll Command \`\`\` 

/unbanall
-unbanall
-فك-الجميع

====

This Command Is For Unban All Members
هذا الامر لالغاء البان عن جميع الاشخاص
      `)
        ]})
      }
            if(message.values == "unlc") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Unlock Command \`\`\` 

/unlock
-unlock
-فتح

====

This Command Is For Unlock Room
هذا الامر لفتح روم
      `)
        ]})
      }
            if(message.values == "unlca") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Unlock Command \`\`\` 

/unlock
-unlock
-فتح

====

This Command Is For Unlock All Rooms
هذا الامر لفتح جميع رومات السيرفر
      `)
        ]})
      }
    })
    }
    if(hi === "public") {
          let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'avatar-server',
							description: 'avatarserver command',
							value: 'asc',
						},
						{
							label: 'avatar',
							description: 'avatar command',
							value: 'avt',
						},
            {
							label: 'banner',
							description: 'banner command',
							value: 'bnr',
						},
            {
							label: 'bot',
							description: 'bot command',
							value: 'bt',
						},
            {
							label: 'inrole',
							description: 'inrole command',
							value: 'inrc',
						},
            {
							label: 'ping',
							description: 'ping command',
							value: 'png',
						},
            {
							label: 'profile',
							description: 'profile command',
							value: 'prf',
						},
            {
							label: 'rep',
							description: 'rep command',
							value: 'rp',
						},
            {
							label: 'say',
							description: 'say command',
							value: 'sy',
						},
            {
							label: 'embed',
							description: 'embed command',
							value: 'emb',
						},
            {
							label: 'server',
							description: 'server command',
							value: 'sr',
						},
            {
							label: 'srowner',
							description: 'srowner command',
							value: 'sro',
						},
            {
							label: 'tax',
							description: 'tax command',
							value: 'tx',
						},
            {
							label: 'user',
							description: 'user command',
							value: 'us',
						},
            
      )
        )
    ]})
    client.on('interactionCreate' , async(message) => {
      if(!message.isSelectMenu()) return;
      if(message.values == "asc") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In ServerAvatar Command \`\`\` 

/avatar-server
-avatar-server
-صوره-الخادم

====

This Command For Viewing Server Avatar
هذا الامر لتري افاتار الخادم
      `)
        ]})
      }
            if(message.values == "avt") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Avatar Command \`\`\` 

/avatar
-avatar
-افاتار

====

This Command Is To See Yours Or Someones Photo
هذا الامر لرؤيه صورتك او صوره شخص اخر
      `)
        ]})
      }
            if(message.values == "bnr") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Banner Command \`\`\` 

/banner
-banner
-بانر

====

This Command Is For Viewing Someones Banner
هذا الامر لاظهار بانر شخص معين
      `)
        ]})
      }
            if(message.values == "bt") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Bot Command \`\`\` 

/bot
-bot
-بوت

====

This Command Is For Previewing Bot Info
هذا الامر لاظهار معلومات البوت
      `)
        ]})
      }
            if(message.values == "inrc") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Inrole Command \`\`\` 

/inrole
-inrole
-معلومات-رتبه

====

This Command Is Fot Viewing A Role Information
هذا الامر لرؤيه معلومات عن الرتبه
      `)
        ]})
      }
            if(message.values == "png") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Ping Command \`\`\` 

/ping
-ping
-سرعه

====

This Command Is For See The Ping Of Bot
هذا الامر لرويه بنج البوت
      `)
        ]})
      }
            if(message.values == "prf") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Profile Command \`\`\` 

/profile
-profile
-بروفايل

====

This Command Is For Viewing MegaBot Profile
هذا الامر لرؤيه بروفايل ميجابوت
      `)
        ]})
      }
            if(message.values == "rp") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Rep Command \`\`\` 

/rep
-rep
-شكر

====

This Command Is For Giving Someone A Rep
هذا الامر لاعطاء شخص ما شكر
      `)
        ]})
      }
            if(message.values == "sy") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Say Command \`\`\` 

/say
-say
-قول

====

This Command Is For Saying Something By Bot
هذا الامر لقول شيء عن طريق البوت
      `)
        ]})
      }
            if(message.values == "emb") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Embed Command \`\`\` 

/embed
-embed
-ايمبد

====

This Command Is For Saying Thing In Embed By Bot
هذا الامر لقول شيء عن طريق الامبد بلبوت
      `)
        ]})
      }
            if(message.values == "sr") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Server Command \`\`\` 

/server
-server
-سيرفر

====

This Command Is For Viewing Server Information
هذا الامر لرؤيه معلومات السيرفر
      `)
        ]})
      }
            if(message.values == "sro") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In ServerOwner Command \`\`\` 

/sronwer
-srowner
-اونر-السيرفر

====

This Command Is For Viewing Server Owner
هذا الامر لرؤيه اونر السيرفر
      `)
        ]})
      }
            if(message.values == "tx") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Tax Command \`\`\` 

/tax
-tax
-ضريبه

====

This Command Is For Calculating Megacash Or Proobot Taxs
هذا الامر لحساب ضريبه الميجاكاش او بروبوت
      `)
        ]})
      }
            if(message.values == "us") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In User Command \`\`\` 

/user
-user
-يوزر

====

This Command Is For Viewing User Info
هذا الامر لرؤيه معلومات عن اليوزر
      `)
        ]})
      }
        })
    }
    if(hi === "azkar") {
                let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'azkar-disable',
							description: 'azkar disable command',
							value: 'azd',
						},
						{
							label: 'azkar-message',
							description: 'azkar message command',
							value: 'azm',
						},
            {
							label: 'azkar-setup',
							description: 'azkar setup command',
							value: 'azs',
						},
            {
							label: 'azkar-time',
							description: 'azkar time command',
							value: 'azt',
						},
            
      )
        )
    ]})
    client.on('interactionCreate' , async(message) => {
      if(!message.isSelectMenu()) return;
      if(message.values == "azd") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Azkar Disable Command \`\`\` 

/azkar-disable
-azkar-disable
-ايقاف-اذكار

====

This Command Is For Disabling The Azkar 
هذا الامر لايقاف الاذكار في سيرفرك
      `)
        ]})
      }
            if(message.values == "azm") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Azkar Type Command \`\`\` 

/azkar-type
-azkar-type
-نوع-اذكار

====

This Command Is For Changing Type Of Azkar
هذا الامر لتغيير نوع الاذكار
      `)
        ]})
      }
            if(message.values == "azs") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Azkar Setup Command \`\`\` 

/azkar-setup
-azkar-setup
-اقامه-اذكار

====

This Command Is For Setup The Azkar In Your Server
هذا الامر لاقامه الاذكار في سيرفرك
      `)
        ]})
      }
            if(message.values == "azt") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Azkar Time Command \`\`\` 

/azkar-time
-azkar-time
-وقت-اذكار

====

This Command Is For Selecting Azkar Time
هذا الامر لتحديد وقت الاذكار
      `)
        ]})
      }
    })
    }
    if(hi === "giveaway") {
                           let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'gstart',
							description: 'gstart command',
							value: 'gstart',
						},
						{
							label: 'gedit',
							description: 'gedit command',
							value: 'gedit',
						},
            {
							label: 'gend',
							description: 'gend command',
							value: 'gend',
						},
            {
							label: 'gpause',
							description: 'gpause command',
							value: 'gpause',
						},
            {
							label: 'greroll',
							description: 'greroll command',
							value: 'greroll',
						},
            {
							label: 'gresume',
							description: 'gresume command',
							value: 'gresume',
						},
            
      )
        )
    ]})
    client.on('interactionCreate' , async(message) => {
      if(!message.isSelectMenu()) return;
            if(message.values == "gstart") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Gstart Command \`\`\` 

/gstart
-gstart
-gs

====

To Start A Giveaway
لبدئ جيف اواي
 `)
        ]})
      }
            if(message.values == "gedit") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Gedit Command \`\`\` 

/gedit
-gedit
-ge

====

To Edit A Giveaway
للتعديل علي جيف اواي
`)
        ]})
      }
            if(message.values == "gend") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Gend Command \`\`\` 

/gend
-gend
-gn

====

To End A Giveaway
لانهاء جيف اواي
`)
        ]})
      }
            if(message.values == "gpause") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Gpause Command \`\`\` 

/gpause
-gpause
-gp

====

To Pause A GiveAway
لايقاف جيف اواي مؤقتا
`)
        ]})
      }
            if(message.values == "greroll") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Greroll Command \`\`\` 

/greroll
-greroll
-gl

====

To Reroll A Giveaway
لاعاده اختيار فائز للجيف اواي
`)
        ]})
      }
            if(message.values == "gresume") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Gresume Command \`\`\` 

/gresume
-gresume
-gr

====

To Resume Giveaway
لاعاده تشغيل جيف اواي موقف موقتا
`)
        ]})
      }
      
       })
    }
    if(hi === "music") {
                                 let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'nowplaying',
							description: 'nowplaying command',
							value: 'nowplaying',
						},
						{
							label: 'pause',
							description: 'pause command',
							value: 'pause',
						},
            {
							label: 'play',
							description: 'play command',
							value: 'play',
						},
            {
							label: 'queue',
							description: 'queue command',
							value: 'queue',
						},
            {
							label: 'repeat',
							description: 'repeat command',
							value: 'repeat',
						},
            {
							label: 'resume',
							description: 'resume command',
							value: 'resume',
						}, {
							label: 'skip',
							description: 'skip command',
							value: 'skip',
						}, {
							label: 'stop',
							description: 'stop command',
							value: 'stop',
						}, {
							label: 'volume',
							description: 'volume command',
							value: 'volume',
						},
            
      )
        )
    ]})
      
      client.on('interactionCreate',async(interaction) => {
        if(!interaction.isSelectMenu()) return;
            if(message.values == "nowplaying") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In NowPlaying Command \`\`\` 

/nowplaying
-nowplaying
-np

====

This Command Is For Viewing What Is Playing Now
هذا الامر لرؤيه ماذا يتم تشغيله الان
 `)
        ]})
      }
            if(message.values == "pause") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Pause Command \`\`\` 

/pause
-pause

====

This Command Is For Stopping A Music For a while 
هذا الامر لايقاف اغنيه مؤقتا
 `)
        ]})
      }
            if(message.values == "play") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Play Command \`\`\` 

/play
-play
-p

====

This Command Is For Playing Music
هذا الامر لتشغيل موسيقي
 `)
        ]})
      }
            if(message.values == "queue") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Queue Command \`\`\` 

/queue
-queue


====

To See Music Will Played
لتري الموسيقي التي سيتم تشغيلها
 `)
        ]})
      }
                    if(message.values == "repeat") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Repeat Command \`\`\` 

/repeat
-repeat


====

To Open/Close Repeat Mode
لفتح/اغلاق مود التكرار
 `)
        ]})
      }
                    if(message.values == "resume") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Resume Command \`\`\` 

/resume
-resume


====

To Resume a stopped Music
لتشغيل موسيقي موقوفه
 `)
        ]})
      }
                    if(message.values == "skip") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Skip Command \`\`\` 

/skip
-skip


====

To Skip A Music
لتخطي اغنيه
 `)
        ]})
      }
                    if(message.values == "stop") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Stop Command \`\`\` 

/stop
-stop


====

To Stop All Music
لتوقيف جميع الاغاني
 `)
        ]})
      }
                    if(message.values == "volume") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Volume Command \`\`\` 

/volume
-volume
-vol

====

To Change Volume Of Music
لتغيير صوت الاغنيه
 `)
        ]})
      }
       })
    }
    if(hi === "reactionrole") {
           let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'add',
							description: 'add command',
							value: 'add',
						}
            
      )
        )
    ]})
      
      client.on('interactionCreate',async(interaction) => {
        if(!interaction.isSelectMenu()) return;
            if(message.values == "add") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Add Command \`\`\` 

/add
-add

====

This Command Is For Adding Reaction Role
هذا الامر لاضافه رياكشن رول
 `)
        ]})
      }
      })
    }
    if(hi === "setting") {
   let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'set-applycategory',
							description: 'set-applycategory command',
							value: 'setapplycategory',
						},{
							label: 'set-applyroom',
							description: 'set-applyroom command',
							value: 'setapplyroom',
						},{
							label: 'set-feedback',
							description: 'set-feedback command',
							value: 'setfeedback',
						},{
							label: 'set-line',
							description: 'set-line command',
							value: 'setline',
						},{
							label: 'set-log',
							description: 'set-log command',
							value: 'setlog',
						},{
							label: 'set-offersroom',
							description: 'set-offersroom command',
							value: 'setoffersroom',
						},{
							label: 'set-orderroom',
							description: 'set-orderroom command',
							value: 'setorderroom',
						},{
							label: 'set-ordercategory',
							description: 'set-ordercategory command',
							value: 'setordercategory',
						},{
							label: 'set-orderbotscategory',
							description: 'set-orderbotscategory command',
							value: 'setorderbotscategory',
						},{
							label: 'set-sellroles',
							description: 'set-sellroles command',
							value: 'setsellroles',
						},{
							label: 'set-srlink',
							description: 'set-srlink command',
							value: 'setsrlink',
						},{
							label: 'set-sug',
							description: 'set-sug command',
							value: 'setsug',
						},{
							label: 'set-tag',
							description: 'set-tag command',
							value: 'settag',
						},{
							label: 'set-tax',
							description: 'set-tax command',
							value: 'settax',
						},{
							label: 'set-teamrole',
							description: 'set-teamrole command',
							value: 'setteamrole',
						},{
							label: 'set-upgraderoom',
							description: 'set-upgraderoom command',
							value: 'setupgraderoom',
						},{
							label: 'set-welcome',
							description: 'set-welcome command',
							value: 'setwelcome',
						},{
							label: 'set-welcomeseller',
							description: 'set-welcomeseller command',
							value: 'setwelcomeseller',
						},{
							label: 'set-autoline',
							description: 'set-autoline command',
							value: 'setautoline',
						},{
							label: 'set-transcripts',
							description: 'set-transcripts command',
							value: 'settranscripts',
						}
            
      )
        )
    ]})
      
      client.on('interactionCreate',async(interaction) => {
        if(!interaction.isSelectMenu()) return;
            if(message.values == "setapplycategory") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-ApplyCategory Command \`\`\` 

/set-applycategory

====

This Command Is For Seting Apply Category
هذا الامر لوضع كاتيجوري تقديم التيم
 `)
        ]})
      }
        if(message.values == "setapplyroom") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In  Command \`\`\` 

/set-applyroom

====

This Command Is For Setting Apply Room
هذا الامر لوضع روم التقديم الي الفريق
 `)
        ]})
      }
        if(message.values == "setfeedback") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Feedback Command \`\`\` 

/set-feedback

====

To Set Feedback Room
لوضع روم الفيدباك
 `)
        ]})
      }
        if(message.values == "setline") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Line Command \`\`\` 

/set-line

====

To Set Line Link
لوضع خط السيرفر
 `)
        ]})
      }
        if(message.values == "setlog") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Log Command \`\`\` 

/set-log

====

To Set Seller Log Command
لوضع روم اللوج
 `)
        ]})
      }
        if(message.values == "setoffersroom") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-OffersRoom Command \`\`\` 

/set-offersroom

====

To Set Offers Room
لوضع روم الاوفر
 `)
        ]})
      }
        if(message.values == "setorderroom") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-OrderRoom Command \`\`\` 

/set-orderroom

====

To Set Order Room
لوضع روم الاوردر
 `)
        ]})
      }
        if(message.values == "setordercategory") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-OrderCategory Command \`\`\` 

/set-ordercategory

====

To Set Order Category
لوضع كاتيجوري الطلب
 `)
        ]})
      }
        if(message.values == "setorderbotscategory") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-OrderBotsCategory Command \`\`\` 

/set-orderbotscategory

====

To Set Order Bots Category
لوضع كاتيجوري الاوردر بوتات
 `)
        ]})
      }
        if(message.values == "setsellroles") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-SellRoles Command \`\`\` 

/set-sellroles

====

To Set Sell Roles
لوضع رتب البيع
 `)
        ]})
      }
        if(message.values == "setsrlink") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-SrLink Command \`\`\` 

/set-srlink

====

To Set Server Link
لوضع لينك سيرفر
 `)
        ]})
      }
        if(message.values == "setsug") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Sug Command \`\`\` 

/set-sug

====

To Set Suggestion Room
لوضع روم اقتراحات
 `)
        ]})
      }
        if(message.values == "settag") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Tag Command \`\`\` 

/set-tag

====

To Set Server Tag
لوضع تاج السيرفر
 `)
        ]})
      }
        if(message.values == "settax") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Tax Command \`\`\` 

/set-tax

====

To Set Tax Room
لوضع روم الضريبه
 `)
        ]})
      }
        if(message.values == "setteamrole") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Teamrole Command \`\`\` 

/set-teamrole

====

To Set TeamRole
لوضع رول التيم
 `)
        ]})
      }
        if(message.values == "setupgraderoom") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-UpgradeRoom Command \`\`\` 

/set-upgraderoom

====

To Set Upgrade Room
لوضع روم الترقيه
 `)
        ]})
      }
        if(message.values == "setwelcome") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Welcome Command \`\`\` 

/set-welcome

====

To Set Welcome Room
لوضع روم ويلكم
 `)
        ]})
      }
        if(message.values == "setwelcomeseller") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-WelcomeSeller Command \`\`\` 

/set-welcomeseller

====

To Set Welcome Seller Room
لوضع روم ويلكم سيلر
 `)
        ]})
      }
        if(message.values == "setautoline") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Autoline Command \`\`\` 

/set-autoline

====

To Set Autoline Room
لوضع روم اوتولاين
 `)
        ]})
      }
        if(message.values == "settranscripts") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Set-Transcripts Command \`\`\` 

/set-transcripts

====

To Set Transcripts Room
لوضع روم الترانسكربتد
 `)
        ]})
      }
      })
    }
    if(hi === "protection") {
      let m = await interaction.reply({embeds:[
      new MessageEmbed()
      .setDescription(` \`\`\` Select Command \`\`\` `)
    ] , components:[
      new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
              .setCustomId('admin')
					.setPlaceholder('Select Commands')
					.addOptions(
						{
							label: 'antibots-on',
							description: 'antibots-on command',
							value: 'antibotson',
						},{
							label: 'del-antibots',
							description: 'del-antibots command',
							value: 'delantibots',
						},{
							label: 'antilinks-on',
							description: 'antilinks-on command',
							value: 'antilinkson',
						},{
							label: 'del-antilinks',
							description: 'del-antilinks command',
							value: 'delantilinks',
						}
            
      )
        )
    ]})
      
      client.on('interactionCreate',async(interaction) => {
        if(!interaction.isSelectMenu()) return;
            if(message.values == "antibotson") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In AntiBotsOn Command \`\`\` 

/antibots-on

====

To Enable Antibots Protection 
لتشغيل الحمايه ضد البوتات
 `)
        ]})
      }
        if(message.values == "delantibots") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In Del AntiBots Command \`\`\` 

/del-antibots

====

To Disable Antibots Protection 
لايقاف تشغيل الحمايه ضد البوتات
 `)
        ]})
      }
        if(message.values == "antilinkson") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In AntiLinksOn Command \`\`\` 

/antilinks-on

====

To Enable Antilinks Protection 
لتشغيل الحمايه ضد اللينكات
 `)
        ]})
      }
        if(message.values == "delantilinks") {
        message.update({embeds:[
          new MessageEmbed()
          .setDescription(`
\`\`\` Help In DelAntiLinks Command \`\`\` 

/del-antilinks

====

To Disable AntiLinks Protection 
لايقاف تشغيل الحمايه ضد اللينكات
 `)
        ]})
      }
      })
    }
    }
  }