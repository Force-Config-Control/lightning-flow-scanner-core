import {RuleDefinitions} from '../ruledefinitions/RuleDefinitions';
import {RuleInfo} from '../ruledefinitions/RuleInfo';

export class RuleCommon{

  public label;
  public name;
  public uri;
  public docRefs:  {label: string, path: string}[] = [];
  public text: string;
  public supportedTypes: string[];

  constructor(name:RuleDefinitions, supportedTypes:string[], docRefs? :  {label: string, path: string}[]){

    if(docRefs){
      this.docRefs = docRefs;
    }
    this.supportedTypes = supportedTypes;
    this.name = name;
    const rule = RuleInfo(name);
    this.label = rule.label;
    this.text = rule.text;
    this.uri = 'https://github.com/Force-Config-Control/lightning-flow-scanner-core/tree/master/src/main/rules/' + name + '.ts';
  }
}
