# Lightning Flow Scanner(Rule Engine)

##### _This the rule engine is used in both the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=ForceConfigControl.lightningflowscanner&ssr=false#review-details) and the [SFDX plugin](https://www.npmjs.com/package/lightning-flow-scanner) of the same name._

## Available Rules:

#### DML statements in a loop <br>

To avoid hitting Apex governor limits, we recommend grouping all of your database changes together at the end of the flow, whether those changes create, update, or delete records.<br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/DMLStatementInLoop.ts)
#### Duplicate DML operations
If the flow commits changes to the database or performs actions between two screens, don't let users navigate back between screen. Otherwise, the flow may perform duplicate database operations.<br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/DuplicateDMLOperationsByNavigation.ts)
#### Hardcoded Ids
IDs are org-specific, so don’t hard-code IDs. Instead, pass them into variables when the flow starts. You can do so, for example, by using merge fields in URL parameters or by using a Get Records element.<br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/HardcodedIds.ts)
#### Missing flow description
Descriptions are useful for documentation purposes. It is recommended to provide information about where it is used and what it will do. <br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/MissingFlowDescription.ts)
#### Missing error handlers
Sometimes a flow doesn’t perform an operation that you configured it to do. By default, the flow shows an error message to the user and emails the admin who created the flow. However, you can control that behavior. <br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/MissingFaultPath.ts)
#### Missing null handlers
If a Get Records operation does not find any data it will return null. Use a decision element on the operation result variable to validate that the result is not null.<br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/MissingNullHandler.ts)
#### Unconnected elements
Unconnected elements which are not being used by the Flow should be avoided to keep Flows efficient and maintainable. <br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/UnconnectedElements.ts)
#### Unused variables
Unconnected variables which are not being used by the Flow should be avoided to keep Flow more efficient and maintainable. <br>
[Source code](https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/UnusedVariables.ts)

## Core Functions

`getRules(ruleNames? : string[]): IRuleDefinition[];`

Returns all rules that are currently available if there are no ruleNames specified. In case ruleNames are specified, it will only return rules which are included by name. 

`scan(flows: Flow[], ruleOptions?: ScannerOptions): ScanResult[];`

If there are no ruleNames specified, the scan will run all available rules by default. In case that there are ruleNames specified, only the  specified rules will be ran.

`fix(flows :Flow[]): ScanResult[];`

Removes unused variables and unconnected elements from selected flows automatically.

