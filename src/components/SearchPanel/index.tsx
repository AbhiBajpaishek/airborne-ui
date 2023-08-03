import React from 'react';
import { FormProps } from './types';
import { FormContainer, Input, Label, SubmitButton } from './styled';


const FlightForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [pnr, setPnr] = React.useState('');
  const [flightNumber, setFlightNumber] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(pnr, flightNumber);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Flight PNR Number"
        value={pnr}
        onChange={(e) => setPnr(e.target.value)}
      />
      <Label>or</Label>
      <Input
        type="text"
        placeholder="Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <SubmitButton type="submit">Get Flight Details</SubmitButton>
    </FormContainer>
  );
};

export default FlightForm;
