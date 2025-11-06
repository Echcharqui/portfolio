export async function runSequence(steps = []) {
  for (const step of steps) {
    if (typeof step === "string" && step.startsWith("wait:")) {
      const ms = parseInt(step.split(":")[1]) || 0;
      await new Promise((res) => setTimeout(res, ms));
      continue;
    }

    if (typeof step === "function") {
      await Promise.resolve().then(() => step());
    }
  }
}
