import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  AiFillPlusCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineMinusCircle,
} from "react-icons/ai";

function PriceSection() {
  const timeStamp = ["7.15 PM", "7.55 PM", "8.40 PM", "9.15 PM", "9.55 PM"];

  return (
    <CustomCard>
      <HStack justifyContent="space-between">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Current Price</Text>
          </HStack>
          <HStack
            spacing={4}
            alignItems={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack fontWeight="medium">
              <HStack>
                <Text textStyle="h2" fontWeight="medium">
                  ₹26,670.25
                </Text>
              </HStack>
              <HStack color="green.500">
                <Icon as={BsArrowUpRight}></Icon>
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </HStack>
      <Tabs variant="soft-rounded" >
        <Flex justify="end" p="3px" >
        <TabList bg="black.5" p="3px">
          {
            ["1H","1D","1W","1M"].map((tab) => (
              <Tab _selected={{bg:"white"}} key={tab} fontSize="sm" p="6px" borderRadius="4">{tab}</Tab>
            ))
          }
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
          <Image src="/graph.svg" mt="3rem"></Image>
      <HStack justifyContent="space-between">
        {timeStamp.map((time) => (
          <Text fontSize="sm" color="black.80">
            {time}
          </Text>
        ))}
      </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
    </CustomCard>
  );
}

export default PriceSection;
