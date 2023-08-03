import React from 'react';
import styled from 'styled-components';

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface FoodGridProps {
  foodItems: FoodItem[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px;
`;

const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FoodImage = styled.img`
  max-width: 100%;
  height: 8rem;
  border-radius: 4px;
`;

const FoodName = styled.h3`
  margin: 10px 0;
`;

const FoodPrice = styled.p`
  margin: 5px 0;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FoodGrid: React.FC<FoodGridProps> = ({ foodItems }) => {
  return (
    <GridContainer>
      {foodItems.map((foodItem) => (
        <FoodCard key={foodItem.id}>
          <FoodImage src={foodItem.imageUrl} alt={foodItem.name} />
          <FoodName>{foodItem.name}</FoodName>
          <FoodPrice>Rs {foodItem.price}</FoodPrice>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </FoodCard>
      ))}
    </GridContainer>
  );
};

export default FoodGrid;
