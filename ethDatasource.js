const { RESTDataSource } = require("apollo-datasource-rest"); // Import RESTDataSource from apollo-datasource-rest

// Vitalik's Ethereum Address 
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";  

// Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {

  constructor() {
    super(); 
    this.baseURL = "https://api.etherscan.io/api"; // Base API URL
  }

  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}` // Get account balance
    );
  }

  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}` // Get total ETH supply
    );
  }

  // Additional API endpoints

  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}` // Get latest ETH price
    );
  }

  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}` // Get block confirmation time
    );
  }

}

module.exports = EtherDataSource;
