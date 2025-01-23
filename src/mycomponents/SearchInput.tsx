import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
    onSearch: (searchTerm: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <Input
        ref={ref}
        placeholder="Search games..."
        borderRadius={20}
        variant={"subtle"}
      />
    </form>
  );
};

export default SearchInput;
