import { CoLangError } from './CoLangError';
import { FieldTokenModel } from './FieldTokenModel';
type TOnError = (error: CoLangError, condition: string, conditionOwnerId?: string | null) => void;
interface IEvaluationReport {
    evaluationResult: boolean;
    triggeredFieldTokens: Set<FieldTokenModel> | null;
}
export declare class CoLang {
    private cachedParse;
    private withCache;
    private readonly onError?;
    constructor(params?: {
        withCache?: boolean;
        onError?: TOnError;
    });
    private getParseResult;
    private isError;
    checkCondition(condition: string, withCache?: boolean): CoLangError | undefined;
    getFieldEntries(params: {
        condition: string;
        conditionOwnerId?: string | null;
    }): Set<string> | null;
    evaluateFieldTokens(params: {
        condition: string;
        fieldTokens: FieldTokenModel[];
        conditionOwnerId?: string | null;
    }): IEvaluationReport | null;
    clearCache(): void;
}
export {};
