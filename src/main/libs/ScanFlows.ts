import {IRuleDefinition} from '../interfaces/IRuleDefinition';
import {Flow} from '../models/Flow';
import {RuleResult} from '../models/RuleResult';
import {ScanResult} from '../models/ScanResult';
import {GetRuleDefinitions} from './GetRuleDefinitions';

export function ScanFlows(flows: Flow[], ruleNames?: string[]): ScanResult[] {

  const flowResults: ScanResult[] = [];
  let selectedRules: IRuleDefinition[];
  if (ruleNames) {
    selectedRules = GetRuleDefinitions(ruleNames);
  } else {
    selectedRules = GetRuleDefinitions();
  }
  for (const flow of flows) {
    const ruleResults: RuleResult[] = [];
    for (const rule of selectedRules) {
      if(rule.supportedTypes.includes(flow.type[0])) {
        try {
          ruleResults.push(rule.execute(flow));
        } catch (error) {
          ruleResults.push(new RuleResult( true, rule.name, 'error', [error]));
        }
      }
    }
    flowResults.push(new ScanResult(flow, ruleResults));
  }
  return flowResults;
}
