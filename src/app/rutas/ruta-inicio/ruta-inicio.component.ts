import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {
  arregloVideos = [
    {
      nombre: "YOUR NAME - 'Sparkle' [Sub español / english]",
      creador: "AISA",
      cantidadVistas: "3.498.451",
      fecha: "8 meses",
      linkMiniatura: "https://i.ytimg.com/vi/jFu4iOw4pQU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLArHF8iQovZawqbFk7rUxGJMy2fhA",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLRfzGoxoAHoMPBRqCeS0vNon0v6qyVPpjTpohDN9w=s48-c-k-c0x00ffffff-no-rj",
      tiempo:"5:27"
    },
    {
      nombre: "the best of Kate Bishop & Yelena Belova (Hawkeye)",
      creador: "ALCHEMY",
      cantidadVistas: "2,8 M",
      fecha: "12 días",
      linkMiniatura: "https://i.ytimg.com/vi/eeoEv03xWlE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBgP00ZjFVWQGG5Q3zUL-0cjFWf2Q",
      linkFotoPerfil: "https://yt3.ggpht.com/o3xYixBAtY1f78pW9MKWLcO1bfr6CZEdDCXIN7C-dyL9a4k5Uc7dwAqPLO-vq7DtvVZUx6LdLA=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"5:06"
    },
    {
      nombre: "Comic - Comic (Full Album)",
      creador: "Francisco García M.",
      cantidadVistas: "292 M",
      fecha: "2 años",
      linkMiniatura: "https://i.ytimg.com/vi/a2LJtf6-kVI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASiWRNhF83ADEzRWz25DRjQ1bSVg",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSUI6ldTU8lZmlF3fZV7mxOsw_4UkcM-4q6Obkn0w=s88-c-k-c0x00ffffff-no-rj",
      tiempo:"45:25"
    },
    {
      nombre: "Jujutsu Kaisen 0: PELÍCULA | Tráiler Oficial (Sub. Español)",
      creador: "Runny Anime",
      cantidadVistas: "261.991",
      fecha: "3 días",
      linkMiniatura: "https://i.ytimg.com/vi/r0EJbhYz6-0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBoTOwYr_33b82Y8w22ASZmo20TQQ",
      linkFotoPerfil: "https://yt3.ggpht.com/RyCnflFjcmUNUSa4G67krS6oPRyScGtu-O8_qCDHNG2YNuMFGJG8C87_MCTEODLTtXUIWxlALQ=s88-c-k-c0x00ffffff-no-rj",
      tiempo:"2:34"
    },
    {
      nombre: "¿EL ARMA MAS ODIADA DE COD WARZONE? RECORTADAS DUALES OP",
      creador: "Soki",
      cantidadVistas: "39.927",
      fecha: "6 horas",
      linkMiniatura: "https://i.ytimg.com/vi/Zv4byI3HDnM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtL-dlRvwM_0FAlFmaliOeCd75RQ",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSI0wIL46wujkMG2KXBh1eMTTJnZKJNfMAt_wTtzQ=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"12:43"
    },
    {
      nombre: "my name is giovanni giorgio",
      creador: "Re Ku",
      cantidadVistas: "883.754",
      fecha: "1 año",
      linkMiniatura: "https://i.ytimg.com/vi/lRBQ9-acs5o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCrp6EzNkmrNhxO1i3-xOiYuOUbPg",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLSaYr7sCgXXC1zdzaAmo1oGi8UHedhyASlFQAeb-w=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"0:07"
    },
    {
      nombre: "Compilado bloopers SupraPixel 2021",
      creador: "Suprapixel",
      cantidadVistas: "53.894",
      fecha: "4 días",
      linkMiniatura: "https://i.ytimg.com/vi/jPe9y3njf-Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQSTmQ_mOPFZ7v-QXERxNszmnAaw",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLTOnYYtCe2KwkKQqzUkuho0sr4M7-Ow7bKqOxeG1g=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"11:49"
    },
    {
      nombre: "Nuevas GPUs? Veamos la presentación de NVIDIA en CES 2022!!",
      creador: "Micahel Quesada",
      cantidadVistas: "522",
      fecha: "21 minutos",
      linkMiniatura: "https://i.ytimg.com/vi/tZgNxrltkQY/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDyU3hsLdSA5JSHQMUc3-UDl8hnuw",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLTOnYYtCe2KwkKQqzUkuho0sr4M7-Ow7bKqOxeG1g=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"1:35:16"
    },
    {
      nombre: "Expectations not met... We're testing the MSI Z690 Godlike",
      creador: "der8auer EN",
      cantidadVistas: "130.783",
      fecha: "2 semanas",
      linkMiniatura: "https://i.ytimg.com/vi/ntO_d426L0I/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBmK0HCAvcclBgziMGPA1lnMDp4ag",
      linkFotoPerfil: "https://yt3.ggpht.com/fQFzqHX9cPKKDqwTTKOkZcjS1nVPENtSOWIijJOuQ2Nyu17q6ivDVt4SdOrp-NinOepDD0ET7w=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"22:55"
    },
    {
      nombre: "the judge - twenty one pilots | ariel ukulele cover",
      creador: "aryy",
      cantidadVistas: "188.319",
      fecha: "1 año",
      linkMiniatura: "https://i.ytimg.com/vi/dMp2xsRhOks/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAjUJemFLsjFVPwtIdYHmhW8k4EVw",
      linkFotoPerfil: "https://yt3.ggpht.com/0N9Y0-KYAqy8KznSlKI5eZY6o_BSagMTDuSWxml1lcdwZtAn-QHkZIwrz86u_clq9mbM2MLmnQ=s88-c-k-c0x00ffffff-no-rj",
      tiempo:"4:17"
    },
    {
      nombre: "ME APARECIO UN FANTASMA 😮",
      creador: "ZilverK",
      cantidadVistas: "244.462",
      fecha: "6 días",
      linkMiniatura: "https://i.ytimg.com/vi/z9esXilEql0/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB0lzICdTTkgnqZSwVYJDaSXejcIA",
      linkFotoPerfil: "https://yt3.ggpht.com/Qz0J4TyKyUYy656cBqCUL6dUZJI6wfd4cG8bNoMZ6f5DH5wkqojgdsevCCe8zlTA961HgG17AA=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"5:41"
    }, {
      nombre: "Gráficos ULTRA REALISTAS en CONSOLA!!",
      creador: "SupraPixel",
      cantidadVistas: "81.926",
      fecha: "12 días",
      linkMiniatura: "https://i.ytimg.com/vi/tV3-G-cdPik/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAgQmpzseZ7YZlbluI3-RwMp2bCBA",
      linkFotoPerfil: "https://yt3.ggpht.com/ytc/AKedOLTOnYYtCe2KwkKQqzUkuho0sr4M7-Ow7bKqOxeG1g=s68-c-k-c0x00ffffff-no-rj",
      tiempo:"16:44"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
