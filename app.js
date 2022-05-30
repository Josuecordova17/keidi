const qrcode = require('qrcode-terminal')
const { Client} = require('whatsapp-web.js');

const client = new Client();
const pronombres=['mi niña',
'guapa',
'cariño',
'preciosa',
'linda',
'cielo',
"cosita linda",
"reina"
]
const country_code="521"
const number = "8118484439"
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr,{small:true})
});

client.on('ready', () => {
    console.log('Client is ready!');
    // var c=0
    // let inte =setInterval(() => {
    //   if (c>=100) {
    //       clearInterval(inte)
    //   }  
    //   c++
    //   console.log(c);
      
    //   mandar()
    // }, 3000);
});

client.on('message', msg => {
    var men = msg.body

    console.log(`Se recibio un nuevo mensaje ${men}`);
    
    if ( (men.indexOf('te amo')!=-1)||(men.indexOf('Te amo')!=-1)) {
        msg.reply('Yo mas'+generar());
    }
});


client.initialize();

function generar() {
    r=Math.floor(Math.random()*8)
    return " "+pronombres[r]+" < 3"
}
function mandar() {
    let chatId = country_code+number+"@c.us"
    let men="Te amo"+generar()
    client.sendMessage(chatId,men)
}