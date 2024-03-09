import styled from "styled-components";

type Props = {
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function LabeledInput({
  id,
  placeholder,
  value,
  onChange,
}: Props) {
  return (
    <>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

const StyledInput = styled.input`
  height: 30px;
  border-radius: 5px;
  margin-right: 10px;
  padding-left: 10px;
`;
