import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss"

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
           sections: [
            {
              title: 'caps',
              imageUrl: "https://drive.google.com/uc?export=view&id=1tLDVeabY1-rVgyYPK3BKMKhV0aT3C7rU",
              id: 1,
              linkUrl: 'shop/caps'
            },
            {
              title: 'shirts',
              imageUrl: "https://drive.google.com/uc?export=view&id=1JKetSjBXj_ZIToGisYoBGj04hzDsoKxi" ,
              id: 2,
              linkUrl: 'shop/shirts'
            },
            {
              title: 'pants',
              imageUrl: "https://drive.google.com/uc?export=view&id=1tH9gj8OgLsMax-_oz6As6X0_eZEivsdG",
              id: 3,
              linkUrl: 'shop/pants'
            },
            {
              title: 'womens',
              imageUrl: "https://drive.google.com/uc?export=view&id=194lnl9uvbCfDiTiqn4GLO8HElWOqStQZ",
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: "https://drive.google.com/uc?export=view&id=1WORdbkMMDYHkpmTR6BTu6NHPOgSGDCIn",
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;