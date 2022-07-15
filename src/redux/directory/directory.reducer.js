const INITIAL_STATE = {
    sections: [
     {
       title: 'caps',
       imageUrl: "https://i.ibb.co/Q6KMhRB/image.png",
       id: 1,
       linkUrl: 'shop/caps'
     },
     {
       title: 'shirts',
       imageUrl: "https://i.ibb.co/0C48Q8m/uc-export-view-id-1-JKet-Sj-BXj-ZITo-Gis-Yo-BGj04hz-Dso-Kxi.jpg" ,
       id: 2,
       linkUrl: 'shop/shirts'
     },
     {
       title: 'pants',
       imageUrl: "https://i.ibb.co/5Ww8rf7/uc-export-view-id-1t-H9gj8-Og-Ls-Max-oz6-As6-X0-e-ZEivsd-G.jpg",
       id: 3,
       linkUrl: 'shop/pants'
     },
     {
       title: 'womens',
       imageUrl: "https://i.ibb.co/CJq5qsq/0001a4e4-5e65-4dce-8e7e-10df48e22dcc.jpg",
       size: 'large',
       id: 4,
       linkUrl: 'shop/womens'
     },
     {
       title: 'mens',
       imageUrl: "https://i.ibb.co/HBvjKdm/image.png",
       size: 'large',
       id: 5,
       linkUrl: 'shop/mens'
     }
   ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
} 

export default directoryReducer