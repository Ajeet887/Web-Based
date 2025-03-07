import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";

function PortfolioSection() {
  return (
    <HStack bg="white" justifyContent="space-between" spacing={{
        base: 0,
        xl: 16,
      }} alignItems={{
      base: "flex-start",
      xl: "center"
    }} borderRadius="xl" p={6} flexDir={{
      base: "column",
      xl: "row"
    }}>
      <HStack spacing={{
        base: 0,
        xl: 16,
      }} alignItems={{
      base: "flex-start",
      xl: "center"
    }} flexDir={{
      base: "column",
      xl: "row"
    }} >
      <Stack> 
        <HStack color="black.80">
          <Text fontSize="14px">Total Portfolio Value</Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyle="h2" fontWeight="medium">₹ 112,312.24</Text>
      </Stack>

      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px">Wallet Balances</Text>
        </HStack>
        <HStack spacing={4} alignItems={{
      base: "flex-start",
      sm: "center"
    }} flexDir={{
      base: "column",
      sm: "row"
    }}>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">22.39401000</Text> <Tag>BTC</Tag>
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">₹ 1,300.00</Text> <Tag>INR</Tag>
          </HStack>
        </HStack>
      </Stack>
      </HStack>

      <HStack mt={{
        base: 4,
        xl: 0,
      }} >
        <Button leftIcon={
            <Icon as={AiOutlineArrowDown}/>
        }>Deposit</Button>
        <Button leftIcon={
          <Icon as={AiOutlineArrowUp}/>
        }>Withrowal</Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
