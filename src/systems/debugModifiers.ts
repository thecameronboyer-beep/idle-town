import type { ResourceCountDelta, ResourceId } from "../types";

export type TestRewardMultiplier = 1 | 10 | 100;

let testRewardMultiplier: TestRewardMultiplier = 1;

export function getTestRewardMultiplier(): TestRewardMultiplier {
  return testRewardMultiplier;
}

export function setTestRewardMultiplier(multiplier: number): TestRewardMultiplier {
  testRewardMultiplier = multiplier === 10 || multiplier === 100 ? multiplier : 1;
  return testRewardMultiplier;
}

export function applyTestRewardMultiplierToAmount(amount: number): number {
  return amount * testRewardMultiplier;
}

export function applyTestRewardMultiplierToResourceDelta<T extends Partial<Record<ResourceId, number>>>(resources: T): T {
  if (testRewardMultiplier === 1) {
    return resources;
  }

  return Object.fromEntries(
    Object.entries(resources).map(([resourceId, amount]) => [
      resourceId,
      (amount ?? 0) * testRewardMultiplier
    ])
  ) as T;
}

export function applyTestRewardMultiplierToResourceCounts(resourceCounts: ResourceCountDelta): ResourceCountDelta {
  if (testRewardMultiplier === 1) {
    return resourceCounts;
  }

  return Object.fromEntries(
    Object.entries(resourceCounts).map(([resourceId, count]) => [
      resourceId,
      Math.max(0, Math.floor((count ?? 0) * testRewardMultiplier))
    ])
  );
}
