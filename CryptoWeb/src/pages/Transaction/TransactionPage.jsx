import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/transactionTable";
import { BiPhoneIncoming } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

function TransactionPage() {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList py="4" display="flex" justifyContent="space-between">
            <HStack>
            {tabs.map((tab) => (
              <Tab key={tabs.name} display="flex" gap="2">
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>{" "}
              </Tab>
            ))}
            </HStack>

            <InputGroup maxW="200px" pb="2" pr="2">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch}/>
              </InputLeftElement>
              <Input type="tel" placeholder="Search ..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default TransactionPage;
