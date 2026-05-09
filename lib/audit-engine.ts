export interface AuditResult {
  tool: string;
  currentSpend: number;
  optimizedSpend: number;
  savings: number;
  recommendation: string;
  reason: string;
}

interface AuditInput {
  tool: string;
  plan: string;
  spend: string;
  seats: string;
  teamSize: string;
  useCase: string;
}

export function runAudit(data: AuditInput): AuditResult {

  let optimizedSpend = Number(data.spend);
  let recommendation = "Current plan is already optimized.";
  let reason = "Your usage appears appropriate for the selected plan.";

  // ChatGPT logic
  if (
    data.tool === "ChatGPT" &&
    data.plan.toLowerCase().includes("team") &&
    Number(data.seats) <= 2
  ) {
    optimizedSpend = 40;

    recommendation = "Switch to ChatGPT Plus";

    reason =
      "Small teams often don't need collaboration features included in Team plans.";
  }

  // Claude logic
  if (
    data.tool === "Claude" &&
    data.plan.toLowerCase().includes("team") &&
    Number(data.seats) <= 3
  ) {
    optimizedSpend = 60;

    recommendation = "Downgrade to Claude Pro";

    reason =
      "Claude Team may be unnecessary for smaller usage requirements.";
  }

  // Cursor logic
  if (
    data.tool === "Cursor" &&
    data.plan.toLowerCase().includes("business") &&
    Number(data.teamSize) < 5
  ) {
    optimizedSpend = 20;

    recommendation = "Use Cursor Pro";

    reason =
      "Business plans are more cost-effective for larger engineering teams.";
  }

  const currentSpend = Number(data.spend);

  return {
    tool: data.tool,
    currentSpend,
    optimizedSpend,
    savings: currentSpend - optimizedSpend,
    recommendation,
    reason,
  };
}