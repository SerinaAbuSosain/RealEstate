const listOfHouses = [
  {
    imgs: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'شقة طابق ثاني',
    areaId: 1,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'ahmad bassem',
    profile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 20000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'عمارة سكنية',
    areaId: 3,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '350m',
    saler: 'Raya khaild',
    profile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 1500000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1632323091845-f636f89749fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'شقة ارضي',
    areaId: 9,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'Ibrahim Naser',
    profile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 40000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1580041029617-861657e9f349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'فيلا ',
    areaId: 8,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '500m',
    saler: 'yaser bassem',
    profile:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 200000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'بيت مستقل',
    areaId: 11,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'ahmad bassem',
    profile: '',
    price: 25000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'شقة طابق ثاني',
    areaId: 1,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'ahmad bassem',
    profile: '',
    price: 20000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'عمارة سكنية',
    areaId: 3,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '350m',
    saler: 'Raya khaild',
    profile: '',
    price: 1500000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1632323091845-f636f89749fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'شقة ارضي',
    areaId: 9,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'Ibrahim Naser',
    profile: '',
    price: 40000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1580041029617-861657e9f349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'فيلا ',
    areaId: 8,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '500m',
    saler: 'yaser bassem',
    profile: '',
    price: 200000,
  },
  {
    imgs: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    ],
    title: 'بيت مستقل',
    areaId: 11,
    details:
      ' شقة طابقية سوبر ديلوكس ذات اطلالة رائعة مساحتها 225 م ديكورات حديثة ومميزة تحتوي على 3 غرف نوم غرفة نوم رقم (1) ماستر (5.20متر*5.20متر ) مع شباك حرف L فرنش بانوراما مع ملحقاتها : حمام ماستر (2.40متر*3متر)مع غرفة خزائن (3.25متر*2.10متر). 2. غرفة نوم رقم (2) ماستر (3.80متر*4.40متر) مع حمام (1.50متر*2.45متر).',
    area: '200m',
    saler: 'ahmad bassem',
    profile: '',
    price: 25000,
  },
];

const area = [
  {label: 'البلد', value: '1'},
  {label: 'الثالثة', value: '2'},
  {label: 'االرابعة', value: '3'},
  {label: 'الخامسة', value: '4'},
  {label: 'السادسة', value: '5'},
  {label: 'السابعة', value: '6'},
  {label: 'الثامنة', value: '7'},
  {label: 'التاسعة', value: '8'},
  {label: 'العاشرة', value: '9'},
  {label: 'المحدود', value: '10'},
  {label: 'الكرامة', value: '11'},
  {label: 'الرمال', value: '12'},
  {label: 'الشامية', value: '13'},
];

export {listOfHouses, area};
