import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./Topnav";
import SideDrawer from "./SideDrawer";

function DashboardLayout({ title, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div>
        <Flex>
          <Box
            display={{
              base: "none",
              lg: "flex",
            }}
          >
            <Sidenav />
          </Box>

          <SideDrawer isOpen={isOpen} onClose={onClose} />
          <Box flexGrow={1}>
            <TopNav title={title} onOpen={onOpen} />
            <Container
              maxW="70rem"
              overflowX="hidden"
              overflowY="auto"
              h="calc(100vh - 88px)"
              px="50px"
              mt="6"
            >
              {children}
            </Container>
          </Box>
        </Flex>
      </div>
    </div>
  );
}

export default DashboardLayout;
