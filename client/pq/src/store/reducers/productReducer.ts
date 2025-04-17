import { Order, Product } from "@/types/types";
import { AppActions } from "../actions/actions";

// Определим тип состояния для заказов
export interface OrdersState {
  orders: Order[];
  selectedOrder: Order | null;
}

// Начальное состояние
const initialState: Product[] = [
    {
      "id": '1',
      "serialNumber": "SN-27.9501",
      "isNew": 1,
      "photo": "monitor-lg-ultragear.jpg",
      "title": "LG UltraGear 27GN950",
      "type": "Monitors",
      "specification": "27\", 4K UHD, 144Hz, IPS",
      "guarantee": {
        "start": "2023-01-10 10:00:00",
        "end": "2025-01-10 10:00:00"
      },
      "price": [
        { "value": 699, "symbol": "USD", "isDefault": 0 },
        { "value": 27300, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 1,
      "date": "2023-01-09 15:45:00"
    },
    {
      "id": '2',
      "serialNumber": "SN-98.0001",
      "isNew": 1,
      "photo": "ssd-samsung-980pro.jpg",
      "title": "Samsung 980 PRO 1TB",
      "type": "Storage",
      "specification": "1TB, NVMe, PCIe Gen4",
      "guarantee": {
        "start": "2022-11-01 09:00:00",
        "end": "2027-11-01 09:00:00"
      },
      "price": [
        { "value": 129, "symbol": "USD", "isDefault": 0 },
        { "value": 5100, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 1,
      "date": "2022-10-30 14:12:00"
    },
    {
      "id": '3',
      "serialNumber": "SN-91.2344",
      "isNew": 0,
      "photo": "keyboard-logitech-g915.jpg",
      "title": "Logitech G915 TKL",
      "type": "Keyboards",
      "specification": "Wireless, RGB, Low-profile",
      "guarantee": {
        "start": "2021-05-20 11:00:00",
        "end": "2024-05-20 11:00:00"
      },
      "price": [
        { "value": 199, "symbol": "USD", "isDefault": 0 },
        { "value": 7800, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 2,
      "date": "2021-05-18 09:50:00"
    },
    {
      "id":' 4',
      "serialNumber": "SN-40.7071",
      "isNew": 1,
      "photo": "gpu-nvidia-rtx4070.jpg",
      "title": "NVIDIA GeForce RTX 4070",
      "type": "Graphics Cards",
      "specification": "12GB GDDR6X, Ray Tracing, DLSS 3",
      "guarantee": {
        "start": "2023-04-01 12:00:00",
        "end": "2026-04-01 12:00:00"
      },
      "price": [
        { "value": 599, "symbol": "USD", "isDefault": 0 },
        { "value": 23400, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 3,
      "date": "2023-03-30 17:20:00"
    },
    {
      "id": '5',
      "serialNumber": "SN-15.9832",
      "isNew": 1,
      "photo": "laptop-dell-xps15.jpg",
      "title": "Dell XPS 15",
      "type": "Laptops",
      "specification": "Intel i7, 32GB RAM, 1TB SSD, OLED",
      "guarantee": {
        "start": "2024-02-15 13:00:00",
        "end": "2026-02-15 13:00:00"
      },
      "price": [
        { "value": 1799, "symbol": "USD", "isDefault": 0 },
        { "value": 70300, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 3,
      "date": "2024-02-14 16:45:00"
    },
    {
      "id": '6',
      "serialNumber": "SN-45.7210",
      "isNew": 1,
      "photo": "mouse-razer-viper.jpg",
      "title": "Razer Viper V2 Pro",
      "type": "Mice",
      "specification": "58g, 30K DPI, Wireless",
      "guarantee": {
        "start": "2024-03-01 10:00:00",
        "end": "2026-03-01 10:00:00"
      },
      "price": [
        { "value": 149, "symbol": "USD", "isDefault": 0 },
        { "value": 5900, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 1,
      "date": "2024-02-28 12:00:00"
    },
    {
      "id": '7',
      "serialNumber": "SN-66.3015",
      "isNew": 0,
      "photo": "cpu-intel-i9.jpg",
      "title": "Intel Core i9-13900K",
      "type": "CPUs",
      "specification": "24 Cores, 32 Threads, 5.8GHz",
      "guarantee": {
        "start": "2023-06-10 08:00:00",
        "end": "2026-06-10 08:00:00"
      },
      "price": [
        { "value": 589, "symbol": "USD", "isDefault": 0 },
        { "value": 23000, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 2,
      "date": "2023-06-09 10:15:00"
    },
    {
      "id": '8',
      "serialNumber": "SN-77.1234",
      "isNew": 1,
      "photo": "ram-corsair-vengeance.jpg",
      "title": "Corsair Vengeance RGB 32GB",
      "type": "Memory",
      "specification": "DDR5, 6000MHz, CL36",
      "guarantee": {
        "start": "2024-01-05 12:30:00",
        "end": "2028-01-05 12:30:00"
      },
      "price": [
        { "value": 189, "symbol": "USD", "isDefault": 0 },
        { "value": 7500, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 1,
      "date": "2024-01-04 13:00:00"
    },
    {
      "id": '9',
      "serialNumber": "SN-88.9876",
      "isNew": 1,
      "photo": "psu-corsair-rm850x.jpg",
      "title": "Corsair RM850x 850W",
      "type": "Power Supply",
      "specification": "Fully Modular, 80+ Gold",
      "guarantee": {
        "start": "2023-08-01 11:00:00",
        "end": "2028-08-01 11:00:00"
      },
      "price": [
        { "value": 139, "symbol": "USD", "isDefault": 0 },
        { "value": 5400, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 1,
      "date": "2023-07-31 14:00:00"
    },
    {
      "id": '10',
      "serialNumber": "SN-99.0009",
      "isNew": 0,
      "photo": "monitor-dell-u2723qe.jpg",
      "title": "Dell UltraSharp U2723QE",
      "type": "Monitors",
      "specification": "27\", 4K IPS, USB-C Hub",
      "guarantee": {
        "start": "2022-02-01 09:00:00",
        "end": "2025-02-01 09:00:00"
      },
      "price": [
        { "value": 579, "symbol": "USD", "isDefault": 0 },
        { "value": 22600, "symbol": "UAH", "isDefault": 1 }
      ],
      "order": 2,
      "date": "2022-01-30 10:45:00"
    }
  ]
  

const productsReducer = (state: Product[] = initialState, action: AppActions): Product[] => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
      };
   
    default:
      return state;
  }
};

export default productsReducer;
