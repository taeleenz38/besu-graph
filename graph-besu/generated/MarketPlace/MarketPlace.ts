// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class MarketItemListed extends ethereum.Event {
  get params(): MarketItemListed__Params {
    return new MarketItemListed__Params(this);
  }
}

export class MarketItemListed__Params {
  _event: MarketItemListed;

  constructor(event: MarketItemListed) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get erc1155Address(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get erc20Address(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get unitPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class MarketItemPurchased extends ethereum.Event {
  get params(): MarketItemPurchased__Params {
    return new MarketItemPurchased__Params(this);
  }
}

export class MarketItemPurchased__Params {
  _event: MarketItemPurchased;

  constructor(event: MarketItemPurchased) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get erc1155Address(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get erc20Address(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get unitPrice(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get totalPrice(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class MarketItemRemoved extends ethereum.Event {
  get params(): MarketItemRemoved__Params {
    return new MarketItemRemoved__Params(this);
  }
}

export class MarketItemRemoved__Params {
  _event: MarketItemRemoved;

  constructor(event: MarketItemRemoved) {
    this._event = event;
  }

  get listingId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get erc1155Address(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get erc20Address(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get removedType(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SanctionListAddressChanged extends ethereum.Event {
  get params(): SanctionListAddressChanged__Params {
    return new SanctionListAddressChanged__Params(this);
  }
}

export class SanctionListAddressChanged__Params {
  _event: SanctionListAddressChanged;

  constructor(event: SanctionListAddressChanged) {
    this._event = event;
  }

  get oldSanctionListAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newSanctionListAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TokenRescued extends ethereum.Event {
  get params(): TokenRescued__Params {
    return new TokenRescued__Params(this);
  }
}

export class TokenRescued__Params {
  _event: TokenRescued;

  constructor(event: TokenRescued) {
    this._event = event;
  }

  get rescuer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get previousBalance(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get currentBalance(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MarketPlace__marketItemsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getErc1155(): Address {
    return this.value0;
  }

  getErc20(): Address {
    return this.value1;
  }

  getTokenId(): BigInt {
    return this.value2;
  }

  getOwner(): Address {
    return this.value3;
  }

  getUnitPrice(): BigInt {
    return this.value4;
  }

  getQuantity(): BigInt {
    return this.value5;
  }
}

export class MarketPlace extends ethereum.SmartContract {
  static bind(address: Address): MarketPlace {
    return new MarketPlace("MarketPlace", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  RESCUE_MANAGER_ROLE(): Bytes {
    let result = super.call(
      "RESCUE_MANAGER_ROLE",
      "RESCUE_MANAGER_ROLE():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_RESCUE_MANAGER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "RESCUE_MANAGER_ROLE",
      "RESCUE_MANAGER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  UPGRADER_ROLE(): Bytes {
    let result = super.call("UPGRADER_ROLE", "UPGRADER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_UPGRADER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "UPGRADER_ROLE",
      "UPGRADER_ROLE():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role),
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOnSanctionList(sanctionAddress: Address): boolean {
    let result = super.call(
      "isOnSanctionList",
      "isOnSanctionList(address):(bool)",
      [ethereum.Value.fromAddress(sanctionAddress)],
    );

    return result[0].toBoolean();
  }

  try_isOnSanctionList(sanctionAddress: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOnSanctionList",
      "isOnSanctionList(address):(bool)",
      [ethereum.Value.fromAddress(sanctionAddress)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketItems(param0: BigInt): MarketPlace__marketItemsResult {
    let result = super.call(
      "marketItems",
      "marketItems(uint256):(address,address,uint256,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new MarketPlace__marketItemsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
    );
  }

  try_marketItems(
    param0: BigInt,
  ): ethereum.CallResult<MarketPlace__marketItemsResult> {
    let result = super.tryCall(
      "marketItems",
      "marketItems(uint256):(address,address,uint256,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketPlace__marketItemsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
      ),
    );
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get admin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get pauser(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get upgrader(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get sanctionList(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ListMarketItemCall extends ethereum.Call {
  get inputs(): ListMarketItemCall__Inputs {
    return new ListMarketItemCall__Inputs(this);
  }

  get outputs(): ListMarketItemCall__Outputs {
    return new ListMarketItemCall__Outputs(this);
  }
}

export class ListMarketItemCall__Inputs {
  _call: ListMarketItemCall;

  constructor(call: ListMarketItemCall) {
    this._call = call;
  }

  get erc1155(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get erc20(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ListMarketItemCall__Outputs {
  _call: ListMarketItemCall;

  constructor(call: ListMarketItemCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PurchaseCall extends ethereum.Call {
  get inputs(): PurchaseCall__Inputs {
    return new PurchaseCall__Inputs(this);
  }

  get outputs(): PurchaseCall__Outputs {
    return new PurchaseCall__Outputs(this);
  }
}

export class PurchaseCall__Inputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get erc20(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class PurchaseCall__Outputs {
  _call: PurchaseCall;

  constructor(call: PurchaseCall) {
    this._call = call;
  }
}

export class RemoveMarketItemCall extends ethereum.Call {
  get inputs(): RemoveMarketItemCall__Inputs {
    return new RemoveMarketItemCall__Inputs(this);
  }

  get outputs(): RemoveMarketItemCall__Outputs {
    return new RemoveMarketItemCall__Outputs(this);
  }
}

export class RemoveMarketItemCall__Inputs {
  _call: RemoveMarketItemCall;

  constructor(call: RemoveMarketItemCall) {
    this._call = call;
  }

  get listingId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveMarketItemCall__Outputs {
  _call: RemoveMarketItemCall;

  constructor(call: RemoveMarketItemCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RescueERC20Call extends ethereum.Call {
  get inputs(): RescueERC20Call__Inputs {
    return new RescueERC20Call__Inputs(this);
  }

  get outputs(): RescueERC20Call__Outputs {
    return new RescueERC20Call__Outputs(this);
  }
}

export class RescueERC20Call__Inputs {
  _call: RescueERC20Call;

  constructor(call: RescueERC20Call) {
    this._call = call;
  }

  get tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rescueAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RescueERC20Call__Outputs {
  _call: RescueERC20Call;

  constructor(call: RescueERC20Call) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UpdateSanctionListAddressCall extends ethereum.Call {
  get inputs(): UpdateSanctionListAddressCall__Inputs {
    return new UpdateSanctionListAddressCall__Inputs(this);
  }

  get outputs(): UpdateSanctionListAddressCall__Outputs {
    return new UpdateSanctionListAddressCall__Outputs(this);
  }
}

export class UpdateSanctionListAddressCall__Inputs {
  _call: UpdateSanctionListAddressCall;

  constructor(call: UpdateSanctionListAddressCall) {
    this._call = call;
  }

  get inputSanctionListAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateSanctionListAddressCall__Outputs {
  _call: UpdateSanctionListAddressCall;

  constructor(call: UpdateSanctionListAddressCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}
