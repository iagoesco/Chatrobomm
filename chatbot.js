const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');
const path = require('path');

const client = new Client();

// Serviço de leitura do QR Code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Conexão bem-sucedida
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa o cliente
client.initialize();

// Função de delay para pausas
const delay = ms => new Promise(res => setTimeout(res, ms));

// Funil
client.on('message', async msg => {
    
    try {
        
        // Verifica se a mensagem é de um grupo
        if (msg.from.endsWith('@g.us')) {
            console.log('Mensagem recebida de um grupo. Ignorando.');
            return; // Sai do fluxo se for um grupo
        }
        
        // Obter o chat da mensagem
        const chat = await msg.getChat();

        // Verifica se a mensagem contém as palavras-chave "mercado" ou "digital"
        if (msg.body.match(/(mercado|digital)/i) && msg.from.endsWith('@c.us')) {
            try {
                
                //CHATGPT inserir nessa linha um atraso para responder o cliente de 5 minutos
                await delay(5 * 60 * 1000);  // Atraso de 5 minutos em milissegundos

                // Simula gravação e envia o primeiro áudio
                await chat.sendStateRecording();
                await delay(15000);
                const audio1 = MessageMedia.fromFilePath('./audio1.opus');
                await client.sendMessage(msg.from, audio1, { sendAudioAsVoice: true });

                // Aguarda a próxima mensagem do cliente
                client.once('message', async response => {
                    if (response.id.remote !== msg.from) return; // Confirma que a resposta pertence ao mesmo usuário
                    console.log(`Cliente respondeu: ${response.body}`);

                    await delay(15* 60 * 1000);  // Atraso de 15 minuots milissegundos
                    // Resposta inicial
                    await chat.sendStateTyping(); // Simulando Digitação
                    await delay(3000);
                    await client.sendMessage(msg.from, `Muito prazer, viu? Meu nome é Iago Escobar.`);
                    
                    await chat.sendStateRecording();
                    await delay(37000);
                    const audio2 = MessageMedia.fromFilePath('./audio2.opus');
                    await client.sendMessage(msg.from, audio2, { sendAudioAsVoice: true });
                    
                    await chat.sendStateRecording();
                    await delay(27000);
                    const audio3 = MessageMedia.fromFilePath('./audio3.opus');
                    await client.sendMessage(msg.from, audio3, { sendAudioAsVoice: true });
                    
                    await delay(10000); //delay de 3 segundos
                    await chat.sendStateTyping(); // Simulando Digitação
                    await client.sendMessage(msg.from, 'Me falaí, pra gente já começar com pé direito e eu entender melhor sobre você, pode ser? Pode ser bem detalhista se quiser, estou todo a ouvidos aqui.');

                    // Aguarda a próxima mensagem longa do cliente
                    client.once('message', async finalResponse => {
                        if (response.id.remote !== msg.from) return; // Confirma que a resposta pertence ao mesmo usuário

                        if (finalResponse.body.length > 1) {
                            console.log(`Resposta longa do cliente: ${finalResponse.body}`);

                            try {
                                
                                await delay(20 * 60 * 1000);  // Atraso de 20 minuots milissegundos
                                await delay(11000); //delay de 3 segundos
                                await chat.sendStateTyping(); // Simulando Digitação
                                await client.sendMessage(msg.from, 'Saqueii, deu pra entender legal. Inclusive, tenho algo que com certeza vai te ajudar muito na sua situação atual. Se liga, vou te mandar uns áudios aqui pra ficar mais fácil.');
                                
                                await delay(9000); //delay de 3 segundos
                                await chat.sendStateTyping(); // Simulando Digitação
                                await client.sendMessage(msg.from, 'Vou deixar aqui meu Instagram pra você dar um confere, lá eu mostro absolutamente tudo que te falei. Dá uma olhada nos meus destaques (Resultados de alunos, Depoimentos, etc...) 🔥');
                                
                                await delay(4000); //delay de 3 segundos
                                await chat.sendStateTyping(); // Simulando Digitação
                                await client.sendMessage(msg.from, 'https://www.instagram.com/iagoesco/');

                                // Envia os áudios 4, 5, 6, 7 e 8
                                await chat.sendStateRecording();
                                await delay(37000);
                                const audio4 = MessageMedia.fromFilePath('./audio4.opus');
                                await client.sendMessage(msg.from, audio4, { sendAudioAsVoice: true });
                                
                                await chat.sendStateRecording();
                                await delay(71000);
                                const audio5 = MessageMedia.fromFilePath('./audio5.opus');
                                await client.sendMessage(msg.from, audio5, { sendAudioAsVoice: true });
                                
                                await chat.sendStateRecording();
                                await delay(68000);
                                const audio6 = MessageMedia.fromFilePath('./audio6.opus');
                                await client.sendMessage(msg.from, audio6, { sendAudioAsVoice: true });
                                
                                await delay(30 * 60 * 1000);  // Atraso de 30 minuots milissegundos
                                await chat.sendStateRecording();
                                await delay(58000);
                                const audio7 = MessageMedia.fromFilePath('./audio7.opus');
                                await client.sendMessage(msg.from, audio7, { sendAudioAsVoice: true });
                                
                                await chat.sendStateRecording();
                                await delay(79000);
                                const audio8 = MessageMedia.fromFilePath('./audio8.opus');
                                await client.sendMessage(msg.from, audio8, { sendAudioAsVoice: true });

                                //CHATGPT inserir nessa linha um if para receber a resposta do cliente para continuar o fluxo
                                client.once('message', async Response => {
                                console.log(`Resposta do cliente para continuar o fluxo: ${Response.body}`);

                                // Envia áudio 9 e 10 após o cliente demonstrar interesse
                                await delay(60 * 60 * 1000);  // Atraso de 1 hora minuots milissegundos
                                await chat.sendStateRecording();
                                await delay(38000);
                                const audio9 = MessageMedia.fromFilePath('./audio9.opus');
                                await client.sendMessage(msg.from, audio9, { sendAudioAsVoice: true });
    
                                await chat.sendStateRecording();
                                await delay(44000);
                                const audio10 = MessageMedia.fromFilePath('./audio10.opus');
                                await client.sendMessage(msg.from, audio10, { sendAudioAsVoice: true });
                                
                                await delay(12 * 60 * 1000);  // Atraso de 12 minuots milissegundos
                                //CHATGPT inserir nessa linha um if para receber a resposta do cliente para continuar o fluxo #2
                                client.once('message', async response => {
                                console.log(`Resposta do cliente após áudio 10 para continuar o fluxo: ${response.body}`);
        
                                // Enviar link com cupom e esperar comprovante
                                await delay(10000);
                                await client.sendMessage(msg.from, `Cupom com 50% de desconto na Moneymakers Club para você: https://pay.hub.la/3jAfubz4dSJ7w39fCVsN`);
        
                                await chat.sendStateRecording();
                                await delay(17000);
                                const audio11 = MessageMedia.fromFilePath('./audio11.opus');
                                await client.sendMessage(msg.from, audio11, { sendAudioAsVoice: true });
                            });
                        });
                                
                                //CHATGPT inserir nessa linha um if para receber um comprovante no formato de imagem ou documento, se ele não enviar o comprovante em 30 minutos, envie o audio12. Se ele demorar mais 20 minutos enviar mensagem "Consegue me responder aqui irmão?"

                                let comprovanteReceived = false;

                                // Temporizador para 30 minutos (para o comprovante)
                                const timer = setTimeout(async () => {
                                if (!comprovanteReceived) {
                                await chat.sendStateRecording();
                                await delay(58000);
                                const audioif12 = MessageMedia.fromFilePath('./audioif12.opus');
                                await client.sendMessage(msg.from, audioif12, { sendAudioAsVoice: true });
        
                                // Temporizador adicional para 20 minutos após o áudio12
                                setTimeout(async () => {
                                await client.sendMessage(msg.from, "Consegue me responder aqui irmão?");
                                }, 1200000); // 20 minutos em milissegundos
    }
                                }, 1800000); // 30 minutos em milissegundos

                                // Verifica se o cliente enviou uma mídia (imagem ou documento como comprovante)
                                client.on('message', async newMsg => {
                        if (newMsg.from === msg.from && newMsg.hasMedia) {
                                const media = await newMsg.downloadMedia();

                                if (media.mimetype.startsWith('image/') || media.mimetype === 'application/pdf') {
                                    comprovanteReceived = true;
                                    clearTimeout(timer); // Cancela o temporizador de 30 minutos
                                    await delay(6 * 60 * 1000);  // Atraso de 6 minuots milissegundos
                                    await delay(8000); // Delay de 3 segundos
                                    await chat.sendStateTyping(); // Simulando Digitação
                                    await client.sendMessage(msg.from, `Certooo! Agora com seu acesso liberado e enviado no seu email, vamos dar início nessa sua nova jornada sendo um membro da Moneymakers club`);
                                    
                                    await delay(16000); // Delay de 3 segundos
                                    await chat.sendStateTyping(); // Simulando Digitação
                                    await client.sendMessage(msg.from, `Aqui está o link direto para área de membros, apenas coloque seus dados para acessar: https://hub.la/g/DBWcKtYPsMexZQpZEVBL`);
                                    
                                    //CHATGPT inserir nessa linha um para encerrar loop para esta conversa e finalizar fluxo e colocar uma etiqueta na conversa de "Pedido_Finalizado"
                                    try {
                                        // Encerra o loop e finaliza o fluxo
                                        client.removeAllListeners('message'); // Remove todos os listeners de mensagens, encerrando o loop
                                
                                        console.log("Fluxo finalizado e etiqueta 'Pedido_Finalizado' adicionada.");
                                    } catch (error) {
                                        console.error('Erro ao finalizar fluxo ou adicionar etiqueta:', error);
                                    }
                                }
                                
}});

                            } catch (err) {
                                console.error('Erro ao enviar os áudios ou o vídeo:', err);
                            }
                        }
                    });
                });
            } catch (err) {
                console.error('Erro ao enviar o áudio 1:', err);
            }
        }
    } catch (error) {
        console.error('Erro no processamento da mensagem:', error);
    }
});
