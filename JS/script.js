const gallery = document.querySelector(".gallery");

const images = [
    {
      preview: 
        'https://mesta.com.ua/wp-content/uploads/2022/02/privatbank-logo.png',
      original:
        'https://cfcbigideas.com/wp-content/uploads/2021/06/CFC_Pictures_640%D1%85400_2.png',
      description: ' текстовий опис зображення ',
    },
    {
        preview: 
          'https://d.subotsi.info/data/places/000494/images/003913/big-ob.jpg',
        original:
          'https://upload.wikimedia.org/wikipedia/commons/d/da/Oschadbank_%28uk%29.png',
        description: ' текстовий опис зображення ',
      },
    {
        preview: 
        'https://asset.brandfetch.io/id-CBRc8NA/idEsOSs4jS.jpeg',
        original:
        'https://cdn.sanity.io/images/kkcwq027/production/d38e8bccadba154864b015695af35f1c706d94c4-1408x504.jpg',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
            'https://habrastorage.org/getpro/moikrug/uploads/company/122/571/125/logo/medium_193ea5be318e4658a7571d32a2c3b966.png',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/UKREXIMBANK_logo.svg/1200px-UKREXIMBANK_logo.svg.png',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
        'https://pbs.twimg.com/profile_images/1136158344052379648/wQYX1AVH_400x400.png',
        original:
        'https://1000logos.net/wp-content/uploads/2021/05/Raiffeisen-Bank-International-logo.png',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
            'data:image/png;base64,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',
        original:
            'https://forbes.ua/static/storage/thumbs/1200x630/8/ab/05701332-6d3781e2e2ebfd984e0ba58fa8be3ab8.png?v=0658_1',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
        'https://ternopil.info/logo/big/429681040.jpg',
        original:
        'https://myagent.com.ua/images/picforcontent/insurancecompanies_20210126033509895_large.webp',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
            'https://iconape.com/wp-content/files/iz/206881/png/206881.png',
        original:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Universal_Bank_logo.svg/2560px-Universal_Bank_logo.svg.png',
        description: ' текстовий опис зображення ',
    },
    {
        preview: 
        'https://companieslogo.com/img/orig/OTP.BD-4b37445c.png?t=1654141166',
        original:
        'https://logos-world.net/wp-content/uploads/2023/02/OTP-Bank-Logo.png',
        description: ' текстовий опис зображення ',
    }
];

for (let i = 0; i < images.length; i++){
    gallery.innerHTML += `<li><img data-original="${images[i].original}" src="${images[i].preview}" alt="${images[i].description}"></li>`
}

gallery.addEventListener("click", function(event){
    let img = event.target;
    if (img.tagName = 'IMG'){
        let original = img.dataset.original; 
        const instance = basicLightbox.create(`<img src="${original}">`);
        instance.show();
        console.log(original);
    }
    
})


