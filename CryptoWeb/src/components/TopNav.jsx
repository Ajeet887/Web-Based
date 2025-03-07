import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaBars, FaCircleUser } from "react-icons/fa6";

function TopNav({title , onOpen}) {
  return (
    <Box px="4" bg="white" >
      <HStack  maxW="1020px" h="16" justifyContent="space-between" mx="auto"  h="16">
        <Icon as={FaBars} onClick={onOpen} display={{
            base: "block",
            lg: "none"
        }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton >
            <Icon as={FaCircleUser} fontSize="24px"/>
          </MenuButton>
          <MenuList>
            <MenuItem>LogOut</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
