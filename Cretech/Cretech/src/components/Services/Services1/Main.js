import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import Breadcumb from '../../Breadcumb/Main'
import BG from '../../../assets/images/background/cta-two-bg-1-1.jpg'
import BgImg from  "../../../assets/images/background/page-header-bg-1-1.jpg"
import Product from './Product';

const DescriptionComponent = ({ description }) => {
  const lines = description.split('\n');
  const result = [];

  lines.forEach((line, index) => {
    if (line.includes('<strong>')) {
      // If the line includes '<strong>', assume it's the start of a bold section
      const parts = line.split('<strong>');
      result.push(<p key={index}>{parts[0]}</p>);
      result.push(
        <p key={`${index}-strong`} className="bold-text">
          <strong style={{ color: 'black' }}>{parts[1]}</strong>
        </p>
      );
    } else {
      // If no '<strong>' found, just render the line as is
      result.push(<p key={index}>{line}</p>);
    }
  });

  return <div>{result}</div>;
};


const Service1 = () => {
  const product = [
    {
      name: 'Product 1',
      category: 'Category A',
      description: 'Description of Product 1',
      imageUrl: 'image-url-1.jpg',
      tags: ['Tag 1', 'Tag 2'],
      isNew: true,
      link: 'product-1-link',
    },
    {
      name: 'Product 2',
      category: 'Category B',
      description: 'Description of Product 2',
      imageUrl: 'image-url-2.jpg',
      tags: ['Tag 1', 'Tag 3'],
      isNew: false,
      link: 'product-2-link',
    },
    // Add more products here
  ];
  
  const [menuOpen, setMenuOpen] = useState(null); // Initialize with null

const toggleMenu = (index) => {
  if (menuOpen === index) {
    // Clicking the same image should close the menu
    setMenuOpen(null);
  } else {
    // Clicking a different image should open its menu
    setMenuOpen(index);
  }
};

  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imagePaths = [
    "assets/images/resources/client-1-1.svg",
    "assets/images/resources/client-1-2.svg",
    "assets/images/resources/client-1-3.svg",
    "assets/images/resources/client-1-4.svg",
    "assets/images/resources/client-1-5.svg",
    "assets/images/resources/client-1-6.svg",
    "assets/images/resources/client-1-1.png",
    "assets/images/resources/Picture1.png",
    "assets/images/resources/Picture2.png",
    "assets/images/resources/Picture3.png",
    "assets/images/resources/Picture4.png",            
    "assets/images/resources/Picture5.png",
    "assets/images/resources/Picture6.png",
    "assets/images/resources/Picture7.png",  
    "assets/images/resources/Picture8.png",
    "assets/images/resources/Picture9.png",
    "assets/images/resources/Picture10.png",
    "assets/images/resources/Picture11.png",
    "assets/images/resources/Picture12.png",
    "assets/images/resources/Picture13.png",
    "assets/images/resources/Picture14.png",
    "assets/images/resources/Picture15.png",
    "assets/images/resources/Picture16.png",
    "assets/images/resources/Picture17.png",    
    "assets/images/resources/Picture18.png",
    "assets/images/resources/Picture20.png", 
    "assets/images/resources/Picture21.png", 
    "assets/images/resources/Picture22.png", 
    "assets/images/resources/Picture23.png", 
    "assets/images/resources/Picture24.png",  
    "assets/images/resources/Picture25.png",   
    "assets/images/resources/Picture26.png",   
    "assets/images/resources/Picture27.png",   
    "assets/images/resources/Picture28.png",   
    "assets/images/resources/Picture29.png",   
    "assets/images/resources/Picture30.png",   
    "assets/images/resources/Picture31.png",   
    "assets/images/resources/Picture32.png",   
    "assets/images/resources/Picture33.png",   
    "assets/images/resources/Picture34.png",   
    "assets/images/resources/Picture35.png",   
    "assets/images/resources/Picture36.png",   
    "assets/images/resources/Picture37.png",   
    "assets/images/resources/Picture38.png",   
    "assets/images/resources/Picture39.png",   
    "assets/images/resources/Picture40.png",   
    "assets/images/resources/Picture41.png",   
    "assets/images/resources/Picture42.png",   
    "assets/images/resources/Picture43.png",   
    "assets/images/resources/Picture44.png",  
    "assets/images/resources/Picture45.png",

  ];

  const imageData = [
    {
      title: 'AUDINATE',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description:
      'AV systems have traditionally required point-to-point physical connections between devices, resulting in cumbersome amounts of specialized, single-purpose cables that define where audio and video signals can go. Changes are labor-intensive and expensive, and noise and signal degradation are constant companions as distances grow. The result is systems that are difficult to deploy and even more difficult to adapt as demands shift.\n' +
      'Dante replaces all of those connections with a computer network, effortlessly sending video or hundreds of channels of audio over slender Ethernet cables with perfect digital fidelity. All connections are now managed with software, making routes fast, readable and reliable. Because all devices share the same network, signals can be sent between any devices no matter where they are located on a site, with no change to the wiring at all. Dante systems are easily expanded, exactly as one might add a printer to a network. Just connect additional devices to any available network jack and start using it.\n' +
      'Dante is the evolution of AV systems, converging all previous connection types into one. Dante delivers vastly superior performance while making these systems easier to use, easier to expand, and less expensive to deploy.<strong>HOW IT WORKS?',
      headerImage: 'assets/images/projects/audinate.jpeg',
      catalog: 'pdf',
      
      images: [
        {
          url: 'assets/images/products/Dante-Adapter-1-2793x1400.webp', title: 'Adapter',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/products/Adapter/avio-bluetooth-crop.webp', title: 'USB-A & USB-C', discription: 'Connect any computer to a Dante network with zero software installation' },
          {
            url: 'assets/images/products/Adapter/img-20.webp', title: 'Analog Output', discription: 'Drive analog line-level products you already own from any Dante-connected system' },
          { url: 'assets/images/products/Adapter/img-19.webp', title: 'Analog Input', discription: 'Use analog audio line-level source gear you already own to feed any Dante-connected system' },
          { url: 'assets/images/products/Adapter/avio-bluetooth-crop.webp', title: 'Bluetooth', discription: 'Provide wireless connectivity to any Dante network' },
          { url: 'assets/images/products/Adapter/img-21.webp', title: 'AES3', discription: 'Use your favorite digital audio gear on a Dante network' },
          
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits', 
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/resources/Picture40.png',title: 'Light Image 1' },
          { url: 'assets/images/resources/Picture41.png', title: 'Light Image 2' },
          { url: 'assets/images/resources/Picture42.png',title: 'Light Image 3' },
          { url: 'assets/images/resources/Picture43.png', title: 'Light Image 4' },
          { url: 'assets/images/resources/Picture39.png',title: 'Light Image 5' },
          { url: 'assets/images/resources/Picture38.png', title: 'Light Image 6' },
        ],
      },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        { url: 'assets/images/products/productoverview-accessories.webp', title: 'Accessories'},
        { url: 'assets/images/products/productoverview-legacy.webp', title: 'Legacy'},
        // Add more image objects specific to this image
      ],
      
    },
    {
      title: 'ASTREA',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Astera is a German hardware, software and manufacturing specialist. Since the mid-2000s, Astera has been producing battery-powered, remote controlled LED lights. <br> Astera is a key player in the film and event lighting industries and has a reputation as one of the most innovative companies in the business.',
      headerImage: 'assets/images/projects/Astera.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/products/LeoFresnel_Main_product-800x800.png', title: 'PlutoFresnel', discription: 'Battery-powered RGBMA Fresnel, equivalent to 300W Tungsten.' },
          { url: 'assets/images/products/Pluto_from-the-front_p-800x800.png', title: 'LeoFresnel', discription: 'Battery-powered RGBMA Fresnel, equivalent to 1000W Tungsten.' },
          { url: 'assets/images/products/FP1_TitanTube_V2-800x800.png', title: 'Titan Tube', discription: 'The ultimate LED Tube for film, studio, stage and events.' },
          { url: 'assets/images/products/Helios-Tube_V2-800x800.png', title: 'Helios Tube', discription: 'Half meter tube based on the successful Titan Tube.' },
          { url: 'assets/images/products/HyperionTube_V2-800x800.png', title: 'Hyperion Tube', discription: '2 meter tube based on the successful Titan Tube.' },
          { url: 'assets/images/products/FP6_HydraPanel_SF100_FlexBase_Main-800x800.png', title: 'HydraPanel', discription: 'Small LED panel for flexible film & studio illumination.' },
          
          { url: 'assets/images/products/Lights/astera-nyx-bulb-800x800.png', title: 'NYX Bulb', discription: 'Light bulb for Filmmakers and Event professionals.' },
          { url: 'assets/images/products/Lights/PB15_PixelBrick_diagonal_stand_2_V1-768x956.png', title: 'PixelBrick', discription: 'Multi-purpose uplight with the ability to build shapes.' },
          { url: 'assets/images/products/Lights/astera-ax1-pixel-tube-800x800.png', title: 'AX1 PixelTube', discription: 'Reliable LED tube for stage and event.' },

          { url: 'assets/images/products/Lights/astera-ax2-100-pixelbar-800x800.png', title: 'AX2 PixelBar (100cm)', discription: 'LED Bar with built-in battery for stage, events and film lighting.' },
          { url: 'assets/images/products/Lights/astera-ax2-50-pixelbar-800x800.png', title: 'AX2 PixelBar (50cm)', discription: 'LED Bar with built-in battery for stage, events and film lighting.' },
          { url: 'assets/images/products/Lights/astera-ax3-lightdrop-800x800.png', title: 'AX3 LightDrop', discription: 'Battery-operated LED puck with magnetic backside.' },

          { url: 'assets/images/products/Lights/ax5-natural-size-800x800.png', title: 'AX5 TriplePAR', discription: 'The ultimate LED PAR for wired and wireless operation. ' },
          {
            url: 'assets/images/products/Lights/ax9-natural-size-800x800.png', title: 'AX9 PowerPAR', discription: 'AX5s big brother with 3 -in -1 concept.' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits', 
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/resources/Picture40.png',title: 'Light Image 1' },
          { url: 'assets/images/resources/Picture41.png', title: 'Light Image 2' },
          { url: 'assets/images/resources/Picture42.png',title: 'Light Image 3' },
          { url: 'assets/images/resources/Picture43.png', title: 'Light Image 4' },
          { url: 'assets/images/resources/Picture39.png',title: 'Light Image 5' },
          { url: 'assets/images/resources/Picture38.png', title: 'Light Image 6' },
        ],
      },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        { url: 'assets/images/products/productoverview-accessories.webp', title: 'Accessories'},
        { url: 'assets/images/products/productoverview-legacy.webp', title: 'Legacy'},
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'BOSE',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 3',
      headerImage: 'assets/images/projects/Bose.jpeg',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png',
          title: 'Lights',
          menuImages: [
            { title: 'Light Image 1' },
            { title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        
        { url: 'assets/images/products/productoverview-legacy.webp', title: 'Legacy'},
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'CLEAR COM',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 4',
      headerImage: 'assets/images/projects/clear-com.jpeg',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        
        { url: 'assets/images/products/productoverview-accessories.webp', title: 'Accessories'},
        { url: 'assets/images/products/productoverview-legacy.webp', title: 'Legacy'},
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ARG',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'Description for Image 5',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ARTH Media',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      headerImage: 'assets/images/projects/ARTH Media.jpeg',
      description: 'ARTHUR HOLM is shaping the boardroom of the future offering an inspiring product range providing superior materials with an innovative design, flexibility and customisation. Arthur Holm creates solutions to enhance communication, decision making and collaboration in reception areas and conference and meeting spaces.',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ARTHUR HOLM',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'ARTHUR HOLM is shaping the boardroom of the future offering an inspiring product range providing superior materials with an innovative design, flexibility and customisation. Arthur Holm creates solutions to enhance communication, decision making and collaboration in reception areas and conference and meeting spaces.',
      headerImage: 'assets/images/projects/Arthur-holm.jpeg',
      catalog: 'assets/images/products/product_catalogs/Book-AH-23.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Absen',
      origin: 'German',
      category: 'Hardware & Software',
      established: '2001',
      description: "Established in 2001, Absen is the world's leading LED display brand, renowned for its high-quality products, global presence and full-service capabilities. From corporate lobbies and retail stores to outdoor advertising and live events, Absen has delivered more than 50,000 installations in over 130 countries.\n" +
        " Absen's displays cover a wide range of applications including Commercial Display, Data Visualization, Rental & Staging and DOOH \n" +
        " With the planned construction of 230,000m², Absen Huizhou Intelligent Manufacturing Base, located in Dongjiang High-tech Industrial Park, takes an area of 108,472m² with 93,000m² completed so far.",
      headerImage: 'assets/images/projects/absen.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'AVD',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: 'AVID specialises in audio and video; specifically, digital non-linear editing (NLE) systems, video editing software, audio editing software, music notation software, management and distribution services.',
      headerImage: 'assets/images/projects/purple-avid.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ALEN & HEALTH',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Allen & Heath was in the vanguard of the first wave of great british mixer companies, starting life at the heart of london's singing music scene in 1969 & is now a leading designer and manufacturer of mixing desks for live sound, permanent installation, DJs, broadcast and recording studios",
      headerImage: 'assets/images/projects/digital-mixer.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Ampetronic',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Ampetronic are world leaders in the design and manufacture of audio induction loop systems, also known as hearing loop systems or T loops an established technology that helps with hearing loss to increase the clarity of amplified sound in any busy environment by working in conjunction with hearing aids and cochlear implants. Our products are designed and built to the highest standards to provide complete peace of mind and the lowest cost of ownership of any assistive listening technology.",
      headerImage: 'assets/images/projects/Ampetronic.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Analog Way',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Analog Way is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
      "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Analog-way.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        { url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
        menuImages: [
          // Add new images specific to 'Lights' here
          { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
          { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
        ],
      },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers'},
        
        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ARHT Media',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "ARHT Media is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/ARTH-Media.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'BARCO',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BARCO is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Barco.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Bright Sign',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Bright Sign is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Bright-sign.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Cloud',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "CLoud is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/cloud.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Chauvet',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Chauvet is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/chauvet-pro.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'DSAN',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BARCO is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/DSAN.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'DENAN',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BARCO is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Denon-professional.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'EPSON',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "EPSON is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Epson.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'BENQ',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BENQ is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/BENQ.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'FURMAN',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "FURMAN is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/FURNAN.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'HUDDLY',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Huddly is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/HUDDLY.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'KON MAYER',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BENQ is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Konig-7meyer.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'NEUTRIK',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "NEUTRIK is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Neutrik.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'BOSCH',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "BOSCH is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/BOSCH.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'NEAT.',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "NEAT. is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/neat.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'TOA',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "TOA is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/TOA.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'LUMINEX',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "LUMINEX is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/LUNINEX.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'LG',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "LG is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/LG.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'L-ACOUSTIC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "L-ACOUSTIC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/L-Acoustic.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'QSC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "QSC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/QSC.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'SHURE',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "SHURE is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/SHURE.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'TELEVIC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "TELEVIC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/TELEVIC.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'VDC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "VDC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/VDC.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'PEERLESS',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "PEERLESS is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/peerless-AV.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'PRIMACOUSTIC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "PRIMACOUSTIC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/PRIMACOUSTIC.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'RATIONAL ACOUSTIC',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "RATIONAL ACOUSTIC is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/RAtional-Acoustic.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'RADIAL',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "RADIAL is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Radial-engineering.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'ROLAND',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "ROLAND is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Roland.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'WILLIAM SOUNDS',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "WILLIAM SOUNDS is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Williamssound.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'JBL',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "JBL is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/JBL.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'SAMSUNG',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "SAMSUNG is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/samsung.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'lifesize',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Life Size is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Lifesize.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Polycom',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Polycom is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Polycom.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'Logitech',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "Logitech is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Logitech.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'CRESTRON',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "CRESTRON is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/Crestron.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'EXTRON',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "EXTRON is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/EXTRON.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'YAMAHA',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "YAMAHA is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/yamaha.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'OPTOCORE',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "OPTOCORE is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/optocore.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    {
      title: 'PROMETHEAN',
      origin: 'German',
      category: 'Hardware & Software',
      established: 'Mid 2000s',
      description: "PROMETHEAN is a world-leading designer and manufacturer of innovative equipment dedicated to the professional audiovisual industry.\n" +
        "Analog Way has engineered a wide range of cutting-edge image processing solutions and have developed unique expertise in delivering uncompromising video presentation experiences to high-end customers in the Rental & Staging, Corporate, Broadcast, Institutional, Higher Education and House of Worship markets.",
      headerImage: 'assets/images/projects/promethean.jpeg',
      catalog: 'assets/images/products/product_catalogs/Astera-Event-Catalog.pdf',
      images: [
        {
          url: 'assets/images/products/productoverview-lights.png', title: 'Lights',
          menuImages: [
            // Add new images specific to 'Lights' here
            { url: 'assets/images/lights/image1.jpg', title: 'Light Image 1' },
            { url: 'assets/images/lights/image2.jpg', title: 'Light Image 2' },
          ],
        },
        { url: 'assets/images/products/productoverview-kits.webp', title: 'Kits' },
        { url: 'assets/images/products/productoverview-controllers.webp', title: 'Controllers' },

        // Add more image objects specific to this image
      ],
    },
    
    // Add more data objects for each image
  ];
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setShow(true);
  };
   

  const selectedImageData = imageData[selectedImageIndex];

  const [itemBtn, setItemBtn] = useState(true);
  const [show, setShow] = useState (true);
  const [menuImage, setMenuImages] = useState(false);
  const logoOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    dots: false,
    margin: 30,
    items: 2,
    smartSpeed: 700,
    responsive: {
      0: {
        margin: 30,
        items: 2
      },
      375: {
        margin: 30,
        items: 2
      },
      575: {
        margin: 30,
        items: 3
      },
      767: {
        margin: 50,
        items: 4
      },
      991: {
        margin: 40,
        items: 5
      },
      1199: {
        margin: 80,
        items: 5
      }
    }
  }
  const serviceOptions = {
    loop: false,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
    margin: 0,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 1,
        margin: 30
      },
      1200: {
        items: 2,
        margin: 30
      },
      1700: {
        items: 3,
        margin: 30
      }
    }
  }
  
  return (
    <>
      <Breadcumb Title="Audio - Video" Breadcumb="Audio - Video"  backgroundImage={BgImg} />
      <section className="section-padding--top section-padding--bottom about-one">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-6">
              <div className="about-one__image">
                <img src="assets/images/resources/about-1-1.png" className="wow fadeInUp"
                  data-wow-duration="1500ms" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__content">
                <div className="section-title ">
                  <p className="section-title__text">About Company</p>
                  <h2 className="section-title__title">Creating Optimal Experiences to Display a Better World</h2>
                </div>
                <div className="about-one__text">
                Burraq, with its reputable brands, skilled team, and solid technical foundation, 
                has emerged as a market leader in its niche industry. Renowned consultants, system integrators, 
                and end-users trust Burraq, which has successfully assisted top-tier clients with seamless integration 
                and deployment.
                </div>
                <ul className="about-one__list">
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Engaging audio and video: Delivering high-quality AV experiences from broadroom to large-scale events.
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i>
                    Indoor and outdoor capabilities: Excelling in all environments, we create memorable experiences that endure.
                  </li>
                  {/* <li>
                    <i className="fa fa-check-circle"></i>
                    Velit esse cillum dolore eu fugiat nulla pariatur.
                  </li> */}
                </ul>
                <Link to="/about" className="thm-btn about-one__btn"><span>Learn More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-carousel client-carousel--two">
        <div className="container">
          <OwlCarousel className="thm-owl__carousel" {...logoOptions}>
          {imagePaths.map((imagePath, index) => (
          <div className="item" key={index}>
            <img
              onClick={() => handleImageClick(index)}
              src={imagePath}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
            

          </OwlCarousel>
        </div>
      </div>
      
      
      {show && ( 
        <section className="project-details section-padding--bottom">
				<div className="container">
  <div className="project-details__image">
    <img src={selectedImageData.headerImage} alt="" />
  </div>
  <div className="project-details__info">
    <div className="project-details__info__item">
      <h4 className="project-details__info__title">Origin:</h4>
      <p className="project-details__info__text">{selectedImageData.origin}</p>
    </div>
    <div className="project-details__info__item">
      <h4 className="project-details__info__title">Category:</h4>
      <p className="project-details__info__text">
        <Link to="#">{selectedImageData.category}</Link>
      </p>
    </div>
    <div className="project-details__info__item">
      <h4 className="project-details__info__title">Established:</h4>
      <p className="project-details__info__text">{selectedImageData.established}</p>
    </div>
    <div className="project-details__info__item">
      <div className="project-details__info__social">
      <a href={selectedImageData.catalog} download>
  <i className="fas fa-download"></i>
</a>

        <Link to="#">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
    </div>
  </div>

  <div className="product-details">
    <h3 className="project-details__title">Manufacturing Specialist</h3>
    <DescriptionComponent description={selectedImageData.description} />


    <div className="project-details">
      {itemBtn && (
        <div className="image-bar">
          {selectedImageData.images.map((image, index) => (
            <div key={index} className="image-item" onClick={() => toggleMenu(index)}>
              <img
                className="image-item"
                src={image.url}
                alt={`Image ${index + 1}`}
              />
              <p style={{ width: '100px', textAlign: 'center' }}>{image.title}</p>
            </div>
          ))}
        </div>
      )}
      <div className="r filter-view filter-view--visible" data-prods-view=""></div>
      {menuOpen !== null && (
        <div className="image-menu">
          <div className="image-menu-row">
            {selectedImageData.images[menuOpen].menuImages.slice(0, 3).map((menuImage, index) => (
              <div key={index} className="image-menu-item">
                <img
                  style={{ width: '150px', display: 'block', margin: '0 auto' }}
                  src={menuImage.url}
                  alt={`Image ${index + 1}`}
                />
                <h5>{menuImage.title}</h5>
                <p>{menuImage.discription}</p>
              </div>
            ))}
          </div>
          <div className="image-menu-row">
            {selectedImageData.images[menuOpen].menuImages.slice(3, 6).map((menuImage, index) => (
              <div key={index} className="image-menu-item">
                <img
                  style={{ width: '150px', display: 'block', margin: '0 auto' }}
                  src={menuImage.url}
                  alt={`Image ${index + 4}`}
                />
                <h5>{menuImage.title}</h5>
                <p>{menuImage.discription}</p>
              </div>
            ))}
                    </div>
                    <div className="image-menu-row">
                      {selectedImageData.images[menuOpen].menuImages.slice(6, 9).map((menuImage, index) => (
                        <div key={index} className="image-menu-item">
                          <img
                            style={{ width: '150px', display: 'block', margin: '0 auto' }}
                            src={menuImage.url}
                            alt={`Image ${index + 4}`}
                          />
                          <h5>{menuImage.title}</h5>
                          <p>{menuImage.discription}</p>
                        </div>
                      ))}
                    </div>
                    <div className="image-menu-row">
                      {selectedImageData.images[menuOpen].menuImages.slice(9, 11).map((menuImage, index) => (
                        <div key={index} className="image-menu-item">
                          <img
                            style={{ width: '150px', display: 'block', margin: '0 auto' }}
                            src={menuImage.url}
                            alt={`Image ${index + 4}`}
                          />
                          <h5>{menuImage.title}</h5>
                          <p>{menuImage.discription}</p>
                        </div>
                      ))}
                    </div>
        </div>
      )}
    </div>
  </div>
</div>

			</section>
)}  
      <section className="black-bg section-padding-lg--top section-padding-lg--bottom cta-two">
        <div className="cta-two__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%"
          style={{ backgroundImage: `url(${BG})` }}></div>
        <div className="container">
          <div className="cta-two__inner">
            <h3 className="cta-two__title">Better IT Solutions And Services
              At Your <span>Fingertips</span></h3>
            <Link to="/contact" className="thm-btn cta-two__btn"><span>LEarn More</span></Link>
          </div>
        </div>
      </section>

      <section className="section-padding--bottom section-padding--top service-one">
        <div className="container-fluid">

          <OwlCarousel className="thm-owl__carousel service-one__carousel" {...serviceOptions}>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-1.jpg" alt="" />
                  {/* <div className="service-card-one__logo">G</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Audio</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-2.jpg" alt="" />
                  {/* <div className="service-card-one__logo">B</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Video</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-3.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">ILightning</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-4.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Conference, Boardroom and Event Halls</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-5.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Cables and Infrastructure</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
            <div className="item">
              <div className="service-card-one gray-bg">
                <div className="service-card-one__image">
                  <img src="assets/images/services/service-1-6.jpg" alt="" />
                  {/* <div className="service-card-one__logo">T</div> */}
                </div>
                <div className="service-card-one__content">
                  <h3 className="service-card-one__title"><Link to="cyber-security">Acoustics</Link></h3>
                  <p className="service-card-one__text">Lorem Ipsum is dummy text of the new design printng
                    and type setting Ipsum has been the is industrys.</p>

                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>

      <section className="section-padding--bottom">
        <div className="container">
          <div className="section-title text-center">
            <p className="section-title__text">Company Benefits</p>
            <h2 className="section-title__title">We Provide Comprehensive Integrated & Scalable Audio and Video Solutions <br />in Collabration with Top Brands</h2>

          </div>
          <div className="row gutter-y-30">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/service-01">Quality Service</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-smart-tv"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/team">Expert Team</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-link"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/contact">Excellent Support</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-technical-support"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service-card-two gray-bg">
                <h3 className="service-card-two__title"><Link to="/about">Management</Link></h3>

                <p className="service-card-two__text">Sed perspe unde omnis natus sit voluptatem acc doloremue
                </p>
                <div className="service-card-two__icon">
                  <i className="icon-cctv"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner text-center wow fadeInUp" data-wow-duration="1500ms">
            <div className="cta-one__circle"></div>
            <div className="section-title ">
              <p className="section-title__text">Need Any Technology Solution</p>
              <h2 className="section-title__title section-title__title--light">Let’s Work Togather on Project</h2>
            </div>
            <Link to="/contact" className="thm-btn thm-btn--light cta-one__btn"><span>Start Now</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service1