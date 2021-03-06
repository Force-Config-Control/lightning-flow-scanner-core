import {DMLStatementInLoop} from '../rules/DMLStatementInLoop';
import {DuplicateDMLOperationsByNavigation} from '../rules/DuplicateDMLOperationsByNavigation';
import {HardcodedIds} from '../rules/HardcodedIds';
import {MissingFaultPath} from '../rules/MissingFaultPath';
import {MissingFlowDescription} from '../rules/MissingFlowDescription';
import {MissingNullHandler} from '../rules/MissingNullHandler';
import {UnconnectedElements} from '../rules/UnconnectedElements';
import {UnusedVariables} from '../rules/UnusedVariables';

export const rulestore: {} = {
  DMLStatementInLoop,
  DuplicateDMLOperationsByNavigation,
  HardcodedIds,
  MissingFaultPath,
  MissingFlowDescription,
  MissingNullHandler,
  UnconnectedElements,
  UnusedVariables
};
