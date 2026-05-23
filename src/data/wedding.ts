import {
  CalendarHeart,
  Camera,
  Church,
  Gift,
  GlassWater,
  HeartHandshake,
  MapPin,
  Music,
  Utensils,
} from "lucide-react";
import bridePortrait from "@/assets/hinh8.jpg";
import groomPortrait from "@/assets/hinh3.jpg";
import heroPhoto from "@/assets/hinh9.jpg";
import lovePhoto1 from "@/assets/hinh1.jpg";
import lovePhoto2 from "@/assets/hinh2.jpg";
import lovePhoto3 from "@/assets/hinh4.jpg";
import lovePhoto4 from "@/assets/hinh7.jpg";
import lovePhoto5 from "@/assets/hinh10.jpg";

export const wedding = {
  bride: "Tuyết Anh",
  groom: "Minh Hiếu",
  date: "2026-07-02T17:00:00+07:00",
  venue: "TƯ GIA (NHÀ TRAI)",
  address: "Tổ 2, Khu Phố 1, Phường Tân Thành, TX. Phú Mỹ, T. Bà Rịa - Vũng Tàu",
  mapUrl: "https://www.google.com/maps?q=Tổ+2,+Khu+Phố+1,+Phường+Tân+Thành,+Thị+xã+Phú+Mỹ,+Bà+Rịa+-+Vũng+Tàu",
  heroImage: heroPhoto,
  finalImage:
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
  musicUrl:
    "https://cdn.pixabay.com/download/audio/2023/01/09/audio_83b8c22f5d.mp3?filename=wedding-music-131294.mp3",
  bank: {
    name: "MINH HIEU",
    bankName: "Vietcombank",
    number: "0123456789",
    qrImage:
      "https://api.qrserver.com/v1/create-qr-code/?size=360x360&data=Mung%20cuoi%20Tuyet%20Anh%20Minh%20Hieu%200123456789",
  },
};

export const people = [
  {
    role: "Cô dâu",
    name: "Tuyết Anh",
    birthday: "16.03.2004",
    quote: "Dịu dàng như ánh nến, rạng rỡ như một lời hẹn trăm năm.",
    image: bridePortrait,
  },
  {
    role: "Chú rể",
    name: "Minh Hiếu",
    birthday: "10.09.2001",
    quote: "Bình yên trong ánh mắt, chân thành trong từng lời hứa yêu thương.",
    image: groomPortrait,
  },
];

export const loveStory = [
  {
    index: "I",
    poem: [
      "Và anh ghen với trăm ngàn thế kỉ",
      "Những luân hồi",
      "Mà em đã đi qua"
    ],
    image: lovePhoto1
  },
  {
    index: "II",
    poem: [
      "Nay gặp nhau ở một cõi Ta Bà",
      "Anh vẫn muốn thêm nhiều lần tâm đắc"
    ],
    image: lovePhoto2
  },
  {
    index: "III",
    poem: [
      "Thời gian gửi gắm duyên trời,",
      "Cho ta bên mãi, một đời vấn vương.",
      "Xuân qua hạ đến thu thường,",
      "Đông sang vẫn thắm tình thương vẹn đầy."
    ],
    image: lovePhoto3
  },
  {
    index: "IV",
    poem: [
      "Ta nhặt bóng mình trên cát trắng,",
      "Ghép thành nỗi nhớ gửi phương xa.",
      "Trăm năm bến đợi tình sâu nặng,",
      "Chỉ nguyện cùng em đến tuổi già."
    ],
    image: lovePhoto4
  },
  {
    index: "V",
    poem: [
      "Nắm tay em đi qua giông bão,",
      "Bình yên nằm lại ở bờ vai.",
      "Dẫu mai thế giới nhiều điên đảo,",
      "Thương một người, thương trọn tương lai."
    ],
    image: lovePhoto5
  }
];

export const families = {
  groom: {
    title: "Nhà trai",
    parents: ["Ông Nguyễn Văn Thanh", "Bà Trần Thị Lan"],
    address: "Quận 1, TP. Hồ Chí Minh",
  },
  bride: {
    title: "Nhà gái",
    parents: ["Ông Lê Minh Đức", "Bà Phạm Ngọc Mai"],
    address: "Quận 3, TP. Hồ Chí Minh",
  },
};

export const timeline = [
  { time: "16:30", title: "Đón khách", icon: HeartHandshake },
  { time: "17:00", title: "Lễ thành hôn", icon: Church },
  { time: "18:15", title: "Chụp ảnh lưu niệm", icon: Camera },
  { time: "19:00", title: "Tiệc tối", icon: Utensils },
  { time: "20:30", title: "Nâng ly & khiêu vũ", icon: GlassWater },
  { time: "21:30", title: "Trao lời chúc", icon: Gift },
];

export const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
];

export const wishesSeed = [
  "Chúc hai bạn trăm năm hạnh phúc.",
  "Một ngày thật đẹp, một đời thật an yên.",
  "Chúc tình yêu của hai bạn luôn đầy tiếng cười và những bình minh ngọt ngào.",
];

export const quickLinks = [
  { label: "Lịch", icon: CalendarHeart },
  { label: "Nhạc", icon: Music },
  { label: "Bản đồ", icon: MapPin },
];
