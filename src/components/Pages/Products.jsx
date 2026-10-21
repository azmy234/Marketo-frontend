import { useState } from "react";
import { Search, Filter, RotateCcw } from "lucide-react";
import ProductCard from "../Products/ProductCard"; // تأكد من مطابقة المسار الصحيح لديك

// قائمة المنتجات الشاملة
const allProducts = [
  // --- قسم الزيوت والدهون ---
  {
    id: 1,
    title: "زيت ذرة عافية 2.2 لتر",
    supplier: "شركة عافية",
    price: 180.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "زيت عباد الشمس سلايت 1.5 لتر",
    supplier: "سلايت",
    price: 115.0,
    oldPrice: 130.0,
    discount: "-11%",
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "سمن فكتوريا الاصلي 750 جرام",
    supplier: "فكتوريا",
    price: 95.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "زيت تموين مميز 800 مل",
    supplier: "الشركة المصرية",
    price: 45.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "سمن روابي 1.5 كجم علبة",
    supplier: "روابي",
    price: 160.0,
    oldPrice: 185.0,
    discount: "-13%",
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    title: "سمن جنة 2 كجم",
    supplier: "جنة",
    price: 210.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 7,
    title: "زيت زيتون وادي النيل 500 مل",
    supplier: "وادي النيل",
    price: 135.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 8,
    title: "زيت قللي للقلي 1 لتر",
    supplier: "قللي",
    price: 70.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 9,
    title: "زيت كريستال ذرة 3.5 لتر",
    supplier: "كريستال",
    price: 290.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 10,
    title: "سمن بلدي بقري صافي 1 كجم",
    supplier: "مزارع الوادي",
    price: 320.0,
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم الأجبان والألبان ---
  {
    id: 11,
    title: "جبنة فريكو جودة 1 كجم",
    supplier: "شركة فريكو",
    price: 240.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 12,
    title: "جبنة براميلي اسطنبولي 1 كجم",
    supplier: "الحمد",
    price: 120.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 13,
    title: "جبنة بيضاء دومتي تتراباك 500 جم",
    supplier: "دومتي",
    price: 45.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 14,
    title: "جبنة رومي قديم بطارخ 1 كجم",
    supplier: "الأجبان المصرية",
    price: 260.0,
    oldPrice: 290.0,
    discount: "-10%",
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 15,
    title: "لبن جهينة كامل الدسم 1 لتر",
    supplier: "جهينة",
    price: 42.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 16,
    title: "لبن المراعي 1.5 لتر",
    supplier: "المراعي",
    price: 60.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 17,
    title: "زبادي طبيعي جهينة 105 جم (عرض 12 قطعة)",
    supplier: "جهينة",
    price: 75.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 18,
    title: "قشطة بوك العلنية 170 جم",
    supplier: "بوك",
    price: 55.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 19,
    title: "زبدة نيوزيلندي انشور 1 كجم",
    supplier: "انشور",
    price: 380.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 20,
    title: "جبنة مثلثات بريزيدون 32 قطعة",
    supplier: "بريزيدون",
    price: 95.0,
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم السياسة والحبوب (البقوليات) ---
  {
    id: 21,
    title: "أرز فاخر 5 كجم",
    supplier: "شركة عافية",
    pack: "5 كجم",
    price: 285.0,
    oldPrice: 320.0,
    discount: "-10%",
    moq: "1 كرتونة : MOQ",
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 22,
    title: "أرز الضحى مصري 1 كجم",
    supplier: "الضحى",
    price: 38.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 23,
    title: "مكرونة الملكة قلم 400 جم",
    supplier: "الملكة",
    price: 22.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1551462106-cc2fb6588f3a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 24,
    title: "مكرونة حورية اسباجتي 1 كجم",
    supplier: "حورية",
    price: 48.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1551462106-cc2fb6588f3a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 25,
    title: "عدس مجروش تركي 500 جم",
    supplier: "الرواد",
    price: 40.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 26,
    title: "فول حصى للتدميس 1 كجم",
    supplier: "الأصالة",
    price: 65.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 27,
    title: "لوبيا رفاعي بيضاء 500 جم",
    supplier: "رفاعي",
    price: 55.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 28,
    title: "فاصوليا حمراء 500 جم",
    supplier: "الضحى",
    price: 60.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 29,
    title: "دقيق أبيض فاخر للمخبوزات 1 كجم",
    supplier: "المطاحن المصرية",
    price: 25.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 30,
    title: "شعرية الملكة 400 جم",
    supplier: "الملكة",
    price: 22.0,
    category: "السياسة والحبوب",
    image:
      "https://images.unsplash.com/photo-1551462106-cc2fb6588f3a?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم البهارات والتوابل ---
  {
    id: 31,
    title: "مرقة دجاج ماجي",
    supplier: "شركة عافية",
    pack: "24 × جم",
    price: 450.0,
    oldPrice: 500.0,
    discount: "-19%",
    moq: "1 كرتونة : MOQ",
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 32,
    title: "فلفل أسود مطحون فاخر 200 جم",
    supplier: "مهران",
    price: 65.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 33,
    title: "كمون مطحون نقي 200 جم",
    supplier: "باب الشروق",
    price: 50.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 34,
    title: "كزبرة خشک مطحونة 200 جم",
    supplier: "مهران",
    price: 35.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 35,
    title: "بهارات لحمة مشكلة 250 جم",
    supplier: "السنبلة",
    price: 70.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 36,
    title: "ملح طعام نقي 700 جم (باكيت 20 كيس)",
    supplier: "سياج",
    price: 90.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1518117715867-c3aed61f2f81?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 37,
    title: "كركم مطحون اصفر نقي 200 جم",
    supplier: "باب الشروق",
    price: 45.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 38,
    title: "قرفة مطحونة ناعمة 200 جم",
    supplier: "مهران",
    price: 55.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 39,
    title: "حب هàn (حفهان) حصى 100 جم",
    supplier: "الفاخر",
    price: 120.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 40,
    title: "ورق لورا (غار) صافي 50 جم",
    supplier: "عطارة العزم",
    price: 20.0,
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم المعلبات والصلصات ---
  {
    id: 41,
    title: "صلصة طماطم هارفست 300 جم",
    supplier: "هارفست",
    price: 24.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 42,
    title: "صلصة طماطم قوام كوين 380 جم",
    supplier: "كوين",
    price: 28.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 43,
    title: "فول مدمس هارفست بالخلطة المصرية 400 جم",
    supplier: "هارفست",
    price: 18.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1583225224424-9fdfb78e352d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 44,
    title: "فول مدمس حدائق كاليفورنيا سادة 400 جم",
    supplier: "كاليفورنيا",
    price: 25.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1583225224424-9fdfb78e352d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 45,
    title: "تونة قطع ريماس 140 جم",
    supplier: "ريماس",
    price: 45.0,
    oldPrice: 52.0,
    discount: "-13%",
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 46,
    title: "تونة مفتتة دايسكي 170 جم",
    supplier: "دايسكي",
    price: 32.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 47,
    title: "بسلة وجزر معلبة هارفست 400 جم",
    supplier: "هارفست",
    price: 22.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 48,
    title: "ذرة حلوة حب هارفست 340 جم",
    supplier: "هارفست",
    price: 26.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 49,
    title: "مشروم شرائح معلب أمريكانا 400 جم",
    supplier: "أمريكانا",
    price: 42.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 50,
    title: "حلاوة طحينية رشيدي المولد سادة 500 جم",
    supplier: "الرشيدي المولد",
    price: 75.0,
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم المشروبات والعصائر ---
  {
    id: 51,
    title: "شاي العروسة الناعم 250 جم",
    supplier: "شركة الشاي",
    price: 60.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 52,
    title: "شاي ليبتون فرط 250 جم",
    supplier: "ليبتون",
    price: 72.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 53,
    title: "بن ميزو سادة وسط 200 جم",
    supplier: "بن ميزو",
    price: 90.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 54,
    title: "بن شاهين تركي محوج 100 جم",
    supplier: "شاهين",
    price: 65.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 55,
    title: "نسكافيه جولد برطمان 100 جم",
    supplier: "نستلة",
    price: 155.0,
    oldPrice: 175.0,
    discount: "-11%",
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 56,
    title: "عصير جهينة جوافة لتر",
    supplier: "جهينة",
    price: 32.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 57,
    title: "عصير بيج رويال مانجو 1 لتر",
    supplier: "بيج رويال",
    price: 35.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 58,
    title: "مياه معدنية بركة 1.5 لتر (كرتونة 12 زجاجة)",
    supplier: "بركة",
    price: 85.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 59,
    title: "مياه نستلة طبيعية 600 مل (كرتونة 20 زجاجة)",
    supplier: "نستلة",
    price: 110.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 60,
    title: "شاي ليبتون فتلة (100 باكت)",
    supplier: "ليبتون",
    price: 130.0,
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم المنظفات والعناية المنزلية ---
  {
    id: 61,
    title: "مسحوق غسيل أوتوماتيك برسيل 2.5 كجم",
    supplier: "برسيل",
    price: 215.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 62,
    title: "مسحوق غسيل تايد أوتوماتيك 3 كجم",
    supplier: "تايد",
    price: 240.0,
    oldPrice: 270.0,
    discount: "-11%",
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 63,
    title: "جل غسيل اريال للألوان 2 لتر",
    supplier: "اريال",
    price: 190.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 64,
    title: "سائل غسيل أطباق فيري لتر واحد",
    supplier: "فيري",
    price: 65.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 65,
    title: "سائل غسيل أطباق بريل 800 مل",
    supplier: "بريل",
    price: 45.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 66,
    title: "كلوركس ابيض مركز 1 لتر",
    supplier: "كلوركس",
    price: 35.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 67,
    title: "معطر جو فبريز بخاخ 300 مل",
    supplier: "فبريز",
    price: 85.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 68,
    title: "مناديل وجه فاين (باكيت 5 رولات)",
    supplier: "فاين",
    price: 60.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 69,
    title: "ورق تواليت زينة (عبوة 12 رولة)",
    supplier: "زينة",
    price: 95.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 70,
    title: "صابون سائل لليدين ديتول 500 مل",
    supplier: "ديتول",
    price: 75.0,
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم السكر والعسل والمربى ---
  {
    id: 71,
    title: "سكر أبيض ناعم الأسرة 1 كجم",
    supplier: "الأسرة",
    price: 38.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c342617?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 72,
    title: "سكر التموين المعبأ 1 كجم",
    supplier: "الشركة المصرية",
    price: 27.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c342617?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 73,
    title: "عسل نحل طبيعي زهور البرسيم 1 كجم",
    supplier: "مملكة النحل",
    price: 150.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 74,
    title: "عسل اسود مصري نقي 900 جم",
    supplier: "الوادي",
    price: 45.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 75,
    title: "مربى فراولة هีتو 450 جم",
    supplier: "هيتو",
    price: 35.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 76,
    title: "مربى تين قويدر 700 جم",
    supplier: "قويدر",
    price: 55.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 77,
    title: "طحينة بيضاء مطحونة فاخرة 500 جم",
    supplier: "البوادي",
    price: 85.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 78,
    title: "شوكولاتة قابلة للدهن نوتيلا 350 جم",
    supplier: "فيرير",
    price: 135.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 79,
    title: "كريمة الفول السوداني سمูث 350 جم",
    supplier: "بينوت",
    price: 65.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 80,
    title: "سكر بودرة ناعم 1 كجم",
    supplier: "الأسرة",
    price: 40.0,
    category: "السكر والعسل والمربى",
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c342617?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم المكسرات والتسالي ---
  {
    id: 81,
    title: "سوداني محمص ومملح جامبو 250 جم",
    supplier: "المصري",
    price: 45.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 82,
    title: "لب أبيض سوبر محمص 200 جم",
    supplier: "التسالي الذهبية",
    price: 55.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 83,
    title: "لب سوري اسود مقرمش 200 جم",
    supplier: "التسالي الذهبية",
    price: 40.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 84,
    title: "كاجو محمص فاخر 250 جم",
    supplier: "رفاهية المكسرات",
    price: 180.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 85,
    title: "بندق مطحون او حب 250 جم",
    supplier: "رفاهية المكسرات",
    price: 160.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 86,
    title: "لوز أمريكي مقشر 250 جم",
    supplier: "رفاهية المكسرات",
    price: 170.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 87,
    title: "مقرمشات ذرة بطعم الطماطم 150 جم",
    supplier: "بريك",
    price: 15.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 88,
    title: "شيبسي بطاطس بالجبنة المتبلة (عبوة 12 كيس)",
    supplier: "شيبسي",
    price: 60.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 89,
    title: "بسكويت اولكر شاي (عبوة 12 باكت)",
    supplier: "ولكر",
    price: 50.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 90,
    title: "بسكويت بوريو بالشوكولاتة (12 قطعة)",
    supplier: "نستلة",
    price: 55.0,
    category: "المكسرات والتسالي",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80",
  },

  // --- قسم المجمدات واللحوم ---
  {
    id: 91,
    title: "دجاج مجمد كويك فريش 1000 جم",
    supplier: "كويك فريش",
    price: 140.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 92,
    title: "بانيه دجاج مقرمش هافست 1 كجم",
    supplier: "هافست",
    price: 180.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 93,
    title: "برجر بقري جامبو (10 قطع)",
    supplier: "آبى",
    price: 130.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 94,
    title: "سجق بقرى بلدي مجمد 900 جم",
    supplier: "مزارع اللحوم",
    price: 175.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 95,
    title: "بطاطس صوابع نصف فرزة 2.5 كجم",
    supplier: "امريكانا",
    price: 145.0,
    oldPrice: 165.0,
    discount: "-12%",
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 96,
    title: "ملوخية خضراء مجمدة بسمة 400 جم",
    supplier: "بسمة",
    price: 20.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 97,
    title: "فراولة مجمدة نقية 400 جم",
    supplier: "بسمة",
    price: 30.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 98,
    title: "جبنة موزاريلا مبشورة فالدو 1 كجم",
    supplier: "فالدو",
    price: 195.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 99,
    title: "استربس دجاج حار مقرمش 1 كجم",
    supplier: "أطياب",
    price: 190.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 100,
    title: "شيش طاووق دجاج جاهز للتسوية 1 كجم",
    supplier: "كويك فريش",
    price: 165.0,
    category: "المجمدات واللحوم",
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // استخراج الأقسام الفريدة لتوليد خيارات الفلتر تلقائياً
  const categories = ["الكل", ...new Set(allProducts.map((p) => p.category))];

  // تصفية المنتجات بناءً على البحث والقسم
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase().trim());

    const matchesCategory =
      selectedCategory === "الكل" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      dir="rtl"
      className="w-full bg-brand-bg min-h-[85vh] pb-4 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* عنوان الصفحة */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-black text-brand-dark mb-1">
            جميع المنتجات
          </h1>
          <p className="text-xs md:text-sm text-gray-600">
            تصفح تشكيلة واسعة من منتجات الجملة المتاحة لمشروعك بأفضل الأسعار.
          </p>
        </div>

        {/* تخطيط الصفحة: الفلتر على اليمين والمنتجات على اليسار */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* 1. قسم الفلاتر الجانبي (على اليمين) */}
          <aside className="lg:col-span-1 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-brand-dark" />
                <h2 className="font-bold text-sm text-brand-dark">
                  تصفية النتائج
                </h2>
              </div>
              {(selectedCategory !== "الكل" || searchTerm !== "") && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("الكل");
                    setSearchTerm("");
                  }}
                  className="text-[11px] text-brand-gold hover:underline flex items-center gap-1"
                >
                  <RotateCcw size={12} />
                  إعادة تعيين
                </button>
              )}
            </div>

            {/* فلتر الأقسام عمودياً */}
            <div>
              <h3 className="text-xs font-bold text-gray-700 mb-3">الأقسام</h3>
              <div className="flex flex-col space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-right px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-[#F8F1E7] text-brand-dark font-bold border-r-4 border-brand-gold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-brand-dark"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* 2. محتوى المنتجات وشريط البحث (على اليسار) */}
          <main className="lg:col-span-3 space-y-6">
            {/* شريط البحث العلوي */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center">
              <div className="relative w-full flex items-center">
                <input
                  type="text"
                  placeholder="ابحث عن منتج أو مورد..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2.5 px-4 pr-10 text-xs md:text-sm border border-gray-200 rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-brand-gold transition-colors"
                />
                <Search size={18} className="absolute right-3 text-gray-400" />
              </div>
            </div>

            {/* شبكة المنتجات باستخدام ProductCard */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {filteredProducts.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              /* حالة عدم وجود نتائج */
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-bold text-gray-500 mb-1">
                  عذراً، لم نتمكن من العثور على منتجات مطابقة
                </p>
                <p className="text-xs text-gray-400">
                  جرب البحث بكلمات أخرى أو تغيير الفئة من القائمة الجانبية.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
