import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Divider, Flex, Grid, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa6";

function Transactions() {
  const transaction = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timeStamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timeStamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack>
        {transaction.map((transaction,i) => (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider mt="4"/> }
              <Flex gap="4">
              <Grid
                placeItems="center"
                boxSize={10}
                bg="black.5"
                borderRadius="full"
              >
                <Icon as={transaction.icon}></Icon>
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text textStyle="h6" color="black.80">
                    {transaction.timeStamp}
                  </Text>
                </Stack>
                <Text fontSize="sm" color="black">
                  {transaction.amount}
                </Text>
              </Flex>
            </Flex>
            </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">View All</Button>
    </CustomCard>
  );
}

export default Transactions;
