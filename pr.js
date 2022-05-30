const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: false }
})
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
console.log('ejecutando');
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr,{small:true})
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    var men=msg.body
    var re;
    console.log(`Se recibio un nuevo mensaje ${men}`);
    // if (msg.author=='50498096393@c.us') {
    //     msg.reply('infiel')
    // }
    // if (msg.author=='50498956801@c.us') {
    //     msg.reply('venada')
    // }
    
    switch (msg.body) {
        case 'Que es lo que te gusta de mi?':
           re=['Que no','Todo','Esa carita, como estas tan hermosa?','La pregunta es en serio mi vida me gusta todo de usted','Tus ojitos',`Yo haria otra pregunta 
Que no`,]
              msg.reply(re[Math.floor(Math.random()*re.length)])
            break;
        
        case "Que no":
        msg.reply("Nada, me gusta todo de ti")
        break;
        case "Describeme":
        re=['Busque perfeccion en el diccionario y me salio tu nombre y foto ;)','Eres todo lo que quiero',`
Hermosa
Guapa
Preciosa
Inteligente 
Basicamente eres todo lo que quiero`]
        msg.reply(re[Math.floor(Math.random()*re.length)])
        break;
        case "Me quieres?":
        msg.reply("*Yo te amo")
        break;
        case "Que soy?":
            re=["La razon por la que me levanto","La niña mas linda del mundo","Una preciosura","La cosita mas linda del mundo","Mi chichona besos en las chichis","Mi nalgona besos en las nalgas"]
            msg.reply(re[Math.floor(Math.random()*re.length)])
        default:

            break;
    
    }
});


client.initialize();

function generar() {
    r=Math.floor(Math.random()*8)
    return " "+pronombres[r]+" < 3"
}