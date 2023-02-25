import React, { useEffect, useState } from 'react';
import { useInput } from '../../hooks/useInput';
import { TipsOption } from '../../types/types';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { Input } from '../Input/Input';
import { StyledForm, Title, Subtitle, Total, InputGroup } from './styles';

const options: TipsOption[] = [
  { value: 10, label: '10%' },
  { value: 15, label: '15%' },
  { value: 20, label: '20%' },
];

export const Form = () => {
  const bill = useInput();
  const person = useInput();
  const [isDisabled, setisDisabled] = useState(true);
  const [total, setTotal] = useState(0);
  const [selectedValue, setValue] = useState<TipsOption>(options[0]);

  const onChange = (event: TipsOption | null) => {
    if (event) {
      setValue(event);
    }
  };

  const handleTips = () => {
    if (Number(bill.value) !== 0 && Number(person.value) !== 0) {
      const amountTips = Number(bill.value) * (selectedValue.value / 100);
      const amountBill =
        (amountTips + Number(bill.value)) / Number(person.value);
      setTotal(amountBill);
    }
    if (Number(bill.value) == 0 || Number(person.value) == 0) {
      alert('C ноликом не работаем');
    }
  };

  useEffect(() => {
    bill.value && person.value ? setisDisabled(false) : setisDisabled(true);
  }, [bill.value, person.value]);

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input
          placeholder="Enter bill"
          type="number"
          {...bill}
          onChange={bill.OnChange}
        />
        <Input
          placeholder="Enter persons"
          type="number"
          {...person}
          onChange={person.OnChange}
        />
        <CustomSelect
          value={selectedValue}
          onChange={onChange}
          options={options}
        />
      </InputGroup>
      <Total>Total:{total.toFixed(2)}$</Total>
      <Button type="button" handleTotal={handleTips} isDisabled={isDisabled} />
    </StyledForm>
  );
};
