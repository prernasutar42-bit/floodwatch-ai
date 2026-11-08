// Simulated API client helper with configurable network delay and error simulation

let simulateError = false;

export function setSimulateApiError(val) {
  simulateError = Boolean(val);
}

export function isSimulateApiError() {
  return simulateError;
}

export async function mockFetch(dataGenerator, delayMs = 200) {
  await new Promise((res) => setTimeout(res, delayMs));

  if (simulateError) {
    throw new Error('Simulated network communication timeout (503 Service Unavailable).');
  }

  // Occasional random transient error if explicit flag is not set:
  // We keep it deterministic unless triggered, but provide a 0.5% random check if desired.
  // To keep hackathon demo rock solid and predictable, let's keep errors opt-in or manual testable!
  return typeof dataGenerator === 'function' ? dataGenerator() : dataGenerator;
}
