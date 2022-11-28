import { CoLangError } from './CoLangError';
import { Lexer } from './Lexer';
import { Parser } from './Parser';
import { FieldTokenModel } from './FieldTokenModel';
import { ExtractFieldNamesVisitor } from './ExtractFieldNamesVisitor';
import { EvaluateConditionVisitor } from './EvaluateConditionVisitor';
import { ESource, ParseCtx } from './types';

type TCondition = string;
type TOnError = (error: CoLangError, condition: string, conditionOwnerId?: string | null) => void;

/** ast - Abstract Syntax Tree (AST) */
interface IParseResult {
  ast: ParseCtx;
  error?: CoLangError;
}

interface IEvaluationReport {
  evaluationResult: boolean;
  triggeredFieldTokens: Set<FieldTokenModel> | null;
}

export class CoLang {
  private cachedParse: Record<TCondition, IParseResult>;
  private withCache: boolean = true;
  private readonly onError?: TOnError;

  constructor(params?: { withCache?: boolean; onError?: TOnError }) {
    this.cachedParse = {};

    if (params) {
      this.withCache = params.withCache ?? true;
      this.onError = params.onError;
    }

    this.checkCondition = this.checkCondition.bind(this);
    this.getFieldEntries = this.getFieldEntries.bind(this);
    this.evaluateFieldTokens = this.evaluateFieldTokens.bind(this);
    this.clearCache = this.clearCache.bind(this);
  }

  private getParseResult(condition: string) {
    if (this.cachedParse[condition]) return this.cachedParse[condition];

    const lexer = new Lexer(condition);
    const { ast, error } = new Parser(lexer);

    if (this.withCache) {
      this.cachedParse[condition] = { ast, error };
    }

    return { ast, error };
  }

  private isError(
    error: CoLangError | undefined,
    condition: string,
    conditionOwnerId?: string | null
  ) {
    if (error) {
      if (this.onError) this.onError(error, condition, conditionOwnerId);
      return true;
    }

    return false;
  }

  checkCondition(condition: string, withCache = false) {
    this.withCache = withCache;
    const { error } = this.getParseResult(condition);

    return error;
  }

  getFieldEntries(params: { condition: string; conditionOwnerId?: string | null }) {
    const { condition, conditionOwnerId } = params;
    const { ast, error } = this.getParseResult(condition);

    if (this.isError(error, condition, conditionOwnerId)) return null;

    const extractFieldNamesVisitor = new ExtractFieldNamesVisitor();
    ast.accept(extractFieldNamesVisitor);

    return extractFieldNamesVisitor.fieldNames;
  }

  evaluateFieldTokens(params: {
    condition: string;
    fieldTokens: FieldTokenModel[];
    conditionOwnerId?: string | null;
  }) {
    const { condition, fieldTokens, conditionOwnerId } = params;
    const { ast, error } = this.getParseResult(condition);

    if (this.isError(error, condition, conditionOwnerId)) return null;

    try {
      const evaluateConditionVisitor = new EvaluateConditionVisitor(fieldTokens);
      ast.accept(evaluateConditionVisitor);
      const { evaluationResult, triggeredFieldTokens } = evaluateConditionVisitor;

      return { evaluationResult, triggeredFieldTokens } as IEvaluationReport;
    } catch (e) {
      const { message } = e as Error;
      const error = new CoLangError({ message, source: ESource.EVALUATE_VISITOR });

      if (this.onError) this.onError(error, condition, conditionOwnerId);

      return null;
    }
  }

  clearCache() {
    this.cachedParse = {};
  }
}
