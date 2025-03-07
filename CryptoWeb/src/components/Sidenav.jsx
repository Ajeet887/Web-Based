import React from "react";
import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Sidenav() {
  const location = useLocation();

  const isActivelink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      height="100vh"
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="56px">
          @DOSOMECODING
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                mx="12px"
                py="3"
                px="4"
                bg={isActivelink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActivelink(nav.link) ? "#171717" : "#797E82"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mb="6" mx="3">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            mx="12px"
            py="3"
            px="4"
            bg={isActivelink("/support") ? "#F3F3F7" : "transparent"}
            color={isActivelink("/support") ? "#171717" : "#797E82"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
}

export default Sidenav;
