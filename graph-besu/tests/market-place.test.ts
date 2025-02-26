import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { MarketItemListed } from "../generated/schema"
import { MarketItemListed as MarketItemListedEvent } from "../generated/MarketPlace/MarketPlace"
import { handleMarketItemListed } from "../src/market-place"
import { createMarketItemListedEvent } from "./market-place-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let price = BigInt.fromI32(234)
    let quantity = BigInt.fromI32(234)
    let newMarketItemListedEvent = createMarketItemListedEvent(
      tokenId,
      seller,
      price,
      quantity
    )
    handleMarketItemListed(newMarketItemListedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MarketItemListed created and stored", () => {
    assert.entityCount("MarketItemListed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MarketItemListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "MarketItemListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MarketItemListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "MarketItemListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "quantity",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
