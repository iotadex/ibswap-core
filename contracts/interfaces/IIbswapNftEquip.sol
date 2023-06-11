// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

/// @title An interface for a contract to obtain discount rate for handling fees
interface IIbswapNftEquip {
    /// @notice Obtain the discount rate corresponding to the NFT of the user's equipment
    /// @return The discount rate of the recipient
    function discountRate(address recipient) external view returns (uint8);
}
