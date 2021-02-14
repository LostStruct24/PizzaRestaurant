import React from 'react';
import { FullMenuContainer, FullMenuHeading, FullMenuWrapper, FullMenuCard, FullMenuImg, FullMenuTitle, FullMenuDesc, FullMenuPrice, FullMenuButton, FullMenuInfo } from './FullmenuElements';

const FullMenu = ({ heading, data, id }) => {
    return (
        <FullMenuContainer id={id}>
            <FullMenuHeading>{heading}</FullMenuHeading>
            <FullMenuWrapper>
                {data.map((product, index) => {
                    return(
                        <FullMenuCard key={index}>
                            <FullMenuImg src={product.img} alt={product.alt} />
                            <FullMenuInfo>
                                <FullMenuTitle>{product.name}</FullMenuTitle>
                                <FullMenuDesc>{product.desc}</FullMenuDesc>
                                <FullMenuPrice>{product.price}</FullMenuPrice>
                                <FullMenuButton>{product.button}</FullMenuButton>
                            </FullMenuInfo>
                        </FullMenuCard>
                    )
                })}
            </FullMenuWrapper>
        </FullMenuContainer>
    )
}

export default FullMenu;
