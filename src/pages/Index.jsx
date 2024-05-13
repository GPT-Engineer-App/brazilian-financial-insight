import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import { FaBuilding, FaChartLine, FaDollarSign, FaNewspaper } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={4}>
        <Text fontSize="3xl" fontWeight="bold">
          Brazilian Corporate Finance Dashboard
        </Text>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <FaChartLine /> EQUITIES
            </Tab>
            <Tab>
              <FaBuilding /> FOREX
            </Tab>
            <Tab>
              <FaNewspaper /> BONDS
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Real-time equities data and news updates.</Text>
            </TabPanel>
            <TabPanel>
              <Text>Forex exchange rates and financial news.</Text>
            </TabPanel>
            <TabPanel>
              <Text>Bonds market data and investment opportunities.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box w="full" p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="2xl" mb={2}>
            Market Overview
          </Text>
          <Text>Displaying top Brazilian companies and latest market news.</Text>
        </Box>
        <Box w="full" p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="2xl" mb={2}>
            Company-Specific Financials
          </Text>
          <Text>Structured financial data upon company selection.</Text>
        </Box>
        <Box w="full" p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="2xl" mb={2}>
            Portfolio and Market Overview
          </Text>
          <Text>Connect accounts and track financial assets.</Text>
        </Box>
        <Box w="full" p={4} bg="gray.700" borderRadius="md">
          <Text fontSize="2xl" mb={2}>
            Events Calendar
          </Text>
          <Text>Upcoming financial events and details.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
