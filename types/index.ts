export interface ToolEntry {
  tool: string;
  plan: string;
  spend: string;
  seats: string;
}

export interface AuditResult {
  tool: string;
  currentSpend: number;
  optimizedSpend: number;
  savings: number;
  recommendation: string;
  reason: string;
}