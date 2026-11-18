import { ProductData } from "./productData";


export const PRODUCTS_LIST: ProductData[] = [
  // ==========================================
  // 1 إلى 15: الأزياء والملابس والموضة
  // ==========================================
  {
    id: 1,
    title: "Woman Shawl",
    description: "Material: Polyester Blend\nColour: Multicolour\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    price: 190,
    quantity: 225,
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 2,
    title: "Woman Winter Scarf",
    description: "Material: Cashmere Feel\nColour: Beige\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
    price: 149,
    quantity: 220,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 3,
    title: "Classic Elegant Shawl",
    description: "Material: Cotton Blend\nColour: Red Pattern\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    price: 149,
    quantity: 220,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 4,
    title: "Casual Cotton Blouse",
    description: "Material: 100% Cotton\nColour: Blue\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    price: 250,
    quantity: 150,
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 5,
    title: "Basic White T-Shirt",
    description: "Material: Cotton\nColour: White\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    price: 199,
    quantity: 300,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 6,
    title: "Black Oversized Hoodie",
    description: "Material: Fleece\nColour: Black\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    price: 599,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 7,
    title: "Classic Denim Jacket",
    description: "Material: Denim\nColour: Blue\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
    price: 799,
    quantity: 90,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 8,
    title: "Summer Floral Dress",
    description: "Material: Chiffon\nColour: Multi\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    price: 650,
    quantity: 75,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 9,
    title: "Formal Men Suit",
    description: "Material: Wool Blend\nColour: Navy Blue\nDepartment: Men",
    imageCover: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    price: 2499,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 10,
    title: "Leather Casual Shoes",
    description: "Material: Genuine Leather\nColour: Brown\nDepartment: Men",
    imageCover: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    price: 1200,
    quantity: 85,
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 11,
    title: "Running Sport Sneakers",
    description: "Material: Mesh & Rubber\nColour: Grey/Orange\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    price: 1450,
    quantity: 130,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 12,
    title: "Woolen Winter Beanie",
    description: "Material: Wool\nColour: Charcoal Grey\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    price: 120,
    quantity: 210,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 13,
    title: "Leather Handbag",
    description: "Material: PU Leather\nColour: Black\nDepartment: Women",
    imageCover: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    price: 890,
    quantity: 95,
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 14,
    title: "Stylish Sunglasses",
    description: "UV400 Protection\nColour: Gold/Black\nDepartment: Unisex",
    imageCover: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    price: 350,
    quantity: 160,
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570222094114-d074f7e1e6e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 15,
    title: "Casual Cotton Chinos",
    description: "Material: Stretch Cotton\nColour: Khaki\nDepartment: Men",
    imageCover: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
    price: 550,
    quantity: 140,
    images: [
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },

  // ==========================================
  // 16 إلى 45: الهواتف الذكية (Smartphones)
  // ==========================================
  {
    id: 16,
    title: "iPhone 15 Pro Max 256GB Natural Titanium",
    description: "Display: 6.7-inch Super Retina XDR\nChip: A17 Pro chip\nStorage: 256GB",
    imageCover: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    price: 58999,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1695048065583-653457a4e5a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 17,
    title: "Samsung Galaxy S24 Ultra 5G 512GB Grey",
    description: "Display: 6.8-inch Dynamic AMOLED 2X\nCamera: 200MP Main Camera\nRAM: 12GB",
    imageCover: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    price: 54499,
    quantity: 60,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 18,
    title: "Xiaomi Redmi Note 13 Pro+ 512GB Black",
    description: "Display: 6.67 AMOLED 120Hz\nCamera: 200MP OIS\nBattery: 5000 mAh",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 18499,
    quantity: 85,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 19,
    title: "Google Pixel 8 Pro 128GB Bay",
    description: "Display: 6.7-inch Super Actua\nProcessor: Google Tensor G3\nRAM: 12GB",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 36999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 20,
    title: "OnePlus 12 5G 512GB Emerald Green",
    description: "Processor: Snapdragon 8 Gen 3\nBattery: 5400 mAh\nFast Charging: 100W",
    imageCover: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    price: 41999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 21,
    title: "iPhone 14 128GB Midnight",
    description: "Display: 6.1-inch Super Retina XDR\nChip: A15 Bionic chip\nStorage: 128GB",
    imageCover: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
    price: 34999,
    quantity: 55,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 22,
    title: "Samsung Galaxy A55 5G 256GB Awesome Iceblue",
    description: "Display: 6.6 Super AMOLED\nCamera: 50MP Triple Camera\nBattery: 5000mAh",
    imageCover: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    price: 18999,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 23,
    title: "Huawei Nova 12 SE 256GB Green",
    description: "Camera: 108MP High-Res Portrait\nCharging: 66W Huawei SuperCharge",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 13999,
    quantity: 65,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 24,
    title: "Realme C67 256GB Sunny Oasis",
    description: "Camera: 108MP 3x In-Sensor Zoom\nProcessor: Snapdragon 685",
    imageCover: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
    price: 8999,
    quantity: 130,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 25,
    title: "Oppo Reno 11 5G 256GB Wave Green",
    description: "Camera: 32MP Telephoto Portrait Camera\nFast Charge: 67W SUPERVOOC",
    imageCover: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    price: 17499,
    quantity: 75,
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 26,
    title: "Honor 90 5G 256GB Diamond Silver",
    description: "Display: 200MP Ultra Clear Camera\nCurved AMOLED Eye Comfort Display",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 19999,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 27,
    title: "Infinix Note 40 Pro 256GB Vintage Green",
    description: "Charging: 70W All-Round FastCharge 2.0\nWireless MagCharge",
    imageCover: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    price: 12499,
    quantity: 95,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 28,
    title: "Vivo V30 5G 256GB Noble Black",
    description: "Camera: Aura Light Portrait System\nDisplay: 120Hz 3D Curved Screen",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 20999,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 29,
    title: "Samsung Galaxy Z Flip 5 256GB Mint",
    description: "Design: Foldable Flex Window\nProcessor: Snapdragon 8 Gen 2 for Galaxy",
    imageCover: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    price: 39999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 30,
    title: "iPhone 13 128GB Starlight",
    description: "Display: 6.1-inch Super Retina XDR\nDual-camera system",
    imageCover: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    price: 29999,
    quantity: 60,
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 31,
    title: "Samsung Galaxy A15 128GB Blue Black",
    description: "Display: 6.5 Super AMOLED Display\nBattery: 5000mAh",
    imageCover: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    price: 7499,
    quantity: 150,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 32,
    title: "Xiaomi Poco X6 Pro 512GB Yellow",
    description: "Processor: Dimensity 8300-Ultra\nDisplay: 1.5K Flow AMOLED",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 17999,
    quantity: 70,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 33,
    title: "Motorola Edge 40 Neo 256GB Caneel Bay",
    description: "Protection: IP68 Underwater Protection\nDisplay: 144Hz Curved pOLED",
    imageCover: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    price: 16499,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 34,
    title: "Realme Note 50 128GB Sky Blue",
    description: "Battery: 5000mAh Massive Battery\nDesign: Ultra Slim 7.99mm",
    imageCover: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
    price: 4999,
    quantity: 200,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 35,
    title: "Tecno Spark 20 Pro 256GB Moonlit Black",
    description: "Camera: 108MP Super Night Camera\nRAM: 16GB (8+8 Extended)",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 7999,
    quantity: 120,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 36,
    title: "iPhone 15 128GB Pink",
    description: "Display: 6.1-inch Super Retina XDR with Dynamic Island\nCamera: 48MP Main",
    imageCover: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    price: 43999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1695048065583-653457a4e5a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 37,
    title: "Samsung Galaxy A35 5G 128GB Awesome Navy",
    description: "Display: 6.6 FHD+ Super AMOLED 120Hz\nCamera: 50MP with OIS",
    imageCover: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    price: 14499,
    quantity: 90,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 38,
    title: "Xiaomi 14 512GB Jade Green",
    description: "Camera: Leica Summilux optical lens\nProcessor: Snapdragon 8 Gen 3",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 44999,
    quantity: 35,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 39,
    title: "Oppo A60 256GB Ripple Blue",
    description: "Durability: Military-grade Shock Resistance\nCharge: 45W SUPERVOOC",
    imageCover: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
    price: 8499,
    quantity: 110,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 40,
    title: "Honor X9b 5G 256GB Sunrise Orange",
    description: "Display: Ultra-Bounce Anti-Drop Display\nBattery: 5800mAh",
    imageCover: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    price: 15999,
    quantity: 65,
    images: [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 41,
    title: "Huawei Pura 70 Pro 512GB White",
    description: "Camera: Ultra Lighting XMAGE Camera\nCharging: 100W SuperCharge",
    imageCover: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
    price: 42999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 42,
    title: "Nothing Phone (2) 256GB Dark Grey",
    description: "Interface: Unique Glyph Interface\nProcessor: Snapdragon 8+ Gen 1",
    imageCover: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    price: 29999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 43,
    title: "Sony Xperia 1 VI 256GB Black",
    description: "Display: 4K HDR OLED 120Hz\nCamera: Powered by Alpha cameras",
    imageCover: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    price: 49999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 44,
    title: "Asus ROG Phone 8 Pro 512GB Phantom Black",
    description: "Processor: Snapdragon 8 Gen 3\nRAM: 16GB Gaming Phone",
    imageCover: "https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80",
    price: 51999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 45,
    title: "Infinix Hot 40i 128GB Palm Blue",
    description: "Display: 90Hz Punch-Hole Screen\nBattery: 5000mAh",
    imageCover: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80",
    price: 5499,
    quantity: 160,
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },

  // ==========================================
  // 46 إلى 70: أجهزة اللابتوب (Laptops)
  // ==========================================
  {
    id: 46,
    title: "Apple MacBook Pro 14 M3 Pro 18GB 512GB Space Black",
    description: "Processor: Apple M3 Pro chip\nMemory: 18GB unified memory",
    imageCover: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 94999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 47,
    title: "ASUS ROG Strix G16 Gaming Laptop i7 RTX 4060",
    description: "Screen: 16 inch FHD+ 165Hz\nRAM: 16GB DDR5\nStorage: 512GB SSD",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 64999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 48,
    title: "Lenovo Legion Pro 5 i7-14700HX RTX 4070 32GB RAM",
    description: "Display: 16 WQXGA IPS 240Hz\nStorage: 1TB SSD NVMe",
    imageCover: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    price: 79999,
    quantity: 18,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 49,
    title: "HP Victus 15 Gaming Laptop i5-12450H RTX 3050",
    description: "RAM: 16GB RAM\nStorage: 512GB SSD\nScreen: 15.6 FHD 144Hz",
    imageCover: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    price: 32999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 50,
    title: "Dell Inspiron 3520 Laptop Intel Core i7-1255U",
    description: "RAM: 16GB\nStorage: 512GB SSD\nScreen: 15.6 inch FHD 120Hz",
    imageCover: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    price: 25999,
    quantity: 35,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 51,
    title: "Apple MacBook Air 13 M2 8GB 256GB Midnight",
    description: "Processor: Apple M2 chip\nBattery Life: Up to 18 hours",
    imageCover: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
    price: 48999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 52,
    title: "MSI Thin GF63 12UCX i5-12450H RTX 2050",
    description: "RAM: 8GB DDR4\nStorage: 512GB NVMe SSD",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 27999,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 53,
    title: "Acer Nitro 5 AN515-58 i7-12700H RTX 4060",
    description: "Screen: 15.6 FHD 144Hz IPS\nRAM: 16GB\nStorage: 512GB SSD",
    imageCover: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    price: 49999,
    quantity: 22,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 54,
    title: "Huawei MateBook D 15 i5-1155G7 8GB 256GB",
    description: "Design: Metallic Body\nDisplay: 15.6 FullView Eye Comfort Display",
    imageCover: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    price: 21999,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 55,
    title: "Microsoft Surface Laptop 5 i5 8GB 512GB Platinum",
    description: "Display: 13.5 PixelSense Touchscreen\nBattery Life: Up to 18 hours",
    imageCover: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    price: 45999,
    quantity: 15,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 56,
    title: "Lenovo IdeaPad Slim 3 i3-1315U 8GB 256GB SSD",
    description: "Screen: 15.6 FHD Display\nOperating System: Windows 11",
    imageCover: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    price: 17999,
    quantity: 60,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 57,
    title: "HP Laptop 15s-fq5013ne i7-1255U 8GB 512GB",
    description: "Screen: 15.6 FHD Anti-glare\nLightweight and portable design",
    imageCover: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    price: 28999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 58,
    title: "ASUS Vivobook 16 OLED i5-13500H 16GB 512GB",
    description: "Display: 16 3.2K OLED 120Hz Display\nBacklit Keyboard",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 38999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 59,
    title: "Dell Latitude 5440 i5-1335U 16GB 512GB SSD",
    description: "Business Laptop\nSecurity: Fingerprint Reader & IR Camera",
    imageCover: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    price: 36999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 60,
    title: "Gigabyte G5 KF Gaming Laptop i5-12500H RTX 4060",
    description: "Screen: 15.6 FHD 144Hz\nRAM: 16GB\nStorage: 512GB SSD",
    imageCover: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    price: 42999,
    quantity: 28,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 61,
    title: "Apple MacBook Pro 16 M3 Max 36GB 1TB Space Black",
    description: "Processor: Apple M3 Max chip\nDisplay: 16.2 Liquid Retina XDR",
    imageCover: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 139999,
    quantity: 10,
    images: [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 62,
    title: "MSI Cyborg 15 A12VE i7-12650H RTX 4050",
    description: "Design: Translucent cyberpunk aesthetic chassis\nRAM: 16GB",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 44999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 63,
    title: "Acer Aspire 3 A315-510P Intel i3-N305 8GB 256GB",
    description: "Screen: 15.6 FHD Display\nLightweight everyday laptop",
    imageCover: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    price: 14999,
    quantity: 70,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 64,
    title: "Lenovo Yoga Pro 7 Ultra 7 16GB 1TB SSD Storm Grey",
    description: "Display: 14.5 3K PureSight Pro Display\nProcessor: AMD Ryzen 7",
    imageCover: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    price: 52999,
    quantity: 18,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 65,
    title: "ASUS TUF Gaming A15 Ryzen 7 7735HS RTX 4060",
    description: "Screen: 15.6 FHD 144Hz\nRAM: 16GB DDR5\nStorage: 512GB SSD",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 47999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 66,
    title: "HP Omen 16-wf0003ne i7-13700HX RTX 4060",
    description: "Display: 16.1 QHD 240Hz\nRAM: 16GB\nStorage: 1TB SSD",
    imageCover: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    price: 69999,
    quantity: 15,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 67,
    title: "Huawei MateBook 14 AMD Ryzen 5 16GB 512GB",
    description: "Display: 2K FullView Touch Display\nFingerprint Power Button",
    imageCover: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80",
    price: 29999,
    quantity: 35,
    images: [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 68,
    title: "Dell G15 5530 Gaming Laptop i7-13650HX RTX 4060",
    description: "Screen: 15.6 FHD 165Hz\nRAM: 16GB\nStorage: 512GB SSD",
    imageCover: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    price: 53999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 69,
    title: "Lenovo ThinkPad E14 Gen 5 i5-1335U 8GB 512GB",
    description: "Durable Business Laptop\nSpill-resistant keyboard",
    imageCover: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    price: 31999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 70,
    title: "Apple MacBook Air 15 M3 8GB 512GB Starlight",
    description: "Display: 15.3 Liquid Retina Display\nSuper thin and light",
    imageCover: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
    price: 64999,
    quantity: 18,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },

  // ==========================================
  // 71 إلى 100: التلفزيونات والشاشات الذكية (Smart TVs)
  // ==========================================
  {
    id: 71,
    title: "Samsung 55 Inch CU7000 4K UHD Smart LED TV",
    description: "Resolution: 4K UHD 3840 x 2160\nCrystal Processor 4K",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 19999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 72,
    title: "LG 65 Inch UR7800 4K UHD Smart LED TV webOS",
    description: "Processor: α5 Gen6 AI Processor 4K\nHDR10 Pro",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 26999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 73,
    title: "Sony Bravia 55 Inch X75L 4K HDR Google TV",
    description: "Processor: X1 4K Processor\nMotionflow XR 200",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 27999,
    quantity: 25,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 74,
    title: "TCL 50 Inch V6B 4K UHD Google Smart TV",
    description: "Borderless Design\nDolby Audio & HDR10 Support",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 14499,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 75,
    title: "Xiaomi TV A2 43 Inch FHD Smart Android TV",
    description: "Metallic frame design\nDolby Audio, DTS-X sound",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 9999,
    quantity: 65,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 76,
    title: "Samsung 65 Inch Q60C QLED 4K Smart TV",
    description: "Technology: 100% Color Volume with Quantum Dot\nAirSlim Design",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 32999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 77,
    title: "LG 55 Inch OLED C3 4K Smart evo TV",
    description: "Self-lit OLED pixels\nα9 AI Processor 4K Gen6\nDolby Vision & Atmos",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 54999,
    quantity: 15,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 78,
    title: "TCL 65 Inch C655 QLED 4K Google TV",
    description: "Quantum Dot Technology\nGame Master mode for smooth gaming",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 24999,
    quantity: 35,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 79,
    title: "Sony Bravia XR 65 Inch X90L 4K HDR Full Array LED",
    description: "Cognitive Processor XR\nXR Triluminos Pro color",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 49999,
    quantity: 12,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 80,
    title: "Toshiba 50 Inch Smart Frameless LED TV 4K",
    description: "VIDAA U6 Operating System\nUltra HD 4K Resolution",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 13999,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 81,
    title: "Sharp 55 Inch 4K UHD Android Smart LED TV",
    description: "Built-in Chromecast\nVoice Search Remote Control",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 17499,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 82,
    title: "Unionaire 43 Inch Smart LED TV",
    description: "Resolution: FHD 1920 x 1080\nBuilt-in Receiver",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 7999,
    quantity: 80,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 83,
    title: "Samsung 75 Inch BU8000 Crystal UHD 4K Smart TV",
    description: "Dynamic Crystal Color\nUltra-thin profile AirSlim design",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 43999,
    quantity: 10,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 84,
    title: "LG 75 Inch UQ7500 4K UHD Smart TV",
    description: "webOS Smart TV with Magic Remote support",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 38999,
    quantity: 12,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 85,
    title: "TCL 75 Inch P755 4K QD-Mini LED Google TV",
    description: "Mini LED technology for deep blacks and high brightness",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 39999,
    quantity: 15,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 86,
    title: "Xiaomi TV Max 85 Inch 4K UHD Smart QLED TV",
    description: "Ultra-large screen size with Quantum Dot display",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 69999,
    quantity: 8,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 87,
    title: "Samsung 50 Inch Q60D QLED 4K Smart TV",
    description: "Quantum Processor Lite 4K\nDual LED backlight",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 21999,
    quantity: 35,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 88,
    title: "LG 50 Inch UT8000 4K UHD Smart TV",
    description: "webOS 24 Re:New Program supported",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 17999,
    quantity: 40,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 89,
    title: "Toshiba 55 Inch Z770 4K Quantum Dot Smart TV",
    description: "Regza Engine ZU\nBuilt-in subwoofer for powerful sound",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 25999,
    quantity: 20,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 90,
    title: "JVC 58 Inch 4K UHD Smart LED TV",
    description: "Frameless design with HDR10 and Netflix built-in",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 15999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 91,
    title: "Samsung 43 Inch Crystal UHD 4K Smart TV",
    description: "PurColor technology for fine-tuned color expression",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 13999,
    quantity: 50,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 92,
    title: "LG 43 Inch Smart Full HD TV",
    description: "Dynamic Color Enhancer and Virtual Surround Sound",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 9499,
    quantity: 55,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 93,
    title: "Sony 43 Inch W830K HD Android Smart TV",
    description: "X-Reality PRO upscale images for clarity",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 14999,
    quantity: 30,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 94,
    title: "TCL 43 Inch S5400 FHD Smart Android TV",
    description: "HDR picture enhancement and Bezel-less screen",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 8999,
    quantity: 70,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 95,
    title: "Samsung 85 Inch QN90C Neo QLED 4K Smart TV",
    description: "Quantum Matrix Technology with Mini LEDs",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 89999,
    quantity: 5,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 96,
    title: "LG 83 Inch OLED C3 4K Smart TV",
    description: "Massive OLED screen with supreme contrast and cinema experience",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 119999,
    quantity: 4,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 97,
    title: "Sony Bravia 85 Inch X80L 4K HDR Google TV",
    description: "X-Balanced Speaker and 4K HDR Processor X1",
    imageCover: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    price: 69999,
    quantity: 7,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 98,
    title: "Toshiba 65 Inch Z870 4K Mini LED Smart TV",
    description: "Quantum Dot Color and Ultimate Motion 120Hz",
    imageCover: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    price: 34999,
    quantity: 18,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  },
  {
    id: 99,
    title: "Sharp 70 Inch 4K UHD Smart LED TV",
    description: "Large screen display with immersive Dolby Audio",
    imageCover: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    price: 32999,
    quantity: 14,
    images: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: true
  },
  {
    id: 100,
    title: "Unionaire 55 Inch 4K Smart Frameless TV",
    description: "Sleek frameless design with built-in receiver and Wi-Fi",
    imageCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    price: 15499,
    quantity: 45,
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80"
    ],
    onSale: false
  }
];