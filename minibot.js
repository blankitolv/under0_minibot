// ==UserScript==
// @name         utils links underc0de
// @namespace    http://tampermonkey.net/
// @version      2024-07-21
// @description  try to take over the world!
// @author       Blankitolv
// @match        https://web.whatsapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=whatsapp.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let intervaloDos;
  const textoACopiar = `
 - *=== === Links útiles === ===*
*\`Como ser miembro de Underc0de\`* > https://underc0de.org/hola

*\`Podes ver todos estos links en\` https://underc0de.org/comunidad*

*\`App de Underc0de Android\`* > https://bit.ly/Underc0deAndroid

*\`App Underc0de iOS\`* > https://apps.apple.com/uy/app/underc0de/id1591350156?l=es

_Para todos aquellos que estan buscando trabajo:_
*\`Formulario de trabajo 2024\`* > https://forms.gle/AFWZh3az1yPgqPzr6

*\`Cursos Gratis en Torrent\`*
> https://bit.ly/torrentuc
> https://drive.google.com/drive/u/0/folders/1BsHOHrClnUmpz0TI_ymhzXmKokNko8Zv

- *=== === Canales === ===*
*\`# becas, cursos, etc\`* > https://bit.ly/Underc0de

*\`# Canal de posiciones IT\`* > https://bit.ly/PosicionesITUC

- *=== === Grupos de WhatsApp === ===*
*\`IA y Análisis de Datos\`* > https://bit.ly/IAUC

*\`Hacking, Seguridad y Pentesting\`* > https://bit.ly/HackUC

*\`Underc0de Oficial #2\`* > https://bit.ly/Underc0deOficial2

*\`OffTopic\`* > https://bit.ly/OfftopicUC

*\`English\`* > https://bit.ly/Underc0deEnglish

*\`Programación\`* > https://bit.ly/ProgramacionUC1

*\`Programación #2\`* > https://bit.ly/ProgramacionUC2

*\`Hardware y Reparaciones\`* > https://bit.ly/HardwareUC
*\`Marketing y Diseño UX/UI\`* > https://chat.whatsapp.com/FQvluEf4GD59C4wrnmLNZW

*\`Underc0de Oficial\`* > https://bit.ly/Underc0deOficial
*\`Criptos - USD - Inversiones\`* > https://bit.ly/CriptosUC
*\`Criptos - USD - Inversiones #2\`* > https://bit.ly/CriptosUSD2
*\`QA\`* > https://bit.ly/QAUC
*\`QA #2\`* > https://bit.ly/QAUC2
*\`QA #3\`* > https://bit.ly/QAUC3
*\`Diseño UX/UI\`* > https://bit.ly/Underc0deUXUI
*\`Grupo de Emprendedores\`* > https://bit.ly/EmprendedoresUnderc0de

*\`Gaming\`* > https://bit.ly/GamingUC
*\`Underc0aching\`* > https://bit.ly/Underc0aching
*\`Underc0de Argentina\`* > https://bit.ly/Underc0deArg
*\`Underc0de Mexico\`* > https://bit.ly/Underc0deMex
*\`Underc0de Europa\`* > https://bit.ly/Underc0deEuropa
*\`Underc0de Mendoza #1\`* > https://bit.ly/Underc0deMza
*\`Underc0de Mendoza #2\`* > https://bit.ly/Underc0deMza2
*\`Underc0de Mendoza #3\`* > https://bit.ly/Underc0deMza3
*\`Underc0de San Rafael (MZA)\`* > https://bit.ly/Underc0deSanRafael

*\`Underc0de Tucumán\`* > https://bit.ly/Underc0deTuc
*\`Compra/Venta Mendoza\`* > https://bit.ly/CompraVentaMZA
*\`Underc0de Links\`* > https://bit.ly/Underc0deLinks
*\`Salidas recreativas Mendoza\`* > https://bit.ly/SalidasMZA

- *=== === Otras redes === ===*
*\`# Telegram\`* > https://t.me/underc0deoficial
*\`# Telegram Links\`* > https://t.me/underc0denews
*\`# Instagram\`* > https://instagram.com/underc0de
*\`# Twitter\`* > https://twitter.com/underc0de
*\`# Facebook\`* > https://facebook.com/underc0de
*\`# YouTube\`* > https://www.youtube.com/user/under0detv
*\`# Linkedin\`* > https://www.linkedin.com/company/underc0de
*\`# Twitch\`* > https://www.twitch.tv/underc0detv
*\`# Tiktok\`* > https://www.tiktok.com/@underc0de
*\`# Discord\`* > https://discord.gg/underc0de
*\`# Slack\`* > https://bit.ly/SlackUnderc0de
*\`# YouTube QARMY\`* > https://www.youtube.com/@QARMY-UC/
*\`# Web QARMY\`* > https://qarmy.ar

- *=== === más links útiles === ===*
*# Foro*
> https://underc0de.org/foro
*# Blog*
> https://blog.underc0de.org
*# Fundación*
> https://fundacion.underc0de.org
`;

  /**
   * Envía un mensaje a un cuadro de chat simulado.
   *
   * Esta función busca un elemento HTML div[contenteditable="true"] y
   * simula la acción de escribir y enviar un mensaje dentro de él.
   *
   * @param {string} message El texto del mensaje a enviar.
   * @throws {Error} Si no se encuentra el elemento editable.
   */
  function EnviarMensaje(message) {
    const cuadromsg = document.querySelector("#main");
    const entradatexto = cuadromsg.querySelector('div[contenteditable="true"]');
    if (!entradatexto) {
      throw new Error("No se encuentra en una conversación");
    }
    entradatexto.focus();
     document.execCommand("insertText", false, message);
    entradatexto.dispatchEvent(new Event("change", { bubbles: true }));
    setTimeout(() => {
      (cuadromsg.querySelector('[data-testid="send"]') || cuadromsg.querySelector('[data-icon="send"]')).click();
    }, 100);
  }
  /**
   * Copia un texto al portapapeles del usuario.
   *
   * @param {string} textoACopiar El texto que se desea copiar.
   * @throws {Error} Si ocurre un error al copiar el texto al portapapeles.
   */
  const copiarAlPortapapeles = () => {
    navigator.clipboard
      .writeText(textoACopiar)
      .then(() => {
        console.log("Copiado!");
      })
      .catch((error) => {
        console.error("error copiando:", error);
      });
  };
  /**
   * Establece valores a un elemento html
   * @param {element} elemento html
   */
  const normalStyle = (elemento) => {
    elemento.style.opacity = "0.3";
    elemento.style.scale = "0.8";
    elemento.style.filter = "grayscale(1)";
    elemento.style.transform = "rotate(0deg)";
  };

  /**
   * Verifica si en los últimos 10 mensajes de un chat se ha solicitado los enlaces de la comunidad.
   *
   * **Nota:** Esta función asume una estructura HTML específica para los mensajes y podría generar falsos positivos.
   *
   * @returns {boolean} `true` si se encontró la solicitud, `false` en caso contrario.
   */
  const quierenLinks = () => {
    console.log("capturando mensajes");
    const recibed = Array.from(
      document.querySelectorAll(
        'div[role="row"] > div[tabindex="-1"] .message-in .selectable-text'
      )
    ).slice(-10);
    console.log(recibed.length);
    let busca_link = false;
    for (let i = 0; i <= recibed.length; i++) {
      let each_message = recibed[i].textContent;
      console.log(`${i} `, each_message);
      if (each_message == "!links") {
        console.log("busca links");
        return true;
      }
    }
    return false;
  };

   /**
   * Verifica si en los últimos 10 mensajes de un chat se ha respondido con los enlaces de la comunidad.
   *
   * @returns {boolean} `true` si ya respondió la solicitud, `false` si falta contestar.
   */
  function allreadyResponsed() {
    console.log("=========== entro en busca_links");
    let enviados = Array.from(
      document.querySelectorAll(
        'div[role="row"] > div[tabindex="-1"] .message-out .selectable-text'
      )
    ).slice(-10);
    console.log("respuestas: ", enviados.length);
    for (let t = 0; t < enviados.length; t++) {
      if (enviados[t].textContent.indexOf("===") >= 0){
        console.log("definici\xf3n: Ya contestaste")
        return true;
      }
    }
    console.log("definici\xf3n: Debes contestestar")
    return false;
  }

  const capturarLinks = () => {
    // Verificar si hay una solicitud de enlaces en los últimos mensajes
    const needLinks = quierenLinks();
    if (needLinks) {
      // Verificar si ya se ha enviado una respuesta a esta solicitud
      const enviado = allreadyResponsed();

      if (!enviado) {
        console.log("Enviando mensaje");
        // Enviar el mensaje con los enlaces
        EnviarMensaje(textoACopiar);
      } else {
        // Detener el intervalo de verificación (si está activo)
        clearInterval(intervaloDos);
      }
    }
  };
  const createElementBanner = (id) => {
    const emojiSpan = document.createElement("span");
    emojiSpan.id = id;
    emojiSpan.dataset.emoji = "";
    emojiSpan.classList.add("b34", "emojik", "wa");
    emojiSpan.setAttribute("aria-label", "");
    emojiSpan.tabIndex = -1;
    emojiSpan.dataset.emojiIndex = "9";
    emojiSpan.style.backgroundPosition = "-32px -64px";
    emojiSpan.style.transition = " 0.5s all";
    return emojiSpan
  }
  const createEventsMouseOverOut = (element)=>{
    element.addEventListener("mouseover", () => {
      emojiSpan.style.opacity = "1";
      emojiSpan.style.scale = "0.9";
      emojiSpan.style.filter = "grayscale(0)";
      emojiSpan.style.filter = "blur(0px)";
      emojiSpan.style.transform = "rotate(360deg)";
    });

    element.addEventListener("mouseout", () => {
      normalStyle(element);
    });

  }

  // programa main
  const comenzar = () => {
    // intervalo de captura de mensajes, cada 10 segundos captura los mensajes recibidos
    intervaloDos = setInterval(capturarLinks, 10000); // Ejecuta verificarCarga cada 4 segundos

    // ubicación del pulpo en el banner
    let banner = document.querySelector('[aria-label="Nuevo chat"]').parentNode.parentNode;
    
    let emojiSpanId = "link_undercode"
    // crea el elemento
    let emojiSpan = createElementBanner(emojiSpanId)

    // aplica estilo al elemento
    normalStyle(emojiSpan);

    // lo suma al banner de whatsapp
    banner.appendChild(emojiSpan);

    createEventsMouseOverOut(emojiSpan)


    emojiSpan.addEventListener("click", () => {
      copiarAlPortapapeles();
      EnviarMensaje(textoACopiar);
    });
    emojiSpan.addEventListener("dblclick", () => {
      clearInterval(intervaloDos);
    });
  };
  const verificarCarga = async () => {
    console.log("Verificando carga pagina...");
    console.log("aguarde...");
    try {
      if (document.querySelector(".selectable-text")) {
        console.log("carga lista");
        clearInterval(intervaloId); // Detiene las verificaciones
        comenzar();
      }
    } catch (error) {
      console.error(error.message); // Maneja el error de carga
    }
  };

  const intervaloId = setInterval(verificarCarga, 4000); // Ejecuta verificarCarga cada 4 segundos
})();
