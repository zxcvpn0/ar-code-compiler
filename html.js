let keywords = {
    "html": {
      "main-attributes": {
        "title": {
          "الوصف": "عنوان",
          "العناصر": ["abbr", "div", "p", "area"]
        },
        "type": {
          "الوصف": "النوع",
          "العناصر": ["input", "script", "style", "link"],
          "القيم": {
            "input": {
              "text": "نص",
              "button": "زر"
            }
          }
        },
        "target": {
          "الوصف": "افتح",
          "العناصر": ["a", "area"],
          "القيم": {
            "نفس الصفحه": ["_self", "_parent", "_top"],
            "صفحه جديده": "_blank"
          }
        },
        "href": {
          "الوصف": "الى",
          "العناصر": ["a", "link", "area"]
        },
        "src": {
          "الوصف": "المصدر",
          "العناصر": ["video", "audio", "img", "script"]
        },
        "rel": {
          "الوصف": "المصدر",
          "العناصر": ["link", "a"],
          "القيم": {
            "link": {
              "stylesheet": "مظهر"
            }
          }
        },
        "name": {
          "الوصف": "الاسم",
          "العناصر": ['meta', 'map', 'input']
        },
        "content": {
          "الوصف": "المحتوى",
          "العناصر": ['meta'],
          "القيم": {
            "meta": {
              "width": {
                "الوصف": "العرض",
                "القيم": {
                  "device-width": "ملائم لحجم الجهاز"
                },
                "initial-scale": {
                  "الوصف": "النطاق",
                  "القيم": Number
              }
            }
          }
        },
        "charset": {
          "الوصف": "مدير_الرموز",
          "العناصر": ['meta'],
          "القيم": undefined
        },
      },
      "main-elemnets": {
        "html": "رموز الويب",
        "head": "البدايه",
        "body": "الجسم",
        "link": "رابط",
        "style": "تصميم",
        "script": "كود",
        "title": "العنوان"
      },
      "inline-elements": {
        //anchor
        "a": "اذهب" ,
        //abbreviation
        "abbr": "وصف",
        "area": {
          "الوصف": "المنطقه",
          "relations": "map"
        }
      },
      "block-elements": {
        //contact information.
        "address":  "المعلومات",

    }
  }