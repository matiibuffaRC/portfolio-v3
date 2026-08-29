import cover1 from "../imgs/project2-img1.webp";
import img1 from "../imgs/project2-img2.webp";
import img2 from "../imgs/project2-img3.webp";
import img3 from "../imgs/project2-img4.webp";

// import cover2 from "../imgs/project3-img1.webp";
// import img1proyect2 from "../imgs/project3-img2.webp";
// import img2proyect2 from "../imgs/project3-img3.webp";
// import img3proyect2 from "../imgs/project3-img4.webp";

import cover3 from "../imgs/project1-img1.webp";
import img1proyect3 from "../imgs/project1-img2.webp";
import img2proyect3 from "../imgs/project1-img3.webp";
import img3proyect3 from "../imgs/project1-img4.webp";

import cover4 from "../imgs/project4-img1.webp";
import img1proyect4 from "../imgs/project4-img2.webp";
import img2proyect4 from "../imgs/project4-img3.webp";
import img3proyect4 from "../imgs/project4-img4.webp";

import cover5 from "../imgs/project5-img1.webp";
import img1proyect5 from "../imgs/project5-img2.webp";
import img2proyect5 from "../imgs/project5-img3.webp";
import img3proyect5 from "../imgs/project5-img4.webp";

type ProyectState = "finished" | "demo" | "Sin terminar" | "educational";

type Proyect = {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  url: string;
  code: string;
  state: ProyectState;
};

const proyects: Proyect[] = [
  {
    id: 1,
    title: "Complejo de alojamiento Lo Nuestro",
    description:
      "Sitio web para un complejo de alojamiento en una zona turística. Presenta sus comodidades, ubicación y medios de contacto para que los visitantes puedan coordinar una reserva fácilmente por WhatsApp.",
    images: [cover1, img1, img2, img3],
    category: "Frontend",
    url: "https://lonuestro.vercel.app/",
    state: "finished",
    code: "https://github.com/matiibuffaRC/cabanias-lo-nuestro",
  },
  // {
  //     id: 2,
  //     title: "Casa Buffa",
  //     description: "E-commerce para una tienda de productos de panadería, repostería y descartables. Incluye un catálogo, carrito de compras y generador de presupuestos, con una API para enviar los pedidos por WhatsApp.",
  //     images:[cover2, img1proyect2, img2proyect2, img3proyect2],
  //     category:"Backend",
  //     url:"https://casabuffaonline.vercel.app/",
  //     state:"demo",
  //     code:"https://github.com/matiibuffaRC/Mini-E-Commerce"
  // },
  {
    id: 3,
    title: "Enerkits",
    description:
      "Sitio web para una empresa especializada en paneles solares y soluciones energéticas residenciales. Incluye un catálogo interactivo de productos y sistemas, precios y la posibilidad de iniciar una compra directamente por WhatsApp.",
    images: [cover3, img1proyect3, img2proyect3, img3proyect3],
    category: "Fullstack",
    url: "https://enerkits.vercel.app/",
    state: "finished",
    code: "https://github.com/matiibuffaRC/EnerkitsSolar",
  },
  {
    id: 4,
    title: "Gestor de gastos",
    description:
      "Aplicación de gestión de gastos desarrollada como trabajo práctico universitario con React y TypeScript. Permite organizar los gastos de cada usuario y sienta las bases para incorporar autenticación y persistencia de datos.",
    images: [cover4, img1proyect4, img2proyect4, img3proyect4],
    category: "Frontend",
    url: "https://desarrollo-trabajo-practico2.vercel.app/",
    state: "educational",
    code: "https://github.com/matiibuffaRC/desarrollo-trabajo-practico2",
  },
  {
    id: 5,
    title: "TuTurnoYa",
    description:
      "Sistema de gestión de turnos para peluquerías. Permite seleccionar sucursal, barbero y servicio, y consultar los horarios disponibles en tiempo real. También incluye un panel individual para cada barbero y un dashboard centralizado para la administración general.",
    images: [cover5, img1proyect5, img2proyect5, img3proyect5],
    category: "Backend",
    url: "",
    state: "educational",
    code: "https://github.com/matiibuffaRC/TuTurnoYa",
  },
];

export default proyects;
